/*
    *  --------------------------------------------  *
    *  -----  /gulpfile.js  --  /gulpfile.js  -----  *
    *  --------------------------------------------  *
*/


import gulp from "gulp";

import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import { exec } from 'node:child_process';

import { deleteAsync } from "del";

import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";


//  -----  desestructuración de métodos de Gulp  -----
const { src, dest, watch, series, parallel } = gulp;


const sass = gulpSass(dartSass);



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



/*
    -------------------------------------
    -----  📋  --  COPY  src → app  -----
    -------------------------------------
    Carpetas copiadas respetando su estructura
    dentro de app/.
*/


/**
 * --------------------------------
 * -----  `copyComponents()`  -----
 * --------------------------------
 * - Copia src/components/ → app/components/.
 */
export const copyComponents = () =>
    src('src/components/**/*', { base: 'src' }).pipe(dest('app'));


/**
 * -----------------------------
 * -----  `copyEffects()`  -----
 * -----------------------------
 * - Copia src/effects/ → app/effects/.
 */
export const copyEffects = () =>
    src('src/effects/**/*', { base: 'src' }).pipe(dest('app'));



/**
 * --------------------------
 * -----  `copyLibs()`  -----
 * --------------------------
 * - Copia src/libs/ → app/libs/.
 */
export const copyLibs = () =>
    src('src/libs/**/*', { base: 'src' }).pipe(dest('app'));



/**
 * -----------------------------------
 * -----  `copyMarkdownShiki()`  -----
 * -----------------------------------
 * - Copia src/markdown-shiki/ → app/markdown-shiki/.
 */
    // export const copyMarkdownShiki = () =>
    //     src('src/markdown-shiki/**/*', { base: 'src' }).pipe(dest('app'));


/**
 * ---------------------------
 * -----  `copyPages()`  -----
 * ---------------------------
 * - Copia src/pages/ → app/pages/.
 */
export const copyPages = () =>
    src('src/pages/**/*', { base: 'src' }).pipe(dest('app'));


/**
 * -----------------------------
 * -----  `copyPlugins()`  -----
 * -----------------------------
 * - Copia src/plugins/ → app/plugins/.
 */
export const copyPlugins = () =>
    src('src/plugins/**/*', { base: 'src' }).pipe(dest('app'));


/**
 * ----------------------------
 * -----  `copyRoutes()`  -----
 * ----------------------------
 * - Copia src/routes/ → app/routes/.
 */
export const copyRoutes = () =>
    src('src/routes/**/*', { base: 'src' }).pipe(dest('app'));



/**
 * -----------------------------
 * -----  `copyScripts()`  -----
 * -----------------------------
 * - Copia src/scripts/*.js → app/js/ 
 * - (renombra la carpeta scripts a js).
 */
export const copyScripts = () =>
    src(['src/scripts/**/*.js', '!src/scripts/**/*.map'], { base: 'src/scripts' })
        .pipe(dest('app/js'));


/**
 * -------------------------
 * -----  `copySpa()`  -----
 * -------------------------
 * - Copia src/spa/ → app/spa/.
 */
export const copySpa = () =>
    src('src/spa/**/*', { base: 'src' }).pipe(dest('app'));


/**
 * --------------------------
 * -----  `copyMain()`  -----
 * --------------------------
 * - Copia src/main.js → app/main.js.
 */
export const copyMain = () =>
    src('src/main.js').pipe(dest('app'));



/*
    ---------------------------------------
    -----  🌸  --  SCSS → app/css     -----
    ---------------------------------------
    Compila los SCSS de src y deposita
    los CSS compilados en app/css.
*/



/**
 * ---------------------
 * -----  `css()`  -----
 * ---------------------
 * - Compila src/scss/globals.scss → app/css/globals.css.
 */
export const css = () =>
    src('src/scss/globals.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('app/css', { sourcemaps: true }));


/**
 * --------------------------
 * -----  `cssPages()`  -----
 * --------------------------
 * - Compila src/scss/pages/*.scss → app/css/pages/*.css conservando la estructura.
 */
export const cssPages = () =>
    src('src/scss/pages/**/*.scss', {
        base: 'src/scss/pages',
        sourcemaps: true
    })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('app/css/pages', { sourcemaps: true }));



/**
 * ------------------------
 * -----  `styles()`  -----
 * ------------------------
 * - Ejecuta en paralelo las tareas de compilación de SCSS a CSS.
 * - Compila globals.scss y los SCSS de pages/ al mismo tiempo.
 */
export const styles = parallel(css, cssPages);



/*
    -----------------------------------------
    -----  🔄  --  COPY ALL  src → app  -----
    -----------------------------------------
    Agrupa todas las tareas de copia y
    compilación en una sola tarea paralela.
*/



/**
 * --------------------------
 * -----  `copyAll()`  -----
 * -------------------------
 * - Ejecuta en paralelo todas las tareas de copia y compilación.
 * - Copia src/ → app/ respetando la estructura y compila los SCSS.
 */

