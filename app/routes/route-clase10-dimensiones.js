/*
    *  -----  /route-clase10-dimensiones.js  --  /src/routes/route-clase10-dimensiones.js  -----  *
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
export const routeClase10Dimensiones = {
        id: 'clase10Dimensiones',
        favicon: favicon,
        pageTitle: 'Clase 10 - 5. Dimensiones',
        path: '/clase10-manipulacion-avanzada-del-contenido/05-dimensiones',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/05-dimensiones.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/05-dimensiones-description.html`, target: '[data-component-page="dimensionesDescription"]' },
            { url: `${pagesComponents}/clase-10/05-dimensiones-demo.html`, target: '[data-component-page="dimensionesDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-dimensiones-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/05-dimensiones-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-dimensiones-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/05-dimensiones.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-dimensiones-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/05-dimensiones.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 5. Dimensiones',
        styles: [
            { href: `${styles}/pages/clase-10/05-dimensiones.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/05-dimensiones.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
