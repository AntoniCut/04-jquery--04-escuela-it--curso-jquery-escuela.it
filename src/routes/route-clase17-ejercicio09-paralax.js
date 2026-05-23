/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio09-paralax.js  --  /src/routes/route-clase17-ejercicio09-paralax.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
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
export const routeClase17Ejercicio09Paralax = {
        id: 'clase17Ejercicio09Paralax',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 09 Paralax',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-09-paralax',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/11-ejercicio-09-paralax.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 09 Paralax',
        styles: [
            { href: `${styles}/pages/clase-17/11-ejercicio-09-paralax.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/11-ejercicio-09-paralax.js` },
        ]
};
