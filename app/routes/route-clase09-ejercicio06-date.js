/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio06-date.js  --  /src/routes/route-clase09-ejercicio06-date.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio06Date = {
        id: 'clase09Ejercicio06Date',
        favicon: favicon,
        pageTitle: 'Clase 9 - 6. Ejercicio 6 con DATE',
        path: '/clase09-ejercicio-6-date',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/06-ejercicio-06-date.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 6. Ejercicio 6 con DATE',
        styles: [
            { href: `${styles}/pages/clase-09/06-ejercicio-06-date.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/06-ejercicio-06-date.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
