/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-ejemplo-stop.js  --  /src/routes/route-clase14-ejemplo-stop.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
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
export const routeClase14EjemploStop = {
        id: 'clase14EjemploStop',
        favicon: favicon,
        pageTitle: 'Clase 14 - 2. Ejemplo Stop',
        path: '/clase14-cola-de-efectos/ejemplo-stop',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/02-ejemplo-stop.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 2. Ejemplo Stop',
        styles: [
            { href: `${styles}/pages/clase-14/02-ejemplo-stop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/02-ejemplo-stop.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};