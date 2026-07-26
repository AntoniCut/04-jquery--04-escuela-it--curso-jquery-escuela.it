/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase02.js  --  /src/routes/route-clase02.js  -----  *
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
export const routeClase02 = {
        id: 'clase02',
        favicon: favicon,
        pageTitle: 'Clase 2 - Es Necesario Utilizar jQuery en la Actualidad',
        path: '/clase02-utilizar-jquery-en-la-actualidad',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-02/00-utilizar-jquery-en-la-actualidad.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 2 - Es Necesario Utilizar jQuery en la Actualidad',
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
