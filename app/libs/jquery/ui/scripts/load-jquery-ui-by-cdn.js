/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-ui-by-cdn.js  --  /src/libs/jquery/ui/scripts/load-jquery-ui-by-cdn.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/


import { loadJQueryUIByLocal } from './load-jquery-ui-by-local.js';


/** 
 * ------------------------------------------------------------------------------
 * -----  `loadJQueryUIByCdn(cdnJQueryUI, localJQueryUI, resolve, reject)`  -----
 * ------------------------------------------------------------------------------
 * 
 *  - `Carga jQuery UI desde un CDN`.
 * 
 * @param {CDNJQueryUI} cdnJQueryUI - Configuración del CDN de jQuery UI
 * @param {string} localJQueryUI - Ruta local para cargar jQuery UI en caso de fallo del CDN.
 * @param {(jQuery: JQueryStatic) => void} resolve - Callback al cargarse jQuery UI
 * @param {(error: Error) => void} reject - Callback si ocurre un error
 * @returns {void} No devuelve nada; usa callbacks resolve/reject
 * @note - Requiere que jQuery esté cargado previamente. Si no, lanzará error al intentar acceder a `jQuery.ui`.
 * 
 */

export const loadJQueryUIByCdn = (cdnJQueryUI, localJQueryUI, resolve, reject) => {

    
    const {
        srcCdn,
        integrity,
        crossOrigin,
        referrerPolicy
    } = cdnJQueryUI;

    const script = document.createElement("script");

    script.src = srcCdn;

    if (integrity)
        script.integrity = integrity;

    if (crossOrigin)
        script.crossOrigin = crossOrigin;

    if (referrerPolicy)
        script.referrerPolicy = referrerPolicy;


    //  -----  Evento de carga exitosa  -----
    script.onload = () => {

        if (jQuery.ui) {
            
            console.warn("jQuery UI cargado desde CDN");
            resolve(jQuery);
            
        } else {
            reject(new Error("jQuery UI no cargado correctamente desde CDN"));
        }

    };

    //  -----  Evento de error en la carga  -----
    script.onerror = () => {

        console.error("Error al cargar jQuery UI desde CDN. Intentando cargar localmente...");
        
        //  -----  Si el CDN falla, carga jQuery UI localmente  -----
        loadJQueryUIByLocal(localJQueryUI, resolve, reject);
    };

    //  -----  Agregar el script al head  -----
    document.head.appendChild(script);

}
