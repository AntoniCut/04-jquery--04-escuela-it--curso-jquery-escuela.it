/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio10-paralax.js  --  /src/routes/route-clase17-ejercicio10-paralax.js  -----  *
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
export const routeClase17Ejercicio10Paralax = {
        id: 'clase17Ejercicio10Paralax',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 10 Paralax',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-10-paralax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/12-ejercicio-10-paralax.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-17/12-ejercicio-10-paralax-description.html`, target: '[data-component-page="ejercicio10ParalaxDescription"]' },
            { url: `${pagesComponents}/clase-17/12-ejercicio-10-paralax-demo.html`, target: '[data-component-page="ejercicio10ParalaxDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '12-ejercicio-10-paralax-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-17/12-ejercicio-10-paralax-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '12-ejercicio-10-paralax-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-17/12-ejercicio-10-paralax.css`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '12-ejercicio-10-paralax-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-17/12-ejercicio-10-paralax.js`,
                urlOutput: `${markdownShikiHtml}/clase-17`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 17 - Ejercicio 10 Paralax',
        styles: [
            { href: `${styles}/pages/clase-17/12-ejercicio-10-paralax.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/12-ejercicio-10-paralax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
