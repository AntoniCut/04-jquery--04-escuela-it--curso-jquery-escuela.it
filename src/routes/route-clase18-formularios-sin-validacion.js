/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formularios-sin-validacion.js  --  /src/routes/route-clase18-formularios-sin-validacion.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    pages,
    layoutFooter,
    styles,
    scripts,
    markdownShiki
} = paths;


/** @type {import('../../types/index.js').Route} */
export const routeClase18FormulariosSinValidacion = {
        id: 'clase18FormulariosSinValidacion',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formularios Sin Validacion',
        path: '/clase18-formularios-ajax/formularios-sin-validacion',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/02-formularios-sin-validacion.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formularios Sin Validacion',
        styles: [
            { href: `${styles}/pages/clase-18/clase-18-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/02-formularios-sin-validacion.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/02-formularios-sin-validacion-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/clase-18-styles-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/02-formularios-sin-validacion-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
