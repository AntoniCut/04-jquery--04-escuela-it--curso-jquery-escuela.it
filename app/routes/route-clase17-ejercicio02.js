/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio02.js  --  /src/routes/route-clase17-ejercicio02.js  -----  *
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
export const routeClase17Ejercicio02 = {
        id: 'clase17Ejercicio02',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 02',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-02',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-17/layout-aside-clase-17.html`,
            "#layoutMain": `${pages}/clase-17/02-ejercicio-02.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/02-ejercicio-02-description.html`, target: '[data-component-page="ejercicio02Description"]' },
            { url: `${pagesComponents}/clase-17/02-ejercicio-02-demo.html`, target: '[data-component-page="ejercicio02Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-ejercicio-02-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/02-ejercicio-02-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-ejercicio-02-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/02-ejercicio-02.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-ejercicio-02-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/02-ejercicio-02.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 02',
        styles: [
            { href: `${styles}/pages/clase-17/02-ejercicio-02.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/02-ejercicio-02.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
