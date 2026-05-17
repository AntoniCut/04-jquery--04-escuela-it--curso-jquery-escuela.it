/*
    *  ------------------------------------------------------  *
    *  -----  dev-server.js  --  /server/dev-server.js  -----  *
    * ------------------------------------------------------  *
*/


import 'dotenv/config';

import browserSync from 'browser-sync';
import express from 'express';
import { spawn } from 'node:child_process';
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
 * ----------------------------------------------------
 * -----  `makePhpHandler(rootDir, serverPort)`  -----
 * ----------------------------------------------------
 * - Ejecuta archivos .php via php-cgi y devuelve la respuesta CGI al cliente.
 * @param {string} rootDir    - Directorio raíz donde resolver los archivos PHP.
 * @param {number} serverPort - Puerto del servidor (para SERVER_PORT CGI).
 * @returns {import('express').RequestHandler}
 */

const makePhpHandler = (rootDir, serverPort) => (req, res, next) => {

    //  -----  Solo procesar peticiones a archivos .php  -----
    if (!req.path.endsWith('.php')) {
        next();
        return;
    }

    //  -----  Calcula la ruta relativa dentro del prefijo de la SPA  -----
    const relativePath = req.path.startsWith(DEV_ROUTE_BASE)
        ? req.path.slice(DEV_ROUTE_BASE.length).replace(/^\//, '')
        : req.path.replace(/^\//, '');

    const phpFile = path.join(rootDir, relativePath);

    //  -----  Si el archivo PHP no existe, pasar al siguiente middleware  -----
    if (!fs.existsSync(phpFile)) {
        next();
        return;
    }

    //  -----  Extrae el query string de la URL original  -----
    const queryString = req.originalUrl.includes('?')
        ? req.originalUrl.split('?')[1]
        : '';

    //  -----  Variables de entorno CGI requeridas por php-cgi  -----
    const cgiEnv = {
        ...process.env,
        REDIRECT_STATUS:   '200',
        SCRIPT_FILENAME:   phpFile,
        SCRIPT_NAME:       req.path,
        REQUEST_METHOD:    req.method,
        QUERY_STRING:      queryString,
        CONTENT_TYPE:      req.headers['content-type']   ?? '',
        CONTENT_LENGTH:    req.headers['content-length'] ?? '0',
        SERVER_NAME:       'localhost',
        SERVER_PORT:       String(serverPort),
        SERVER_PROTOCOL:   'HTTP/1.1',
        GATEWAY_INTERFACE: 'CGI/1.1',
        HTTP_HOST:         req.headers['host'] ?? 'localhost',
        DOCUMENT_ROOT:     rootDir,
    };

    const php = spawn('php-cgi', [], { env: cgiEnv });

    let stdout = Buffer.alloc(0);
    let stderr  = '';

    php.stdout.on('data', (chunk) => {
        stdout = Buffer.concat([stdout, chunk]);
    });

    php.stderr.on('data', (chunk) => {
        stderr += chunk.toString();
    });

    php.on('close', () => {

        if (stderr) console.error(`[php-cgi] ${stderr.trim()}`);

        //  -----  Busca el separador de headers CGI (CRLF o LF doble)  -----
        let sepIndex = stdout.indexOf('\r\n\r\n');
        let sepLen   = 4;

        if (sepIndex === -1) {
            sepIndex = stdout.indexOf('\n\n');
            sepLen   = 2;
        }

        if (sepIndex === -1) {
            res.status(500).send('Error: PHP no devolvió una respuesta CGI válida.');
            return;
        }

        const headersRaw = stdout.slice(0, sepIndex).toString();
        const body       = stdout.slice(sepIndex + sepLen);

        //  -----  Aplica los headers devueltos por PHP  -----
        for (const line of headersRaw.split(/\r?\n/)) {
            const colonIndex = line.indexOf(':');
            if (colonIndex === -1) continue;
            const name  = line.slice(0, colonIndex).trim();
            const value = line.slice(colonIndex + 1).trim();
            if (name.toLowerCase() === 'status') {
                res.status(parseInt(value, 10));
            } else {
                res.setHeader(name, value);
            }
        }

        res.send(body);

    });

    php.on('error', () => {
        res.status(500).send('Error interno: php-cgi no está disponible. Instálalo con: sudo apt install php-cgi');
    });

    //  -----  Si la petición tiene body (POST), lo escribe en stdin de php-cgi  -----
    req.pipe(php.stdin);

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

//  -----  Middleware para ejecutar archivos PHP via php-cgi  -----
app.use(makePhpHandler(PROJECT_ROOT, DEV_SERVER_PORT));

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
