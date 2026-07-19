/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax.js  --  /src/routes/route-clase16-get-ajax.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase16GetAjax = {
        id: 'clase16GetAjax',
        favicon: favicon,
        pageTitle: 'Clase 16 - 2. Get AJAX',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/02-get-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-16/02-get-ajax-description.html`, target: '[data-component-page="getAjaxDescription"]' },
            { url: `${pagesComponents}/clase-16/02-get-ajax-demo.html`, target: '[data-component-page="getAjaxDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-get-ajax-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-16/02-get-ajax-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-get-ajax-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-16/clase-16-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-get-ajax-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-16/02-get-ajax.js`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 16 - 2. Get AJAX',
        styles: [
            { href: `${styles}/pages/clase-16/clase-16-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/02-get-ajax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
