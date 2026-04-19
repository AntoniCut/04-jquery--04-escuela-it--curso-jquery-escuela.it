/*
    *  --------------------------------------------  *
    *  -----  /gulpfile.js  --  /gulpfile.js  -----  *
    *  --------------------------------------------  *
*/



import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import { exec } from 'node:child_process';
import { deleteAsync } from 'del';
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import { Transform } from 'stream';
import plumber from 'gulp-plumber';
import fs from 'fs';
import path from 'node:path';


/**  -----  desestructuración de métodos de Gulp  ----- */
const { src, dest, watch, series, parallel } = gulp;


/**  `-----  Instancia de Dart Sass para gulp-sass como motor de compilación -----` */
const sass = gulpSass(dartSass);


/** 
 * ------------------------
 * -----  `paths`  --------
 * ------------------------
 * - Rutas centralizadas de origen/destino para evitar hardcode.
 */

const paths = {
    
    srcRoot:  'src',
    appRoot:  'app',
    distRoot: 'dist',

    root: {
        assetsDir: path.join('assets'),
        assets: path.posix.join('assets', '**/*'),
    },

    src: {
        
        componentsDir:    path.join('src', 'components'),
        components:       path.posix.join('src', 'components', '**/*'),
        
        effectsDir:       path.join('src', 'effects'),
        effects:          path.posix.join('src', 'effects', '**/*'),
        
        fontsDir:         path.join('src', 'fonts'),
        fonts:            path.posix.join('src', 'fonts', '**/*'),
        
        libsDir:          path.join('src', 'libs'),
        libs:             path.posix.join('src', 'libs', '**/*'),
        
        markdownShikiDir: path.join('src', 'markdown-shiki'),
        markdownShiki:    path.posix.join('src', 'markdown-shiki', '**/*'),
        
        pagesDir:         path.join('src', 'pages'),
        pages:            path.posix.join('src', 'pages', '**/*'),
        
        pdfsDir:          path.join('src', 'pdfs'),
        pdfs:             path.posix.join('src', 'pdfs', '**/*'),
        
        pluginsDir:       path.join('src', 'plugins'),
        plugins:          path.posix.join('src', 'plugins', '**/*'),
        
        routesDir:        path.join('src', 'routes'),
        routes:           path.posix.join('src', 'routes', '**/*'),
        
        spaDir:           path.join('src', 'spa'),
        spa:              path.posix.join('src', 'spa', '**/*'),
        
        scriptsDir:       path.join('src', 'scripts'),
        scripts:          path.posix.join('src', 'scripts', '**/*.js'),
        scriptsNoMap:     '!' + path.posix.join('src', 'scripts', '**/*.map'),
        
        main:             path.posix.join('src', 'main.js'),
        
        scssGlobals:      path.posix.join('src', 'scss', 'globals.scss'),
        scssPagesDir:     path.join('src', 'scss', 'pages'),
        scssPages:        path.posix.join('src', 'scss', 'pages', '**/*.scss'),
        scssAll:          path.posix.join('src', 'scss', '**/*.scss'),
    },

    app: {
        html:    path.posix.join('app', '**/*.html'),
        css:     path.posix.join('app', '**/*.css'),
        js:      path.posix.join('app', '**/*.js'),
        jsNoMap: '!' + path.posix.join('app', '**/*.map'),
    }

};



/**
 * -----------------------------
 * -----  `WATCH_OPTIONS`  ----- 
 * -----------------------------
 * - Opciones de chokidar para watchers. 
 * - Soporta polling vía env vars (útil en Linux/Docker). 
 * */

const WATCH_OPTIONS = /** @type {import('gulp').WatchOptions} */ ({
    
    ignoreInitial: true,
    usePolling:    process.env.CHOKIDAR_USEPOLLING === 'true',
    interval:      Number(process.env.CHOKIDAR_INTERVAL || 250),
    awaitWriteFinish: { 
        stabilityThreshold: 200, 
        pollInterval: 100 
    }

});



/**
 * ---------------------------
 * -----  `safePipe()`  ------
 * ---------------------------
 * - Evita que Gulp se detenga ante errores en los streams de tareas.
 * @returns {NodeJS.ReadWriteStream}
 */


