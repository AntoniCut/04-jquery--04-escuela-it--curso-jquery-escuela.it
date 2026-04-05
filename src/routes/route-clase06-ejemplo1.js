/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase06-ejemplo1.js  --  /src/routes/route-clase06-ejemplo1.js  -----  *
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
export const routeClase06Ejemplo1 = {
        id: 'clase06Ejemplo1',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 1',
        path: '/clase06-primeros-pasos/01-ejemplo1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06/01-ejemplo1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 1',
        styles: [
            { href: `${styles}/pages/clase-06/01-ejemplo1.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/01-ejemplo1.js` },
        ]
};
