/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase23-animaciones-en-bucle-forma-2.js  --  /src/routes/route-clase23-animaciones-en-bucle-forma-2.js  -----  *
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
export const routeClase23AnimacionesEnBucleForma2 = {
        id: 'clase23AnimacionesEnBucleForma2',
        favicon: favicon,
        pageTitle: 'Clase 23 - 3. Animaciones en Bucle Forma 2',
        path: '/clase23-dudas-y-conceptos-3/03-animaciones-en-bucle-forma-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-23/03-animaciones-en-bucle-forma-2.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-23/layout-aside-clase-23.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-23/03-animaciones-en-bucle-forma-2-description.html`, target: '[data-component-page="animacionesEnBucleForma2Description"]' },
            { url: `${pagesComponents}/clase-23/03-animaciones-en-bucle-forma-2-demo.html`, target: '[data-component-page="animacionesEnBucleForma2Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-animaciones-en-bucle-forma-2-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-23/03-animaciones-en-bucle-forma-2-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-animaciones-en-bucle-forma-2-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-23/clase-23-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-animaciones-en-bucle-forma-2-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-23/03-animaciones-en-bucle-forma-2.js`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 23 - 3. Animaciones en Bucle Forma 2',
        styles: [
            { href: `${styles}/pages/clase-23/clase-23-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-23/03-animaciones-en-bucle-forma-2.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
