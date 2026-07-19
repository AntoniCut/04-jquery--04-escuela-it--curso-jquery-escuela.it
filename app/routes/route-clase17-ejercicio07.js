/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio07.js  --  /src/routes/route-clase17-ejercicio07.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase17Ejercicio07 = {
        id: 'clase17Ejercicio07',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 07',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-07',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/08-ejercicio-07.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/08-ejercicio-07-description.html`, target: '[data-component-page="ejercicio07Description"]' },
            { url: `${pagesComponents}/clase-17/08-ejercicio-07-demo.html`, target: '[data-component-page="ejercicio07Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '08-ejercicio-07-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/08-ejercicio-07-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '08-ejercicio-07-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/08-ejercicio-07.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '08-ejercicio-07-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/08-ejercicio-07.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 07',
        styles: [
            { href: `${styles}/pages/clase-17/08-ejercicio-07.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/08-ejercicio-07.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
