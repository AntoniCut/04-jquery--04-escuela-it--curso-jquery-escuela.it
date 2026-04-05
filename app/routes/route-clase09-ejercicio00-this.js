/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio00-this.js  --  /src/routes/route-clase09-ejercicio00-this.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio00This = {
        id: 'clase09Ejercicio00This',
        favicon: favicon,
        pageTitle: 'Clase 9 - Ejercicio 0 con THIS',
        path: '/clase09-ejercicio-0-this',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/00-ejercicio-00-this.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 0. Ejercicio 0 con THIS',
        styles: [
            { href: `${styles}/pages/clase-09/00-ejercicio-00-this.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/00-ejercicio-00-this.js` },
        ]
};
