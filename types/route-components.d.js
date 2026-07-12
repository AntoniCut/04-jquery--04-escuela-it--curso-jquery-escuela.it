/*
    *  ----------------------------------------------------------------  *
    *  -----  /route-components.d.js  --  /types/route-components.d.js  -----  *
    *  ----------------------------------------------------------------  *
*/


/**
 * -------------------------------
 * -----  `RouteComponents`  -----
 * -------------------------------
 * @typedef {Record<string, string|undefined>} RouteComponents
 * - Mapa de componentes HTML a cargar dinámicamente.
 * - Cada valor puede ser string o undefined.
 * - Objeto dinámico donde la clave es el selector CSS
 *   y el valor es la ruta al archivo HTML que se cargará en ese contenedor.
 *
 *     - Ejemplo:
 *     - {
 *         - "#layoutHeader": "/app/components/layout/header.html",
 *         - "#layoutMain": "/app/pages/home.html",
 *         - "#widgetPromo": "/app/components/widgets/promo.html"
 *      - }
 */