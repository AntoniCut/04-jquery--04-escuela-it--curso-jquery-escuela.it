/*
    *  --------------------------------------------------------------  *
    *  -----  /route-script.d.js  --  /types/route-script.d.js  -----  *
    *  --------------------------------------------------------------  *
*/


/**
 * ---------------------------
 * -----  `RouteScript`  -----
 * ---------------------------
 * @typedef {Object} RouteScript - Representa un script que debe cargarse dinámicamente.
 * @property {string} src - Ruta absoluta o relativa del archivo JS.
 * @property {'classic'|'module'} [type] - Tipo de carga del script. Por defecto `classic`.
 * @property {string|null} [exportFunctionName] - Nombre de una función exportada a ejecutar tras importar un módulo.
 */