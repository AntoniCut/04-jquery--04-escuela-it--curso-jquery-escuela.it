/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease-animate-colors-options.js  --  /src/routes/route-clase13-plugin-ease-animate-colors-options.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase13PluginEaseAnimateColorsOptions = {
        id: 'clase13PluginEaseAnimateColorsOptions',
        favicon: favicon,
        pageTitle: 'Clase 13 - 5. Plugin Ease Animate Colors Options',
        path: '/clase13-efectos-y-animaciones/plugin-ease-animate-colors-options',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/05-plugin-ease-animate-colors-options.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-13/05-plugin-ease-animate-colors-options-description.html`, target: '[data-component-page="pluginEaseAnimateColorsOptionsDescription"]' },
            { url: `${pagesComponents}/clase-13/05-plugin-ease-animate-colors-options-demo.html`, target: '[data-component-page="pluginEaseAnimateColorsOptionsDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-plugin-ease-animate-colors-options-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-13/05-plugin-ease-animate-colors-options-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-plugin-ease-animate-colors-options-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-13/05-plugin-ease-animate-colors-options.css`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-plugin-ease-animate-colors-options-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-13/05-plugin-ease-animate-colors-options.js`,
                urlOutput: `${markdownShikiHtml}/clase-13`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 13 - 5. Plugin Ease Animate Colors Options',
        styles: [
            { href: `${styles}/pages/clase-13/05-plugin-ease-animate-colors-options.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
            { src: `${base}/app/plugins/jquery-animate-colors/jquery.animate-colors-min.js` },
            { src: `${scripts}/clase-13/05-plugin-ease-animate-colors-options.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
