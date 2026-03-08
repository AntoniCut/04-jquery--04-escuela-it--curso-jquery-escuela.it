/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-10.js  --  /src/routes/routes-clase-10.js  -----  *
    * ----------------------------------------------------------------------  *  
*/



import { paths } from './paths.js';


/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


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

export const routesClase10 = [

    {
        id: 'clase10',
        favicon: favicon,
        pageTitle: "Clase 10 - Manipulación Avanzada del Contenido",
        path: "/clase10-manipulacion-avanzada-del-contenido",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/00-manipulacion-avanzada-del-contenido.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - Manipulación Avanzada del Contenido",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },


    {
        id: 'clase10AppendPreppend',
        favicon: favicon,
        pageTitle: "Clase 10 - 1. Inyección Append / Prepend",
        path: "/clase10-inyeccion-append-prepend",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/01-inyeccion-append-prepend.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 1. Inyección Append / Prepend",
        styles: [
            { href: `${styles}/pages/clase-10/01-inyeccion-append-preppend.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/01-inyeccion-append-preppend.js` }
        ]
    },


    {
        id: 'clase10AfterBefore',
        favicon: favicon,
        pageTitle: "Clase 10 - 2. Inyección After / Before",
        path: "/clase10-inyeccion-after-before",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/02-inyeccion-after-before.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 2. Inyección After / Before",
        styles: [
            { href: `${styles}/pages/clase-10/02-inyeccion-after-before.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/02-inyeccion-after-before.js` }
        ]
    },


    {
        id: 'clase10Dom',
        favicon: favicon,
        pageTitle: "Clase 10 - 3. Inyección DOM",
        path: "/clase10-inyeccion-dom",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/03-inyeccion-dom.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 3. Inyección DOM",
        styles: [
            { href: `${styles}/pages/clase-10/03-inyeccion-dom.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/03-inyeccion-dom.js` }
        ]
    },


    {
        id: 'clase10Envoltura',
        favicon: favicon,
        pageTitle: "Clase 10 - 4. Envoltura",
        path: "/clase10-envoltura",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/04-envoltura.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 4. Envoltura",
        styles: [
            { href: `${styles}/pages/clase-10/04-envoltura.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/04-envoltura.js` }
        ]
    },


    {
        id: 'clase10Dimensiones',
        favicon: favicon,
        pageTitle: "Clase 10 - 5. Dimensiones",
        path: "/clase10-dimensiones",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/05-dimensiones.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 5. Dimensiones",
        styles: [
            { href: `${styles}/pages/clase-10/05-dimensiones.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/05-dimensiones.js` }
        ]
    },


    {
        id: 'clase10ScrollOffset',
        favicon: favicon,
        pageTitle: "Clase 10 - 6. Scroll / Offset",
        path: "/clase10-scroll-offset",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-10/06-scroll-offset.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 10 - 6. Scroll / Offset",
        styles: [
            { href: `${styles}/pages/clase-10/06-scroll-offset.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-10/06-scroll-offset.js` }
        ]
    },
    

];
