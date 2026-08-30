/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-jquery-generar-dom.js  --  /src/routes/route-clase24-jquery-generar-dom.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
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
export const routeClase24JqueryGenerarDom = {
        id: 'clase24JqueryGenerarDom',
        favicon: favicon,
        pageTitle: 'Clase 24 - 4. jQuery generar DOM',
        path: '/clase24-template-systems/04-jquery-generar-dom',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/04-jquery-generar-dom.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/04-jquery-generar-dom-description.html`, target: '[data-component-page="jqueryGenerarDomDescription"]' },
            { url: `${pagesComponents}/clase-24/04-jquery-generar-dom-demo.html`, target: '[data-component-page="jqueryGenerarDomDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-jquery-generar-dom-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/04-jquery-generar-dom-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-jquery-generar-dom-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-jquery-generar-dom-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/04-jquery-generar-dom.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 4. jQuery generar DOM',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-24/04-jquery-generar-dom.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
