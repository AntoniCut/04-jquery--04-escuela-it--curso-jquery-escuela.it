/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-eventos-personalizados-2.js  --  /src/routes/route-clase19-eventos-personalizados-2.js  -----  *
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
export const routeClase19EventosPersonalizados2 = {
        id: 'clase19EventosPersonalizados2',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Personalizados 2',
        path: '/clase19-eventos-avanzados/06-eventos-personalizados-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-19/layout-aside-clase-19.html`,
            "#layoutMain": `${pages}/clase-19/06-eventos-personalizados-2.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-19/06-eventos-personalizados-2-description.html`, target: '[data-component-page="eventosPersonalizados2Description"]' },
            { url: `${pagesComponents}/clase-19/06-eventos-personalizados-2-demo.html`, target: '[data-component-page="eventosPersonalizados2Demo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '06-eventos-personalizados-2-demo-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-19/06-eventos-personalizados-2-demo.html`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '06-eventos-personalizados-2-demo-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/clase-19/06-eventos-personalizados-2.css`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeCss"]',
            },
           
            {
                fileName: '06-eventos-personalizados-2-demo-js.html',
                fileExtension: 'js',
                urlInput: `${scripts}/clase-19/06-eventos-personalizados-2.js`,
                urlOutput: `${markdownShikiHtml}/clase-19`,
                target: '[data-shiki="codeJs"]',
            },
        ],
        headerTitle: 'Clase 19 - Eventos Personalizados 2',
        styles: [
            { href: `${styles}/pages/clase-19/06-eventos-personalizados-2.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/06-eventos-personalizados-2.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
