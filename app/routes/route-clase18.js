/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase18.js  --  /src/routes/route-clase18.js  -----  *
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
export const routeClase18 = {
        id: 'clase18',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formularios Ajax',
        path: '/clase18-formularios-ajax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/00-clase-18-formularios-ajax.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formularios Ajax',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
