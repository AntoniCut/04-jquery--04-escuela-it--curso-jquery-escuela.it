/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase20-ajax-load-scripts.js  --  /src/routes/route-clase20-ajax-load-scripts.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
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
export const routeClase20AjaxLoadScripts = {
        id: 'clase20AjaxLoadScripts',
        favicon: favicon,
        pageTitle: 'Clase 20 - Ajax Load Scripts',
        path: '/clase20-ajax-low-level/02-ajax-load-scripts',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-20/02-ajax-load-scripts.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-20/02-ajax-load-scripts-description.html`, target: '[data-component-page="ajaxLoadScriptsDescription"]' },
            { url: `${pagesComponents}/clase-20/02-ajax-load-scripts-demo.html`, target: '[data-component-page="ajaxLoadScriptsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-ajax-load-scripts-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-20/02-ajax-load-scripts-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-ajax-load-scripts-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-20/clase-20-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-ajax-load-scripts-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-20/02-ajax-load-scripts.js`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 20 - Ajax Load Scripts',
        styles: [
            { href: `${styles}/pages/clase-20/clase-20-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-20/02-ajax-load-scripts.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
