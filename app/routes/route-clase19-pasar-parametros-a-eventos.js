/*
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-pasar-parametros-a-eventos.js  --  /src/routes/route-clase19-pasar-parametros-a-eventos.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase19PasarParametrosAEventos = {
        id: 'clase19PasarParametrosAEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Pasar Parametros A Eventos',
        path: '/clase19-eventos-avanzados/02-pasar-parametros-a-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/02-pasar-parametros-a-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Pasar Parametros A Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/02-pasar-parametros-a-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/02-pasar-parametros-a-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
