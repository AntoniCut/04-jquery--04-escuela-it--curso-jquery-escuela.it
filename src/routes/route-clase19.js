/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase19.js  --  /src/routes/route-clase19.js  -----  *
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
export const routeClase19 = {
        id: 'clase19',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Avanzados',
        path: '/clase19-eventos-avanzados',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-19/layout-aside-clase-19.html`,
            "#layoutMain": `${pages}/clase-19/00-clase-19-eventos-avanzados.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Eventos Avanzados',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
