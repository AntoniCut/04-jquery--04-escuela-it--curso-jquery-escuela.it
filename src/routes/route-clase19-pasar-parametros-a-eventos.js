/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-pasar-parametros-a-eventos.js  --  /src/routes/route-clase19-pasar-parametros-a-eventos.js  -----  *
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
export const routeClase19PasarParametrosAEventos = {
        id: 'clase19PasarParametrosAEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Pasar Parametros A Eventos',
        path: '/clase19-eventos-avanzados/02-pasar-parametros-a-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-19/layout-aside-clase-19.html`,
            "#layoutMain": `${pages}/clase-19/02-pasar-parametros-a-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/02-pasar-parametros-a-eventos-description.html`, target: '[data-component-page="pasarParametrosAEventosDescription"]' },
            { url: `${pagesComponents}/clase-19/02-pasar-parametros-a-eventos-demo.html`, target: '[data-component-page="pasarParametrosAEventosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '02-pasar-parametros-a-eventos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/02-pasar-parametros-a-eventos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '02-pasar-parametros-a-eventos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/02-pasar-parametros-a-eventos.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '02-pasar-parametros-a-eventos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/02-pasar-parametros-a-eventos.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Pasar Parametros A Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/02-pasar-parametros-a-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/02-pasar-parametros-a-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
