/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase15.js  --  /src/routes/route-clase15.js  -----  *
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
export const routeClase15 = {
        id: 'clase15',
        favicon: favicon,
        pageTitle: 'Clase 15 - JSON',
        path: '/clase15-json',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-15/00-json.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 15 - JSON',
        styles: [
            { href: `${styles}/pages/clase-15/00-json.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-15/00-json.js`, type: 'module' },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};