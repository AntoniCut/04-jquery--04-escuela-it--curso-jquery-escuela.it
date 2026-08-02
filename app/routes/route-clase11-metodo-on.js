/*
    *  -----  /route-clase11-metodo-on.js  --  /src/routes/route-clase11-metodo-on.js  -----  *
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
export const routeClase11MetodoOn = {
        id: 'clase11MetodoOn',
        favicon: favicon,
        pageTitle: 'Clase 11 - 1. Método on()',
        path: '/clase11-eventos-en-jquery/01-metodo-on',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-11/layout-aside-clase-11.html`,
            "#layoutMain": `${pages}/clase-11/01-metodo-on.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/01-metodo-on-description.html`, target: '[data-component-page="metodoOnDescription"]' },
            { url: `${pagesComponents}/clase-11/01-metodo-on-demo.html`, target: '[data-component-page="metodoOnDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-metodo-on-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/01-metodo-on-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-metodo-on-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/01-metodo-on.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-metodo-on-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/01-metodo-on.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 1. Método on()',
        styles: [
            { href: `${styles}/pages/clase-11/01-metodo-on.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/01-metodo-on.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
