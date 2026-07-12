/*
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase18-formulario-validacion-cliente-servidor.js  --  /src/routes/route-clase18-formulario-validacion-cliente-servidor.js  -----  *
    *  --------------------------------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase18FormularioValidacionClienteServidor = {
    id: 'clase18FormularioValidacionClienteServidor',
    favicon: favicon,
    pageTitle: 'Clase 18 - Formulario Validacion Cliente Servidor',
    path: '/clase18-formularios-ajax/formulario-validacion-cliente-servidor',
    components: {
        "#layoutHeader": layoutHeader,
        "#btnNavbar": btnNavbar,
        "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
        "#layoutNavbar": layoutNavbar,
        "#layoutNavbarThemesUI": layoutNavbarThemesUI,
        "#layoutMain": `${pages}/clase-18/04-formulario-validacion-cliente-servidor.html`,
        "#layoutFooter": layoutFooter,
    },
    headerTitle: 'Clase 18 - Formulario Validacion Cliente Servidor',
    styles: [
        { href: `${styles}/pages/clase-18/clase-18-styles.css` },
    ],
    scripts: [
        { src: `${scripts}/tooltips.js` },
        { src: `${scripts}/clase-18/04-formulario-validacion-cliente-servidor.js` },
    ],
    libs: [
        { name: 'tooltip' },
        { name: 'draggable' },
    ],
};
