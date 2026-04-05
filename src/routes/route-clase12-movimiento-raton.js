/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase12-movimiento-raton.js  --  /src/routes/route-clase12-movimiento-raton.js  -----  *
    *  -----------------------------------------------------------------------  *
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
export const routeClase12MovimientoRaton = {
        id: 'clase12MovimientoRaton',
        favicon: favicon,
        pageTitle: 'Clase 12 - 1. Seguir Movimiento del Ratón',
        path: '/clase12-eventos-teclado-raton/01-seguir-movimiento-del-raton',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/01-seguir-movimiento-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 12 - 1. Seguir Movimiento del Ratón',
        styles: [
            { href: `${styles}/pages/clase-12/01-seguir-movimiento-raton.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/01-seguir-movimiento-raton.js` },
        ]
};
