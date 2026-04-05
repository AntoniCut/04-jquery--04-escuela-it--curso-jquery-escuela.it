/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase10-after-before.js  --  /src/routes/route-clase10-after-before.js  -----  *
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
export const routeClase10AfterBefore = {
        id: 'clase10AfterBefore',
        favicon: favicon,
        pageTitle: 'Clase 10 - 2. Inyección After / Before / InsertAfter / InsertBefore',
        path: '/clase10-manipulacion-avanzada-del-contenido/02-inyeccion-after-before',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/02-inyeccion-after-before.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 2. Inyección After / Before / InsertAfter / InsertBefore',
        styles: [
            { href: `${styles}/pages/clase-10/02-inyeccion-after-before.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/02-inyeccion-after-before.js` },
        ]
};
