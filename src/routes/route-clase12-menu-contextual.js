/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase12-menu-contextual.js  --  /src/routes/route-clase12-menu-contextual.js  -----  *
    *  -----------------------------------------------------------------------  *
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
export const routeClase12MenuContextual = {
        id: 'clase12MenuContextual',
        favicon: favicon,
        pageTitle: 'Clase 12 - 2. Menú Contextual Personalizado',
        path: '/clase12-eventos-teclado-raton/02-menu-contextual-personalizado',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/02-menu-contextual-personalizado.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 12 - 2. Menú Contextual Personalizado',
        styles: [
            { href: `${styles}/pages/clase-12/02-menu-contextual-personalizado.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/02-menu-contextual-personalizado.js` },
        ]
};
