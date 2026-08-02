/*
    *  -----  /route-clase10-append-prepend.js  --  /src/routes/route-clase10-append-prepend.js  -----  *
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
export const routeClase10AppendPrepend = {
        id: 'clase10AppendPrepend',
        favicon: favicon,
        pageTitle: 'Clase 10 - 1. Inyección Append / Prepend / AppendTo / PrependTo',
        path: '/clase10-manipulacion-avanzada-del-contenido/01-inyeccion-append-prepend',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/01-inyeccion-append-prepend.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/01-inyeccion-append-prepend-description.html`, target: '[data-component-page="inyeccionAppendPrependDescription"]' },
            { url: `${pagesComponents}/clase-10/01-inyeccion-append-prepend-demo.html`, target: '[data-component-page="inyeccionAppendPrependDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-inyeccion-append-prepend-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/01-inyeccion-append-prepend-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-inyeccion-append-prepend-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/01-inyeccion-append-prepend.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-inyeccion-append-prepend-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/01-inyeccion-append-prepend.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 1. Inyección Append / Prepend / AppendTo / PrependTo',
        styles: [
            { href: `${styles}/pages/clase-10/01-inyeccion-append-prepend.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/01-inyeccion-append-prepend.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
