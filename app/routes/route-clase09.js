/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase09.js  --  /src/routes/route-clase09.js  -----  *
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
export const routeClase09 = {
        id: 'clase09',
        favicon: favicon,
        pageTitle: 'Clase 9 - Dudas y Conceptos 1',
        path: '/clase09-dudas-y-conceptos-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/00-dudas-y-conceptos-1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - Dudas y Conceptos 1',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
