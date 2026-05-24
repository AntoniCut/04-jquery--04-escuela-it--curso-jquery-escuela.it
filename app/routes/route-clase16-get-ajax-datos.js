/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax-datos.js  --  /src/routes/route-clase16-get-ajax-datos.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
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
export const routeClase16GetAjaxDatos = {
        id: 'clase16GetAjaxDatos',
        favicon: favicon,
        pageTitle: 'Clase 16 - 3. Get Ajax Datos',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax-datos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/03-get-ajax-datos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - 3. Get Ajax Datos',
        styles: [
            { href: `${styles}/pages/clase-16/02-get-ajax-objeto-ajax-datos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/03-get-ajax-datos.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};