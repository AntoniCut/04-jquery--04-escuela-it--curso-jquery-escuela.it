/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase22-promesas.js  --  /src/routes/route-clase22-promesas.js  -----  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase22Promesas = {
        id: 'clase22Promesas',
        favicon: favicon,
        pageTitle: 'Clase 22 - 2. Promesas',
        path: '/clase22-deferred-y-promesas/02-promesas',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-22/02-promesas.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-22/layout-aside-clase-22.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-22/02-promesas-description.html`, target: '[data-component-page="promesasDescription"]' },
            { url: `${pagesComponents}/clase-22/02-promesas-demo.html`, target: '[data-component-page="promesasDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-promesas-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-22/02-promesas-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-promesas-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-22/clase-22-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-promesas-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-22/02-promesas.js`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '02-promesas-demo-partial-01-html.html',
                fileExtension: 'html',
                urlInput: `${services}/clase-22/_partial-01.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codePartial01"]',
            },
            {
                fileName: '02-promesas-demo-partial-02-html.html',
                fileExtension: 'html',
                urlInput: `${services}/clase-22/_partial-02.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codePartial02"]',
            },
        ],
        headerTitle: 'Clase 22 - 2. Promesas',
        styles: [
            { href: `${styles}/pages/clase-22/clase-22-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-22/02-promesas.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