const copyAll = parallel(
    copyComponents,
    copyEffects,
    copyLibs,
    copyPages,
    copyPlugins,
    copyRoutes,
    copySpa,
    copyScripts,
    copyMain,
    styles,
);



/*
    ---------------------------------
    -----  👀  --  DEV / WATCH  -----
    ---------------------------------
    Observa src/ y sincroniza cada cambio
    en la carpeta app/ en tiempo real.
*/


/**
 * ---------------------------
 * -----  `watchTask()`  -----
 * ---------------------------
 * - Observa todos los archivos de src/ y ejecuta la tarea
 *   de copia o compilación correspondiente en cada cambio.
 */
const watchTask = () => {
    watch('src/components/**/*', copyComponents);
    watch('src/effects/**/*', copyEffects);
    watch('src/libs/**/*', copyLibs);
    watch('src/pages/**/*', copyPages);
    watch('src/plugins/**/*', copyPlugins);
    watch('src/routes/**/*', copyRoutes);
    watch('src/spa/**/*', copySpa);
    watch('src/scripts/**/*.js', copyScripts);
    watch('src/main.js', copyMain);
    watch('src/scss/**/*.scss', styles);
};


/**
 * ---------------------
 * -----  `dev()`  -----
 * ---------------------
 * - Genera app/ completa desde src/ y queda escuchando cambios en tiempo real.
 */

export const dev = series(copyAll, watchTask);


/**
 * ---------------------------
 * -----  `watchStyles()`  -----
 * ---------------------------
 * - Observa únicamente los archivos SCSS y recompila los estilos al detectar cambios.
 */

export const watchStyles = () => watch('src/scss/**/*.scss', styles);



/*
    -----------------------------------------
    -----  🟥  --  MINIFY  app → dist   -----
    -----------------------------------------
    Minifica el contenido de app/ y lo
    deposita en dist/ manteniendo la estructura.
*/


/**
 * --------------------------------
 * -----  `minifyRootIndex()`  -----
 * --------------------------------
 * - Minifica index.html de la raíz → dist/index.html.
 */

export const minifyRootIndex = () =>
    src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest('dist'));


/**
 * ---------------------------
 * -----  `minifyHtml()`  -----
 * ---------------------------
 * - Minifica todos los archivos HTML de app/ → dist/ conservando la estructura.
 */

export const minifyHtml = () =>
    src('app/**/*.html', { base: '.' })
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest('dist'));


/**
 * ------------------------------
 * -----  `minifyAllCss()`  -----
 * ------------------------------
 * - Minifica todos los archivos CSS de app/ → dist/ conservando la estructura.
 */

export const minifyAllCss = () =>
    src('app/**/*.css', { base: '.' })
        .pipe(cleanCSS())
        .pipe(dest('dist'));


/**
 * -----------------------------
 * -----  `minifyAllJs()`  -----
 * -----------------------------
 * - Minifica todos los archivos JS de app/ → dist/ conservando la estructura.
 */

export const minifyAllJs = () =>
    src(['app/**/*.js', '!app/**/*.map'], { base: '.' })
        .pipe(terser())
        .pipe(dest('dist'));


/**
 * ------------------------------
 * -----  `addTsNoCheck()`  -----
 * ------------------------------
 * - Agrega //@ts-nocheck al inicio de los archivos JS en modo desarrollo.
 * - Solo se ejecuta cuando NODE_ENV === 'development'.
 * @param {() => void} cb - Callback de Gulp para indicar que la tarea ha terminado.
 */

export function addTsNoCheck(cb) {

    //  -----  Solo ejecutar en desarrollo  -----
    if (process.env.NODE_ENV === 'development') {
        
        exec('node addTsNoCheck.js', (err, stdout, stderr) => {
            
            if (err) {
                console.error(err);
                return cb(err);
            }
            console.log(stdout);
            console.error(stderr);
            cb();
        });

    }
         
    else 
        cb();
}



/*
    ---------------------------
    -----  🚀  --  BUILD  -----
    ---------------------------
    1. Limpia dist/ y app/
    2. Copia y compila src/ → app/
    3. Minifica app/ → dist/
*/


/**
 * -----------------------
 * -----  `build()`  -----
 * -----------------------
 * Genera el build de producción en tres pasos:
 * 1. Limpia dist/ y app/.
 * 2. Copia y compila src/ → app/.
 * 3. Minifica app/ → dist/.
 */

export const build = series(
    parallel(cleanDist, cleanApp),
    copyAll,
    parallel(
        minifyAllJs,
        minifyAllCss,
        minifyRootIndex,
        minifyHtml
    )
);



/*  
    ------------------------------
    -----  🔥  DEFAULT TASK  -----
    ------------------------------
    Ejecuta `build()` por defecto al correr `gulp` sin argumentos.
*/
export default build;
