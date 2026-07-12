/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-longitud-cola-efectos.js  --  /src/routes/route-clase14-longitud-cola-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase14LongitudColaEfectos = {
        id: 'clase14LongitudColaEfectos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 3. Longitud Cola Efectos',
        path: '/clase14-cola-de-efectos/longitud-cola-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/03-longitud-cola-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 3. Longitud Cola Efectos',
        styles: [
            { href: `${styles}/pages/clase-14/03-longitud-cola-efectos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/03-longitud-cola-efectos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};