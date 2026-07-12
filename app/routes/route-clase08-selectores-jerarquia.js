/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase08-selectores-jerarquia.js  --  /src/routes/route-clase08-selectores-jerarquia.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
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
export const routeClase08SelectoresJerarquia = {
        id: 'clase08SelectoresJerarquia',
        favicon: favicon,
        pageTitle: 'Clase 8 - 1. Selectores Jerarquía',
        path: '/clase08-selectores-jquery-traversing/01-selectores-jerarquia',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/01-selectores-jerarquia.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 8 - 1. Selectores Jerarquía',
        styles: [
            { href: `${styles}/pages/clase-08/01-selectores-jerarquia.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/01-selectores-jerarquia.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
