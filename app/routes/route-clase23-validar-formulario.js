/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase23-validar-formulario.js  --  /src/routes/route-clase23-validar-formulario.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
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
export const routeClase23ValidarFormulario = {
        id: 'clase23ValidarFormulario',
        favicon: favicon,
        pageTitle: 'Clase 23 - 1. Validar Formulario',
        path: '/clase23-dudas-y-conceptos-3/01-validar-formulario',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-23/01-validar-formulario.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-23/layout-aside-clase-23.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-23/01-validar-formulario-description.html`, target: '[data-component-page="validarFormularioDescription"]' },
            { url: `${pagesComponents}/clase-23/01-validar-formulario-demo.html`, target: '[data-component-page="validarFormularioDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-validar-formulario-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-23/01-validar-formulario-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-validar-formulario-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-23/clase-23-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-validar-formulario-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-23/01-validar-formulario.js`,
                urlOutput: `${markdownShikiHtml}/clase-23`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 23 - 1. Validar Formulario',
        styles: [
            { href: `${styles}/pages/clase-23/clase-23-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-23/01-validar-formulario.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
