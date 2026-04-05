/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio02.js  --  /src/routes/route-clase09-ejercicio02.js  -----  *
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
export const routeClase09Ejercicio02 = {
        id: 'clase09Ejercicio02',
        favicon: favicon,
        pageTitle: 'Clase 9 - 2. Ejercicio 2',
        path: '/clase09-ejercicio-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/02-ejercicio-02.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 2. Ejercicio 2',
        styles: [
            { href: `${styles}/pages/clase-09/02-ejercicio-02.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/02-ejercicio-02.js` },
        ]
};
