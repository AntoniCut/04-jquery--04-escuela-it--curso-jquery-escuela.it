/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-08.js  --  /src/routes/routes-clase-08.js  -----  *
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
export const routesClase08 = [

    {
        id: 'clase08',
        favicon: favicon,
        pageTitle: "Clase 8 - Selectores jQuery y Traversing",
        path: "/clase08-selectores-jquery-traversing",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/00-selectores-jquery-y-traversing.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 8 - Selectores jQuery y Traversing",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },

    {
        id: 'clase08SelectoresJerarquia',
        favicon: favicon,
        pageTitle: "Clase 8 - 1. Selectores Jerarquía",
        path: "/clase08-selectores-jquery-traversing/01-selectores-jerarquia",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/01-selectores-jerarquia.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 8 - 1. Selectores Jerarquía",
        styles: [
            { href: `${styles}/pages/clase-08/01-selectores-jerarquia.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/01-selectores-jerarquia.js` }
        ]
    },


    {
        id: 'clase08ProbarSelectores',
        favicon: favicon,
        pageTitle: "Clase 8 - 2. Probando Selectores",
        path: "/clase08-selectores-jquery-traversing/02-probar-selectores",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/02-probar-selectores.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 8 - 2. Probando Selectores",
        styles: [
            { href: `${styles}/pages/clase-08/02-probar-selectores.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/02-probar-selectores.js` }
        ]
    },


    {
        id: 'clase08Traversing',
        favicon: favicon,
        pageTitle: "Clase 8 - 3. Traversing en jQuery",
        path: "/clase08-selectores-jquery-traversing/03-traversing",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/03-traversing.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 8 - 3. Traversing en jQuery",
        styles: [
            { href: `${styles}/pages/clase-08/03-traversing.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/03-traversing.js` }
        ]
    },


    {
        id: 'clase08Contexto',
        favicon: favicon,
        pageTitle: "Clase 8 - 4. Partir de un Contexto",
        path: "/clase08-selectores-jquery-traversing/04-partir-de-un-contexto",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-08/04-partir-de-un-contexto.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 8 - 4. Partir de un Contexto",
        styles: [
            { href: `${styles}/pages/clase-08/04-partir-de-un-contexto.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-08/04-partir-de-un-contexto.js` }
        ]
    },

    

];
