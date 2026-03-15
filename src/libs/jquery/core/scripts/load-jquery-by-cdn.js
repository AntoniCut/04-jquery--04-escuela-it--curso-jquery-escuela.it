/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-by-cdn.js  --  /src/libs/jquery/core/scripts/load-jquery-by-cdn.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/


import { loadJQueryByLocal } from "./load-jquery-by-local.js";


/** 
 * ------------------------------------------------------------------------
 * -----  `loadJQueryByCdn(cdnJQuery, localJQuery, resolve, reject)`  -----
 * ------------------------------------------------------------------------
 * 
 * - `Carga jQuery desde un CDN`
 * 
 * @param {CDNJQuery} cdnJQuery - Configuración del CDN de jQuery
 * @param {string} localJQuery - Ruta local para cargar jQuery en caso de fallo del CDN
 * @param {(jQuery: JQueryStatic) => void} resolve - Función que recibe el objeto jQuery
 * @param {(error: Error) => void} reject - Función que recibe un objeto Error
 * @returns {void} - No devuelve nada, usa callbacks resolve/reject
 * 
 */

export const loadJQueryByCdn = (cdnJQuery, localJQuery, resolve, reject) => {

    
    //  -----  Desestructura la configuración del CDN  -----
    const {
        srcCdn,
        integrity,
        crossOrigin,
        referrerPolicy
    } = cdnJQuery;


    //  -----  Carga jQuery por Primera Vez  -----
    console.warn("Cargando jQuery desde CDN...");

    //  -----  Crea el script del CDN  -----
    const script = document.createElement("script");
    script.src = srcCdn;

    if (integrity)
        script.integrity = integrity;

    if (crossOrigin)
        script.crossOrigin = crossOrigin;

    if (referrerPolicy)
        script.referrerPolicy = referrerPolicy;


    //  -----  Eventos de Carga  -----
    script.onload = () => {
        
        const jQuery = window.jQuery;

        if (jQuery && jQuery.fn) {
            
            console.warn("jQuery cargado desde CDN - Versión:", jQuery.fn.jquery);
            resolve(jQuery);
        } 
        
        else 
            reject(new Error("jQuery no se inicializó desde CDN"));
        
    };


    //  -----  Eventos de Error  -----
    script.onerror = () => {

        console.error("CDN falló. Cargando jQuery desde local...");

        //  -----  Si el CDN falla, carga jQuery localmente  -----
        loadJQueryByLocal(localJQuery, resolve, reject);

    };


    //  -----  Añadir script al head  -----
    document.head.appendChild(script);

}
