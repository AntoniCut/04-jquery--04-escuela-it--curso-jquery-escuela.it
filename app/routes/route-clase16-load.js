/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /route-clase16-load.js  --  /src/routes/route-clase16-load.js  -----  *
    *  ---------------------------------------------------------------------------  *
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
export const routeClase16Load = {
        id: 'clase16Load',
        favicon: favicon,
        pageTitle: 'Clase 16 - 1. Load',
        path: '/clase16-ajax-interfaz-alto-nivel/load',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/01-load.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - 1. Load',
        styles: [
            { href: `${styles}/pages/clase-16/01-load.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/01-load.js` },
        ]
};