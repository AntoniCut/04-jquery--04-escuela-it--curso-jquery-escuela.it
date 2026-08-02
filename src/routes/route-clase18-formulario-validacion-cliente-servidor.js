/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario-validacion-cliente-servidor.js  --  /src/routes/route-clase18-formulario-validacion-cliente-servidor.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase18FormularioValidacionClienteServidor = {
    id: 'clase18FormularioValidacionClienteServidor',
    favicon: favicon,
    pageTitle: 'Clase 18 - Formulario Validacion Cliente Servidor',
    path: '/clase18-formularios-ajax/formulario-validacion-cliente-servidor',
    components: {
        "#layoutHeader": layoutHeader,
        "#btnNavbar": btnNavbar,
        "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
        "#layoutNavbar": layoutNavbar,
        "#layoutNavbarThemesUI": layoutNavbarThemesUI,
        "#layoutAsideLeft": layoutAsideLeft,
        "#layoutAsideRight": `${layoutAsidePages}/clase-18/layout-aside-clase-18.html`,
        "#layoutMain": `${pages}/clase-18/04-formulario-validacion-cliente-servidor.html`,
        "#layoutFooter": layoutFooter,
    },
    pagesComponents: [
        { url: `${pagesComponents}/clase-18/04-formulario-validacion-cliente-servidor-description.html`, target: '[data-component-page="formularioValidacionClienteServidorDescription"]' },
        { url: `${pagesComponents}/clase-18/04-formulario-validacion-cliente-servidor-demo.html`, target: '[data-component-page="formularioValidacionClienteServidorDemo"]' },
    ],
    MarkdownShikiHtml: [
        {
            fileName: '04-formulario-validacion-cliente-servidor-demo-html.html',
            fileExtension: 'html',
            urlInput: `${pagesComponents}/clase-18/04-formulario-validacion-cliente-servidor-demo.html`,
            urlOutput: `${markdownShikiHtml}/clase-18`,
            target: '[data-shiki="codeHtml"]',
        },
        {
            fileName: '04-formulario-validacion-cliente-servidor-demo-css.html',
            fileExtension: 'css',
            urlInput: `${styles}/pages/clase-18/clase-18-styles.css`,
            urlOutput: `${markdownShikiHtml}/clase-18`,
            target: '[data-shiki="codeCss"]',
        },

        {
            fileName: '04-formulario-validacion-cliente-servidor-demo-js.html',
            fileExtension: 'js',
            urlInput: `${scripts}/clase-18/04-formulario-validacion-cliente-servidor.js`,
            urlOutput: `${markdownShikiHtml}/clase-18`,
            target: '[data-shiki="codeJs"]',
        },
    ],
    headerTitle: 'Clase 18 - Formulario Validacion Cliente Servidor',
    styles: [
        { href: `${styles}/pages/clase-18/clase-18-styles.css` },
    ],
    scripts: [
        { src: `${scripts}/tooltips.js` },
        { src: `${scripts}/clase-18/04-formulario-validacion-cliente-servidor.js` },
    ],
    libs: [
        { name: 'tooltip' },
        { name: 'draggable' },
    ],
};
