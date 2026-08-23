/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase23.js  --  /src/routes/route-clase23.js  -----  *
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
    scripts
} = paths;


/** @type {Route} */
export const routeClase23 = {
        id: 'clase23',
        favicon: favicon,
        pageTitle: 'Clase 23 - Dudas y conceptos 3',
        path: '/clase23-dudas-y-conceptos-3',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-23/00-clase-23-dudas-y-conceptos-3.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-23/layout-aside-clase-23.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 23 - Dudas y conceptos 3',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
