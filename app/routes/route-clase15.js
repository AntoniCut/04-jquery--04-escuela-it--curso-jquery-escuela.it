/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase15.js  --  /src/routes/route-clase15.js  -----  *
    *  -----------------------------------------------------------------  *
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
export const routeClase15 = {
        id: 'clase15',
        favicon: favicon,
        pageTitle: 'Clase 15 - JSON',
        path: '/clase15-json',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-15/00-json.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-15/00-json-description.html`, target: '[data-component-page="jsonDescription"]' },
            { url: `${pagesComponents}/clase-15/00-json-demo.html`, target: '[data-component-page="jsonDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-json-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-15/00-json-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-15`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-json-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-15/00-json.css`,
                urlOutput: `${markdownShikiHtml}/clase-15`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '00-json-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-15/00-json.js`,
                urlOutput: `${markdownShikiHtml}/clase-15`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 15 - JSON',
        styles: [
            { href: `${styles}/pages/clase-15/00-json.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-15/00-json.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
