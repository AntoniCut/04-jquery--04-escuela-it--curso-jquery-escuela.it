/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario02.js  --  /src/routes/route-clase18-formulario02.js  -----  *
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
export const routeClase18Formulario02 = {
        id: 'clase18Formulario02',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formulario 02',
        path: '/clase18-formularios-ajax/formulario-02',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/02-formulario-02.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formulario 02',
        styles: [
            { href: `${styles}/pages/clase-18/02-formulario-02.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/02-formulario-02.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/02-formulario-02-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/02-formulario-02-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/02-formulario-02-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
