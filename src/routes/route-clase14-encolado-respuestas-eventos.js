/*
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-encolado-respuestas-eventos.js  --  /src/routes/route-clase14-encolado-respuestas-eventos.js  -----  *
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
    styles,
    scripts,
    markdownShikiHtml,
} = paths;


/** @type {Route} */
export const routeClase14EncoladoRespuestasEventos = {
        id: 'clase14EncoladoRespuestasEventos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 5. Encolado Respuestas Eventos',
        path: '/clase14-cola-de-efectos/encolado-respuestas-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-14/layout-aside-clase-14.html`,
            "#layoutMain": `${pages}/clase-14/05-encolado-respuestas-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-14/05-encolado-respuestas-eventos-description.html`, target: '[data-component-page="encoladoRespuestasEventosDescription"]' },
            { url: `${pagesComponents}/clase-14/05-encolado-respuestas-eventos-demo.html`, target: '[data-component-page="encoladoRespuestasEventosDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-encolado-respuestas-eventos-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-14/05-encolado-respuestas-eventos-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-encolado-respuestas-eventos-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-14/05-encolado-respuestas-eventos.css`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeCss"]',
            },
            {
                fileName: '05-encolado-respuestas-eventos-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-14/05-encolado-respuestas-eventos.js`,
                urlOutput: `${markdownShikiHtml}/clase-14`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 14 - 5. Encolado Respuestas Eventos',
        styles: [
            { href: `${styles}/pages/clase-14/05-encolado-respuestas-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/05-encolado-respuestas-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
