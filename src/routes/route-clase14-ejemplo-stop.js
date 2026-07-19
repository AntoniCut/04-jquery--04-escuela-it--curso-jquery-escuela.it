/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-ejemplo-stop.js  --  /src/routes/route-clase14-ejemplo-stop.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase14EjemploStop = {
        id: 'clase14EjemploStop',
        favicon: favicon,
        pageTitle: 'Clase 14 - 2. Ejemplo Stop',
        path: '/clase14-cola-de-efectos/ejemplo-stop',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/02-ejemplo-stop.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-14/02-ejemplo-stop-description.html`, target: '[data-component-page="ejemploStopDescription"]' },
            { url: `${pagesComponents}/clase-14/02-ejemplo-stop-demo.html`, target: '[data-component-page="ejemploStopDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-ejemplo-stop-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-14/02-ejemplo-stop-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-ejemplo-stop-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-14/02-ejemplo-stop.css`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-ejemplo-stop-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-14/02-ejemplo-stop.js`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 14 - 2. Ejemplo Stop',
        styles: [
            { href: `${styles}/pages/clase-14/02-ejemplo-stop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/02-ejemplo-stop.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
