/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-encolado-efectos.js  --  /src/routes/route-clase14-encolado-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
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
export const routeClase14EncoladoEfectos = {
        id: 'clase14EncoladoEfectos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 1. Encolado de Efectos',
        path: '/clase14-cola-de-efectos/encolado-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/01-encolado-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-14/01-encolado-efectos-description.html`, target: '[data-component-page="encoladoEfectosDescription"]' },
            { url: `${pagesComponents}/clase-14/01-encolado-efectos-demo.html`, target: '[data-component-page="encoladoEfectosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-encolado-efectos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-14/01-encolado-efectos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-encolado-efectos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-14/01-encolado-efectos.css`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-encolado-efectos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-14/01-encolado-efectos.js`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 14 - 1. Encolado de Efectos',
        styles: [
            { href: `${styles}/pages/clase-14/01-encolado-efectos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/01-encolado-efectos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
