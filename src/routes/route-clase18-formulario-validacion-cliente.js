/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario-validacion-cliente.js  --  /src/routes/route-clase18-formulario-validacion-cliente.js  -----  *
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
export const routeClase18FormularioValidacionCliente = {
        id: 'clase18FormularioValidacionCliente',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formulario Validacion Cliente',
        path: '/clase18-formularios-ajax/formulario-validacion-cliente',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/03-formulario-validacion-cliente.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formulario Validacion Cliente',
        styles: [
            { href: `${styles}/pages/clase-18/clase-18-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/03-formulario-validacion-cliente.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-18/03-formulario-validacion-cliente-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-18/clase-18-styles-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-18/03-formulario-validacion-cliente-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
