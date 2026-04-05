/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase11-stop-propagation.js  --  /src/routes/route-clase11-stop-propagation.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
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
export const routeClase11StopPropagation = {
        id: 'clase11StopPropagation',
        favicon: favicon,
        pageTitle: 'Clase 11 - 5. Stop Propagation',
        path: '/clase11-eventos-en-jquery/05-stop-propagation',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/05-stop-propagation.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 11 - 5. Stop Propagation',
        styles: [
            { href: `${styles}/pages/clase-11/05-stop-propagation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/05-stop-propagation.js` },
        ]
};
