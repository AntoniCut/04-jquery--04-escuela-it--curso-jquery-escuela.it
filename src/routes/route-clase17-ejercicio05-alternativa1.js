/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase17-ejercicio05-alternativa1.js  --  /src/routes/route-clase17-ejercicio05-alternativa1.js  -----  *
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
export const routeClase17Ejercicio05Alternativa1 = {
        id: 'clase17Ejercicio05Alternativa1',
        favicon: favicon,
        pageTitle: 'Clase 17 - Ejercicio 05 Alternativa 1',
        path: '/clase17-dudas-y-conceptos-parte-2/ejercicio-05-alternativa-1',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/06-ejercicio-05-alternativa-1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Ejercicio 05 Alternativa 1',
        styles: [
            { href: `${styles}/pages/clase-17/06-ejercicio-05-alternativa-1.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-17/06-ejercicio-05-alternativa-1.js` },
        ]
};
