/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax-datos.js  --  /src/routes/route-clase16-get-ajax-datos.js  -----  *
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
export const routeClase16GetAjaxDatos = {
        id: 'clase16GetAjaxDatos',
        favicon: favicon,
        pageTitle: 'Clase 16 - 3. Get AJAX Datos',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax-datos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-16/layout-aside-clase-16.html`,
            "#layoutMain": `${pages}/clase-16/03-get-ajax-datos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-16/03-get-ajax-datos-description.html`, target: '[data-component-page="getAjaxDatosDescription"]' },
            { url: `${pagesComponents}/clase-16/03-get-ajax-datos-demo.html`, target: '[data-component-page="getAjaxDatosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-get-ajax-datos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-16/03-get-ajax-datos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-get-ajax-datos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-16/clase-16-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-get-ajax-datos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-16/03-get-ajax-datos.js`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 16 - 3. Get AJAX Datos',
        styles: [
            { href: `${styles}/pages/clase-16/clase-16-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/03-get-ajax-datos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
