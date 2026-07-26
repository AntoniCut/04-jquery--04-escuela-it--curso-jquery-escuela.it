/*
    *  -----  /route-clase11-stop-propagation.js  --  /src/routes/route-clase11-stop-propagation.js  -----  *
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
export const routeClase11StopPropagation = {
        id: 'clase11StopPropagation',
        favicon: favicon,
        pageTitle: 'Clase 11 - 5. Stop Propagation',
        path: '/clase11-eventos-en-jquery/05-stop-propagation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/05-stop-propagation.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/05-stop-propagation-description.html`, target: '[data-component-page="stopPropagationDescription"]' },
            { url: `${pagesComponents}/clase-11/05-stop-propagation-demo.html`, target: '[data-component-page="stopPropagationDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-stop-propagation-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/05-stop-propagation-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-stop-propagation-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/05-stop-propagation.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-stop-propagation-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/05-stop-propagation.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 5. Stop Propagation',
        styles: [
            { href: `${styles}/pages/clase-11/05-stop-propagation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/05-stop-propagation.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
