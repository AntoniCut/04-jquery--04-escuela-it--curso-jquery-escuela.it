/*
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase19-eventos-personalizados-2.js  --  /src/routes/route-clase19-eventos-personalizados-2.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase19EventosPersonalizados2 = {
        id: 'clase19EventosPersonalizados2',
        favicon: favicon,
        pageTitle: 'Clase 19 - Eventos Personalizados 2',
        path: '/clase19-eventos-avanzados/eventos-personalizados-2',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-19/eventos-personalizados-2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 19 - Eventos Personalizados 2',
        styles: [
            { href: `${styles}/pages/clase-19/clase-19-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-19/eventos-personalizados-2.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
