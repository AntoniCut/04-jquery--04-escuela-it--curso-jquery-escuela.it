/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-07.js  --  /src/routes/routes-clase-07.js  -----  *
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
export const routesClase07 = [

    {
        id: 'clase07',
        favicon: favicon,
        pageTitle: "Clase 7 - Manipulación Básica de Elementos",
        path: "/clase07-manipulacion-basica-de-elementos",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/00-manipulacion-basica-de-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - Manipulación Básica de Elementos",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },

    {
        id: 'clase07HtmlText',
        favicon: favicon,
        pageTitle: "Clase 7 - 1. Métodos html() y text()",
        path: "/clase07-manipulacion-basica-de-elementos/01-metodos-html-text",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/01-metodos-html-text.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 1. Métodos html() y text()",
        styles: [
            { href: `${styles}/pages/clase-07/01-metodos-html-text.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/01-metodos-html-text.js` }
        ]
    },

    {
        id: 'clase07AttrProp',
        favicon: favicon,
        pageTitle: "Clase 7 - 2. Métodos attr() y prop()",
        path: "/clase07-manipulacion-basica-de-elementos/02-metodos-attr-prop",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/02-metodos-attr-prop.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 2. Métodos attr() y prop()",
        styles: [
            { href: `${styles}/pages/clase-07/02-metodos-attr-prop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/02-metodos-attr-prop.js` }
        ]
    },


    {
        id: 'clase07DataRemoveData',
        favicon: favicon,
        pageTitle: "Clase 7 - 3. Métodos data() y removeData()",
        path: "/clase07-manipulacion-basica-de-elementos/03-metodos-data-removedata",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/03-metodos-data-removedata.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 3. Métodos data() y removeData()",
        styles: [
            { href: `${styles}/pages/clase-07/03-metodos-data-removedata.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/03-metodos-data-removedata.js` }
        ]
    },


    {
        id: 'clase07Each',
        favicon: favicon,
        pageTitle: "Clase 7 - 4. Método each() para recorrer elementos",
        path: "/clase07-manipulacion-basica-de-elementos/04-metodo-each-recorrer-elementos",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/04-metodo-each-recorrer-elementos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 7 - 4. Método each() para recorrer elementos",
        styles: [
            { href: `${styles}/pages/clase-07/04-metodo-each-recorrer-elementos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/04-metodo-each-recorrer-elementos.js` }
        ]

    }

];
