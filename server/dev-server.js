/*
    *  ------------------------------------------------------  *
    *  -----  dev-server.js  --  /server/dev-server.js  -----  *
    * ------------------------------------------------------  *
*/


import 'dotenv/config';

import browserSync from 'browser-sync';
import express from 'express';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';



/** - Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/escuelait/curso-jquery-escuelait';

/** - Puerto público del servidor de desarrollo. */
const DEV_SERVER_PORT = Number(process.env.DEV_SERVER_PORT || 3000);

/** - Raíz real del proyecto. */
const PROJECT_ROOT = process.cwd();

/** - Entrada principal de la SPA. */
const SPA_ENTRY_FILE = path.join(PROJECT_ROOT, 'index.html');

/** - Archivos que deben disparar live reload. */
const BROWSER_SYNC_FILES = [
    'index.html',
    'app/**/*',
    'assets/**/*',
    '!app/**/*.map',
];

/** - Opciones de watch compartidas con el entorno local. */
const WATCH_OPTIONS = {
    usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    interval: Number(process.env.CHOKIDAR_INTERVAL || 250),
};



/** -----  `Instancia de la aplicación Express`  ----- */
const app = express();

/** -----  `Instancia de BrowserSync`  ----- */
const bs = browserSync.create();

/** -----  `Desactiva el encabezado X-Powered-By`  ----- */
app.disable('x-powered-by');



/**
 * --------------------------------------------------
 * -----  `redirectRootToBase(req, res, next)`  -----
 * --------------------------------------------------
 * - Redirige la raíz del servidor a la base pública de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const redirectRootToBase = (req, res, next) => {

    //  -----  Redirige la raíz y /index.html a la base de la SPA  -----
    if (req.path === '/' || req.path === '/index.html') {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    //  -----  Redirige la ruta base sin slash a la misma con slash  -----
    if (req.path === DEV_ROUTE_BASE) {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    next();
};



/**
 * ------------------------------------------------
 * -----  `serveSpaFallback(req, res, next)`  -----
 * ------------------------------------------------
 * - Hace fallback a index.html para rutas internas de la SPA.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const serveSpaFallback = (req, res, next) => {
    
    //  -----  Solo procesar rutas que comiencen con el prefijo de la SPA  -----
    if (!req.path.startsWith(DEV_ROUTE_BASE)) {
        next();
        return;
    }

    //  -----  Calcula la ruta relativa dentro de la SPA  -----
    const relativePath = req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '');

    //  -----  Si la ruta relativa es vacía, servir el archivo de entrada de la SPA  -----
    if (relativePath === '') {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    /** - Calcula la ruta absoluta del archivo solicitado dentro del proyecto */
    const requestedPath = path.join(PROJECT_ROOT, relativePath);
    
    /** - Verifica si la ruta tiene una extensión de archivo */
    const hasFileExtension = path.extname(relativePath) !== '';
    
    /** - Verifica si el archivo solicitado existe */
    const fileExists = fs.existsSync(requestedPath);

    //  -----  Si la ruta no tiene extensión y el archivo no existe, hacer fallback a index.html  -----
    if (!hasFileExtension && !fileExists) {
        res.sendFile(SPA_ENTRY_FILE);
        return;
    }

    //  -----  Si la ruta tiene extensión o el archivo existe, continuar con el siguiente middleware (servir estático o 404)  -----
    next();
};



/**
 * -------------------------------------------------
 * -----  `assertPortAvailable(port)`  -----
 * -------------------------------------------------
 * - Verifica que el puerto público solicitado para BrowserSync esté libre.
 * @param {number} port
 * @returns {Promise<void>}
 */

const assertPortAvailable = (port) => new Promise((resolve, reject) => {

    /** - Servidor temporal para comprobar disponibilidad del puerto */
    const probeServer = net.createServer();

    probeServer.unref();

    probeServer.once('error', (error) => {

        if (error.code === 'EADDRINUSE') {
            reject(new Error(`El puerto público ${port} ya está en uso. Cierra la instancia anterior del servidor de desarrollo o cambia DEV_SERVER_PORT.`));
            return;
        }

        reject(error);
    });

    probeServer.once('listening', () => {
        probeServer.close((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });

    probeServer.listen(port);
});



//  -----  Middleware para redirigir la raíz a la base de la SPA  -----
app.use(redirectRootToBase);

//  -----  Middleware para servir archivos estáticos desde la raíz del proyecto con el prefijo de ruta  -----
app.use(DEV_ROUTE_BASE, express.static(PROJECT_ROOT, { index: false }));

//  -----  Middleware de fallback para rutas internas de la SPA  -----
app.use(serveSpaFallback);

//  -----  Middleware para manejar rutas no encontradas (404)  -----
app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});



//  -----  Verificar que el puerto público esté disponible antes de iniciar el servidor  -----
try {
    await assertPortAvailable(DEV_SERVER_PORT);
} catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
}



/**
 * ------------------------------
 * -----  `internalServer`  -----
 * ------------------------------
 * - servidor de desarrollo Express que sirve la SPA con soporte para rutas internas.
 * - Inicia el servidor Express en un puerto dinámico.
 * - Configura BrowserSync para proxy y live reload.
 * - Maneja el cierre ordenado del servidor y BrowserSync.
 */

const internalServer = app.listen(0, '127.0.0.1', () => {
    
    /** - Dirección y puerto del servidor interno */
    const address = internalServer.address();

    //  -----  Validación de la dirección del servidor  -----
    if (!address || typeof address === 'string') {
        throw new Error('No se pudo resolver el puerto interno del servidor Express.');
    }

    console.log('\n');
    console.log(`Servidor de desarrollo Express escuchando en http://${address.address}:${address.port}\n`);
    console.log('\n');

    //  -----  Configuración de BrowserSync para proxy y live reload  -----
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


/**
 * ------------------------
 * -----  shutdown()  -----
 * ------------------------
 * - Maneja el cierre ordenado del servidor Express y BrowserSync.
 * - Escucha señales de terminación (SIGINT, SIGTERM) para realizar un shutdown limpio. 
 */

const shutdown = () => {
    
    //  -----  Cierra BrowserSync  -----
    bs.exit();
    
    //  -----  Cierre ordenado del servidor Express. Al cerrar, se termina el proceso con exit(0)  -----
    internalServer.close(() => process.exit(0));
};


//  -----  Manejo de señales para shutdown ordenado  -----
process.on('SIGINT', shutdown);

//  -----  SIGTERM es común en entornos de contenedores para indicar terminación  -----
process.on('SIGTERM', shutdown);
