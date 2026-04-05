/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase10-dom.js  --  /src/routes/route-clase10-dom.js  -----  *
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
export const routeClase10Dom = {
        id: 'clase10Dom',
        favicon: favicon,
        pageTitle: 'Clase 10 - 3. Inyección DOM',
        path: '/clase10-manipulacion-avanzada-del-contenido/03-inyeccion-dom',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/03-inyeccion-dom.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 10 - 3. Inyección DOM',
        styles: [
            { href: `${styles}/pages/clase-10/03-inyeccion-dom.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/03-inyeccion-dom.js` },
        ]
};
