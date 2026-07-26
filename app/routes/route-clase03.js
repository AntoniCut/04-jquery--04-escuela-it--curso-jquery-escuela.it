/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase03.js  --  /src/routes/route-clase03.js  -----  *
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
export const routeClase03 = {
        id: 'clase03',
        favicon: favicon,
        pageTitle: 'Clase 3 - Práctica primeros pasos con jQuery',
        path: '/clase03-practica-primeros-pasos-con-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-03/00-practica-primeros-pasos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-03/00-practica-primeros-pasos-description.html`, target: '[data-component-page="practicaPrimerosPasosDescription"]' },
            { url: `${pagesComponents}/clase-03/00-practica-primeros-pasos-images.html`, target: '[data-component-page="practicaPrimerosPasosImages"]' },
            { url: `${pagesComponents}/clase-03/00-practica-primeros-pasos-demo.html`, target: '[data-component-page="practicaPrimerosPasosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-practica-primeros-pasos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-03/00-practica-primeros-pasos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-03`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-practica-primeros-pasos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-03/00-practica-primeros-pasos.css`,
                urlOutput: `${markdownShikiHtml}/clase-03`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '00-practica-primeros-pasos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-03/00-practica-primeros-pasos.js`,
                urlOutput: `${markdownShikiHtml}/clase-03`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 3 - Práctica primeros pasos con jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
            { href: `${styles}/pages/clase-03/00-practica-primeros-pasos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-03/00-practica-primeros-pasos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
