/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio09.js  --  /src/routes/route-clase17-ejercicio09.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
export const routeClase17Ejercicio09 = {
        id: 'clase17Ejercicio09',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 09',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-09',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-17/layout-aside-clase-17.html`,
            "#layoutMain": `${pages}/clase-17/10-ejercicio-09.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/10-ejercicio-09-description.html`, target: '[data-component-page="ejercicio09Description"]' },
            { url: `${pagesComponents}/clase-17/10-ejercicio-09-demo.html`, target: '[data-component-page="ejercicio09Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '10-ejercicio-09-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/10-ejercicio-09-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '10-ejercicio-09-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/10-ejercicio-09.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '10-ejercicio-09-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/10-ejercicio-09.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 09',
        styles: [
            { href: `${styles}/pages/clase-17/10-ejercicio-09.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/10-ejercicio-09.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
