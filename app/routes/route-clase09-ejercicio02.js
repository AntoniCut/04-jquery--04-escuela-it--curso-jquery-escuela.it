/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio02.js  --  /src/routes/route-clase09-ejercicio02.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase09Ejercicio02 = {
        id: 'clase09Ejercicio02',
        favicon: favicon,
        pageTitle: 'Clase 9 - 2. Ejercicio 2',
        path: '/clase09-ejercicio-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/02-ejercicio-02.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/02-ejercicio-02-description.html`, target: '[data-component-page="ejercicio02Description"]' },
            { url: `${pagesComponents}/clase-09/02-ejercicio-02-demo.html`, target: '[data-component-page="ejercicio02Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-ejercicio-02-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/02-ejercicio-02-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-ejercicio-02-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/02-ejercicio-02.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-ejercicio-02-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/02-ejercicio-02.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 2. Ejercicio 2',
        styles: [
            { href: `${styles}/pages/clase-09/02-ejercicio-02.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/02-ejercicio-02.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
