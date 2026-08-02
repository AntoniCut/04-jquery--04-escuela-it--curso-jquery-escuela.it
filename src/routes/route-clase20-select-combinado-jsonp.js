/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase20-select-combinado-jsonp.js  --  /src/routes/route-clase20-select-combinado-jsonp.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase20SelectCombinadoJsonp = {
        id: 'clase20SelectCombinadoJsonp',
        favicon: favicon,
        pageTitle: 'Clase 20 - Select Combinado JSONP',
        path: '/clase20-ajax-low-level/05-select-combinado-jsonp',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-20/05-select-combinado-jsonp.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-20/05-select-combinado-jsonp-description.html`, target: '[data-component-page="selectCombinadoJsonpDescription"]' },
            { url: `${pagesComponents}/clase-20/05-select-combinado-jsonp-demo.html`, target: '[data-component-page="selectCombinadoJsonpDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-select-combinado-jsonp-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-20/05-select-combinado-jsonp-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-select-combinado-jsonp-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-20/clase-20-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-select-combinado-jsonp-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-20/05-select-combinado-jsonp.js`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '05-select-combinado-jsonp-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-20/ciudades-paises-json.php`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 20 - Select Combinado JSONP',
        styles: [
            { href: `${styles}/pages/clase-20/clase-20-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-20/05-select-combinado-jsonp.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
