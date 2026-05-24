/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase16.js  --  /src/routes/route-clase16.js  -----  *
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
export const routeClase16 = {
        id: 'clase16',
        favicon: favicon,
        pageTitle: 'Clase 16 - AJAX Interfaz Alto Nivel',
        path: '/clase16-ajax-interfaz-alto-nivel',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/00-ajax-interfaz-de-alto-nivel.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - AJAX Interfaz Alto Nivel',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};