/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /route-clase20-ajax-post-php.js  --  /src/routes/route-clase20-ajax-post-php.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
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
export const routeClase20AjaxPostPhp = {
        id: 'clase20AjaxPostPhp',
        favicon: favicon,
        pageTitle: 'Clase 20 - Ajax POST PHP',
        path: '/clase20-ajax-low-level/01-ajax-post-php',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-20/01-ajax-post-php.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-20/layout-aside-clase-20.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-20/01-ajax-post-php-description.html`, target: '[data-component-page="ajaxPostPhpDescription"]' },
            { url: `${pagesComponents}/clase-20/01-ajax-post-php-demo.html`, target: '[data-component-page="ajaxPostPhpDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-ajax-post-php-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-20/01-ajax-post-php-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-ajax-post-php-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-20/clase-20-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-ajax-post-php-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-20/01-ajax-post-php.js`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '01-ajax-post-php-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-20/destino.php`,
                urlOutput: `${markdownShikiHtml}/clase-20`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 20 - Ajax POST PHP',
        styles: [
            { href: `${styles}/pages/clase-20/clase-20-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-20/01-ajax-post-php.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
