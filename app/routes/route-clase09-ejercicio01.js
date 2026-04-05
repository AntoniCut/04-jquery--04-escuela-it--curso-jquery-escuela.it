/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio01.js  --  /src/routes/route-clase09-ejercicio01.js  -----  *
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
export const routeClase09Ejercicio01 = {
        id: 'clase09Ejercicio01',
        favicon: favicon,
        pageTitle: 'Clase 9 - 1. Ejercicio 1',
        path: '/clase09-ejercicio-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/01-ejercicio-01.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 1. Ejercicio 1',
        styles: [
            { href: `${styles}/pages/clase-09/01-ejercicio-01.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/01-ejercicio-01.js` },
        ]
};
