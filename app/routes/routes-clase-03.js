/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-03.js  --  /src/routes/routes-clase-03.js  -----  *
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
export const routesClase03 = [

    {
        id: 'clase03',
        favicon: favicon,
        pageTitle: "Clase 3 - Práctica primeros pasos con jQuery",
        path: "/clase03-practica-primeros-pasos-con-jquery",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-03/00-practica-primeros-pasos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 3 - Práctica primeros pasos con jQuery",
        styles: [
            { href: `${styles}/pages/clase-03/00-practica-primeros-pasos.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-03/00-practica-primeros-pasos.js` }
        ]
    }
   

];
