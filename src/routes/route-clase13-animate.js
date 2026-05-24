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
        pageTitle: 'Clase 13 - 2. Animate',
        path: '/clase13-efectos-y-animaciones/animate',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-13/02-animate.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - 2. Animate',
        styles: [
            { href: `${styles}/pages/clase-13/02-animate.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-13/02-animate.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
