/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-eventos-personalizados-1.js  --  /src/routes/route-clase19-eventos-personalizados-1.js  -----  *
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
export const routeClase19EventosPersonalizados1 = {
        id: 'clase19EventosPersonalizados1',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Personalizados 1',
        path: '/clase19-eventos-avanzados/05-eventos-personalizados-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-19/layout-aside-clase-19.html`,
            "#layoutMain": `${pages}/clase-19/05-eventos-personalizados-1.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/05-eventos-personalizados-1-description.html`, target: '[data-component-page="eventosPersonalizados1Description"]' },
            { url: `${pagesComponents}/clase-19/05-eventos-personalizados-1-demo.html`, target: '[data-component-page="eventosPersonalizados1Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '05-eventos-personalizados-1-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/05-eventos-personalizados-1-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '05-eventos-personalizados-1-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/05-eventos-personalizados-1.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '05-eventos-personalizados-1-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/05-eventos-personalizados-1.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Eventos Personalizados 1',
        styles: [
            { href: `${styles}/pages/clase-19/05-eventos-personalizados-1.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/05-eventos-personalizados-1.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
