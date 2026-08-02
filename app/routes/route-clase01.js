/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase01.js  --  /src/routes/route-clase01.js  -----  *
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
export const routeClase01 = {
        id: 'clase01',
        favicon: favicon,
        pageTitle: 'Clase 1 - Que es jQuery',
        path: '/clase01-que-es-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-01/layout-aside-clase-01.html`,
            "#layoutMain": `${pages}/clase-01/00-que-es-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-01/00-que-es-jquery-description.html`, target: '[data-component-page="queEsJqueryDescription"]' },
            { url: `${pagesComponents}/clase-01/00-que-es-jquery-images.html`, target: '[data-component-page="queEsJqueryImages"]' },
            { url: `${pagesComponents}/clase-01/00-que-es-jquery-demo.html`, target: '[data-component-page="queEsJqueryDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-que-es-jquery-images-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-01/00-que-es-jquery-images.html`,
                urlOutput: `${markdownShikiHtml}/clase-01`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-que-es-jquery-images-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/shared/section-img.css`,
                urlOutput: `${markdownShikiHtml}/clase-01`,
                target: '[data-shiki="codeCss"]',
            },
        ],
        headerTitle: 'Clase 1 - Que es jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
