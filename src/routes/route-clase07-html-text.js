/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase07-html-text.js  --  /src/routes/route-clase07-html-text.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
    layoutFooter,
    styles,
    scripts
} = paths;


/** @type {Route} */
export const routeClase07HtmlText = {
        id: 'clase07HtmlText',
        favicon: favicon,
        pageTitle: 'Clase 7 - 1. Métodos html() y text()',
        path: '/clase07-manipulacion-basica-de-elementos/01-metodos-html-text',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/01-metodos-html-text.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - 1. Métodos html() y text()',
        styles: [
            { href: `${styles}/pages/clase-07/01-metodos-html-text.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/01-metodos-html-text.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
