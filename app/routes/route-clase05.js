/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase05.js  --  /src/routes/route-clase05.js  -----  *
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
    pages,
    layoutFooter,
    styles,
    scripts
} = paths;


/** @type {Route} */
export const routeClase05 = {
        id: 'clase05',
        favicon: favicon,
        pageTitle: 'Clase 5 - Introducción a jQuery',
        path: '/clase05-introduccion-a-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-05/00-introduccion-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 5 - Introducción a jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
            { href: `${styles}/pages/clase-05/00-introduccion-jquery.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-05/00-introduccion-jquery.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
