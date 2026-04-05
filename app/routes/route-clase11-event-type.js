/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase11-event-type.js  --  /src/routes/route-clase11-event-type.js  -----  *
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
export const routeClase11EventType = {
        id: 'clase11EventType',
        favicon: favicon,
        pageTitle: 'Clase 11 - 3. Event Type',
        path: '/clase11-eventos-en-jquery/03-event-type',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/03-event-type.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 3. Event Type',
        styles: [
            { href: `${styles}/pages/clase-11/03-event-type.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/03-event-type.js` },
        ]
};
