/*
    *  -----  /route-clase10-envoltura.js  --  /src/routes/route-clase10-envoltura.js  -----  *
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
export const routeClase10Envoltura = {
        id: 'clase10Envoltura',
        favicon: favicon,
        pageTitle: 'Clase 10 - 4. Envoltura',
        path: '/clase10-manipulacion-avanzada-del-contenido/04-envoltura',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/04-envoltura.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/04-envoltura-description.html`, target: '[data-component-page="envolturaDescription"]' },
            { url: `${pagesComponents}/clase-10/04-envoltura-demo.html`, target: '[data-component-page="envolturaDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-envoltura-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/04-envoltura-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-envoltura-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/04-envoltura.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-envoltura-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/04-envoltura.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 4. Envoltura',
        styles: [
            { href: `${styles}/pages/clase-10/04-envoltura.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/04-envoltura.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
