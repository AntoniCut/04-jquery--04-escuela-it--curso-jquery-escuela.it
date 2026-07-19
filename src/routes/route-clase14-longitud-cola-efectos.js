/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-longitud-cola-efectos.js  --  /src/routes/route-clase14-longitud-cola-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase14LongitudColaEfectos = {
        id: 'clase14LongitudColaEfectos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 3. Longitud Cola Efectos',
        path: '/clase14-cola-de-efectos/longitud-cola-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/03-longitud-cola-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-14/03-longitud-cola-efectos-description.html`, target: '[data-component-page="longitudColaEfectosDescription"]' },
            { url: `${pagesComponents}/clase-14/03-longitud-cola-efectos-demo.html`, target: '[data-component-page="longitudColaEfectosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-longitud-cola-efectos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-14/03-longitud-cola-efectos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-longitud-cola-efectos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-14/03-longitud-cola-efectos.css`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-longitud-cola-efectos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-14/03-longitud-cola-efectos.js`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 14 - 3. Longitud Cola Efectos',
        styles: [
            { href: `${styles}/pages/clase-14/03-longitud-cola-efectos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/03-longitud-cola-efectos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
