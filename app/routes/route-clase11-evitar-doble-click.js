/*
    *  -----  /route-clase11-evitar-doble-click.js  --  /src/routes/route-clase11-evitar-doble-click.js  -----  *
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
export const routeClase11EvitarDobleClick = {
        id: 'clase11EvitarDobleClick',
        favicon: favicon,
        pageTitle: 'Clase 11 - 6. Evitar Doble Click',
        path: '/clase11-eventos-en-jquery/06-evitar-doble-click',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/06-evitar-doble-click.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-11/06-evitar-doble-click-description.html`, target: '[data-component-page="evitarDobleClickDescription"]' },
            { url: `${pagesComponents}/clase-11/06-evitar-doble-click-demo.html`, target: '[data-component-page="evitarDobleClickDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-evitar-doble-click-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-11/06-evitar-doble-click-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-evitar-doble-click-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-11/06-evitar-doble-click.css`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '06-evitar-doble-click-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-11/06-evitar-doble-click.js`,
                urlOutput: `${markdownShikiHtml}/clase-11`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 11 - 6. Evitar Doble Click',
        styles: [
            { href: `${styles}/pages/clase-11/06-evitar-doble-click.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/06-evitar-doble-click.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
