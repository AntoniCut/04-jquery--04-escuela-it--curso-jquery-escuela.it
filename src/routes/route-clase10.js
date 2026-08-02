/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase10.js  --  /src/routes/route-clase10.js  -----  *
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
export const routeClase10 = {
        id: 'clase10',
        favicon: favicon,
        pageTitle: 'Clase 10 - Manipulación Avanzada del Contenido',
        path: '/clase10-manipulacion-avanzada-del-contenido',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-10/layout-aside-clase-10.html`,
            "#layoutMain": `${pages}/clase-10/00-manipulacion-avanzada-del-contenido.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - Manipulación Avanzada del Contenido',
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
