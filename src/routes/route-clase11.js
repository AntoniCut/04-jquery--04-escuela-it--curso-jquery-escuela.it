/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase11.js  --  /src/routes/route-clase11.js  -----  *
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
export const routeClase11 = {
        id: 'clase11',
        favicon: favicon,
        pageTitle: 'Clase 11 - Eventos en jQuery',
        path: '/clase11-eventos-en-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-11/layout-aside-clase-11.html`,
            "#layoutMain": `${pages}/clase-11/00-eventos-en-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - Eventos en jQuery',
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
