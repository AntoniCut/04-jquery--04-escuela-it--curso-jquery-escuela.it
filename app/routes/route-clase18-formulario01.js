/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario01.js  --  /src/routes/route-clase18-formulario01.js  -----  *
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
export const routeClase18Formulario01 = {
        id: 'clase18Formulario01',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formulario 01',
        path: '/clase18-formularios-ajax/formulario-01',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/01-formulario-01.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formulario 01',
        styles: [
            { href: `${styles}/pages/clase-18/01-formulario-01.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/01-formulario-01.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/01-formulario-01-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/01-formulario-01-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/01-formulario-01-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
