/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase11-metodo-off.js  --  /src/routes/route-clase11-metodo-off.js  -----  *
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
export const routeClase11MetodoOff = {
        id: 'clase11MetodoOff',
        favicon: favicon,
        pageTitle: 'Clase 11 - 2. Método off()',
        path: '/clase11-eventos-en-jquery/02-metodo-off',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/02-metodo-off.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 2. Método off()',
        styles: [
            { href: `${styles}/pages/clase-11/02-metodo-off.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/02-metodo-off.js` },
        ]
};
