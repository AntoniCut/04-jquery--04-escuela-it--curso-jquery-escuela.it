/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio06.js  --  /src/routes/route-clase17-ejercicio06.js  -----  *
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
export const routeClase17Ejercicio06 = {
        id: 'clase17Ejercicio06',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 06',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-06',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-17/layout-aside-clase-17.html`,
            "#layoutMain": `${pages}/clase-17/07-ejercicio-06.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/07-ejercicio-06-description.html`, target: '[data-component-page="ejercicio06Description"]' },
            { url: `${pagesComponents}/clase-17/07-ejercicio-06-demo.html`, target: '[data-component-page="ejercicio06Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '07-ejercicio-06-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/07-ejercicio-06-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '07-ejercicio-06-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/07-ejercicio-06.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '07-ejercicio-06-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/07-ejercicio-06.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 06',
        styles: [
            { href: `${styles}/pages/clase-17/07-ejercicio-06.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/07-ejercicio-06.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