const safePipe = () => plumber({
    errorHandler(err) {
        console.error(err.message);
        this.emit('end');
    },
});



/**
 * -------------------------------
 * -----  `validateFiles()`  -----
 * -------------------------------
 * - Valida archivos en streams de tareas sin bloquear el proceso.
 * - Transform de validación no bloqueante: registra archivos vacíos o streams.
 * @param {string} taskName — Nombre de la tarea para mensajes de advertencia.
 * @returns {Transform}
 */

const validateFiles = (taskName) => new Transform({
    
    objectMode: true,
    
    transform(file, _enc, cb) {
        const rel = path.relative(process.cwd(), file.path || '');
        if (file.stat?.isDirectory?.()) return cb(null, file);
        if (file.isNull())   console.warn(`[${taskName}] Archivo vacío: ${rel}`);
        if (file.isStream()) console.warn(`[${taskName}] Stream no soportado: ${rel}`);
        cb(null, file);
    },
});



/**
 * ---------------------------
 * -----  `existsDir()`  -----
 * ---------------------------
 * Comprueba si un directorio existe en disco.
 * @param {string} dirPath
 * @returns {boolean}
 */
const existsDir = (dirPath) => fs.existsSync(dirPath);



/*
    ---------------------------
    -----  🧹  --  CLEAN  -----
    ---------------------------
*/


/**
 * ---------------------------
 * -----  `cleanDist()`  -----
 * ---------------------------
 * - Elimina la carpeta dist/ y su contenido.
 */

export const cleanDist = () => deleteAsync(['dist']);



/**
 * --------------------------
 * -----  `cleanApp()`  -----
 * --------------------------
 * - Elimina la carpeta app/ y su contenido.
 */

export const cleanApp = () => deleteAsync(['app']);



/**
 * -----------------------
 * -----  `clean()`  -----
 * -----------------------
 * - Elimina en paralelo dist/ y app/.
 */

export const clean = parallel(cleanDist, cleanApp);



// ── COPY FACTORY ─────────────────────────────────────────


/**
 * -------------------------------
 * -----  `CopyTaskOptions`  -----
 * -------------------------------
 * - Objeto de opciones para crear tareas de copia con createCopyTask().
 * @typedef {Object} CopyTaskOptions
 * @property {string | string[]} glob      — Glob(s) de origen.
 * @property {string}            checkPath — Ruta a verificar antes de copiar.
 * @property {string}            [base]    — Base para src(). Default: paths.srcRoot.
 * @property {string}            [destDir] — Directorio destino. Default: paths.appRoot.
 * @property {boolean}           [binary]  — true para archivos binarios (encoding: false).
 * @property {boolean}           [isFile]  — true si checkPath es un archivo, no directorio.
 * @property {string | string[]} [exclude] — Globs de exclusión adicionales.
 */



/**
 * --------------------------------
 * -----  `createCopyTask()`  -----
 * --------------------------------
 * - Crea una tarea Gulp de copia con validación y manejo de errores.
 * @param {string} name — Nombre visible de la tarea.
 * @param {CopyTaskOptions} opts
 * @returns {import('gulp').TaskFunction}
 */

const createCopyTask = (name, opts) => {
    
    /** @returns {NodeJS.ReadWriteStream | Promise<void>} */
    
    const fn = () => {
        
        const exists = opts.isFile ? fs.existsSync(opts.checkPath) : existsDir(opts.checkPath);
        
        if (!exists) 
            return Promise.resolve();


        const globs = opts.exclude
            ? /** @type {string[]} */ ([].concat(opts.glob, opts.exclude))
            : opts.glob;

        /** @type {Record<string, unknown>} */
        const srcOpts = { base: opts.base ?? paths.srcRoot, allowEmpty: true };
        
        if (opts.binary) 
            srcOpts.encoding = false;

        return src(globs, srcOpts)
            .pipe(safePipe())
            .pipe(validateFiles(name))
            .pipe(dest(opts.destDir ?? paths.appRoot));
    };

    fn.displayName = name;

    return fn;

};



// ── COPY TASKS (src → app) ──────────────────────────────

