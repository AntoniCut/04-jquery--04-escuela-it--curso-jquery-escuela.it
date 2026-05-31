/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio09.js  --  /src/routes/route-clase17-ejercicio09.js  -----  *
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
export const routeClase17Ejercicio09 = {
        id: 'clase17Ejercicio09',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 09',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-09',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/10-ejercicio-09.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 09',
        styles: [
            { href: `${styles}/pages/clase-17/10-ejercicio-09.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/10-ejercicio-09.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-17/10-ejercicio-09-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-17/10-ejercicio-09-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-17/10-ejercicio-09-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
