/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase07-data-remove-data.js  --  /src/routes/route-clase07-data-remove-data.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';

/// <reference path="../../../types/route.d.js" />


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


/** @type {Route} */
export const routeClase07DataRemoveData = {
        id: 'clase07DataRemoveData',
        favicon: favicon,
        pageTitle: 'Clase 7 - 3. Métodos data() y removeData()',
        path: '/clase07-manipulacion-basica-de-elementos/03-metodos-data-removedata',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/03-metodos-data-removedata.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - 3. Métodos data() y removeData()',
        styles: [
            { href: `${styles}/pages/clase-07/03-metodos-data-removedata.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/03-metodos-data-removedata.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
