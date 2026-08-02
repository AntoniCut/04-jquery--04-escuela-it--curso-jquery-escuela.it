/*
    *  -----  /route-clase10-dom.js  --  /src/routes/route-clase10-dom.js  -----  *
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
export const routeClase10Dom = {
        id: 'clase10Dom',
        favicon: favicon,
        pageTitle: 'Clase 10 - 3. Inyección DOM',
        path: '/clase10-manipulacion-avanzada-del-contenido/03-inyeccion-dom',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/03-inyeccion-dom.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-10/03-inyeccion-dom-description.html`, target: '[data-component-page="inyeccionDomDescription"]' },
            { url: `${pagesComponents}/clase-10/03-inyeccion-dom-demo.html`, target: '[data-component-page="inyeccionDomDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-inyeccion-dom-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-10/03-inyeccion-dom-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-inyeccion-dom-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-10/03-inyeccion-dom.css`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-inyeccion-dom-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-10/03-inyeccion-dom.js`,
                urlOutput: `${markdownShikiHtml}/clase-10`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 10 - 3. Inyección DOM',
        styles: [
            { href: `${styles}/pages/clase-10/03-inyeccion-dom.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/03-inyeccion-dom.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
