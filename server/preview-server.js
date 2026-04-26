/*
    *  --------------------------------------------------------------  *
    *  -----  preview-server.js  --  /server/preview-server.js  -----  *
    *  --------------------------------------------------------------  *
*/


import 'dotenv/config';

import express from 'express';
import fs from 'node:fs';
import path from 'node:path';


/** - Prefijo URL que usa el base href del proyecto. */
const DEV_ROUTE_BASE = '/escuelait/curso-jquery-escuelait';

/** - Puerto público para previsualizar el build de producción. */
const PREVIEW_SERVER_PORT = Number(process.env.PREVIEW_SERVER_PORT || 4173);

/** - Raíz del build de producción. */
const DIST_ROOT = path.join(process.cwd(), 'dist');

/** - Archivo de entrada de la SPA compilada. */
const DIST_INDEX_FILE = path.join(DIST_ROOT, 'index.html');


//  -----  Verificación de existencia del build de producción  -----
if (!fs.existsSync(DIST_ROOT) || !fs.existsSync(DIST_INDEX_FILE)) {
    console.error('No existe un build de producción en dist/. Ejecuta `pnpm run build` antes de `pnpm run preview`.');
    process.exit(1);
}


/** -----  `Instancia de la aplicación Express`  ----- */
const app = express();

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
    if (req.path === '/' || req.path === '/index.html' || req.path === DEV_ROUTE_BASE) {
        res.redirect(302, `${DEV_ROUTE_BASE}/`);
        return;
    }

    //  -----  Continúa con el siguiente middleware para otras rutas  -----
    next();

};



/**
 * ------------------------------------------------
 * -----  `serveSpaFallback(req, res, next)`  -----
 * ------------------------------------------------
 * Hace fallback a index.html para rutas internas del build de la SPA.
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

    /** - Calcula la ruta relativa dentro de la SPA */
    const relativePath = req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '');

    //  -----  Si la ruta relativa es vacía, servir el archivo de entrada de la SPA  -----
    if (relativePath === '') {
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    /** - Calcula la ruta absoluta del archivo solicitado dentro del build */
    const requestedPath = path.join(DIST_ROOT, relativePath);

    /** - Verifica si la ruta tiene una extensión de archivo */
    const hasFileExtension = path.extname(relativePath) !== '';
    
    /** - Verifica si el archivo solicitado existe */
    const fileExists = fs.existsSync(requestedPath);

    //  -----  Si la ruta no tiene extensión y el archivo no existe, hacer fallback a index.html  -----
    if (!hasFileExtension && !fileExists) {
        res.sendFile(DIST_INDEX_FILE);
        return;
    }

    //  -----  Si la ruta tiene extensión o el archivo existe, continuar con el siguiente middleware (servir estático o 404)  -----
    next();

};



//  -----  Middleware para redirigir la raíz a la base de la SPA  -----
app.use(redirectRootToBase);

//  -----  Middleware para servir archivos estáticos desde la raíz del proyecto con el prefijo de ruta  -----
app.use(DEV_ROUTE_BASE, express.static(DIST_ROOT, { index: false }));

//  -----  Middleware de fallback para rutas internas de la SPA  -----
app.use(serveSpaFallback);

//  -----  Middleware para manejar rutas no encontradas (404)  -----
app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});



/**
 * -----------------------------
 * -----  `previewServer`  -----
 * -----------------------------
 * - servidor de previsualización Express para el build de producción.
 * - Inicia el servidor Express en un puerto específico.
 * - Maneja el cierre ordenado del servidor.
 */
const previewServer = app.listen(PREVIEW_SERVER_PORT, '127.0.0.1', () => {
    
    console.log('\n');
    console.log(`Preview disponible en http://localhost:${PREVIEW_SERVER_PORT}${DEV_ROUTE_BASE}/`);
    console.log('\n');
});



/**
 * ------------------------
 * -----  shutdown()  -----
 * ------------------------
 * - Maneja el cierre ordenado del servidor Express y BrowserSync.
 * - Escucha señales de terminación (SIGINT, SIGTERM) para realizar un shutdown limpio. 
 */

const shutdown = () => {
    previewServer.close(() => process.exit(0));
};

//  -----  Manejo de señales para shutdown ordenado  -----
process.on('SIGINT', shutdown);

//  -----  SIGTERM es común en entornos de contenedores para indicar terminación  -----
process.on('SIGTERM', shutdown);
