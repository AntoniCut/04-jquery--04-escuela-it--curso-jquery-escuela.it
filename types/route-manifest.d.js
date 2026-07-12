/*
    *  ------------------------------------------------------------------  *
    *  -----  /route-manifest.d.js  --  /types/route-manifest.d.js  -----  *
    *  ------------------------------------------------------------------  *
*/


/**
 * -----------------------------
 * -----  `RouteManifest`  -----
 * -----------------------------
 * @typedef {Object} RouteManifest
 * - Tipo para el manifiesto de rutas.
 * - Solo contiene id, path y nombre de archivo (sin imports).
 * - Se usa para lazy loading: el modulo de cada ruta se importa dinamicamente bajo demanda.
 * @property {string} id - Identificador unico de la ruta (igual al data-id del enlace HTML).
 * @property {string} path - Path de la URL interna.
 * @property {string} file - Nombre del archivo que contiene la ruta (sin extension).
 */