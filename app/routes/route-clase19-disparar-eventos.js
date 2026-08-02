/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-disparar-eventos.js  --  /src/routes/route-clase19-disparar-eventos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase19DispararEventos = {
        id: 'clase19DispararEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Disparar Eventos',
        path: '/clase19-eventos-avanzados/03-disparar-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-19/layout-aside-clase-19.html`,
            "#layoutMain": `${pages}/clase-19/03-disparar-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/03-disparar-eventos-description.html`, target: '[data-component-page="dispararEventosDescription"]' },
            { url: `${pagesComponents}/clase-19/03-disparar-eventos-demo.html`, target: '[data-component-page="dispararEventosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-disparar-eventos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/03-disparar-eventos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-disparar-eventos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/03-disparar-eventos.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '03-disparar-eventos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/03-disparar-eventos.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Disparar Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/03-disparar-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/03-disparar-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
