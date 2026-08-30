/*
    *  -------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-built-in-helpers.js  --  /src/routes/route-clase24-handlebars-built-in-helpers.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase24HandlebarsBuiltInHelpers = {
        id: 'clase24HandlebarsBuiltInHelpers',
        favicon: favicon,
        pageTitle: 'Clase 24 - 8. Handlebars built-in helpers',
        path: '/clase24-template-systems/08-handlebars-built-in-helpers',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/08-handlebars-built-in-helpers.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/08-handlebars-built-in-helpers-description.html`, target: '[data-component-page="handlebarsBuiltInHelpersDescription"]' },
            { url: `${pagesComponents}/clase-24/08-handlebars-built-in-helpers-demo.html`, target: '[data-component-page="handlebarsBuiltInHelpersDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '08-handlebars-built-in-helpers-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/08-handlebars-built-in-helpers-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '08-handlebars-built-in-helpers-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '08-handlebars-built-in-helpers-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/08-handlebars-built-in-helpers.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 8. Handlebars built-in helpers',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/handlebars-helpers.js` },
            { src: `${scripts}/clase-24/08-handlebars-built-in-helpers.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
