/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax.js  --  /src/routes/route-clase16-get-ajax.js  -----  *
    *  -----------------------------------------------------------------------------------  *
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
    pages,
    layoutFooter,
    styles,
    scripts
} = paths;


/** @type {Route} */
export const routeClase16GetAjax = {
        id: 'clase16GetAjax',
        favicon: favicon,
        pageTitle: 'Clase 16 - 2. Get Ajax',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/02-get-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - 2. Get Ajax',
        styles: [
            { href: `${styles}/pages/clase-16/01-load-get-ajax.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/02-get-ajax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};