/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase08-selectores-jerarquia.js  --  /src/routes/route-clase08-selectores-jerarquia.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
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
export const routeClase08SelectoresJerarquia = {
        id: 'clase08SelectoresJerarquia',
        favicon: favicon,
        pageTitle: 'Clase 8 - 1. Selectores Jerarquía',
        path: '/clase08-selectores-jquery-traversing/01-selectores-jerarquia',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-08/layout-aside-clase-08.html`,
            "#layoutMain": `${pages}/clase-08/01-selectores-jerarquia.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-08/01-selectores-jerarquia-description.html`, target: '[data-component-page="selectoresJerarquiaDescription"]' },
            { url: `${pagesComponents}/clase-08/01-selectores-jerarquia-demo.html`, target: '[data-component-page="selectoresJerarquiaDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-selectores-jerarquia-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-08/01-selectores-jerarquia-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-selectores-jerarquia-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-08/01-selectores-jerarquia.css`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-selectores-jerarquia-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-08/01-selectores-jerarquia.js`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 8 - 1. Selectores Jerarquía',
        styles: [
            { href: `${styles}/pages/clase-08/01-selectores-jerarquia.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/01-selectores-jerarquia.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
