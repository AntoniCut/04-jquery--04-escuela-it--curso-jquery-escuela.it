/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase13-animate.js  --  /src/routes/route-clase13-animate.js  -----  *
    *  -----------------------------------------------------------------------------------  *
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
export const routeClase13Animate = {
        id: 'clase13Animate',
        favicon: favicon,
        pageTitle: 'Clase 13 - 2. Animate',
        path: '/clase13-efectos-y-animaciones/animate',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/02-animate.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-13/02-animate-description.html`, target: '[data-component-page="animateDescription"]' },
            { url: `${pagesComponents}/clase-13/02-animate-demo.html`, target: '[data-component-page="animateDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-animate-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-13/02-animate-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-animate-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-13/02-animate.css`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-animate-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-13/02-animate.js`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 13 - 2. Animate',
        styles: [
            { href: `${styles}/pages/clase-13/02-animate.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-13/02-animate.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