export const copyComponents    = createCopyTask('copyComponents',    { glob: paths.src.components,    checkPath: paths.src.componentsDir });
export const copyEffects       = createCopyTask('copyEffects',       { glob: paths.src.effects,       checkPath: paths.src.effectsDir });
export const copyFonts         = createCopyTask('copyFonts',         { glob: paths.src.fonts,         checkPath: paths.src.fontsDir,         binary: true });
export const copyLibs          = createCopyTask('copyLibs',          { glob: paths.src.libs,          checkPath: paths.src.libsDir,          binary: true });
export const copyMarkdownShiki = createCopyTask('copyMarkdownShiki', { glob: paths.src.markdownShiki, checkPath: paths.src.markdownShikiDir });
export const copyPages         = createCopyTask('copyPages',         { glob: paths.src.pages,         checkPath: paths.src.pagesDir });
export const copyPdfs          = createCopyTask('copyPdfs',          { glob: paths.src.pdfs,          checkPath: paths.src.pdfsDir,          binary: true });
export const copyPlugins       = createCopyTask('copyPlugins',       { glob: paths.src.plugins,       checkPath: paths.src.pluginsDir });
export const copyRoutes        = createCopyTask('copyRoutes',        { glob: paths.src.routes,        checkPath: paths.src.routesDir });
export const copySpa           = createCopyTask('copySpa',           { glob: paths.src.spa,           checkPath: paths.src.spaDir });


/** Copia src/main.js → app/main.js. */
export const copyMain = createCopyTask('copyMain', {
    glob:      paths.src.main,
    checkPath: paths.src.main,
    isFile:    true,
});


/** Copia src/scripts/ → app/js/ (renombra carpeta). */
export const copyScripts = createCopyTask('copyScripts', {
    glob:      paths.src.scripts,
    checkPath: paths.src.scriptsDir,
    base:      paths.src.scriptsDir,
    destDir:   path.posix.join(paths.appRoot, 'js'),
    exclude:   paths.src.scriptsNoMap,
});



// ── SCSS → app/css ───────────────────────────────────────

/** Compila src/scss/globals.scss → app/css/globals.css. */
export const css = () =>
    !fs.existsSync(paths.src.scssGlobals)
        ? Promise.resolve()
        : src(paths.src.scssGlobals, { sourcemaps: true, allowEmpty: true })
              .pipe(safePipe())
              .pipe(sass().on('error', sass.logError))
              .pipe(validateFiles('css'))
              .pipe(dest(path.posix.join(paths.appRoot, 'css'), { sourcemaps: true }));



/** Compila src/scss/pages/*.scss → app/css/pages/*.css. */
export const cssPages = () =>
    !existsDir(paths.src.scssPagesDir)
        ? Promise.resolve()
        : src(paths.src.scssPages, { base: paths.src.scssPagesDir, sourcemaps: true })
              .pipe(safePipe())
              .pipe(sass().on('error', sass.logError))
              .pipe(validateFiles('cssPages'))
              .pipe(dest(path.posix.join(paths.appRoot, 'css', 'pages'), { sourcemaps: true }));



/** Compila globals + pages en paralelo. */
export const styles = parallel(css, cssPages);



// ── COPY ALL ─────────────────────────────────────────────


/** Copia y compila todo src/ → app/ en paralelo. */
const copyAll = parallel(
    copyComponents, 
    copyEffects, 
    copyFonts, 
    copyLibs, 
    copyMarkdownShiki,
    copyPages, 
    copyPdfs, 
    copyPlugins, 
    copyRoutes, 
    copySpa,
    copyScripts, 
    copyMain, 
    styles,
);


// ── DEV WATCH ───────────────────────────────────────────


/** Observa src/ y recompila + recarga el navegador en cada cambio. */
const watchTask = () => {
    /** @type {Array<[string | string[], import('gulp').TaskFunction]>} */
    const watchers = [
        [paths.src.components,    copyComponents],
        [paths.src.effects,       copyEffects],
        [paths.src.fonts,         copyFonts],
        [paths.src.libs,          copyLibs],
        [paths.src.markdownShiki, copyMarkdownShiki],
        [paths.src.pages,         copyPages],
        [paths.src.pdfs,          copyPdfs],
        [paths.src.plugins,       copyPlugins],
        [paths.src.routes,        copyRoutes],
        [paths.src.spa,           copySpa],
        [paths.src.scripts,       copyScripts],
        [paths.src.main,          copyMain],
        [paths.src.scssAll,       styles],
    ];

    for (const [glob, task] of watchers) {
        watch(glob, WATCH_OPTIONS, task);
    }
};


