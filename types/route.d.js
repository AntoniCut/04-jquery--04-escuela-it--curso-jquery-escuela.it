/*
    *  --------------------------------------------  *
    *  -----  /route.d.js  --  /types/route.d.js  -----  *
    *  --------------------------------------------  *
*/


/// <reference path="./route-components.d.js" />
/// <reference path="./route-script.d.js" />
/// <reference path="./route-style.d.js" />
/// <reference path="./route-lib.d.js" />


/**
 * ----------------------------------
 * -----  `MarkdownShikiEntry`  -----
 * ----------------------------------
 * @typedef {Object} MarkdownShikiEntry - Entrada que define cómo generar y dónde servir un bloque HTML resaltado con Shiki.
 * @property {string} fileName - Nombre del fichero .html generado (p.ej. 'astro-page-html.html').
 * @property {string} [fileExtension] - Tipo/lenguaje a resaltar: 'html' | 'css' | 'scss' | 'js' (mapeado a lang de Shiki).
 * @property {string} [urlInput] - URL (con base) del archivo fuente a renderizar (debe existir en disco para que no haya error).
 * @property {string} urlOutput - URL (con base) de la CARPETA donde se guarda el .html generado. El archivo final se sirve de `urlOutput + '/' + fileName`.
 * @property {string} target - Selector CSS del contenedor DOM donde se insertará el HTML (p.ej. `'[data-shiki="codeHtml"]'`). Permite múltiples archivos del mismo tipo sin colisión de IDs.
 */


/**
 * ---------------------------------
 * -----  `PageComponentEntry`  -----
 * ---------------------------------
 * @typedef {Object} PageComponentEntry - Entrada de componente HTML que se renderiza dentro de la propia página actual.
 *                                        A diferencia de `components` (que pueblan regiones del layout mediante ID),
 *                                        `pagesComponents` inyecta HTML en contenedores de la propia vista usando selectores CSS arbitrarios.
 * @property {string} url - URL absoluta al archivo .html del componente de página.
 * @property {string} target - Selector CSS del contenedor DOM donde se insertará el componente (p.ej. `'[data-component-page="htmlPage"]'`). Permite renderizar varios componentes en la misma página.
 */


/**
 * ---------------------
 * -----  `Route`  -----
 * ---------------------
 * @typedef {Object} Route - Objeto de configuración de cada ruta del SPA.
 * @property {string} id - Identificador único de la ruta.
 * @property {string} path - URL interna asociada a la vista.
 * @property {string} pageTitle - Título mostrado en la etiqueta `<title>`.
 * @property {string} headerTitle - Título que se mostrará dentro del layout-header.
 * @property {string} favicon - Ruta del favicon específico de la vista.
 * @property {RouteComponents} components - Mapa selector → URL de componente HTML.
 * @property {PageComponentEntry[]|null} [pagesComponents] - Lista de componentes HTML que se renderizan dentro de la propia página (en contenedores con `data-component-page="..."`). Cada entrada define `{ url, target }`. Opcional.
 * @property {RouteStyle[]|null} styles - Lista de hojas CSS asociadas a la vista (opcional).
 * @property {RouteScript[]|null} scripts - Lista de scripts a cargar dinámicamente (opcional).
 * @property {RouteLib[]|null} [libs] - Lista de módulos de jQueryUI a cargar bajo demanda para esta ruta (opcional).
 * @property {MarkdownShikiEntry[]|null} [MarkdownShikiHtml] - Lista de entradas `{ fileName, urlOutput, target }` a archivos .html generados con Shiki para resaltar código en la vista (opcional).
 */