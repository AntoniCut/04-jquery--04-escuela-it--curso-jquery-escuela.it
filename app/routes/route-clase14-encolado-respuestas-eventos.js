/*
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase14-encolado-respuestas-eventos.js  --  /src/routes/route-clase14-encolado-respuestas-eventos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


/** - Desestructuracion de paths */
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


/** @type {import('../../types/index.js').Route} */
export const routeClase14EncoladoRespuestasEventos = {
        id: 'clase14EncoladoRespuestasEventos',
        favicon: favicon,
        pageTitle: 'Clase 14 - 5. Encolado Respuestas Eventos',
        path: '/clase14-cola-de-efectos/encolado-respuestas-eventos',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-14/05-encolado-respuestas-eventos.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 14 - 5. Encolado Respuestas Eventos',
        styles: [
            { href: `${styles}/pages/clase-14/05-encolado-respuestas-eventos.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-14/05-encolado-respuestas-eventos.js` },
        ]
};