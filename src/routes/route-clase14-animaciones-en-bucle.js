/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-animaciones-en-bucle.js  --  /src/routes/route-clase14-animaciones-en-bucle.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase14AnimacionesEnBucle = {
        id: 'clase14AnimacionesEnBucle',
        favicon: favicon,
        pageTitle: 'Clase 14 - 6. Animaciones en Bucle',
        path: '/clase14-cola-de-efectos/animaciones-en-bucle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/06-animaciones-en-bucle.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 6. Animaciones en Bucle',
        styles: [
            { href: `${styles}/pages/clase-14/06-animaciones-en-bucle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/06-animaciones-en-bucle.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};