/*
    *  -------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease-animate-colors.js  --  /src/routes/route-clase13-plugin-ease-animate-colors.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase13PluginEaseAnimateColors = {
        id: 'clase13PluginEaseAnimateColors',
        favicon: favicon,
        pageTitle: 'Clase 13 - 4. Plugin Ease Animate Colors',
        path: '/clase13-efectos-y-animaciones/plugin-ease-animate-colors',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/04-plugin-ease-animate-colors.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-13/04-plugin-ease-animate-colors-description.html`, target: '[data-component-page="pluginEaseAnimateColorsDescription"]' },
            { url: `${pagesComponents}/clase-13/04-plugin-ease-animate-colors-demo.html`, target: '[data-component-page="pluginEaseAnimateColorsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '04-plugin-ease-animate-colors-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-13/04-plugin-ease-animate-colors-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '04-plugin-ease-animate-colors-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-13/04-plugin-ease-animate-colors.css`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '04-plugin-ease-animate-colors-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-13/04-plugin-ease-animate-colors.js`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 13 - 4. Plugin Ease Animate Colors',
        styles: [
            { href: `${styles}/pages/clase-13/04-plugin-ease-animate-colors.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
            { src: `${base}/app/plugins/jquery-animate-colors/jquery.animate-colors-min.js` },
            { src: `${scripts}/clase-13/04-plugin-ease-animate-colors.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
