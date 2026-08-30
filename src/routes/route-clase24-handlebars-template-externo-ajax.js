/*
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase24-handlebars-template-externo-ajax.js  --  /src/routes/route-clase24-handlebars-template-externo-ajax.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
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
    libs,
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase24HandlebarsTemplateExternoAjax = {
        id: 'clase24HandlebarsTemplateExternoAjax',
        favicon: favicon,
        pageTitle: 'Clase 24 - 5. Handlebars template externo AJAX',
        path: '/clase24-template-systems/05-handlebars-template-externo-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/05-handlebars-template-externo-ajax.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-24/05-handlebars-template-externo-ajax-description.html`, target: '[data-component-page="handlebarsTemplateExternoAjaxDescription"]' },
            { url: `${pagesComponents}/clase-24/05-handlebars-template-externo-ajax-demo.html`, target: '[data-component-page="handlebarsTemplateExternoAjaxDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-handlebars-template-externo-ajax-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-24/05-handlebars-template-externo-ajax-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-handlebars-template-externo-ajax-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-24/clase-24-styles.css`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-handlebars-template-externo-ajax-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-24/05-handlebars-template-externo-ajax.js`,
                urlOutput: `${markdownShikiHtml}/clase-24`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 24 - 5. Handlebars template externo AJAX',
        styles: [
            { href: `${styles}/pages/clase-24/clase-24-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${libs}/handlebars/handlebars.min.js` },
            { src: `${scripts}/clase-24/05-handlebars-template-externo-ajax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
