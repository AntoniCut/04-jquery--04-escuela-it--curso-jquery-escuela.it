/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario04.js  --  /src/routes/route-clase18-formulario04.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
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
export const routeClase18Formulario04 = {
        id: 'clase18Formulario04',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formulario 04',
        path: '/clase18-formularios-ajax/formulario-04',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/04-formulario-04.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formulario 04',
        styles: [
            { href: `${styles}/pages/clase-18/04-formulario-04.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/04-formulario-04.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/04-formulario-04-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/04-formulario-04-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/04-formulario-04-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
