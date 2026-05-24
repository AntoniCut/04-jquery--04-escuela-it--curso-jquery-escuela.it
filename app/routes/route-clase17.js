/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase17.js  --  /src/routes/route-clase17.js  -----  *
    *  -----------------------------------------------------------------  *
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
export const routeClase17 = {
        id: 'clase17',
        favicon: favicon,
        pageTitle: 'Clase 17 - Dudas y Conceptos Parte 2',
        path: '/clase17-dudas-y-conceptos-parte-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-17/00-clase-17-dudas-y-conceptos-parte-2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 17 - Dudas y Conceptos Parte 2',
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
