/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-disparar-manejadores.js  --  /src/routes/route-clase19-disparar-manejadores.js  -----  *
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
export const routeClase19DispararManejadores = {
        id: 'clase19DispararManejadores',
        favicon: favicon,
        pageTitle: 'Clase 19 - Disparar Manejadores',
        path: '/clase19-eventos-avanzados/04-disparar-manejadores',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/04-disparar-manejadores.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Disparar Manejadores',
        styles: [
            { href: `${styles}/pages/clase-19/04-disparar-manejadores.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/04-disparar-manejadores.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
