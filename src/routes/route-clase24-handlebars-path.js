/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-path.js  --  /src/routes/route-clase24-handlebars-path.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase24HandlebarsPath = {
        id: 'clase24HandlebarsPath',
        favicon: favicon,
        pageTitle: 'Clase 24 - 7. Handlebars path',
        path: '/clase24-template-systems/07-handlebars-path',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/07-handlebars-path.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/07-handlebars-path-description.html`, target: '[data-component-page="handlebarsPathDescription"]' },
            { url: `${pagesComponents}/clase-24/07-handlebars-path-demo.html`, target: '[data-component-page="handlebarsPathDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '07-handlebars-path-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/07-handlebars-path-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '07-handlebars-path-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '07-handlebars-path-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/07-handlebars-path.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 7. Handlebars path',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/handlebars-helpers.js` },
            { src: `${scripts}/clase-24/07-handlebars-path.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
