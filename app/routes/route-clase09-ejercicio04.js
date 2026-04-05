/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio04.js  --  /src/routes/route-clase09-ejercicio04.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
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
export const routeClase09Ejercicio04 = {
        id: 'clase09Ejercicio04',
        favicon: favicon,
        pageTitle: 'Clase 9 - 4. Ejercicio 4',
        path: '/clase09-ejercicio-4',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/04-ejercicio-04.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 4. Ejercicio 4',
        styles: [
            { href: `${styles}/pages/clase-09/04-ejercicio-04.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/04-ejercicio-04.js` },
        ]
};
