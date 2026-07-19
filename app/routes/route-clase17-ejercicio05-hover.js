/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio05-hover.js  --  /src/routes/route-clase17-ejercicio05-hover.js  -----  *
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
export const routeClase17Ejercicio05Hover = {
        id: 'clase17Ejercicio05Hover',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 05 Hover',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-05-hover',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/06-ejercicio-05-hover.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/06-ejercicio-05-hover-description.html`, target: '[data-component-page="ejercicio05HoverDescription"]' },
            { url: `${pagesComponents}/clase-17/06-ejercicio-05-hover-demo.html`, target: '[data-component-page="ejercicio05HoverDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-ejercicio-05-hover-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/06-ejercicio-05-hover-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-ejercicio-05-hover-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/06-ejercicio-05-hover.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-ejercicio-05-hover-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/06-ejercicio-05-hover.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 05 Hover',
        styles: [
            { href: `${styles}/pages/clase-17/06-ejercicio-05-hover.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/06-ejercicio-05-hover.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
