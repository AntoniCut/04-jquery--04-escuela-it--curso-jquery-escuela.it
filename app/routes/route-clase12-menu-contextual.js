/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase12-menu-contextual.js  --  /src/routes/route-clase12-menu-contextual.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase12MenuContextual = {
        id: 'clase12MenuContextual',
        favicon: favicon,
        pageTitle: 'Clase 12 - 2. Menú Contextual Personalizado',
        path: '/clase12-eventos-teclado-raton/02-menu-contextual-personalizado',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/02-menu-contextual-personalizado.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-12/02-menu-contextual-personalizado-description.html`, target: '[data-component-page="menuContextualDescription"]' },
            { url: `${pagesComponents}/clase-12/02-menu-contextual-personalizado-demo.html`, target: '[data-component-page="menuContextualDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-menu-contextual-personalizado-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-12/02-menu-contextual-personalizado-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-menu-contextual-personalizado-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-12/02-menu-contextual-personalizado.css`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '02-menu-contextual-personalizado-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-12/02-menu-contextual-personalizado.js`,
                urlOutput: `${markdownShikiHtml}/clase-12`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 12 - 2. Menú Contextual Personalizado',
        styles: [
            { href: `${styles}/pages/clase-12/02-menu-contextual-personalizado.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/02-menu-contextual-personalizado.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
