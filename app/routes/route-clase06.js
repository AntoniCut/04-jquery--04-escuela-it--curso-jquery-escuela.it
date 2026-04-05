/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase06.js  --  /src/routes/route-clase06.js  -----  *
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
export const routeClase06 = {
        id: 'clase06',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery',
        path: '/clase06-primeros-pasos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06/00-primeros-pasos-con-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
