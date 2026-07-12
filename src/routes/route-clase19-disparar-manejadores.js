/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-disparar-manejadores.js  --  /src/routes/route-clase19-disparar-manejadores.js  -----  *
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
    pages,
    pagesComponents,
    layoutFooter,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase19DispararManejadores = {
        id: 'clase19DispararManejadores',
        favicon: favicon,
        pageTitle: 'Clase 19 - Disparar Manejadores',
        path: '/clase19-eventos-avanzados/04-disparar-manejadores',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/04-disparar-manejadores.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/04-disparar-manejadores-description.html`, target: '[data-component-page="dispararManejadoresDescription"]' },
            { url: `${pagesComponents}/clase-19/04-disparar-manejadores-demo.html`, target: '[data-component-page="dispararManejadoresDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-disparar-manejadores-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/04-disparar-manejadores-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-disparar-manejadores-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/04-disparar-manejadores.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '04-disparar-manejadores-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/04-disparar-manejadores.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Disparar Manejadores',
        styles: [
            { href: `${styles}/pages/clase-19/04-disparar-manejadores.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/04-disparar-manejadores.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
