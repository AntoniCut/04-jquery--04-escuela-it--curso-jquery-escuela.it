/*

    *  ------------------------------------------------------  *
    *  -----  dev-server.js  --  /server/dev-server.js  -----  *
    * ------------------------------------------------------  *
*/


import 'dotenv/config';

import browserSync from 'browser-sync';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';

/** Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/escuelait/curso-jquery-escuelait';

/** Puerto público del servidor de desarrollo. */
const DEV_SERVER_PORT = Number(process.env.DEV_SERVER_PORT || 3000);

/** Raíz real del proyecto. */
const PROJECT_ROOT = process.cwd();

/** Entrada principal de la SPA. */
const SPA_ENTRY_FILE = path.join(PROJECT_ROOT, 'index.html');

/** Archivos que deben disparar live reload. */
const BROWSER_SYNC_FILES = [
    'index.html',
    'app/**/*',
    'assets/**/*',
    '!app/**/*.map',
];

/** Opciones de watch compartidas con el entorno local. */
const WATCH_OPTIONS = {
    usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    interval: Number(process.env.CHOKIDAR_INTERVAL || 250),
};

const app = express();
const bs = browserSync.create();

app.disable('x-powered-by');


/**
 * Redirige la raíz del servidor a la base pública de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const redirectRootToBase = (req, res, next) => {
    
    if (req.path === '/' || req.path === '/index.html') {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    if (req.path === DEV_ROUTE_BASE) {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    next();
};



/**
 * Hace fallback a index.html para rutas internas de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const serveSpaFallback = (req, res, next) => {
    
    if (!req.path.startsWith(DEV_ROUTE_BASE)) {
        next();
        return;
    }

    const relativePath = req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '');

    if (relativePath === '') {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    const requestedPath = path.join(PROJECT_ROOT, relativePath);
    const hasFileExtension = path.extname(relativePath) !== '';
    const fileExists = fs.existsSync(requestedPath);

    if (!hasFileExtension && !fileExists) {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    next();
};


app.use(redirectRootToBase);
app.use(DEV_ROUTE_BASE, express.static(PROJECT_ROOT, { index: false }));
app.use(serveSpaFallback);


app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});


const internalServer = app.listen(0, '127.0.0.1', () => {
    
    const address = internalServer.address();

    if (!address || typeof address === 'string') {
        throw new Error('No se pudo resolver el puerto interno del servidor Express.');
    }

    console.log(`Servidor de desarrollo Express escuchando en http://${address.address}:${address.port}\n`);

    bs.init({
        proxy: `http://127.0.0.1:${address.port}`,
        port: DEV_SERVER_PORT,
        open: false,
        notify: false,
        ui: false,
        startPath: `${DEV_ROUTE_BASE}/`,
        files: BROWSER_SYNC_FILES,
        watchOptions: WATCH_OPTIONS,
    });
});


/** Cierre ordenado del servidor y BrowserSync. */
const shutdown = () => {
    bs.exit();
    internalServer.close(() => process.exit(0));
};


process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
