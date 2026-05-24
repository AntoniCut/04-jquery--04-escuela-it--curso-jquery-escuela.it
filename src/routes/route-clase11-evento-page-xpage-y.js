/*
    *  ---------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase11-evento-page-xpage-y.js  --  /src/routes/route-clase11-evento-page-xpage-y.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------  *
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
export const routeClase11EventoPageXPageY = {
        id: 'clase11EventoPageXPageY',
        favicon: favicon,
        pageTitle: 'Clase 11 - 7. Evento PageX PageY',
        path: '/clase11-eventos-en-jquery/07-evento-pagex-pagey',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/07-evento-pagex-pagey.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 7. Evento PageX PageY',
        styles: [
            { href: `${styles}/pages/clase-11/07-evento-pagex-pagey.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/07-evento-pagex-pagey.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ]
};
