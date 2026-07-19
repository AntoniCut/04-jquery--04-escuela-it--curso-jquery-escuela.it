/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-animaciones-en-bucle.js  --  /src/routes/route-clase14-animaciones-en-bucle.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase14AnimacionesEnBucle = {
        id: 'clase14AnimacionesEnBucle',
        favicon: favicon,
        pageTitle: 'Clase 14 - 6. Animaciones en Bucle',
        path: '/clase14-cola-de-efectos/animaciones-en-bucle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/06-animaciones-en-bucle.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-14/06-animaciones-en-bucle-description.html`, target: '[data-component-page="animacionesEnBucleDescription"]' },
            { url: `${pagesComponents}/clase-14/06-animaciones-en-bucle-demo.html`, target: '[data-component-page="animacionesEnBucleDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-animaciones-en-bucle-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-14/06-animaciones-en-bucle-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-animaciones-en-bucle-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-14/06-animaciones-en-bucle.css`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-animaciones-en-bucle-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-14/06-animaciones-en-bucle.js`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 14 - 6. Animaciones en Bucle',
        styles: [
            { href: `${styles}/pages/clase-14/06-animaciones-en-bucle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/06-animaciones-en-bucle.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
