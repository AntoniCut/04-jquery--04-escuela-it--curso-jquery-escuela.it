/*
    -------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------
    ----------  /04-escuela.it/  --------------------------
    ----------  /curso-jquery-escuela.it/  ----------------
    ----------  /src/scripts/spa/  ------------------------
    ----------  /spa-curso-jquery-escuela-it.js  ----------
    -------------------------------------------------------
*/


import {

    routes00Home,
    routesClase01,
    routesClase02,
    routesClase03,
    routesClase04,
    routesClase05,
    routesClase06,
    routesClase07,
    routesClase08,
    routesClase09,
    routesClase10

} from '../routes/index.js';    


/**
 * @typedef {import('../types/route-types.js').Route} Route
 * @typedef {import('../types/config-option-spa-types.js').ConfigOptionsSPA} ConfigOptionsSPA
 */



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

    /**
     * - Array que combina todas las rutas definidas para la aplicación SPA.
     * @type {Route[]}
     */
    const allRoutes = [
        ...routes00Home,
        ...routesClase01,
        ...routesClase02,
        ...routesClase03,
        ...routesClase04,
        ...routesClase05,
        ...routesClase06,
        ...routesClase07,
        ...routesClase08,
        ...routesClase09,
        ...routesClase10
    ];

    /**
     * - Contenedor raíz de la SPA
     * @type {JQuery<HTMLDivElement>}
     */
    const $layout = $('#layout');

    /**
     * - Opciones para el plugin SPA
     * @example - route.components = { "#selector": "archivo.html" }
     *
     * @type {ConfigOptionsSPA}
     */

    const optionsPluginsSPA = {
        routes: allRoutes,
        base: '/04-escuela.it/curso-jquery-escuela.it',
        draggable: true
    };

    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js - v4  ----------
    $layout.spaWithMethodLoadFromJQuery(optionsPluginsSPA);


};
