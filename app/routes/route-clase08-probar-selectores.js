/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase08-probar-selectores.js  --  /src/routes/route-clase08-probar-selectores.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
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
export const routeClase08ProbarSelectores = {
        id: 'clase08ProbarSelectores',
        favicon: favicon,
        pageTitle: 'Clase 8 - 2. Probando Selectores',
        path: '/clase08-selectores-jquery-traversing/02-probar-selectores',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/02-probar-selectores.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 8 - 2. Probando Selectores',
        styles: [
            { href: `${styles}/pages/clase-08/02-probar-selectores.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/02-probar-selectores.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
