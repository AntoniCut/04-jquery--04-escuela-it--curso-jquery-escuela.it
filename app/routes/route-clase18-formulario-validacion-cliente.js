/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario-validacion-cliente.js  --  /src/routes/route-clase18-formulario-validacion-cliente.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';

/// <reference path="../../../types/route.d.js" />


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    layoutAsideLeft,
    layoutAsidePages,
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
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
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-18/layout-aside-clase-18.html`,
            "#layoutMain": `${pages}/clase-18/03-formulario-validacion-cliente.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-18/03-formulario-validacion-cliente-description.html`, target: '[data-component-page="formularioValidacionClienteDescription"]' },
            { url: `${pagesComponents}/clase-18/03-formulario-validacion-cliente-demo.html`, target: '[data-component-page="formularioValidacionClienteDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-formulario-validacion-cliente-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-18/03-formulario-validacion-cliente-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-formulario-validacion-cliente-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-18/clase-18-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeCss"]',
            },

            {
                fileName: '03-formulario-validacion-cliente-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-18/03-formulario-validacion-cliente.js`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeJs"]',
            },
        ],
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
};
