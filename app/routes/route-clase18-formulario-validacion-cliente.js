/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario-validacion-cliente.js  --  /src/routes/route-clase18-formulario-validacion-cliente.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';

/// <reference path="../../../types/route.d.js" />


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


/** @type {Route} */
export const routeClase18FormularioValidacionCliente = {
        id: 'clase18FormularioValidacionCliente',
        favicon: favicon,
        pageTitle: 'Clase 18 - Formulario Validacion Cliente',
        path: '/clase18-formularios-ajax/formulario-validacion-cliente',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-18/03-formulario-validacion-cliente.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 18 - Formulario Validacion Cliente',
        styles: [
            { href: `${styles}/pages/clase-18/clase-18-styles.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-18/03-formulario-validacion-cliente.js` },
        ],
        libs: [
            { name: 'tooltip' },
            { name: 'draggable' },
        ],
};
