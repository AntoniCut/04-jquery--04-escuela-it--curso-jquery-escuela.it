/*
    *  -------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-disparar-eventos.js  --  /src/routes/route-clase19-disparar-eventos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


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


/** @type {import('../../types/index.js').Route} */
export const routeClase19DispararEventos = {
        id: 'clase19DispararEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Disparar Eventos',
        path: '/clase19-eventos-avanzados/03-disparar-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/03-disparar-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Disparar Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/03-disparar-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/03-disparar-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
