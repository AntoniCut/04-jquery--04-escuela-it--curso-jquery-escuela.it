/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase10-append-prepend.js  --  /src/routes/route-clase10-append-prepend.js  -----  *
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
export const routeClase10AppendPrepend = {
        id: 'clase10AppendPrepend',
        favicon: favicon,
        pageTitle: 'Clase 10 - 1. Inyección Append / Prepend / AppendTo / PrependTo',
        path: '/clase10-manipulacion-avanzada-del-contenido/01-inyeccion-append-prepend',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/01-inyeccion-append-prepend.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 1. Inyección Append / Prepend / AppendTo / PrependTo',
        styles: [
            { href: `${styles}/pages/clase-10/01-inyeccion-append-prepend.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/01-inyeccion-append-prepend.js` },
        ]
};
