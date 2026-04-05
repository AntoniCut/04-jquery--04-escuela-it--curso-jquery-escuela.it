/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /route-clase07-each.js  --  /src/routes/route-clase07-each.js  -----  *
    *  ---------------------------------------------------------------------------  *
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
export const routeClase07Each = {
        id: 'clase07Each',
        favicon: favicon,
        pageTitle: 'Clase 7 - 4. Método each() para recorrer elementos',
        path: '/clase07-manipulacion-basica-de-elementos/04-metodo-each-recorrer-elementos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/04-metodo-each-recorrer-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - 4. Método each() para recorrer elementos',
        styles: [
            { href: `${styles}/pages/clase-07/04-metodo-each-recorrer-elementos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/04-metodo-each-recorrer-elementos.js` },
        ]
};
