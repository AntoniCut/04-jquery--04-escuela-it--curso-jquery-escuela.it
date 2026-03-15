/*
    *  ---------------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-by-cdn-local.js  --  /src/libs/jquery/core/scripts/load-jquery-by-cdn-local.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------  *
*/

import { loadJQueryByCdn } from './load-jquery-by-cdn.js';
import { loadJQueryByLocal } from './load-jquery-by-local.js';



/** 
 * --------------------------------------------------------------------
 * -----  `loadJQueryByCdnOLocal(cdnJQuery = null, localJQuery)`  -----
 * --------------------------------------------------------------------
 * 
 *  - `Carga jQuery desde un CDN con fallback a local si falla`
 * 
 * @param {CDNJQuery|null|undefined} cdnJQuery - Objeto con la configuración del CDN de jQuery. 
 * - Si es `null` o `undefined`, se cargará jQuery directamente desde la ruta local
 * @param {string} localJQuery - Ruta local (URL relativa o absoluta) del archivo jQuery a cargar en caso de que falle la carga desde el CDN
 * @returns {Promise<JQueryStatic>} - Promesa que se resuelve con el objeto `jQuery` cuando jQuery se ha cargado correctamente.
 */

export const loadJQueryByCdnOLocal = (cdnJQuery = null, localJQuery) => {


    return new Promise(
        
        /** 
         * @param {(jq: JQueryStatic) => void} resolve
         * @param {(err: Error) => void} reject 
         */
        (resolve, reject) => {


        //  -----  Verifica si jQuery ya está cargado  -----
        
         /** @type {JQueryStatic|undefined} */
        const jQuery = window.jQuery;

        //  -----  Si ya está cargado, resolver  -----
        if (jQuery && jQuery.fn && jQuery.fn.jquery) {

            console.warn("jQuery ya estaba cargado:", jQuery.fn.jquery);
            return resolve(jQuery);
        }


        //  -----  Si NO se pasó CDN, cargar directo desde local  -----
        if (!cdnJQuery || !cdnJQuery.srcCdn) {

            console.error("No se definió CDN de jQuery, cargando desde local...");
            
            //  -----  Cargar jQuery desde local  -----
            loadJQueryByLocal(localJQuery, resolve, reject);
            return;
        }

        //  -----  Intentar cargar jQuery desde CDN  -----
        loadJQueryByCdn(cdnJQuery, localJQuery, resolve, reject);

    });


}
