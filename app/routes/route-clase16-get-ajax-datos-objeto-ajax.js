/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax-datos-objeto-ajax.js  --  /src/routes/route-clase16-get-ajax-datos-objeto-ajax.js  -----  *
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
export const routeClase16GetAjaxDatosObjetoAjax = {
        id: 'clase16GetAjaxDatosObjetoAjax',
        favicon: favicon,
        pageTitle: 'Clase 16 - 4. Get AJAX Datos Objeto AJAX',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax-datos-objeto-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-16/layout-aside-clase-16.html`,
            "#layoutMain": `${pages}/clase-16/04-get-ajax-datos-objeto-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-16/04-get-ajax-datos-objeto-ajax-description.html`, target: '[data-component-page="getAjaxDatosObjetoAjaxDescription"]' },
            { url: `${pagesComponents}/clase-16/04-get-ajax-datos-objeto-ajax-demo.html`, target: '[data-component-page="getAjaxDatosObjetoAjaxDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-get-ajax-datos-objeto-ajax-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-16/04-get-ajax-datos-objeto-ajax-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-get-ajax-datos-objeto-ajax-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-16/clase-16-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-get-ajax-datos-objeto-ajax-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-16/04-get-ajax-datos-objeto-ajax.js`,
                urlOutput: `${markdownShikiHtml}/clase-16`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 16 - 4. Get AJAX Datos Objeto AJAX',
        styles: [
            { href: `${styles}/pages/clase-16/clase-16-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/04-get-ajax-datos-objeto-ajax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
