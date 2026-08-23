/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase23-animaciones-en-bucle-forma-1.js  --  /src/routes/route-clase23-animaciones-en-bucle-forma-1.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase23AnimacionesEnBucleForma1 = {
        id: 'clase23AnimacionesEnBucleForma1',
        favicon: favicon,
        pageTitle: 'Clase 23 - 2. Animaciones en Bucle Forma 1',
        path: '/clase23-dudas-y-conceptos-3/02-animaciones-en-bucle-forma-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-23/02-animaciones-en-bucle-forma-1.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-23/layout-aside-clase-23.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-23/02-animaciones-en-bucle-forma-1-description.html`, target: '[data-component-page="animacionesEnBucleForma1Description"]' },
            { url: `${pagesComponents}/clase-23/02-animaciones-en-bucle-forma-1-demo.html`, target: '[data-component-page="animacionesEnBucleForma1Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-animaciones-en-bucle-forma-1-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-23/02-animaciones-en-bucle-forma-1-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-animaciones-en-bucle-forma-1-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-23/clase-23-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-animaciones-en-bucle-forma-1-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-23/02-animaciones-en-bucle-forma-1.js`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 23 - 2. Animaciones en Bucle Forma 1',
        styles: [
            { href: `${styles}/pages/clase-23/clase-23-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-23/02-animaciones-en-bucle-forma-1.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
