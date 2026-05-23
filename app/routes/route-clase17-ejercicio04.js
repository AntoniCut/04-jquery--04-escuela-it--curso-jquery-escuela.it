/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio04.js  --  /src/routes/route-clase17-ejercicio04.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
export const routeClase17Ejercicio04 = {
        id: 'clase17Ejercicio04',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 04',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-04',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/04-ejercicio-04.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 04',
        styles: [
            { href: `${styles}/pages/clase-17/04-ejercicio-04.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/04-ejercicio-04.js` },
        ]
};