watchTask.displayName = 'watch';



/** Genera app/ y queda escuchando cambios. El servidor se levanta con `pnpm run server`. */
export const dev = series(copyAll, watchTask);



/** Observa únicamente los archivos SCSS y recompila estilos. */
export const watchStyles = () => watch(paths.src.scssAll, WATCH_OPTIONS, styles);



// ── MINIFY (app → dist) ─────────────────────────────────


/** Minifica index.html raíz → dist/index.html. */
export const minifyRootIndex = () =>
    src('index.html', { allowEmpty: true })
        .pipe(safePipe())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(validateFiles('minifyRootIndex'))
        .pipe(dest(paths.distRoot));



/** Minifica todos los HTML de app/ → dist/. */
export const minifyHtml = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src(paths.app.html, { base: '.', allowEmpty: true })
              .pipe(safePipe())
              .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
              .pipe(validateFiles('minifyHtml'))
              .pipe(dest(paths.distRoot));


/** Minifica todos los CSS de app/ → dist/. */
export const minifyAllCss = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src(paths.app.css, { base: '.', allowEmpty: true })
              .pipe(safePipe())
              .pipe(cleanCSS())
              .pipe(validateFiles('minifyAllCss'))
              .pipe(dest(paths.distRoot));



/** Minifica todos los JS de app/ → dist/. */
export const minifyAllJs = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src([paths.app.js, paths.app.jsNoMap], { base: '.', allowEmpty: true })
              .pipe(safePipe())
              .pipe(terser())
              .pipe(validateFiles('minifyAllJs'))
              .pipe(dest(paths.distRoot));



/** Copia assets estáticos (no HTML/CSS/JS/map) de app/ → dist/. */
export const copyStaticAssetsToDist = () =>
    !existsDir(paths.appRoot)
        ? Promise.resolve()
        : src([
              path.posix.join(paths.appRoot, '**/*'),
              '!' + paths.app.html,
              '!' + paths.app.css,
              '!' + paths.app.js,
              '!' + path.posix.join(paths.appRoot, '**/*.map'),
          ], { base: '.', allowEmpty: true, encoding: false })
              .pipe(safePipe())
              .pipe(validateFiles('copyStaticAssetsToDist'))
              .pipe(dest(paths.distRoot));

/** Copia assets raíz del proyecto → dist/assets. */
export const copyRootAssetsToDist = () =>
    !existsDir(paths.root.assetsDir)
        ? Promise.resolve()
        : src(paths.root.assets, { base: '.', allowEmpty: true, encoding: false })
              .pipe(safePipe())
              .pipe(validateFiles('copyRootAssetsToDist'))
              .pipe(dest(paths.distRoot));


// ── MISC ─────────────────────────────────────────────────  

/**
 * Agrega //@ts-nocheck al inicio de los archivos JS (solo en desarrollo).
 * @param {(err?: Error | null) => void} cb — Callback de Gulp.
 */
export function addTsNoCheck(cb) {
    if (process.env.NODE_ENV !== 'development') return cb();
    exec('node addTsNoCheck.js', (err, stdout, stderr) => {
        if (err) { console.error(err); return cb(err); }
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
        cb();
    });
}


// ── BUILD ────────────────────────────────────────────────

/**
 * Build de producción: clean → copy/compile → minify.
 * 1. Limpia dist/ y app/.
 * 2. Copia y compila src/ → app/.
 * 3. Minifica app/ → dist/.
 */
export const build = series(
    parallel(cleanDist, cleanApp),
    copyAll,
    parallel(minifyAllJs, minifyAllCss, minifyRootIndex, minifyHtml, copyStaticAssetsToDist, copyRootAssetsToDist),
);

export default build;
