/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase07-data-remove-data.js  --  /src/routes/route-clase07-data-remove-data.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
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
export const routeClase07DataRemoveData = {
        id: 'clase07DataRemoveData',
        favicon: favicon,
        pageTitle: 'Clase 7 - 3. Métodos data() y removeData()',
        path: '/clase07-manipulacion-basica-de-elementos/03-metodos-data-removedata',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-07/layout-aside-clase-07.html`,
            "#layoutMain": `${pages}/clase-07/03-metodos-data-removedata.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-07/03-metodos-data-removedata-description.html`, target: '[data-component-page="metodosDataRemoveDataDescription"]' },
            { url: `${pagesComponents}/clase-07/03-metodos-data-removedata-demo.html`, target: '[data-component-page="metodosDataRemoveDataDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-metodos-data-removedata-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-07/03-metodos-data-removedata-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-metodos-data-removedata-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-07/03-metodos-data-removedata.css`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-metodos-data-removedata-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-07/03-metodos-data-removedata.js`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 7 - 3. Métodos data() y removeData()',
        styles: [
            { href: `${styles}/pages/clase-07/03-metodos-data-removedata.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/03-metodos-data-removedata.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
