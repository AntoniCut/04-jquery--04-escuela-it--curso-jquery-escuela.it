/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax-datos-objeto-ajax.js  --  /src/routes/route-clase16-get-ajax-datos-objeto-ajax.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase16GetAjaxDatosObjetoAjax = {
        id: 'clase16GetAjaxDatosObjetoAjax',
        favicon: favicon,
        pageTitle: 'Clase 16 - 4. Get Ajax Datos Objeto Ajax',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax-datos-objeto-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/04-get-ajax-datos-objeto-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - 4. Get Ajax Datos Objeto Ajax',
        styles: [
            { href: `${styles}/pages/clase-16/02-get-ajax-objeto-ajax-datos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/04-get-ajax-datos-objeto-ajax.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};