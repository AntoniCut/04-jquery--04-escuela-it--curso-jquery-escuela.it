/*
    *  -------------------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-ui-by-cdn-local.js  --  /src/libs/jquery/ui/scripts/load-jquery-ui-by-cdn-local.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------  *
*/


import { loadJQueryUIByCdn } from './load-jquery-ui-by-cdn.js';
import { loadJQueryUIByLocal } from './load-jquery-ui-by-local.js';


/** 
 * --------------------------------------------------------------------------
 * -----  `loadJQueryUIByCdnOLocal(cdnJQueryUI = null, localJQueryUI)`  -----
 * --------------------------------------------------------------------------
 * 
 *  - `Carga jQuery UI desde un CDN con fallback a local si falla`.
 * 
 * @param {CDNJQueryUI|null} cdnJQueryUI - Objeto con datos del CDN de jQuery UI. Si es `null`, se carga directamente desde local
 * @param {string} localJQueryUI - Ruta local a jQuery UI.
 * @returns {Promise<JQueryStatic>} - Promesa que se resuelve con el objeto `jQuery` cuando jQuery UI se ha cargado correctamente.
 * @note - Requiere que jQuery esté cargado previamente. Si no, lanzará error al intentar acceder a `jQuery.ui`.
 */

export const loadJQueryUIByCdnOLocal = (cdnJQueryUI = null, localJQueryUI) => {


    return new Promise(
        
        /** 
         * @param {(jq: JQueryStatic) => void} resolve
         * @param {(err: Error) => void} reject 
         */
        (resolve, reject) => {

        console.log('\n');
        console.warn("Cargando jQuery UI...");

        //  -----  Si NO se pasó CDN, cargar directo desde local  -----
        if (!cdnJQueryUI || !cdnJQueryUI.srcCdn) {

            console.error("No se definió CDN de jQuery UI, cargando desde local...");
            loadJQueryUIByLocal(localJQueryUI, resolve, reject);
            return;
        }

        //  -----  SI HAY CDN definido, intentar cargarlo  -----
        loadJQueryUIByCdn(cdnJQueryUI, localJQueryUI, resolve, reject);

    });

}
