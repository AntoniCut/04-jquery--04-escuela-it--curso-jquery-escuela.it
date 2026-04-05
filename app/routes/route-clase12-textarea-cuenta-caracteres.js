/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase12-textarea-cuenta-caracteres.js  --  /src/routes/route-clase12-textarea-cuenta-caracteres.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
*/


import { paths } from './paths.js';


/** @typedef {import('../../types/index.js').Route} Route */


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


/** @type {Route} */
export const routeClase12TextareaCuentaCaracteres = {
        id: 'clase12TextareaCuentaCaracteres',
        favicon: favicon,
        pageTitle: 'Clase 12 - 3. Textarea con Cuenta de Caracteres',
        path: '/clase12-eventos-teclado-raton/03-textarea-cuenta-caracteres',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-12/03-textarea-cuenta-caracteres.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 12 - 3. Textarea con Cuenta de Caracteres',
        styles: [
            { href: `${styles}/pages/clase-12/03-textarea-cuenta-caracteres.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-12/03-textarea-cuenta-caracteres.js` },
        ]
};
