/*
    *  ---------------------------------------------------------------------  *
    *  -----  /routes-clase-10.js  --  /src/routes/routes-clase-10.js  -----  *
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
export const routesClase11 = [

    {
        id: 'clase11',
        favicon: favicon,
        pageTitle: "Clase 11 - Eventos en jQuery",
        path: "/clase11-eventos-en-jquery",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/00-eventos-en-jquery.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - Eventos en jQuery",
        styles: [],
        scripts: [
            { src: `${scripts}/tooltips.js` }
        ]
    },


    {
        id: 'clase11MetodoOn',
        favicon: favicon,
        pageTitle: "Clase 11 - 1. Método on()",
        path: "/clase11-eventos-en-jquery/01-metodo-on",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/01-metodo-on.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 1. Método on()",
        styles: [
            { href: `${styles}/pages/clase-11/01-metodo-on.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/01-metodo-on.js` }
        ]
    },


    {
        id: 'clase11MetodoOff',
        favicon: favicon,
        pageTitle: "Clase 11 - 2. Método off()",
        path: "/clase11-eventos-en-jquery/02-metodo-off",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/02-metodo-off.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 2. Método off()",
        styles: [
            { href: `${styles}/pages/clase-11/02-metodo-off.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/02-metodo-off.js` }
        ]
    },


    {
        id: 'clase11EventType',
        favicon: favicon,
        pageTitle: "Clase 11 - 3. Event Type",
        path: "/clase11-eventos-en-jquery/03-event-type",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/03-event-type.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 3. Event Type",
        styles: [
            { href: `${styles}/pages/clase-11/03-event-type.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/03-event-type.js` }
        ]
    },


    {
        id: 'clase11PreventDefault',
        favicon: favicon,
        pageTitle: "Clase 11 - 4. Prevent Default",
        path: "/clase11-eventos-en-jquery/04-prevent-default",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/04-prevent-default.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 4. Prevent Default",
        styles: [
            { href: `${styles}/pages/clase-11/04-prevent-default.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/04-prevent-default.js` }
        ]
    },


    {
        id: 'clase11StopPropagation',
        favicon: favicon,
        pageTitle: "Clase 11 - 5. Stop Propagation",
        path: "/clase11-eventos-en-jquery/05-stop-propagation",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/05-stop-propagation.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 5. Stop Propagation",
        styles: [
            { href: `${styles}/pages/clase-11/05-stop-propagation.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/05-stop-propagation.js` }
        ]
    },


    {
        id: 'clase11EvitarDobleClick',
        favicon: favicon,
        pageTitle: "Clase 11 - 6. Evitar Doble Click",
        path: "/clase11-eventos-en-jquery/06-evitar-doble-click",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/06-evitar-doble-click.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 6. Evitar Doble Click",
        styles: [
            { href: `${styles}/pages/clase-11/06-evitar-doble-click.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/06-evitar-doble-click.js` }
        ]
    },


    {
        id: 'clase11EventoPageXPageY',
        favicon: favicon,
        pageTitle: "Clase 11 - 7. Evento PageX PageY",
        path: "/clase11-eventos-en-jquery/07-evento-pagex-pagey",
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-11/07-evento-pagex-pagey.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: "Clase 11 - 7. Evento PageX PageY",
        styles: [
            { href: `${styles}/pages/clase-11/07-evento-pagex-pagey.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-11/07-evento-pagex-pagey.js` }
        ]
    }
    

];
