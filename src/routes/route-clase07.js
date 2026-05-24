/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase07.js  --  /src/routes/route-clase07.js  -----  *
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
export const routeClase07 = {
        id: 'clase07',
        favicon: favicon,
        pageTitle: 'Clase 7 - Manipulación Básica de Elementos',
        path: '/clase07-manipulacion-basica-de-elementos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/00-manipulacion-basica-de-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - Manipulación Básica de Elementos',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
