/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-enviar-datos-post-sin-formularios.js  --  /src/routes/route-clase18-enviar-datos-post-sin-formularios.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
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
        pagesComponents: [
            { url: `${pagesComponents}/clase-18/01-enviar-datos-post-sin-formularios-description.html`, target: '[data-component-page="enviarDatosPostSinFormulariosDescription"]' },
            { url: `${pagesComponents}/clase-18/01-enviar-datos-post-sin-formularios-demo.html`, target: '[data-component-page="enviarDatosPostSinFormulariosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-enviar-datos-post-sin-formularios-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-18/01-enviar-datos-post-sin-formularios-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-enviar-datos-post-sin-formularios-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-18/clase-18-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeCss"]',
            },

            {
                fileName: '01-enviar-datos-post-sin-formularios-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-18/01-enviar-datos-post-sin-formularios.js`,
                urlOutput: `${markdownShikiHtml}/clase-18`,
                target: '[data-shiki="codeJs"]',
            },
        ],
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
};
