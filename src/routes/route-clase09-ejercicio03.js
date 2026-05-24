/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase09-ejercicio03.js  --  /src/routes/route-clase09-ejercicio03.js  -----  *
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
export const routeClase09Ejercicio03 = {
        id: 'clase09Ejercicio03',
        favicon: favicon,
        pageTitle: 'Clase 9 - 3. Ejercicio 3',
        path: '/clase09-ejercicio-3',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09/03-ejercicio-03.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 9 - 3. Ejercicio 3',
        styles: [
            { href: `${styles}/pages/clase-09/03-ejercicio-03.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/03-ejercicio-03.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
