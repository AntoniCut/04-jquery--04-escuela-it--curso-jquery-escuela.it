/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-block-expressions.js  --  /src/routes/route-clase24-handlebars-block-expressions.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase24HandlebarsBlockExpressions = {
        id: 'clase24HandlebarsBlockExpressions',
        favicon: favicon,
        pageTitle: 'Clase 24 - 6. Handlebars block expressions',
        path: '/clase24-template-systems/06-handlebars-block-expressions',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/06-handlebars-block-expressions.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/06-handlebars-block-expressions-description.html`, target: '[data-component-page="handlebarsBlockExpressionsDescription"]' },
            { url: `${pagesComponents}/clase-24/06-handlebars-block-expressions-demo.html`, target: '[data-component-page="handlebarsBlockExpressionsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-handlebars-block-expressions-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/06-handlebars-block-expressions-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-handlebars-block-expressions-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-handlebars-block-expressions-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/06-handlebars-block-expressions.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 6. Handlebars block expressions',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/handlebars-helpers.js` },
            { src: `${scripts}/clase-24/06-handlebars-block-expressions.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
