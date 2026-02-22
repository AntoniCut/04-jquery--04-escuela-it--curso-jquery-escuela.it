/*
    -------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------
    ----------  /04-escuela.it/  --------------------
    ----------  /curso-jquery-escuela.it/  ----------
    ----------  /src/routes/  -----------------------
    ----------  /routes-clase-05.js  ----------------
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

export const routesClase06 = [

    {
        id: 'clase06',
        favicon: favicon,
        pageTitle: "Clase 6 - Primeros Pasos con jQuery",
        path: "/clase6-primeros-pasos",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06-primeros-pasos-con-jquery/00-primeros-pasos-con-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 6 - Primeros Pasos con jQuery",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },


    {
        id: 'clase06Ejemplo1',
        favicon: favicon,
        pageTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 1",
        path: "/clase6-primeros-pasos-ejemplo1",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06-primeros-pasos-con-jquery/01-ejemplo1.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 1",
        styles: [
            { href: `${styles}/pages/clase-06/01-ejemplo1.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/01-ejemplo1.js` }
        ]
    },


    {
        id: 'clase06Ejemplo2',
        favicon: favicon,
        pageTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 2",
        path: "/clase6-primeros-pasos-ejemplo2",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-06-primeros-pasos-con-jquery/02-ejemplo2.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 6 - Primeros Pasos con jQuery - Ejemplo 2",
        styles: [
            { href: `${styles}/pages/clase-06/02-ejemplo2.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-06/02-ejemplo2.js` }
        ]
    }
   

];
