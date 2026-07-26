/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase08-probar-selectores.js  --  /src/routes/route-clase08-probar-selectores.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
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
export const routeClase08ProbarSelectores = {
        id: 'clase08ProbarSelectores',
        favicon: favicon,
        pageTitle: 'Clase 8 - 2. Probando Selectores',
        path: '/clase08-selectores-jquery-traversing/02-probar-selectores',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/02-probar-selectores.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-08/02-probar-selectores-description.html`, target: '[data-component-page="probarSelectoresDescription"]' },
            { url: `${pagesComponents}/clase-08/02-probar-selectores-demo.html`, target: '[data-component-page="probarSelectoresDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-probar-selectores-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-08/02-probar-selectores-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-probar-selectores-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-08/02-probar-selectores.css`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-probar-selectores-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-08/02-probar-selectores.js`,
                urlOutput: `${markdownShikiHtml}/clase-08`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 8 - 2. Probando Selectores',
        styles: [
            { href: `${styles}/pages/clase-08/02-probar-selectores.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/02-probar-selectores.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
