/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase01.js  --  /src/routes/route-clase01.js  -----  *
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
export const routeClase01 = {
        id: 'clase01',
        favicon: favicon,
        pageTitle: 'Clase 1 - Que es jQuery',
        path: '/clase01-que-es-jquery',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-01/00-que-es-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 1 - Que es jQuery',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
