/*
    *  -----  /route-clase10-after-before.js  --  /src/routes/route-clase10-after-before.js  -----  *
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
export const routeClase10AfterBefore = {
        id: 'clase10AfterBefore',
        favicon: favicon,
        pageTitle: 'Clase 10 - 2. Inyección After / Before / InsertAfter / InsertBefore',
        path: '/clase10-manipulacion-avanzada-del-contenido/02-inyeccion-after-before',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/02-inyeccion-after-before.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/02-inyeccion-after-before-description.html`, target: '[data-component-page="inyeccionAfterBeforeDescription"]' },
            { url: `${pagesComponents}/clase-10/02-inyeccion-after-before-demo.html`, target: '[data-component-page="inyeccionAfterBeforeDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-inyeccion-after-before-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/02-inyeccion-after-before-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-inyeccion-after-before-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/02-inyeccion-after-before.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-inyeccion-after-before-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/02-inyeccion-after-before.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 2. Inyección After / Before / InsertAfter / InsertBefore',
        styles: [
            { href: `${styles}/pages/clase-10/02-inyeccion-after-before.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/02-inyeccion-after-before.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
