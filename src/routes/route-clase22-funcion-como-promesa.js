/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase22-funcion-como-promesa.js  --  /src/routes/route-clase22-funcion-como-promesa.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
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
export const routeClase22FuncionComoPromesa = {
        id: 'clase22FuncionComoPromesa',
        favicon: favicon,
        pageTitle: 'Clase 22 - 3. Función como Promesa',
        path: '/clase22-deferred-y-promesas/03-funcion-como-promesa',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-22/03-funcion-como-promesa.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-22/layout-aside-clase-22.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-22/03-funcion-como-promesa-description.html`, target: '[data-component-page="funcionComoPromesaDescription"]' },
            { url: `${pagesComponents}/clase-22/03-funcion-como-promesa-demo.html`, target: '[data-component-page="funcionComoPromesaDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-funcion-como-promesa-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-22/03-funcion-como-promesa-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-funcion-como-promesa-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-22/clase-22-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-funcion-como-promesa-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-22/03-funcion-como-promesa.js`,
                urlOutput: `${markdownShikiHtml}/clase-22`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 22 - 3. Función como Promesa',
        styles: [
            { href: `${styles}/pages/clase-22/clase-22-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-22/03-funcion-como-promesa.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
