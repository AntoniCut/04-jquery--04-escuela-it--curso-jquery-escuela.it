/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase16-get-ajax-datos-loading-img.js  --  /src/routes/route-clase16-get-ajax-datos-loading-img.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase16GetAjaxDatosLoadingImg = {
        id: 'clase16GetAjaxLoadingImg',
        favicon: favicon,
        pageTitle: 'Clase 16 - 5. Get Ajax Loading Img',
        path: '/clase16-ajax-interfaz-alto-nivel/get-ajax-loading-img',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-16/05-get-ajax-loading-img.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 16 - 5. Get Ajax Loading Img',
        styles: [
            { href: `${styles}/pages/clase-16/05-get-ajax-loading-img.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-16/05-get-ajax-loading-img.js` },
        ]
};