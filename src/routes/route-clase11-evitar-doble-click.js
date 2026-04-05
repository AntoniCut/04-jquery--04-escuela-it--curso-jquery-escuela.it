/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase11-evitar-doble-click.js  --  /src/routes/route-clase11-evitar-doble-click.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
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
export const routeClase11EvitarDobleClick = {
        id: 'clase11EvitarDobleClick',
        favicon: favicon,
        pageTitle: 'Clase 11 - 6. Evitar Doble Click',
        path: '/clase11-eventos-en-jquery/06-evitar-doble-click',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/06-evitar-doble-click.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 6. Evitar Doble Click',
        styles: [
            { href: `${styles}/pages/clase-11/06-evitar-doble-click.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/06-evitar-doble-click.js` },
        ]
};
