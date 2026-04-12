/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /route-clase13-toggle.js  --  /src/routes/route-clase13-toggle.js  -----  *
    *  ---------------------------------------------------------------------------------  *
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
export const routeClase13Toggle = {
        id: 'clase13Toggle',
        favicon: favicon,
        pageTitle: 'Clase 13 - 1. Toggle',
        path: '/clase13-efectos-y-animaciones/toggle',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-13/01-toggle.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - 1. Toggle',
        styles: [
            { href: `${styles}/pages/clase-13/01-toggle.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-13/01-toggle.js` },
        ]
};
