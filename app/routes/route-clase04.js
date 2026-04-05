/*
    *  -----------------------------------------------------------------  *
    *  -----  /route-clase04.js  --  /src/routes/route-clase04.js  -----  *
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
export const routeClase04 = {
        id: 'clase04',
        favicon: favicon,
        pageTitle: 'Clase 4 - Como se organiza el curso de jQuery en Escuela.it',
        path: '/clase04-como-se-organiza-el-curso',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-04/00-como-se-organiza-el-curso.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 4 - Como se organiza el curso de jQuery en Escuela.it',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
