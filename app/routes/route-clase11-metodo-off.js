/*
    *  -----  /route-clase11-metodo-off.js  --  /src/routes/route-clase11-metodo-off.js  -----  *
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
export const routeClase11MetodoOff = {
        id: 'clase11MetodoOff',
        favicon: favicon,
        pageTitle: 'Clase 11 - 2. Método off()',
        path: '/clase11-eventos-en-jquery/02-metodo-off',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/02-metodo-off.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/02-metodo-off-description.html`, target: '[data-component-page="metodoOffDescription"]' },
            { url: `${pagesComponents}/clase-11/02-metodo-off-demo.html`, target: '[data-component-page="metodoOffDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-metodo-off-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/02-metodo-off-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-metodo-off-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/02-metodo-off.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-metodo-off-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/02-metodo-off.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 2. Método off()',
        styles: [
            { href: `${styles}/pages/clase-11/02-metodo-off.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/02-metodo-off.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
