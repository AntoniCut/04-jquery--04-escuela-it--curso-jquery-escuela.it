/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio05.js  --  /src/routes/route-clase09-ejercicio05.js  -----  *
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
export const routeClase09Ejercicio05 = {
        id: 'clase09Ejercicio05',
        favicon: favicon,
        pageTitle: 'Clase 9 - 5. Ejercicio 5',
        path: '/clase09-ejercicio-5',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/05-ejercicio-05.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/05-ejercicio-05-description.html`, target: '[data-component-page="ejercicio05Description"]' },
            { url: `${pagesComponents}/clase-09/05-ejercicio-05-demo.html`, target: '[data-component-page="ejercicio05Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-ejercicio-05-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/05-ejercicio-05-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-ejercicio-05-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/05-ejercicio-05.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-ejercicio-05-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/05-ejercicio-05.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 5. Ejercicio 5',
        styles: [
            { href: `${styles}/pages/clase-09/05-ejercicio-05.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/05-ejercicio-05.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
