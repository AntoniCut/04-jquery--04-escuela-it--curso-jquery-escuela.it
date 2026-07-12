/*
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-encolar-funciones-no-efectos.js  --  /src/routes/route-clase14-encolar-funciones-no-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase14EncolarFuncionesNoEfectos = {
        id: 'clase14EncolarFuncionesNoEfectos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 4. Encolar Funciones No Efectos',
        path: '/clase14-cola-de-efectos/encolar-funciones-no-efectos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/04-encolar-funciones-no-efectos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 4. Encolar Funciones No Efectos',
        styles: [
            { href: `${styles}/pages/clase-14/04-encolar-funciones-no-efectos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/04-encolar-funciones-no-efectos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};