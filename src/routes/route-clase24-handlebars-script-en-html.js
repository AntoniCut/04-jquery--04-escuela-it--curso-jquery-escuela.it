/*
    *  ---------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-script-en-html.js  --  /src/routes/route-clase24-handlebars-script-en-html.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase24HandlebarsScriptEnHtml = {
        id: 'clase24HandlebarsScriptEnHtml',
        favicon: favicon,
        pageTitle: 'Clase 24 - 3. Handlebars script en HTML',
        path: '/clase24-template-systems/03-handlebars-script-en-html',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/03-handlebars-script-en-html.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/03-handlebars-script-en-html-description.html`, target: '[data-component-page="handlebarsScriptEnHtmlDescription"]' },
            { url: `${pagesComponents}/clase-24/03-handlebars-script-en-html-demo.html`, target: '[data-component-page="handlebarsScriptEnHtmlDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-handlebars-script-en-html-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/03-handlebars-script-en-html-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-handlebars-script-en-html-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-handlebars-script-en-html-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/03-handlebars-script-en-html.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 3. Handlebars script en HTML',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/03-handlebars-script-en-html.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
