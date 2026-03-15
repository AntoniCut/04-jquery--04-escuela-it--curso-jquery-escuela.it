/*
    *  -------------------------------------------------------------------  *
    *  -----  /routes-00-home.js  --  /src/routes/routes-00-home.js  -----  *
    *  -------------------------------------------------------------------  *
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
export const routes00Home = [

    {
        id: 'home',
        favicon: favicon,
        pageTitle: "Curso de jQuery Escuela.IT",
        path: "/",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/00-home.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Curso de jQuery de Escuela.IT",
        styles: [
            { href: `${styles}/pages/00-home.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    }
   

];
