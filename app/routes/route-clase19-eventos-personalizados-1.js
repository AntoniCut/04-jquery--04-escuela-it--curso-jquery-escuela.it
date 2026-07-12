/*
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-eventos-personalizados-1.js  --  /src/routes/route-clase19-eventos-personalizados-1.js  -----  *
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
export const routeClase19EventosPersonalizados1 = {
        id: 'clase19EventosPersonalizados1',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Personalizados 1',
        path: '/clase19-eventos-avanzados/05-eventos-personalizados-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/05-eventos-personalizados-1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Eventos Personalizados 1',
        styles: [
            { href: `${styles}/pages/clase-19/05-eventos-personalizados-1.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/05-eventos-personalizados-1.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
