/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase08-contexto.js  --  /src/routes/route-clase08-contexto.js  -----  *
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
export const routeClase08Contexto = {
        id: 'clase08Contexto',
        favicon: favicon,
        pageTitle: 'Clase 8 - 4. Partir de un Contexto',
        path: '/clase08-selectores-jquery-traversing/04-partir-de-un-contexto',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/04-partir-de-un-contexto.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 8 - 4. Partir de un Contexto',
        styles: [
            { href: `${styles}/pages/clase-08/04-partir-de-un-contexto.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/04-partir-de-un-contexto.js` },
        ]
};
