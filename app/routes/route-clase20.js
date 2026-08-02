/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase20.js  --  /src/routes/route-clase20.js  -----  *
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
export const routeClase20 = {
        id: 'clase20',
        favicon: favicon,
        pageTitle: 'Clase 20 - Ajax Low Level',
        path: '/clase20-ajax-low-level',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-20/00-clase-20-ajax-low-level.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-20/layout-aside-clase-20.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 20 - Ajax Low Level',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
