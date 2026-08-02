/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /route-clase13-toggle.js  --  /src/routes/route-clase13-toggle.js  -----  *
    *  ---------------------------------------------------------------------------------  *
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
export const routeClase13Toggle = {
        id: 'clase13Toggle',
        favicon: favicon,
        pageTitle: 'Clase 13 - 1. Toggle',
        path: '/clase13-efectos-y-animaciones/toggle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/01-toggle.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-13/01-toggle-description.html`, target: '[data-component-page="toggleDescription"]' },
            { url: `${pagesComponents}/clase-13/01-toggle-demo.html`, target: '[data-component-page="toggleDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-toggle-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-13/01-toggle-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-toggle-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-13/01-toggle.css`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-toggle-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-13/01-toggle.js`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 13 - 1. Toggle',
        styles: [
            { href: `${styles}/pages/clase-13/01-toggle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-13/01-toggle.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
