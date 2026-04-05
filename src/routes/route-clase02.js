/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase02.js  --  /src/routes/route-clase02.js  -----  *
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
export const routeClase02 = {
        id: 'clase02',
        favicon: favicon,
        pageTitle: 'Clase 2 - Es Necesario Utilizar jQuery en la Actualidad',
        path: '/clase02-utilizar-jquery-en-la-actualidad',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-02/00-utilizar-jquery-en-la-actualidad.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 2 - Es Necesario Utilizar jQuery en la Actualidad',
        styles: [

        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
        ]
};
