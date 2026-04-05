/*
    *  ------------------------------------------------------------------------------------------  *
    *  -----  /spa-curso-jquery-escuela-it.js  --  /src/spa/spa-curso-jquery-escuela-it.js  -----  *
    *  ------------------------------------------------------------------------------------------  *
*/


import { routeManifest } from '../routes/route-manifest.js';



/** @typedef {import('../../types').ConfigOptionsSPA} ConfigOptionsSPA */


/** @type {string} - `Base del proyecto` */
const base = '/04-escuela.it/curso-jquery-escuela.it';

/**
 *  -------------------------------------
 *  ----- `spaCursoJQueryEscuelaIt` -----
 *  -------------------------------------
 * 
 * - Inicializa la lógica SPA usando jQuery.
 * - Configura las rutas del proyecto y las pasa al plugin dinámico
 *   `spaWithMethodLoadFromJQuery`.
 * - Se encarga únicamente de:
 *   -   ✔ cargar las rutas    
 *   -   ✔ pasar la configuración al plugin
 *   -   ✔ inicializar la SPA
 */
    
export const spaCursoJQueryEscuelaIt = () => {

    
    console.log('\n');
    console.warn('-----  spa-curso-jquery-escuela-it.js cargado  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - `-----  Contenedor raíz de la SPA  -----`     */
    const $layout = $('#layout');


    /** @type {ConfigOptionsSPA} - `-----  Opciones de configuración para la SPA  -----` */
    const optionsPluginsSPA = {
        routeManifest,
        routeModulesBase: `${base}/app/routes`,
        base,
        draggable: true
    };

    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js - v4  ----------
    $layout.spaWithMethodLoadFromJQuery(optionsPluginsSPA);


};
