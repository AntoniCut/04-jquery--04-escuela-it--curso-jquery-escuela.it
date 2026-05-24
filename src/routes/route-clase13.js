/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase13.js  --  /src/routes/route-clase13.js  -----  *
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
export const routeClase13 = {
        id: 'clase13',
        favicon: favicon,
        pageTitle: 'Clase 13 - Efectos y Animaciones',
        path: '/clase13-efectos-y-animaciones',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-13/00-efectos-y-animaciones.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - Efectos y Animaciones',
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
