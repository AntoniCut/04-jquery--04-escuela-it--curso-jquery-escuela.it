/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase06-ejemplo1.js  --  /src/routes/route-clase06-ejemplo1.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase06Ejemplo1 = {
        id: 'clase06Ejemplo1',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 1',
        path: '/clase06-primeros-pasos/01-ejemplo1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06/01-ejemplo1.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-06/01-ejemplo1-description.html`, target: '[data-component-page="ejemplo1Description"]' },
            { url: `${pagesComponents}/clase-06/01-ejemplo1-demo.html`, target: '[data-component-page="ejemplo1Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-ejemplo1-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-06/01-ejemplo1-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-ejemplo1-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-06/01-ejemplo1.css`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-ejemplo1-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-06/01-ejemplo1.js`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 1',
        styles: [
            { href: `${styles}/pages/clase-06/01-ejemplo1.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/01-ejemplo1.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
