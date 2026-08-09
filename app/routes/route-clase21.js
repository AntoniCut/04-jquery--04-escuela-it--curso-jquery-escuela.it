/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase21.js  --  /src/routes/route-clase21.js  -----  *
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
export const routeClase21 = {
        id: 'clase21',
        favicon: favicon,
        pageTitle: 'Clase 21 - Práctica 1 Formulario Login',
        path: '/clase21-practica-1-formulario-login',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutMain": `${pages}/clase-21/00-clase-21-practica-1-formulario-login.html`,
            "#layoutAsideRight": `${layoutAsidePages}/clase-21/layout-aside-clase-21.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 21 - Práctica 1 Formulario Login',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
