/*
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /route-clase13-plugin-ease-animate-colors-options.js  --  /src/routes/route-clase13-plugin-ease-animate-colors-options.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------------------------  *
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
export const routeClase13PluginEaseAnimateColorsOptions = {
    id: 'clase13PluginEaseAnimateColorsOptions',
    favicon: favicon,
    pageTitle: 'Clase 13 - 4. Plugin Ease Animate Colors Options',
    path: '/clase13-efectos-y-animaciones/plugin-ease-animate-colors-options',
    components: {
        "#layoutHeader": layoutHeader,
        "#btnNavbar": btnNavbar,
        "#btnNavbarThemesJQueryUI": btnNavbarThemesJQueryUI,
        "#layoutNavbar": layoutNavbar,
        "#layoutNavbarThemesUI": layoutNavbarThemesUI,
        "#layoutMain": `${pages}/clase-13/05-plugin-ease-animate-colors-options.html`,
        "#layoutFooter": layoutFooter,
    },
    headerTitle: 'Clase 13 - 4. Plugin Ease Animate Colors Options',
    styles: [
        { href: `${styles}/pages/clase-13/05-plugin-ease-animate-colors-options.css` },
    ],
    scripts: [
        { src: `${scripts}/tooltips.js` },
        { src: `${base}/app/plugins/jquery-easing/jquery.easing.1.3.min.js` },
        { src: `${base}/app/plugins/jquery-animate-colors/jquery.animate-colors-min.js` },
        { src: `${scripts}/clase-13/05-plugin-ease-animate-colors-options.js` },
    ]
};
