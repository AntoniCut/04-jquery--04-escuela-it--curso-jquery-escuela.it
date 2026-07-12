/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase19.js  --  /src/routes/route-clase19.js  -----  *
    *  -----------------------------------------------------------------  *
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
export const routeClase19 = {
        id: 'clase19',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Avanzados',
        path: '/clase19-eventos-avanzados',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/00-clase-19-eventos-avanzados.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Eventos Avanzados',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
