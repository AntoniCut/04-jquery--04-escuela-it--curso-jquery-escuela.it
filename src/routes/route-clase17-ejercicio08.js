/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio08.js  --  /src/routes/route-clase17-ejercicio08.js  -----  *
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
export const routeClase17Ejercicio08 = {
        id: 'clase17Ejercicio08',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 08',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-08',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/09-ejercicio-08.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/09-ejercicio-08-description.html`, target: '[data-component-page="ejercicio08Description"]' },
            { url: `${pagesComponents}/clase-17/09-ejercicio-08-demo.html`, target: '[data-component-page="ejercicio08Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '09-ejercicio-08-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/09-ejercicio-08-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '09-ejercicio-08-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/09-ejercicio-08.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '09-ejercicio-08-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/09-ejercicio-08.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 08',
        styles: [
            { href: `${styles}/pages/clase-17/09-ejercicio-08.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/09-ejercicio-08.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
