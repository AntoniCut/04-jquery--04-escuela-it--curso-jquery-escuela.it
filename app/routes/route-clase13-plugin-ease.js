/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease.js  --  /src/routes/route-clase13-plugin-ease.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/


import { base } from './base.js';
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
export const routeClase13PluginEase = {
        id: 'clase13PluginEase',
        favicon: favicon,
        pageTitle: 'Clase 13 - 3. Plugin Ease',
        path: '/clase13-efectos-y-animaciones/plugin-ease',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/03-plugin-ease.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-13/03-plugin-ease-description.html`, target: '[data-component-page="pluginEaseDescription"]' },
            { url: `${pagesComponents}/clase-13/03-plugin-ease-demo.html`, target: '[data-component-page="pluginEaseDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '03-plugin-ease-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-13/03-plugin-ease-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '03-plugin-ease-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-13/03-plugin-ease.css`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '03-plugin-ease-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-13/03-plugin-ease.js`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 13 - 3. Plugin Ease',
        styles: [
            { href: `${styles}/pages/clase-13/03-plugin-ease.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
            { src: `${scripts}/clase-13/03-plugin-ease.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
