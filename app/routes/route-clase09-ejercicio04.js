/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio04.js  --  /src/routes/route-clase09-ejercicio04.js  -----  *
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
export const routeClase09Ejercicio04 = {
        id: 'clase09Ejercicio04',
        favicon: favicon,
        pageTitle: 'Clase 9 - 4. Ejercicio 4',
        path: '/clase09-ejercicio-4',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-09/layout-aside-clase-09.html`,
            "#layoutMain": `${pages}/clase-09/04-ejercicio-04.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/04-ejercicio-04-description.html`, target: '[data-component-page="ejercicio04Description"]' },
            { url: `${pagesComponents}/clase-09/04-ejercicio-04-demo.html`, target: '[data-component-page="ejercicio04Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-ejercicio-04-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/04-ejercicio-04-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-ejercicio-04-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/04-ejercicio-04.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-ejercicio-04-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/04-ejercicio-04.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 4. Ejercicio 4',
        styles: [
            { href: `${styles}/pages/clase-09/04-ejercicio-04.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/04-ejercicio-04.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
