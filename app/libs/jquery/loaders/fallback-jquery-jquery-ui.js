/*
    *  ------------------------------------------------------------------------------------------------------  *
    *  -----  /fallback-jquery-jquery-ui.js  --  /src/libs/jquery/loaders/fallback-jquery-jquery-ui.js  -----  *
    *  ------------------------------------------------------------------------------------------------------  *
*/


import { cdnJQuery_4_0_0_min } from '../core/cdn/cdn-jquery-4.0.0.min.js';
import { loadJQueryByCdnOLocal } from '../core/scripts/load-jquery-by-cdn-local.js';

import { cdnJQueryUI_1_14_1_min } from '../ui/cdn/cdn-jquery-ui-1.14.1.min.js';
import { loadJQueryUIByCdnOLocal } from "../ui/scripts/load-jquery-ui-by-cdn-local.js";



/*
    --------------------------------------------------------------------
    -----  Configuracion de CDNs y locales  -  jQuery y jQuery UI  -----
    --------------------------------------------------------------------
*/

/** `-----  Configuración de CDN de jQuery  -----` */
const cdnJQuery = cdnJQuery_4_0_0_min;


/** @type {string}  `-----  Rutas locales  -  Utilizar Path Absoluto  -----`  */
const localJQuery = "/app/libs/jquery/local/jquery-4.0.0-beta.min.js";


/** `-----  Configuración de CDN de jQuery UI  -----` */
const cdnJQueryUI = cdnJQueryUI_1_14_1_min;

/** @type {string}  `-----  Rutas locales  -  Utilizar Path Absoluto  -----`  */
const localJQueryUI = "/app/libs/jquery-ui/local/jquery-ui-1.14.1.min.js";


/**
 * ----------------------------------------
 * -----  `fallbackJQueryJQueryUI()`  -----
 * ----------------------------------------
 * 
 * - `Carga jQuery y jQuery UI con fallback (CDN → local)`
 * 
 * @async
 * @returns {Promise<JQueryStatic>} jQuery UI cargado
 */

export const fallbackJQueryJQueryUI = async () => {

    console.log('\n');
    console.warn("-----  Iniciando Fallback para la carga de jQuery y jQueryUI  -----");
    console.log('\n');

    //  -----  Cargar jQuery con fallback (CDN → local)  -----
    const jQuery = await loadJQueryByCdnOLocal(cdnJQuery, localJQuery);

    if (!jQuery.fn || !jQuery.fn.jquery) {
        throw new Error("jQuery no se inicializó correctamente");
    }

    console.warn("jQuery cargado - versión:", $.fn.jquery);

    //  -----  Cargar jQuery UI con fallback (CDN → local)  -----
    return await loadJQueryUIByCdnOLocal(cdnJQueryUI, localJQueryUI);

};
