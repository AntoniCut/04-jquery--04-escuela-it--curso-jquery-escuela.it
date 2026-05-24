/*
    *  -----------------------------------------------------------  *
    *  -----  /route-home.js  --  /src/routes/route-home.js  -----  *
    *  -----------------------------------------------------------  *
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
export const routeHome = {
        id: 'home',
        favicon: favicon,
        pageTitle: 'Curso de jQuery Escuela.IT',
        path: '/',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/00-home.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Curso de jQuery de Escuela.IT',
        styles: [
            { href: `${styles}/pages/00-home.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
