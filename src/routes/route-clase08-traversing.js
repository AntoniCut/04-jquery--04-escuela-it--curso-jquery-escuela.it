/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase08-traversing.js  --  /src/routes/route-clase08-traversing.js  -----  *
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
export const routeClase08Traversing = {
        id: 'clase08Traversing',
        favicon: favicon,
        pageTitle: 'Clase 8 - 3. Traversing en jQuery',
        path: '/clase08-selectores-jquery-traversing/03-traversing',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/03-traversing.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 8 - 3. Traversing en jQuery',
        styles: [
            { href: `${styles}/pages/clase-08/03-traversing.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/03-traversing.js` },
        ]
};
