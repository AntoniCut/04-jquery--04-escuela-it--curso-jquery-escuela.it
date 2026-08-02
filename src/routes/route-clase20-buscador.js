/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase20-buscador.js  --  /src/routes/route-clase20-buscador.js  -----  *
    *  -----------------------------------------------------------------------------------  *
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
export const routeClase20Buscador = {
        id: 'clase20Buscador',
        favicon: favicon,
        pageTitle: 'Clase 20 - Buscador',
        path: '/clase20-ajax-low-level/03-buscador',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-20/03-buscador.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-20/layout-aside-clase-20.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-20/03-buscador-description.html`, target: '[data-component-page="buscadorDescription"]' },
            { url: `${pagesComponents}/clase-20/03-buscador-demo.html`, target: '[data-component-page="buscadorDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-buscador-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-20/03-buscador-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-buscador-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-20/clase-20-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-buscador-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-20/03-buscador.js`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '03-buscador-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-20/buscar.php`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 20 - Buscador',
        styles: [
            { href: `${styles}/pages/clase-20/clase-20-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-20/03-buscador.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
