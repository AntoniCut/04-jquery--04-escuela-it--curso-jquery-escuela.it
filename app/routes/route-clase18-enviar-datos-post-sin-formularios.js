/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-enviar-datos-post-sin-formularios.js  --  /src/routes/route-clase18-enviar-datos-post-sin-formularios.js  -----  *
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
export const routeClase18EnviarDatosPostSinFormularios = {
        id: 'clase18EnviarDatosPostSinFormularios',
        favicon: favicon,
        pageTitle: 'Clase 18 - Enviar Datos Post Sin Formularios',
        path: '/clase18-formularios-ajax/enviar-datos-post-sin-formularios',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/01-enviar-datos-post-sin-formularios.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Enviar Datos Post Sin Formularios',
        styles: [
            { href: `${styles}/pages/clase-18/clase-18-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/01-enviar-datos-post-sin-formularios.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/01-enviar-datos-post-sin-formularios-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/clase-18-styles-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/01-enviar-datos-post-sin-formularios-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
