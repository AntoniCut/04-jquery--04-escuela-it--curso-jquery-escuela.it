/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /route-clase10-dimensiones.js  --  /src/routes/route-clase10-dimensiones.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
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
export const routeClase10Dimensiones = {
        id: 'clase10Dimensiones',
        favicon: favicon,
        pageTitle: 'Clase 10 - 5. Dimensiones',
        path: '/clase10-manipulacion-avanzada-del-contenido/05-dimensiones',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/05-dimensiones.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 5. Dimensiones',
        styles: [
            { href: `${styles}/pages/clase-10/05-dimensiones.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/05-dimensiones.js` },
        ]
};
