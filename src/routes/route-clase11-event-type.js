/*
    *  -----  /route-clase11-event-type.js  --  /src/routes/route-clase11-event-type.js  -----  *
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
export const routeClase11EventType = {
        id: 'clase11EventType',
        favicon: favicon,
        pageTitle: 'Clase 11 - 3. Event Type',
        path: '/clase11-eventos-en-jquery/03-event-type',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/03-event-type.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/03-event-type-description.html`, target: '[data-component-page="eventTypeDescription"]' },
            { url: `${pagesComponents}/clase-11/03-event-type-demo.html`, target: '[data-component-page="eventTypeDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-event-type-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/03-event-type-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-event-type-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/03-event-type.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-event-type-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/03-event-type.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 3. Event Type',
        styles: [
            { href: `${styles}/pages/clase-11/03-event-type.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/03-event-type.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
