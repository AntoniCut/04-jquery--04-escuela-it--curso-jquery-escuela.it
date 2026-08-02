/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase12.js  --  /src/routes/route-clase12.js  -----  *
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
export const routeClase12 = {
        id: 'clase12',
        favicon: favicon,
        pageTitle: 'Clase 12 - Eventos de Teclado y Ratón',
        path: '/clase12-eventos-teclado-raton',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-12/layout-aside-clase-12.html`,
            "#layoutMain": `${pages}/clase-12/00-eventos-de-teclado-y-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 12 - Eventos de Teclado y Ratón',
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
