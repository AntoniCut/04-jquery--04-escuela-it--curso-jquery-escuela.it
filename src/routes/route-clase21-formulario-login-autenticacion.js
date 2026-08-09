/*
    *  -------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase21-formulario-login-autenticacion.js  --  /src/routes/route-clase21-formulario-login-autenticacion.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase21FormularioLoginAutenticacion = {
        id: 'clase21FormularioLoginAutenticacion',
        favicon: favicon,
        pageTitle: 'Clase 21 - Formulario Login Autenticacion',
        path: '/clase21-practica-1-formulario-login/02-formulario-login-autenticacion',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-21/02-formulario-login-autenticacion.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-21/layout-aside-clase-21.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-21/02-formulario-login-autenticacion-description.html`, target: '[data-component-page="formularioLoginAutenticacionDescription"]' },
            { url: `${pagesComponents}/clase-21/02-formulario-login-autenticacion-demo.html`, target: '[data-component-page="formularioLoginAutenticacionDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-formulario-login-autenticacion-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-21/02-formulario-login-autenticacion-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-21/clase-21-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-21/02-formulario-login-autenticacion.js`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeJs"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-21/login-auth.php`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codePhp"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-db-connect-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-21/db-connect.php`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codePhpDbConnect"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-register-auth-php.html',
                fileExtension: 'php',
                urlInput: `${services}/clase-21/register-auth.php`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codePhpRegisterAuth"]',
            },
            {
                fileName: '02-formulario-login-autenticacion-demo-login-users-sql.html',
                fileExtension: 'sql',
                urlInput: `${services}/clase-21/login-users.sql`,
                urlOutput: `${markdownShikiHtml}/clase-21`,
                target: '[data-shiki="codeSqlLoginUsers"]',
            },
        ],
        headerTitle: 'Clase 21 - Formulario Login Autenticacion',
        styles: [
            { href: `${styles}/pages/clase-21/clase-21-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-21/02-formulario-login-autenticacion.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
