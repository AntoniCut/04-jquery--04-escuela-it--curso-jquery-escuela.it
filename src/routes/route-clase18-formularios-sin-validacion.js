/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formularios-sin-validacion.js  --  /src/routes/route-clase18-formularios-sin-validacion.js  -----  *
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
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-18/layout-aside-clase-18.html`,
            "#layoutMain": `${pages}/clase-18/02-formularios-sin-validacion.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-18/02-formularios-sin-validacion-description.html`, target: '[data-component-page="formulariosSinValidacionDescription"]' },
            { url: `${pagesComponents}/clase-18/02-formularios-sin-validacion-demo.html`, target: '[data-component-page="formulariosSinValidacionDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-formularios-sin-validacion-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-18/02-formularios-sin-validacion-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-formularios-sin-validacion-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-18/clase-18-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeCss"]',
            },

            {
                fileName: '02-formularios-sin-validacion-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-18/02-formularios-sin-validacion.js`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeJs"]',
            },
        ],
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
};
