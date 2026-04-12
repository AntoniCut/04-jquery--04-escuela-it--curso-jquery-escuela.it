/*
    *  -------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease-animate-colors.js  --  /src/routes/route-clase13-plugin-ease-animate-colors.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase13PluginEaseAnimateColors = {
        id: 'clase13PluginEaseAnimateColors',
        favicon: favicon,
        pageTitle: 'Clase 13 - 4. Plugin Ease Animate Colors',
        path: '/clase13-efectos-y-animaciones/plugin-ease-animate-colors',
        components: {
            "#layoutHeader": layoutHeader,
            "#btnNavbar": btnNavbar,
            "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
            "#layoutNavbar": layoutNavbar,
            "#layoutNavbarThemesUI": layoutNavbarThemesUI,
            "#layoutMain": `${pages}/clase-13/04-plugin-ease-animate-colors.html`,
            "#layoutFooter": layoutFooter,
        },
        headerTitle: 'Clase 13 - 4. Plugin Ease Animate Colors',
        styles: [
            { href: `${styles}/pages/clase-13/04-plugin-ease-animate-colors.css` },
        ],
        scripts: [
            { src: `${scripts}/tooltips.js` },
            { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
            { src: `${base}/app/plugins/jquery-animate-colors/jquery.animate-colors-min.js` },
            { src: `${scripts}/clase-13/04-plugin-ease-animate-colors.js` },
        ]
};
