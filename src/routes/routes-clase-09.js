/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-09.js  ----------------
    -------------------------------------------------
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

export const routesClase09 = [

    {
        id: 'clase09',
        favicon: favicon,
        pageTitle: "Clase 9 - Dudas y Conceptos 1",
        path: "/clase9-dudas-y-conceptos-1",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/00-dudas-y-conceptos-1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - Dudas y Conceptos 1",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },


    {
        id: 'clase09Ejercicio00This',
        favicon: favicon,
        pageTitle: "Clase 9 - Ejercicio 0 con THIS",
        path: "/clase9-ejercicio-0-this",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/00-ejercicio-00-this.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 0. Ejercicio 0 con THIS",
        styles: [
            { href: `${styles}/pages/clase-09/00-ejercicio-00-this.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/00-ejercicio-00-this.js` }
        ]
    },


    {
        id: 'clase09Ejercicio01',
        favicon: favicon,
        pageTitle: "Clase 9 - 1. Ejercicio 1",
        path: "/clase9-ejercicio-1",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/01-ejercicio-01.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 1. Ejercicio 1",
        styles: [
            { href: `${styles}/pages/clase-09/01-ejercicio-01.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/01-ejercicio-01.js` }
        ]
    },


    {
        id: 'clase09Ejercicio02',
        favicon: favicon,
        pageTitle: "Clase 9 - 2. Ejercicio 2",
        path: "/clase9-ejercicio-2",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/02-ejercicio-02.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 2. Ejercicio 2",
        styles: [
            { href: `${styles}/pages/clase-09/02-ejercicio-02.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/02-ejercicio-02.js` }
        ]
    },


    {
        id: 'clase09Ejercicio03',
        favicon: favicon,
        pageTitle: "Clase 9 - 3. Ejercicio 3",
        path: "/clase9-ejercicio-3",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/03-ejercicio-03.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 3. Ejercicio 3",
        styles: [
            { href: `${styles}/pages/clase-09/03-ejercicio-03.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/03-ejercicio-03.js` }
        ]
    },



    {
        id: 'clase09Ejercicio04',
        favicon: favicon,
        pageTitle: "Clase 9 - 4. Ejercicio 4",
        path: "/clase9-ejercicio-4",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/04-ejercicio-04.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 4. Ejercicio 4",
        styles: [
            { href: `${styles}/pages/clase-09/04-ejercicio-04.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/04-ejercicio-04.js` }
        ]
    },


    {
        id: 'clase09Ejercicio05',
        favicon: favicon,
        pageTitle: "Clase 9 - 5. Ejercicio 5",
        path: "/clase9-ejercicio-5",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/05-ejercicio-05.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 5. Ejercicio 5",
        styles: [
            { href: `${styles}/pages/clase-09/05-ejercicio-05.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/05-ejercicio-05.js` }
        ]
    },


    {
        id: 'clase09Ejercicio06Date',
        favicon: favicon,
        pageTitle: "Clase 9 - 6. Ejercicio 6 con DATE",
        path: "/clase9-ejercicio-6-date",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-09-dudas-y-conceptos-1/06-ejercicio-06-date.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 9 - 6. Ejercicio 6 con DATE",
        styles: [
            { href: `${styles}/pages/clase-09/06-ejercicio-06-date.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-09/06-ejercicio-06-date.js` }
        ]
    }
    
    

];
