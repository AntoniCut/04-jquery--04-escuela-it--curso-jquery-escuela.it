/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase21-formulario-login.js  --  /src/routes/route-clase21-formulario-login.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase21FormularioLogin = {
        id: 'clase21FormularioLogin',
        favicon: favicon,
        pageTitle: 'Clase 21 - Formulario Login',
        path: '/clase21-practica-1-formulario-login/01-formulario-login',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-21/01-formulario-login.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-21/layout-aside-clase-21.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-21/01-formulario-login-description.html`, target: '[data-component-page="formularioLoginDescription"]' },
            { url: `${pagesComponents}/clase-21/01-formulario-login-demo.html`, target: '[data-component-page="formularioLoginDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '01-formulario-login-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-21/01-formulario-login-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '01-formulario-login-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-21/clase-21-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '01-formulario-login-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-21/01-formulario-login.js`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '01-formulario-login-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-21/login.php`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codePhp"]',
            },
        ],
        headerTitle: 'Clase 21 - Formulario Login',
        styles: [
            { href: `${styles}/pages/clase-21/clase-21-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-21/01-formulario-login.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
