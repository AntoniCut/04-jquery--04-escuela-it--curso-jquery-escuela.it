/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-encolado-efectos.js  --  /src/routes/route-clase14-encolado-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
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
export const routeClase14EncoladoEfectos = {
        id: 'clase14EncoladoEfectos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 1. Encolado de Efectos',
        path: '/clase14-cola-de-efectos/encolado-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/01-encolado-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 1. Encolado de Efectos',
        styles: [
            { href: `${styles}/pages/clase-14/01-encolado-efectos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/01-encolado-efectos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};