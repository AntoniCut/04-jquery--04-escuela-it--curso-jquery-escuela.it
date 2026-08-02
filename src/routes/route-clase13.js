/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase13.js  --  /src/routes/route-clase13.js  -----  *
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
    layoutFooter,
    styles,
    scripts
} = paths;


/** @type {Route} */
export const routeClase13 = {
        id: 'clase13',
        favicon: favicon,
        pageTitle: 'Clase 13 - Efectos y Animaciones',
        path: '/clase13-efectos-y-animaciones',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-13/layout-aside-clase-13.html`,
            "#layoutMain": `${pages}/clase-13/00-efectos-y-animaciones.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - Efectos y Animaciones',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
