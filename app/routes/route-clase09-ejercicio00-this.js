/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio00-this.js  --  /src/routes/route-clase09-ejercicio00-this.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio00This = {
        id: 'clase09Ejercicio00This',
        favicon: favicon,
        pageTitle: 'Clase 9 - Ejercicio 0 con THIS',
        path: '/clase09-ejercicio-0-this',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-09/layout-aside-clase-09.html`,
            "#layoutMain": `${pages}/clase-09/00-ejercicio-00-this.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-09/00-ejercicio-00-this-description.html`, target: '[data-component-page="ejercicio00ThisDescription"]' },
            { url: `${pagesComponents}/clase-09/00-ejercicio-00-this-demo.html`, target: '[data-component-page="ejercicio00ThisDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-ejercicio-00-this-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-09/00-ejercicio-00-this-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-ejercicio-00-this-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-09/00-ejercicio-00-this.css`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '00-ejercicio-00-this-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-09/00-ejercicio-00-this.js`,
                urlOutput: `${markdownShikiHtml}/clase-09`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 9 - 0. Ejercicio 0 con THIS',
        styles: [
            { href: `${styles}/pages/clase-09/00-ejercicio-00-this.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/00-ejercicio-00-this.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
