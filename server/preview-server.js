import 'dotenv/config';

import express from 'express';
import fs from 'node:fs';
import path from 'node:path';


/** Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/escuelait/curso-jquery-escuelait';

/** Puerto público para previsualizar el build de producción. */
const PREVIEW_SERVER_PORT = Number(process.env.PREVIEW_SERVER_PORT || 4173);

/** Raíz del build de producción. */
const DIST_ROOT = path.join(process.cwd(), 'dist');

/** Archivo de entrada de la SPA compilada. */
const DIST_INDEX_FILE = path.join(DIST_ROOT, 'index.html');

if (!fs.existsSync(DIST_ROOT) || !fs.existsSync(DIST_INDEX_FILE)) {
    console.error('No existe un build de producción en dist/. Ejecuta `pnpm run build` antes de `pnpm run preview`.');
    process.exit(1);
}

const app = express();

app.disable('x-powered-by');

/**
 * Redirige la raíz del servidor al base path público de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const redirectRootToBase = (req, res, next) => {
    if (req.path === '/' || req.path === '/index.html' || req.path === DEV_ROUTE_BASE) {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    next();
};

/**
 * Hace fallback a index.html para rutas internas del build de la SPA.
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
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    const requestedPath = path.join(DIST_ROOT, relativePath);
    const hasFileExtension = path.extname(relativePath) !== '';
    const fileExists = fs.existsSync(requestedPath);

    if (!hasFileExtension && !fileExists) {
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    next();
};

app.use(redirectRootToBase);
app.use(DEV_ROUTE_BASE, express.static(DIST_ROOT, { index: false }));
app.use(serveSpaFallback);

app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

const previewServer = app.listen(PREVIEW_SERVER_PORT, '127.0.0.1', () => {
    console.log(`Preview disponible en http://localhost:${PREVIEW_SERVER_PORT}${DEV_ROUTE_BASE}/`);
});

/** Cierre ordenado del servidor. */
const shutdown = () => {
    previewServer.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);