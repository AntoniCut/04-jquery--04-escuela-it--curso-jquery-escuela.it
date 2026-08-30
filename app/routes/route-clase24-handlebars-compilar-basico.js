/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-compilar-basico.js  --  /src/routes/route-clase24-handlebars-compilar-basico.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase24HandlebarsCompilarBasico = {
        id: 'clase24HandlebarsCompilarBasico',
        favicon: favicon,
        pageTitle: 'Clase 24 - 1. Handlebars compilar básico',
        path: '/clase24-template-systems/01-handlebars-compilar-basico',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/01-handlebars-compilar-basico.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/01-handlebars-compilar-basico-description.html`, target: '[data-component-page="handlebarsCompilarBasicoDescription"]' },
            { url: `${pagesComponents}/clase-24/01-handlebars-compilar-basico-demo.html`, target: '[data-component-page="handlebarsCompilarBasicoDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-handlebars-compilar-basico-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/01-handlebars-compilar-basico-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-handlebars-compilar-basico-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-handlebars-compilar-basico-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/01-handlebars-compilar-basico.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 1. Handlebars compilar básico',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/01-handlebars-compilar-basico.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
