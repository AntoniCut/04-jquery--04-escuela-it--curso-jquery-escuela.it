/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-delegacion-eventos.js  --  /src/routes/route-clase19-delegacion-eventos.js  -----  *
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
export const routeClase19DelegacionEventos = {
        id: 'clase19DelegacionEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Delegacion Eventos',
        path: '/clase19-eventos-avanzados/01-delegacion-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/01-delegacion-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/01-delegacion-eventos-description.html`, target: '[data-component-page="delegacionEventosDescription"]' },
            { url: `${pagesComponents}/clase-19/01-delegacion-eventos-demo.html`, target: '[data-component-page="delegacionEventosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-delegacion-eventos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/01-delegacion-eventos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-delegacion-eventos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/01-delegacion-eventos.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '01-delegacion-eventos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/01-delegacion-eventos.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Delegacion Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/01-delegacion-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/01-delegacion-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
