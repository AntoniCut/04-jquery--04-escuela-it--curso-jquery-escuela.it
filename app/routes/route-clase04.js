/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase04.js  --  /src/routes/route-clase04.js  -----  *
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
export const routeClase04 = {
        id: 'clase04',
        favicon: favicon,
        pageTitle: 'Clase 4 - Como se organiza el curso',
        path: '/clase04-como-se-organiza-el-curso',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-04/layout-aside-clase-04.html`,
            "#layoutMain": `${pages}/clase-04/00-como-se-organiza-el-curso.html`,
            "#layoutFooter": layoutFooter,
        },
        pagesComponents: [
            { url: `${pagesComponents}/clase-04/00-como-se-organiza-el-curso-description.html`, target: '[data-component-page="comoSeOrganizaDescription"]' },
            { url: `${pagesComponents}/clase-04/00-como-se-organiza-el-curso-images.html`, target: '[data-component-page="comoSeOrganizaImages"]' },
            { url: `${pagesComponents}/clase-04/00-como-se-organiza-el-curso-demo.html`, target: '[data-component-page="comoSeOrganizaDemo"]' },
        ],
        MarkdownShikiHtml: [
            {
                fileName: '00-como-se-organiza-el-curso-images-html.html',
                fileExtension: 'html',
                urlInput: `${pagesComponents}/clase-04/00-como-se-organiza-el-curso-images.html`,
                urlOutput: `${markdownShikiHtml}/clase-04`,
                target: '[data-shiki="codeHtml"]',
            },
            {
                fileName: '00-como-se-organiza-el-curso-images-css.html',
                fileExtension: 'css',
                urlInput: `${styles}/pages/shared/section-img.css`,
                urlOutput: `${markdownShikiHtml}/clase-04`,
                target: '[data-shiki="codeCss"]',
            },
        ],
        headerTitle: 'Clase 4 - Como se organiza el curso',
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
