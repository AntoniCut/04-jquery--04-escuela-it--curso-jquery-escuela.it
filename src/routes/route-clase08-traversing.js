/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /route-clase08-traversing.js  --  /src/routes/route-clase08-traversing.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
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
export const routeClase08Traversing = {
        id: 'clase08Traversing',
        favicon: favicon,
        pageTitle: 'Clase 8 - 3. Traversing en jQuery',
        path: '/clase08-selectores-jquery-traversing/03-traversing',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-08/layout-aside-clase-08.html`,
            "#layoutMain": `${pages}/clase-08/03-traversing.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-08/03-traversing-description.html`, target: '[data-component-page="traversingDescription"]' },
            { url: `${pagesComponents}/clase-08/03-traversing-demo.html`, target: '[data-component-page="traversingDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-traversing-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-08/03-traversing-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-traversing-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-08/03-traversing.css`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-traversing-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-08/03-traversing.js`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 8 - 3. Traversing en jQuery',
        styles: [
            { href: `${styles}/pages/clase-08/03-traversing.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/03-traversing.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
