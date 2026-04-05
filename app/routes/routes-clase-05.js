/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-05.js  --  /src/routes/routes-clase-05.js  -----  *
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
export const routesClase05 = [

    {
        id: 'clase05',
        favicon: favicon,
        pageTitle: "Clase 5 - Introducción a jQuery",
        path: "/clase05-introduccion-a-jquery",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-05/00-introduccion-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 5 - Introducción a jQuery",
        styles: [
            { href: `${styles}/pages/clase-05/00-introduccion-jquery.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-05/00-introduccion-jquery.js` }
        ]
    }
   

];
