/*
    *  -----  /route-clase11-evento-page-xpage-y.js  --  /src/routes/route-clase11-evento-page-xpage-y.js  -----  *
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
export const routeClase11EventoPageXPageY = {
        id: 'clase11EventoPageXPageY',
        favicon: favicon,
        pageTitle: 'Clase 11 - 7. Evento PageX PageY',
        path: '/clase11-eventos-en-jquery/07-evento-pagex-pagey',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/07-evento-pagex-pagey.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/07-evento-pagex-pagey-description.html`, target: '[data-component-page="eventoPageXPageYDescription"]' },
            { url: `${pagesComponents}/clase-11/07-evento-pagex-pagey-demo.html`, target: '[data-component-page="eventoPageXPageYDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '07-evento-pagex-pagey-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/07-evento-pagex-pagey-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '07-evento-pagex-pagey-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/07-evento-pagex-pagey.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '07-evento-pagex-pagey-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/07-evento-pagex-pagey.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 7. Evento PageX PageY',
        styles: [
            { href: `${styles}/pages/clase-11/07-evento-pagex-pagey.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/07-evento-pagex-pagey.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
