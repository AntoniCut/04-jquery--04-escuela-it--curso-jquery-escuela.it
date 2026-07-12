/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase11-prevent-default.js  --  /src/routes/route-clase11-prevent-default.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase11PreventDefault = {
        id: 'clase11PreventDefault',
        favicon: favicon,
        pageTitle: 'Clase 11 - 4. Prevent Default',
        path: '/clase11-eventos-en-jquery/04-prevent-default',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/04-prevent-default.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 4. Prevent Default',
        styles: [
            { href: `${styles}/pages/clase-11/04-prevent-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/04-prevent-default.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
