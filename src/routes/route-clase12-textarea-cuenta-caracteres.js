/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase12-textarea-cuenta-caracteres.js  --  /src/routes/route-clase12-textarea-cuenta-caracteres.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase12TextareaCuentaCaracteres = {
        id: 'clase12TextareaCuentaCaracteres',
        favicon: favicon,
        pageTitle: 'Clase 12 - 3. Textarea con Cuenta de Caracteres',
        path: '/clase12-eventos-teclado-raton/03-textarea-cuenta-caracteres',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-12/layout-aside-clase-12.html`,
            "#layoutMain": `${pages}/clase-12/03-textarea-cuenta-caracteres.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-12/03-textarea-cuenta-caracteres-description.html`, target: '[data-component-page="textareaCuentaCaracteresDescription"]' },
            { url: `${pagesComponents}/clase-12/03-textarea-cuenta-caracteres-demo.html`, target: '[data-component-page="textareaCuentaCaracteresDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-textarea-cuenta-caracteres-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-12/03-textarea-cuenta-caracteres-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-textarea-cuenta-caracteres-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-12/03-textarea-cuenta-caracteres.css`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-textarea-cuenta-caracteres-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-12/03-textarea-cuenta-caracteres.js`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 12 - 3. Textarea con Cuenta de Caracteres',
        styles: [
            { href: `${styles}/pages/clase-12/03-textarea-cuenta-caracteres.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/03-textarea-cuenta-caracteres.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
