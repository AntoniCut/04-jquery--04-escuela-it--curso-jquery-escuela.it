/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase18.js  --  /src/routes/route-clase18.js  -----  *
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
export const routeClase18 = {
        id: 'clase18',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formularios Ajax',
        path: '/clase18-formularios-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-18/layout-aside-clase-18.html`,
            "#layoutMain": `${pages}/clase-18/00-clase-18-formularios-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formularios Ajax',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
