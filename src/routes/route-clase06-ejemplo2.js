/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase06-ejemplo2.js  --  /src/routes/route-clase06-ejemplo2.js  -----  *
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
export const routeClase06Ejemplo2 = {
        id: 'clase06Ejemplo2',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 2',
        path: '/clase06-primeros-pasos/02-ejemplo2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06/02-ejemplo2.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-06/02-ejemplo2-description.html`, target: '[data-component-page="ejemplo2Description"]' },
            { url: `${pagesComponents}/clase-06/02-ejemplo2-demo.html`, target: '[data-component-page="ejemplo2Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-ejemplo2-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-06/02-ejemplo2-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-ejemplo2-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-06/02-ejemplo2.css`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-ejemplo2-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-06/02-ejemplo2.js`,
                urlOutput: `${markdownShikiHtml}/clase-06`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 2',
        styles: [
            { href: `${styles}/pages/clase-06/02-ejemplo2.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/02-ejemplo2.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
