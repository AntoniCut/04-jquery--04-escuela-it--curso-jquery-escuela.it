/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /route-clase10-envoltura.js  --  /src/routes/route-clase10-envoltura.js  -----  *
    *  -------------------------------------------------------------------------------------  *
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
export const routeClase10Envoltura = {
        id: 'clase10Envoltura',
        favicon: favicon,
        pageTitle: 'Clase 10 - 4. Envoltura',
        path: '/clase10-manipulacion-avanzada-del-contenido/04-envoltura',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/04-envoltura.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 4. Envoltura',
        styles: [
            { href: `${styles}/pages/clase-10/04-envoltura.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/04-envoltura.js` },
        ]
};
