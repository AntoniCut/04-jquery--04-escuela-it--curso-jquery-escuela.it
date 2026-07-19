/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio03.js  --  /src/routes/route-clase17-ejercicio03.js  -----  *
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
export const routeClase17Ejercicio03 = {
        id: 'clase17Ejercicio03',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 03',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-03',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/03-ejercicio-03.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/03-ejercicio-03-description.html`, target: '[data-component-page="ejercicio03Description"]' },
            { url: `${pagesComponents}/clase-17/03-ejercicio-03-demo.html`, target: '[data-component-page="ejercicio03Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-ejercicio-03-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/03-ejercicio-03-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-ejercicio-03-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/03-ejercicio-03.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-ejercicio-03-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/03-ejercicio-03.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 03',
        styles: [
            { href: `${styles}/pages/clase-17/03-ejercicio-03.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/03-ejercicio-03.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
