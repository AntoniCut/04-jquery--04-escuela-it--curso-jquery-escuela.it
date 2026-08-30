/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase06.js  --  /src/routes/route-clase06.js  -----  *
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
export const routeClase06 = {
        id: 'clase06',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery',
        path: '/clase06-primeros-pasos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutAsideLeft": layoutAsideLeft,
            "#layoutAsideRight": `${layoutAsidePages}/clase-06/layout-aside-clase-06.html`,
            "#layoutMain": `${pages}/clase-06/00-primeros-pasos-con-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
