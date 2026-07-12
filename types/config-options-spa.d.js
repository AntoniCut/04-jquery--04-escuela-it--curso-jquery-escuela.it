/*
    *  ------------------------------------------------------------------------  *
    *  -----  /config-options-spa.d.js  --  /types/config-options-spa.d.js  -----  *
    *  ------------------------------------------------------------------------  *
*/


/// <reference path="./route-manifest.d.js" />


/**
 * --------------------------------
 * -----  `ConfigOptionsSPA`  -----
 * --------------------------------
 * @typedef {Object} ConfigOptionsSPA - Objeto que define la configuración para el plugin `spaWithMethodLoadFromJQuery`
 * @property {RouteManifest[]} [routeManifest] - Manifiesto ligero de rutas para lazy loading.
 * @property {string} [routeModulesBase] - Ruta base para importar dinamicamente los modulos de ruta.
 * @property {string} base - Ruta base de la aplicación (se deja vacía si no se usa `history.pushState` o hash routing).
 * @property {boolean} [draggable=false] - Habilita la funcionalidad de arrastrar y soltar para cargar rutas (drag and drop).
 * @property {((name: string) => Promise<void>)|null} [libLoader=null] - Función para cargar módulos de jQuery UI bajo demanda por ruta.
 */