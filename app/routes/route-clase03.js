/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase03.js  --  /src/routes/route-clase03.js  -----  *
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
export const routeClase03 = {
        id: 'clase03',
        favicon: favicon,
        pageTitle: 'Clase 3 - Práctica primeros pasos con jQuery',
        path: '/clase03-practica-primeros-pasos-con-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-03/00-practica-primeros-pasos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 3 - Práctica primeros pasos con jQuery',
        styles: [
            { href: `${styles}/pages/shared/section-img.css` },
            { href: `${styles}/pages/clase-03/00-practica-primeros-pasos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-03/00-practica-primeros-pasos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
