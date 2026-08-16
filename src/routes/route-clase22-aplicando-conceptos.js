/*
    *  ---------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase22-aplicando-conceptos.js  --  /src/routes/route-clase22-aplicando-conceptos.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------  *
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
    services,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase22AplicandoConceptos = {
        id: 'clase22AplicandoConceptos',
        favicon: favicon,
        pageTitle: 'Clase 22 - 4. Aplicando conceptos',
        path: '/clase22-deferred-y-promesas/04-aplicando-conceptos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-22/04-aplicando-conceptos.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-22/layout-aside-clase-22.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-22/04-aplicando-conceptos-description.html`, target: '[data-component-page="aplicandoConceptosDescription"]' },
            { url: `${pagesComponents}/clase-22/04-aplicando-conceptos-demo.html`, target: '[data-component-page="aplicandoConceptosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-aplicando-conceptos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-22/04-aplicando-conceptos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-aplicando-conceptos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-22/clase-22-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-aplicando-conceptos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-22/04-aplicando-conceptos.js`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '04-aplicando-conceptos-demo-partial-01-html.html',
                fileExtension: 'html',
                urlInput: `${services}/clase-22/_partial-01.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codePartial01"]',
            },
            {
                fileName: '04-aplicando-conceptos-demo-partial-02-html.html',
                fileExtension: 'html',
                urlInput: `${services}/clase-22/_partial-02.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codePartial02"]',
            },
        ],
        headerTitle: 'Clase 22 - 4. Aplicando conceptos',
        styles: [
            { href: `${styles}/pages/clase-22/clase-22-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-22/04-aplicando-conceptos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
