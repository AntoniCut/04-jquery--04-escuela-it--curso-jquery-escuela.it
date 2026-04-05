/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-12.js  --  /src/routes/routes-clase-12.js  -----  *
    *  ---------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


/** - `Desestructuración de paths` */
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


/** @type {Route[]} - `Array de objetos de tipo Route que definen las rutas de la aplicación SPA` */
export const routesClase12 = [

    {
        id: 'clase12',
        favicon: favicon,
        pageTitle: "Clase 12 - Eventos de Teclado y Ratón",
        path: "/clase12-eventos-teclado-raton",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/00-eventos-de-teclado-y-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 12 - Eventos de Teclado y Ratón",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },


    {
        id: 'clase12MovimientoRaton',
        favicon: favicon,
        pageTitle: "Clase 12 - 1. Seguir Movimiento del Ratón",
        path: "/clase12-eventos-teclado-raton/01-seguir-movimiento-del-raton",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/01-seguir-movimiento-raton.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 12 - 1. Seguir Movimiento del Ratón",
        styles: [
            { href: `${styles}/pages/clase-12/01-seguir-movimiento-raton.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/01-seguir-movimiento-raton.js` }
        ]
    },


    {
        id: 'clase12MenuContextual',
        favicon: favicon,
        pageTitle: "Clase 12 - 2. Menú Contextual Personalizado",
        path: "/clase12-eventos-teclado-raton/02-menu-contextual-personalizado",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/02-menu-contextual-personalizado.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 12 - 2. Menú Contextual Personalizado",
        styles: [
            { href: `${styles}/pages/clase-12/02-menu-contextual-personalizado.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/02-menu-contextual-personalizado.js` }
        ]
    },


    {
        id: 'clase12TextareaCuentaCaracteres',
        favicon: favicon,
        pageTitle: "Clase 12 - 3. Textarea con Cuenta de Caracteres",
        path: "/clase12-eventos-teclado-raton/03-textarea-cuenta-caracteres",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/03-textarea-cuenta-caracteres.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 12 - 3. Textarea con Cuenta de Caracteres",
        styles: [
            { href: `${styles}/pages/clase-12/03-textarea-cuenta-caracteres.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/03-textarea-cuenta-caracteres.js` }
        ]
    }
   

];
