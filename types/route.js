/*
    *  --------------------------------------------  *
    *  -----  /route.js  --  /types/route.js  -----  *
    *  --------------------------------------------  *
*/

//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export { };



/**
 * -------------------------------
 * -----  `RouteComponents`  -----
 * -------------------------------
 * @typedef {Record<string, string|undefined>} RouteComponents 
 * - Mapa de componentes HTML a cargar dinámicamente. 
 * - Cada valor puede ser string o undefined.
 * - Objeto dinámico donde la clave es el selector CSS
 *   y el valor es la ruta al archivo HTML que se cargará en ese contenedor.
 *
 *     - Ejemplo:
 *     - {
 *         - "#layoutHeader": "/app/components/layout/header.html",
 *         - "#layoutMain": "/app/pages/home.html",
 *         - "#widgetPromo": "/app/components/widgets/promo.html"
 *      - }
 */


/**
 * --------------------------
 * -----  `RouteStyle`  -----
 * --------------------------
 * @typedef {Object} RouteStyle - Representa una hoja de estilos que debe cargarse dinámicamente.
 * @property {string} href - Ruta absoluta o relativa del archivo CSS.
 */


/**
 * ---------------------------
 * -----  `RouteScript`  -----
 * ---------------------------
 * @typedef {Object} RouteScript - Representa un script que debe cargarse dinámicamente.
 * @property {string} src - Ruta absoluta o relativa del archivo JS.
 * @property {'classic'|'module'} [type] - Tipo de carga del script. Por defecto `classic`.
 * @property {string|null} [exportFunctionName] - Nombre de una función exportada a ejecutar tras importar un módulo.
 */


/**
 * ------------------------
 * -----  `RouteLib`  -----
 * ------------------------
 * @typedef {Object} RouteLib - Representa una librería externa (jQueryUI modules) que debe cargarse bajo demanda.
 * @property {string} name - Nombre del módulo de jQueryUI (ej: 'datepicker', 'dialog', 'draggable', 'sortable').
 * @property {string} [version] - Versión específica de la librería (opcional).
 */


/**
 * ----------------------------------
 * -----  `MarkdownShikiEntry`  -----
 * ----------------------------------
 * @typedef {Object} MarkdownShikiEntry - Entrada que define cómo generar y dónde servir un bloque HTML resaltado con Shiki.
 * @property {string} fileName - Nombre del fichero .html generado (p.ej. 'astro-page-html.html').
 * @property {string} fileExtension - Tipo/lenguaje a resaltar: 'html' | 'css' | 'scss' | 'js' (mapeado a lang de Shiki).
 * @property {string} urlInput - URL (con base) del archivo fuente a renderizar (debe existir en disco para que no haya error).
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
 * @property {MarkdownShikiEntry[]|null} [MarkdownShikiHtml] - Lista de entradas `{ url, target }` a archivos .html generados con Shiki para resaltar código en la vista (opcional).
 */