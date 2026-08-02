/*
    *  -----  /route-clase10-scroll-offset.js  --  /src/routes/route-clase10-scroll-offset.js  -----  *
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
export const routeClase10ScrollOffset = {
        id: 'clase10ScrollOffset',
        favicon: favicon,
        pageTitle: 'Clase 10 - 6. Scroll / Offset',
        path: '/clase10-manipulacion-avanzada-del-contenido/06-scroll-offset',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/06-scroll-offset.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/06-scroll-offset-description.html`, target: '[data-component-page="scrollOffsetDescription"]' },
            { url: `${pagesComponents}/clase-10/06-scroll-offset-demo.html`, target: '[data-component-page="scrollOffsetDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-scroll-offset-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/06-scroll-offset-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-scroll-offset-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/06-scroll-offset.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-scroll-offset-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/06-scroll-offset.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 6. Scroll / Offset',
        styles: [
            { href: `${styles}/pages/clase-10/06-scroll-offset.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/06-scroll-offset.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
