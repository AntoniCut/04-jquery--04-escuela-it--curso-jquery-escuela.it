/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase07.js  --  /src/routes/route-clase07.js  -----  *
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
export const routeClase07 = {
        id: 'clase07',
        favicon: favicon,
        pageTitle: 'Clase 7 - Manipulación Básica de Elementos',
        path: '/clase07-manipulacion-basica-de-elementos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-07/layout-aside-clase-07.html`,
            "#layoutMain": `${pages}/clase-07/00-manipulacion-basica-de-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - Manipulación Básica de Elementos',
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
