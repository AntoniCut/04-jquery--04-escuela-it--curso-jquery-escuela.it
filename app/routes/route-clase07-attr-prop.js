/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase07-attr-prop.js  --  /src/routes/route-clase07-attr-prop.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
export const routeClase07AttrProp = {
        id: 'clase07AttrProp',
        favicon: favicon,
        pageTitle: 'Clase 7 - 2. Métodos attr() y prop()',
        path: '/clase07-manipulacion-basica-de-elementos/02-metodos-attr-prop',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/02-metodos-attr-prop.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-07/02-metodos-attr-prop-description.html`, target: '[data-component-page="metodosAttrPropDescription"]' },
            { url: `${pagesComponents}/clase-07/02-metodos-attr-prop-demo.html`, target: '[data-component-page="metodosAttrPropDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-metodos-attr-prop-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-07/02-metodos-attr-prop-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-metodos-attr-prop-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-07/02-metodos-attr-prop.css`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-metodos-attr-prop-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-07/02-metodos-attr-prop.js`,
                urlOutput: `${markdownShikiHtml}/clase-07`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 7 - 2. Métodos attr() y prop()',
        styles: [
            { href: `${styles}/pages/clase-07/02-metodos-attr-prop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/02-metodos-attr-prop.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
