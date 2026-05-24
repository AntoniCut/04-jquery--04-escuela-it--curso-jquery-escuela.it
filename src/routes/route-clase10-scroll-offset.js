/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /route-clase10-scroll-offset.js  --  /src/routes/route-clase10-scroll-offset.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
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
export const routeClase10ScrollOffset = {
        id: 'clase10ScrollOffset',
        favicon: favicon,
        pageTitle: 'Clase 10 - 6. Scroll / Offset',
        path: '/clase10-manipulacion-avanzada-del-contenido/06-scroll-offset',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/06-scroll-offset.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 6. Scroll / Offset',
        styles: [
            { href: `${styles}/pages/clase-10/06-scroll-offset.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/06-scroll-offset.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
