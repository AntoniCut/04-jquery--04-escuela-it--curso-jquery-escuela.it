/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase17.js  --  /src/routes/route-clase17.js  -----  *
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
export const routeClase17 = {
        id: 'clase17',
        favicon: favicon,
        pageTitle: 'Clase 17 - Dudas y Conceptos Parte 2',
        path: '/clase17-dudas-y-conceptos-parte-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-17/layout-aside-clase-17.html`,
            "#layoutMain": `${pages}/clase-17/00-clase-17-dudas-y-conceptos-parte-2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Dudas y Conceptos Parte 2',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
