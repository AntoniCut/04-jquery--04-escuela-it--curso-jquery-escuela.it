/*
    *  ------------------------------------------  *
    *  -----  /spa.js  --  /src/spa/spa.js  -----  *
    *  ------------------------------------------  *
*/


import { base } from '../main.js';
import { routeManifest } from '../routes/route-manifest.js';
import { loadJQueryUILib } from '../libs/jquery-module/loader/load-jquery-ui-by-import.js';



/** @typedef {import('../../types/index.js').ConfigOptionsSPA} ConfigOptionsSPA */


/**
 *  -------------------
 *  ----- `spa()` -----
 *  -------------------
 * 
 * - Inicializa la lógica SPA usando jQuery.
 * - Configura las rutas del proyecto y las pasa al plugin dinámico
 *   `spaWithMethodLoadFromJQuery`.
 * - Se encarga únicamente de:
 *   -   ✔ cargar las rutas    
 *   -   ✔ pasar la configuración al plugin
 *   -   ✔ inicializar la SPA
 */
    
export const spa = () => {

    
    console.log('\n');
    console.warn('-----  spa.js cargado  -----');
    console.log('\n');


    /** @type {JQuery<HTMLDivElement>} - `-----  Contenedor raíz de la SPA  -----`     */
    const $layout = $('#layout');


    /** @type {ConfigOptionsSPA} - `-----  Opciones de configuración para la SPA  -----` */
    const optionsPluginsSPA = {
        routeManifest,
        routeModulesBase: `${base}/app/routes`,
        base,
        draggable: true,
        libLoader: loadJQueryUILib,
    };

    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js - v4  ----------
    $layout.spaWithMethodLoadFromJQuery(optionsPluginsSPA);


};
