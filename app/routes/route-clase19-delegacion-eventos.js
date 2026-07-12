/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-delegacion-eventos.js  --  /src/routes/route-clase19-delegacion-eventos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase19DelegacionEventos = {
        id: 'clase19DelegacionEventos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Delegacion Eventos',
        path: '/clase19-eventos-avanzados/01-delegacion-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/01-delegacion-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Delegacion Eventos',
        styles: [
            { href: `${styles}/pages/clase-19/01-delegacion-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/01-delegacion-eventos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
