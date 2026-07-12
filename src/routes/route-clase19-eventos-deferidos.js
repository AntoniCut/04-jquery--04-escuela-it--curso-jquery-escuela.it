/*
    *  -------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-eventos-deferidos.js  --  /src/routes/route-clase19-eventos-deferidos.js  -----  *
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
export const routeClase19EventosDeferidos = {
        id: 'clase19EventosDeferidos',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Deferidos',
        path: '/clase19-eventos-avanzados/eventos-deferidos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/eventos-deferidos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Eventos Deferidos',
        styles: [
            { href: `${styles}/pages/clase-19/clase-19-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/eventos-deferidos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
