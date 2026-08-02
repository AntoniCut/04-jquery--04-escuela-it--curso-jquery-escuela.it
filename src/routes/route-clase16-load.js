/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-load.js  --  /src/routes/route-clase16-load.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
export const routeClase16Load = {
        id: 'clase16Load',
        favicon: favicon,
        pageTitle: 'Clase 16 - 1. Load',
        path: '/clase16-ajax-interfaz-alto-nivel/load',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-16/layout-aside-clase-16.html`,
            "#layoutMain": `${pages}/clase-16/01-load.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-16/01-load-description.html`, target: '[data-component-page="loadDescription"]' },
            { url: `${pagesComponents}/clase-16/01-load-demo.html`, target: '[data-component-page="loadDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-load-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-16/01-load-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-load-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-16/clase-16-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-load-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-16/01-load.js`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 16 - 1. Load',
        styles: [
            { href: `${styles}/pages/clase-16/clase-16-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/01-load.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
