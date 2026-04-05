/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase12.js  --  /src/routes/route-clase12.js  -----  *
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
export const routeClase12 = {
        id: 'clase12',
        favicon: favicon,
        pageTitle: 'Clase 12 - Eventos de Teclado y Ratón',
        path: '/clase12-eventos-teclado-raton',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/00-eventos-de-teclado-y-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 12 - Eventos de Teclado y Ratón',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
