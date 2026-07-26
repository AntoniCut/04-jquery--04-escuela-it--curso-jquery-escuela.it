/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase05.js  --  /src/routes/route-clase05.js  -----  *
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
export const routeClase05 = {
        id: 'clase05',
        favicon: favicon,
        pageTitle: 'Clase 5 - Introducción a jQuery',
        path: '/clase05-introduccion-a-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-05/00-introduccion-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-05/00-introduccion-jquery-description.html`, target: '[data-component-page="introduccionJqueryDescription"]' },
            { url: `${pagesComponents}/clase-05/00-introduccion-jquery-images.html`, target: '[data-component-page="introduccionJqueryImages"]' },
            { url: `${pagesComponents}/clase-05/00-introduccion-jquery-demo.html`, target: '[data-component-page="introduccionJqueryDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-introduccion-jquery-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-05/00-introduccion-jquery-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-05`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-introduccion-jquery-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-05/00-introduccion-jquery.css`,
                urlOutput: `${markdownShikiHtml}/clase-05`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '00-introduccion-jquery-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-05/00-introduccion-jquery.js`,
                urlOutput: `${markdownShikiHtml}/clase-05`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 5 - Introducción a jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
            { href: `${styles}/pages/clase-05/00-introduccion-jquery.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-05/00-introduccion-jquery.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
