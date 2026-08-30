/*
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-string-en-javascript.js  --  /src/routes/route-clase24-handlebars-string-en-javascript.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------  *
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
    libs,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase24HandlebarsStringEnJavascript = {
        id: 'clase24HandlebarsStringEnJavascript',
        favicon: favicon,
        pageTitle: 'Clase 24 - 2. Handlebars string en JavaScript',
        path: '/clase24-template-systems/02-handlebars-string-en-javascript',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/02-handlebars-string-en-javascript.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/02-handlebars-string-en-javascript-description.html`, target: '[data-component-page="handlebarsStringEnJavascriptDescription"]' },
            { url: `${pagesComponents}/clase-24/02-handlebars-string-en-javascript-demo.html`, target: '[data-component-page="handlebarsStringEnJavascriptDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-handlebars-string-en-javascript-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/02-handlebars-string-en-javascript-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-handlebars-string-en-javascript-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-handlebars-string-en-javascript-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/02-handlebars-string-en-javascript.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 2. Handlebars string en JavaScript',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/02-handlebars-string-en-javascript.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
