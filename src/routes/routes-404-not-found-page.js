/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /routes-404-not-found-page.js  --  /src/routes/routes-404-not-found-page.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
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
export const routes404NotFoundPage = [

    {
        id: '404NotFoundPage',
        favicon: favicon,
        pageTitle: "404 | Not Found",
        path: "/404",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/404/404-not-found-page.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Página no encontrada - 404 Not Found Page",
        styles: [
            { href: `${styles}/pages/00-home.css` }
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    }

];
