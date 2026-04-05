/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase11-metodo-on.js  --  /src/routes/route-clase11-metodo-on.js  -----  *
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
export const routeClase11MetodoOn = {
        id: 'clase11MetodoOn',
        favicon: favicon,
        pageTitle: 'Clase 11 - 1. Método on()',
        path: '/clase11-eventos-en-jquery/01-metodo-on',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/01-metodo-on.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 1. Método on()',
        styles: [
            { href: `${styles}/pages/clase-11/01-metodo-on.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/01-metodo-on.js` },
        ]
};
