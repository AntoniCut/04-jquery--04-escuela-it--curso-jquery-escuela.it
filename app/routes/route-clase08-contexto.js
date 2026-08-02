/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase08-contexto.js  --  /src/routes/route-clase08-contexto.js  -----  *
    *  -----------------------------------------------------------------------------------  *
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
export const routeClase08Contexto = {
        id: 'clase08Contexto',
        favicon: favicon,
        pageTitle: 'Clase 8 - 4. Partir de un Contexto',
        path: '/clase08-selectores-jquery-traversing/04-partir-de-un-contexto',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-08/layout-aside-clase-08.html`,
            "#layoutMain": `${pages}/clase-08/04-partir-de-un-contexto.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-08/04-partir-de-un-contexto-description.html`, target: '[data-component-page="partirContextoDescription"]' },
            { url: `${pagesComponents}/clase-08/04-partir-de-un-contexto-demo.html`, target: '[data-component-page="partirContextoDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-partir-de-un-contexto-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-08/04-partir-de-un-contexto-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-partir-de-un-contexto-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-08/04-partir-de-un-contexto.css`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-partir-de-un-contexto-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-08/04-partir-de-un-contexto.js`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 8 - 4. Partir de un Contexto',
        styles: [
            { href: `${styles}/pages/clase-08/04-partir-de-un-contexto.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/04-partir-de-un-contexto.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
