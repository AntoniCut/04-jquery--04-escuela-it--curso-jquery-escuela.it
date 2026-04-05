/*
    *  -----------------------------------------------------------------------  *
    *  -----  /route-clase07-attr-prop.js  --  /src/routes/route-clase07-attr-prop.js  -----  *
    *  -----------------------------------------------------------------------  *
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
export const routeClase07AttrProp = {
        id: 'clase07AttrProp',
        favicon: favicon,
        pageTitle: 'Clase 7 - 2. Métodos attr() y prop()',
        path: '/clase07-manipulacion-basica-de-elementos/02-metodos-attr-prop',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-07/02-metodos-attr-prop.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 7 - 2. Métodos attr() y prop()',
        styles: [
            { href: `${styles}/pages/clase-07/02-metodos-attr-prop.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${scripts}/clase-07/02-metodos-attr-prop.js` },
        ]
};
