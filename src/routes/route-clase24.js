/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase24.js  --  /src/routes/route-clase24.js  -----  *
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
export const routeClase24 = {
        id: 'clase24',
        favicon: favicon,
        pageTitle: 'Clase 24 - Template Systems',
        path: '/clase24-template-systems',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-24/00-clase-24-template-systems.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-24/layout-aside-clase-24.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 24 - Template Systems',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
