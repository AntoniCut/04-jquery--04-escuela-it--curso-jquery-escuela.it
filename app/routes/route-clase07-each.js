/*
    *  -------------------------------------------------------------------------  *
    *  -----  /route-clase07-each.js  --  /src/routes/route-clase07-each.js  -----  *
    *  -------------------------------------------------------------------------  *
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
export const routeClase07Each = {
        id: 'clase07Each',
        favicon: favicon,
        pageTitle: 'Clase 7 - 4. Método each() para recorrer elementos',
        path: '/clase07-manipulacion-basica-de-elementos/04-metodo-each-recorrer-elementos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/04-metodo-each-recorrer-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-07/04-metodo-each-recorrer-elementos-description.html`, target: '[data-component-page="metodoEachDescription"]' },
            { url: `${pagesComponents}/clase-07/04-metodo-each-recorrer-elementos-demo.html`, target: '[data-component-page="metodoEachDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-metodo-each-recorrer-elementos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-07/04-metodo-each-recorrer-elementos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-metodo-each-recorrer-elementos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-07/04-metodo-each-recorrer-elementos.css`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-metodo-each-recorrer-elementos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-07/04-metodo-each-recorrer-elementos.js`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 7 - 4. Método each() para recorrer elementos',
        styles: [
            { href: `${styles}/pages/clase-07/04-metodo-each-recorrer-elementos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/04-metodo-each-recorrer-elementos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
