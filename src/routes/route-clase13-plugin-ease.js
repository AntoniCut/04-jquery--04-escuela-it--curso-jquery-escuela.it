/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease.js  --  /src/routes/route-clase13-plugin-ease.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/


import { base } from '../main.js';
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
export const routeClase13PluginEase = {
        id: 'clase13PluginEase',
        favicon: favicon,
        pageTitle: 'Clase 13 - 3. Plugin Ease',
        path: '/clase13-efectos-y-animaciones/plugin-ease',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-13/03-plugin-ease.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - 3. Plugin Ease',
        styles: [
            { href: `${styles}/pages/clase-13/03-plugin-ease.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
            { src: `${scripts}/clase-13/03-plugin-ease.js` },
        ]
};
