/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio06-date.js  --  /src/routes/route-clase09-ejercicio06-date.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio06Date = {
        id: 'clase09Ejercicio06Date',
        favicon: favicon,
        pageTitle: 'Clase 9 - 6. Ejercicio 6 con DATE',
        path: '/clase09-ejercicio-6-date',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/06-ejercicio-06-date.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/06-ejercicio-06-date-description.html`, target: '[data-component-page="ejercicio06DateDescription"]' },
            { url: `${pagesComponents}/clase-09/06-ejercicio-06-date-demo.html`, target: '[data-component-page="ejercicio06DateDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-ejercicio-06-date-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/06-ejercicio-06-date-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-ejercicio-06-date-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/06-ejercicio-06-date.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-ejercicio-06-date-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/06-ejercicio-06-date.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 6. Ejercicio 6 con DATE',
        styles: [
            { href: `${styles}/pages/clase-09/06-ejercicio-06-date.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/06-ejercicio-06-date.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
