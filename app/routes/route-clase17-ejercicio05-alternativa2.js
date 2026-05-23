/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio05-alternativa2.js  --  /src/routes/route-clase17-ejercicio05-alternativa2.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase17Ejercicio05Alternativa2 = {
        id: 'clase17Ejercicio05Alternativa2',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 05 Alternativa 2',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-05-alternativa-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/07-ejercicio-05-alternativa-2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 05 Alternativa 2',
        styles: [
            { href: `${styles}/pages/clase-17/07-ejercicio-05-alternativa-2.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/07-ejercicio-05-alternativa-2.js` },
        ]
};
