/*
    *  -----  /route-clase11-prevent-default.js  --  /src/routes/route-clase11-prevent-default.js  -----  *
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
export const routeClase11PreventDefault = {
        id: 'clase11PreventDefault',
        favicon: favicon,
        pageTitle: 'Clase 11 - 4. Prevent Default',
        path: '/clase11-eventos-en-jquery/04-prevent-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-11/layout-aside-clase-11.html`,
            "#layoutMain": `${pages}/clase-11/04-prevent-default.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/04-prevent-default-description.html`, target: '[data-component-page="preventDefaultDescription"]' },
            { url: `${pagesComponents}/clase-11/04-prevent-default-demo.html`, target: '[data-component-page="preventDefaultDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-prevent-default-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/04-prevent-default-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-prevent-default-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/04-prevent-default.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-prevent-default-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/04-prevent-default.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 4. Prevent Default',
        styles: [
            { href: `${styles}/pages/clase-11/04-prevent-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/04-prevent-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
