/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio05-alternativa1.js  --  /src/routes/route-clase17-ejercicio05-alternativa1.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase17Ejercicio05Hover = {
        id: 'clase17Ejercicio05Hover',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 05 Hover',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-05-hover',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/06-ejercicio-05-hover.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 05 Hover',
        styles: [
            { href: `${styles}/pages/clase-17/06-ejercicio-05-hover.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/06-ejercicio-05-hover.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
        MarkdownShikiHtml: [
            { url: `${markdownShiki}/clase-17/06-ejercicio-05-hover-html.html`, target: '[data-shiki="codeHtml"]' },
            { url: `${markdownShiki}/clase-17/06-ejercicio-05-hover-css.html`,  target: '[data-shiki="codeCss"]' },
            { url: `${markdownShiki}/clase-17/06-ejercicio-05-hover-js.html`,   target: '[data-shiki="codeJs"]' },
        ],
};
