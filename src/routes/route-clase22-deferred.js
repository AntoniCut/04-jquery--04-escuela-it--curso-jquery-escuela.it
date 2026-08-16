/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase22-deferred.js  --  /src/routes/route-clase22-deferred.js  -----  *
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
export const routeClase22Deferred = {
        id: 'clase22Deferred',
        favicon: favicon,
        pageTitle: 'Clase 22 - 1. Deferred',
        path: '/clase22-deferred-y-promesas/01-deferred',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-22/01-deferred.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-22/layout-aside-clase-22.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-22/01-deferred-description.html`, target: '[data-component-page="deferredDescription"]' },
            { url: `${pagesComponents}/clase-22/01-deferred-demo.html`, target: '[data-component-page="deferredDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-deferred-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-22/01-deferred-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-deferred-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-22/clase-22-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-deferred-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-22/01-deferred.js`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 22 - 1. Deferred',
        styles: [
            { href: `${styles}/pages/clase-22/clase-22-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-22/01-deferred.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
