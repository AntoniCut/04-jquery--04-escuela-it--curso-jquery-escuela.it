/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio01.js  --  /src/routes/route-clase09-ejercicio01.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio01 = {
        id: 'clase09Ejercicio01',
        favicon: favicon,
        pageTitle: 'Clase 9 - 1. Ejercicio 1',
        path: '/clase09-ejercicio-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-09/layout-aside-clase-09.html`,
            "#layoutMain": `${pages}/clase-09/01-ejercicio-01.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/01-ejercicio-01-description.html`, target: '[data-component-page="ejercicio01Description"]' },
            { url: `${pagesComponents}/clase-09/01-ejercicio-01-demo.html`, target: '[data-component-page="ejercicio01Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-ejercicio-01-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/01-ejercicio-01-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-ejercicio-01-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/01-ejercicio-01.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-ejercicio-01-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/01-ejercicio-01.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 1. Ejercicio 1',
        styles: [
            { href: `${styles}/pages/clase-09/01-ejercicio-01.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/01-ejercicio-01.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
