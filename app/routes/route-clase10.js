/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase10.js  --  /src/routes/route-clase10.js  -----  *
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
export const routeClase10 = {
        id: 'clase10',
        favicon: favicon,
        pageTitle: 'Clase 10 - Manipulación Avanzada del Contenido',
        path: '/clase10-manipulacion-avanzada-del-contenido',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/00-manipulacion-avanzada-del-contenido.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - Manipulación Avanzada del Contenido',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
