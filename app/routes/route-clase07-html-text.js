/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase07-html-text.js  --  /src/routes/route-clase07-html-text.js  -----  *
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
export const routeClase07HtmlText = {
        id: 'clase07HtmlText',
        favicon: favicon,
        pageTitle: 'Clase 7 - 1. Métodos html() y text()',
        path: '/clase07-manipulacion-basica-de-elementos/01-metodos-html-text',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-07/layout-aside-clase-07.html`,
            "#layoutMain": `${pages}/clase-07/01-metodos-html-text.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-07/01-metodos-html-text-description.html`, target: '[data-component-page="metodosHtmlTextDescription"]' },
            { url: `${pagesComponents}/clase-07/01-metodos-html-text-demo.html`, target: '[data-component-page="metodosHtmlTextDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-metodos-html-text-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-07/01-metodos-html-text-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-metodos-html-text-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-07/01-metodos-html-text.css`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-metodos-html-text-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-07/01-metodos-html-text.js`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 7 - 1. Métodos html() y text()',
        styles: [
            { href: `${styles}/pages/clase-07/01-metodos-html-text.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/01-metodos-html-text.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
