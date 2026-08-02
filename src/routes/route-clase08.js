/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase08.js  --  /src/routes/route-clase08.js  -----  *
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
export const routeClase08 = {
        id: 'clase08',
        favicon: favicon,
        pageTitle: 'Clase 8 - Selectores jQuery y Traversing',
        path: '/clase08-selectores-jquery-traversing',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-08/layout-aside-clase-08.html`,
            "#layoutMain": `${pages}/clase-08/00-selectores-jquery-y-traversing.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 8 - Selectores jQuery y Traversing',
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
