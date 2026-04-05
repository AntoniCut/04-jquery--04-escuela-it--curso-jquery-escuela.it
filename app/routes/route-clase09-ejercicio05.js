/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio05.js  --  /src/routes/route-clase09-ejercicio05.js  -----  *
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
export const routeClase09Ejercicio05 = {
        id: 'clase09Ejercicio05',
        favicon: favicon,
        pageTitle: 'Clase 9 - 5. Ejercicio 5',
        path: '/clase09-ejercicio-5',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/05-ejercicio-05.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 5. Ejercicio 5',
        styles: [
            { href: `${styles}/pages/clase-09/05-ejercicio-05.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/05-ejercicio-05.js` },
        ]
};
