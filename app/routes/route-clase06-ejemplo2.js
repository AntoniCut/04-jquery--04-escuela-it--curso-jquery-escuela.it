/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /route-clase06-ejemplo2.js  --  /src/routes/route-clase06-ejemplo2.js  -----  *
    *  -----------------------------------------------------------------------------------  *
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
export const routeClase06Ejemplo2 = {
        id: 'clase06Ejemplo2',
        favicon: favicon,
        pageTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 2',
        path: '/clase06-primeros-pasos/02-ejemplo2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06/02-ejemplo2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 6 - Primeros Pasos con jQuery - Ejemplo 2',
        styles: [
            { href: `${styles}/pages/clase-06/02-ejemplo2.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/02-ejemplo2.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
