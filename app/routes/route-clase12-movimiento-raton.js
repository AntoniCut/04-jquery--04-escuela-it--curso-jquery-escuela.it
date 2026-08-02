/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase12-movimiento-raton.js  --  /src/routes/route-clase12-movimiento-raton.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase12MovimientoRaton = {
        id: 'clase12MovimientoRaton',
        favicon: favicon,
        pageTitle: 'Clase 12 - 1. Seguir Movimiento del Ratón',
        path: '/clase12-eventos-teclado-raton/01-seguir-movimiento-del-raton',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-12/layout-aside-clase-12.html`,
            "#layoutMain": `${pages}/clase-12/01-seguir-movimiento-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-12/01-seguir-movimiento-raton-description.html`, target: '[data-component-page="seguirMovimientoRatonDescription"]' },
            { url: `${pagesComponents}/clase-12/01-seguir-movimiento-raton-demo.html`, target: '[data-component-page="seguirMovimientoRatonDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-seguir-movimiento-raton-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-12/01-seguir-movimiento-raton-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-seguir-movimiento-raton-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-12/01-seguir-movimiento-raton.css`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-seguir-movimiento-raton-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-12/01-seguir-movimiento-raton.js`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 12 - 1. Seguir Movimiento del Ratón',
        styles: [
            { href: `${styles}/pages/clase-12/01-seguir-movimiento-raton.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/01-seguir-movimiento-raton.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
