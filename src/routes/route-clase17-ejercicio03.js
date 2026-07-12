/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio03.js  --  /src/routes/route-clase17-ejercicio03.js  -----  *
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
export const routeClase17Ejercicio03 = {
        id: 'clase17Ejercicio03',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 03',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-03',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/03-ejercicio-03.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 03',
        styles: [
            { href: `${styles}/pages/clase-17/03-ejercicio-03.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/03-ejercicio-03.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
