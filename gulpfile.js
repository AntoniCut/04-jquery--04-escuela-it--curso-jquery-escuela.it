/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /gulpfile.js  -----------------------
    -------------------------------------------------
*/


import gulp from "gulp";

import gulpSass from 'gulp-sass';
import dartSass from 'sass';

import { deleteAsync } from "del";

import terser from "gulp-terser";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";



//  -----  desestructuración de métodos de Gulp  -----
const { src, dest, watch, series, parallel } = gulp;


/**
 * ------------------------------
 * -----  📌  --  EXCLUDES  -----
 * ------------------------------
 * 
 * - `Array de cadenas que define una lista de patrones de exclusión para archivos y directorios 
 *    que no deben ser procesados durante las tareas de minificación`
 */

const EXCLUDES = [
    "!assets/**",
    "!src/**/.git/**",
    "!src/**/scss/**",
    "!src/**/*.ts",
    "!src/**/*.map",
    "!src/types/**",
    "!node_modules/**",
    "!gulpfile.js",
    "!package.json",
    "!package-lock.json"
];



/*
    -----------------------------------------------
    -----  🌸  --  Compilacion de Sass a CSS  -----
    -----------------------------------------------
*/


/**
 * - Configura `gulp-sass` para utilizar `dart-sass` como motor de compilación.
 * - Define la tarea `css` que compila el archivo `globals.scss` a CSS, generando sourcemaps para facilitar la depuración.
 * - La tarea observa los cambios en los archivos SCSS dentro de `src/styles/scss/` y ejecuta la compilación automáticamente.
 */
const sass = gulpSass(dartSass);


/**  
 * ---------------------
 * -----  `css()`  -----
 * ---------------------
 * @description
 * - Compila el archivo `globals.scss` a CSS.
 * - Genera sourcemaps para facilitar la depuración.
 * - Maneja errores de compilación de Sass.
 *  @returns {import('stream').Readable}
 * - Flujo de Gulp que representa la tarea de compilación de Sass a CSS.
 */

export const css = () => {

    return src('src/styles/scss/globals.scss', { sourcemaps: true })
        .pipe(
            sass()
                .on('error', sass.logError)
        )
        .pipe(dest('src/styles/css', { sourcemaps: true }));
}



/**
 * ---------------------
 * -----  `dev()`  -----
 * ---------------------
 * @description
 * - Ejecuta la tarea `css` para compilar los archivos SCSS a CSS.
 * - Observa los cambios en los archivos SCSS dentro de `src/styles/scss/` y ejecuta la tarea `css` automáticamente.
 * @returns {import('fs').FSWatcher}
 * - Objeto que representa el observador de archivos, permitiendo detener la observación si es necesario.
 */

export const dev = () => watch('src/styles/scss/**/*.scss', css);



/**
 * ------------------------------- 
 * -----  🧹  --  `clean()`  ----- 
 * -------------------------------
 * @description
 * - Elimina la carpeta `dist` y su contenido, preparando el entorno para una nueva compilación.
 * - Utiliza la función `deleteAsync` del paquete `del` para realizar esta tarea de manera asíncrona.
 * @returns {Promise<string[]>} 
 * - Promesa que se resuelve cuando la carpeta `dist` ha sido eliminada.
 */

export const clean = () => deleteAsync(["dist"]);



/**
 * ---------------------------------------
 * ----- 🟥  -  `minifyRootIndex()`  -----
 * ---------------------------------------
 * @description
 * - Minifica el archivo `index.html` ubicado en la raíz del proyecto.
 * - Utiliza el plugin `gulp-htmlmin` para eliminar espacios en blanco y comentarios, optimizando el tamaño del archivo.
 * - El archivo minificado se guarda en la carpeta `dist`, manteniendo la estructura de directorios.
 * - Esta tarea es específica para el archivo `index.html` de la raíz, ya que los archivos HTML dentro de `src` se manejan en la tarea `minifyHtml()`.
 * @returns {NodeJS.ReadWriteStream} 
 * - Flujo de Gulp que representa la tarea de minificación del archivo `index.html`.
 */

export const minifyRootIndex = () => {

    return src("index.html")
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
        )
        .pipe(dest("dist"));
}



/**
 * ------------------------------------
 * -----  🟥  --  `minifyHtml()`  -----
 * ------------------------------------
 * @description
 * - Minifica todos los archivos HTML dentro de la carpeta `src`, excluyendo aquellos especificados en la constante `EXCLUDES`.
 * - Utiliza el plugin `gulp-htmlmin` para eliminar espacios en blanco y comentarios, optimizando el tamaño de los archivos HTML.
 * - Los archivos minificados se guardan en la carpeta `dist`, manteniendo la estructura de directorios original.
 * @returns {import('stream').Readable}
 * - Flujo de Gulp que representa la tarea de minificación de los archivos HTML dentro de `src`.
 */

export const minifyHtml = () => {

    return src(
        ["src/**/*.html", ...EXCLUDES],
        { base: "." }
    )
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
        )
        .pipe(dest("dist"));
}




/**
 * --------------------------------------
 * -----  🟦  --  `minifyAllCss()`  -----
 * --------------------------------------
 * @description
 * - Minifica todos los archivos CSS dentro de la carpeta `src`, excluyendo aquellos especificados en la constante `EXCLUDES`.
 * - Utiliza el plugin `gulp-clean-css` para optimizar el tamaño de los archivos CSS.
 * - Los archivos minificados se guardan en la carpeta `dist`, manteniendo la estructura de directorios original.
 * @returns {import('stream').Readable}
 * - Flujo de Gulp que representa la tarea de minificación de los archivos CSS.
 */

export const minifyAllCss = () => {

    return src(
        ["src/**/*.css", ...EXCLUDES],
        { base: "." }
    )
        .pipe(cleanCSS())
        .pipe(dest("dist"));
}



/**
 * -------------------------------------
 * -----  🟨  --  `minifyAllJs()`  -----
 * -------------------------------------
 * @description
 * - Minifica todos los archivos JavaScript dentro de la carpeta `src`, excluyendo aquellos especificados en la constante `EXCLUDES`.
 * - Utiliza el plugin `gulp-terser` para optimizar el tamaño de los archivos JavaScript.
 * - Los archivos minificados se guardan en la carpeta `dist`, manteniendo la estructura de directorios original.
 * @returns {import('stream').Readable}
 * - Flujo de Gulp que representa la tarea de minificación de los archivos JavaScript.
 */

export const minifyAllJs = () => {

    return src(
        ["src/**/*.js", ...EXCLUDES],
        { base: "." }
    )
        .pipe(terser())
        .pipe(dest("dist"));
}



/**
 * -------------------------------
 * -----  🚀  --  `build()`  -----
 * -------------------------------
 * - Ejecuta una serie de tareas para preparar el proyecto para producción.
 * - Primero, limpia la carpeta `dist` eliminando su contenido.
 * - Luego, en paralelo, minifica todos los archivos JavaScript, CSS, el archivo `index.html` de la raíz y todos los archivos HTML dentro de `src`.
 */

export const build = series(
    clean,
    parallel(
        minifyAllJs,
        minifyAllCss,
        minifyRootIndex,
        minifyHtml
    )
);



//  -----  🔥  DEFAULT TASK  -----
export default build;
