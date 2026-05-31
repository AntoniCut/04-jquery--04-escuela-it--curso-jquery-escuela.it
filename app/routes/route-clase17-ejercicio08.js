/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio08.js  --  /src/routes/route-clase17-ejercicio08.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


/** - Desestructuracion de paths */
const {
    favicon,
    layoutHeader,
    btnNavbar,
    btnNavbarThemesJQueryUI,
    layoutNavbar,
    layoutNavbarThemesUI,
    pages,
    layoutFooter,
    styles,
    scripts,
    markdownShiki
} = paths;


/** @type {import('../../types/index.js').Route} */
export const routeClase17Ejercicio08 = {
        id: 'clase17Ejercicio08',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 08',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-08',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/09-ejercicio-08.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 08',
        styles: [
            { href: `${styles}/pages/clase-17/09-ejercicio-08.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/09-ejercicio-08.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-17/09-ejercicio-08-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-17/09-ejercicio-08-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-17/09-ejercicio-08-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
