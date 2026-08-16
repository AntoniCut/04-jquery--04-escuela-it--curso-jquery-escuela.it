/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase22.js  --  /src/routes/route-clase22.js  -----  *
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
export const routeClase22 = {
        id: 'clase22',
        favicon: favicon,
        pageTitle: 'Clase 22 - Deferred y Promesas',
        path: '/clase22-deferred-y-promesas',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-22/00-clase-22-deferred-y-promesas.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-22/layout-aside-clase-22.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 22 - Deferred y Promesas',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
