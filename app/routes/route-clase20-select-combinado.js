/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase20-select-combinado.js  --  /src/routes/route-clase20-select-combinado.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase20SelectCombinado = {
        id: 'clase20SelectCombinado',
        favicon: favicon,
        pageTitle: 'Clase 20 - Select Combinado',
        path: '/clase20-ajax-low-level/04-select-combinado',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-20/04-select-combinado.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-20/layout-aside-clase-20.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-20/04-select-combinado-description.html`, target: '[data-component-page="selectCombinadoDescription"]' },
            { url: `${pagesComponents}/clase-20/04-select-combinado-demo.html`, target: '[data-component-page="selectCombinadoDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-select-combinado-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-20/04-select-combinado-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-select-combinado-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-20/clase-20-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-select-combinado-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-20/04-select-combinado.js`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '04-select-combinado-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-20/ciudades-paises-json.php`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 20 - Select Combinado',
        styles: [
            { href: `${styles}/pages/clase-20/clase-20-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-20/04-select-combinado.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
