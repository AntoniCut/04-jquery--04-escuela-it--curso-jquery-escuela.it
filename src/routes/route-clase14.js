/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase14.js  --  /src/routes/route-clase14.js  -----  *
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
export const routeClase14 = {
        id: 'clase14',
        favicon: favicon,
        pageTitle: 'Clase 14 - Cola de Efectos',
        path: '/clase14-cola-de-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-14/layout-aside-clase-14.html`,
            "#layoutMain": `${pages}/clase-14/00-cola-de-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - Cola de Efectos',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};