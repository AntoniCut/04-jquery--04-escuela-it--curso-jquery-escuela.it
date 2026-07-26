/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase02.js  --  /src/routes/route-clase02.js  -----  *
    *  -----------------------------------------------------------------  *
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
export const routeClase02 = {
        id: 'clase02',
        favicon: favicon,
        pageTitle: 'Clase 2 - Utilizar jQuery en la actualidad',
        path: '/clase02-utilizar-jquery-en-la-actualidad',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-02/00-utilizar-jquery-en-la-actualidad.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-02/00-utilizar-jquery-en-la-actualidad-description.html`, target: '[data-component-page="utilizarJqueryDescription"]' },
            { url: `${pagesComponents}/clase-02/00-utilizar-jquery-en-la-actualidad-images.html`, target: '[data-component-page="utilizarJqueryImages"]' },
            { url: `${pagesComponents}/clase-02/00-utilizar-jquery-en-la-actualidad-demo.html`, target: '[data-component-page="utilizarJqueryDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-utilizar-jquery-en-la-actualidad-images-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-02/00-utilizar-jquery-en-la-actualidad-images.html`,
                urlOutput: `${markdownShikiHtml}/clase-02`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-utilizar-jquery-en-la-actualidad-images-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/shared/section-img.css`,
                urlOutput: `${markdownShikiHtml}/clase-02`,
                target: '[data-shiki="codeCss"]',
            },
        ],
        headerTitle: 'Clase 2 - Utilizar jQuery en la actualidad',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
