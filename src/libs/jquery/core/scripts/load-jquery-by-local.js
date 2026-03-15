/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-by-local.js  --  /src/libs/jquery/core/scripts/load-jquery-by-local.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/


/**
 * ---------------------------------------------------------------
 * -----  `loadJQueryByLocal(localJQuery, resolve, reject)`  -----
 * ---------------------------------------------------------------
 * 
 *  - `Carga jQuery desde una ruta local`
 * 
 * @param {string} localJQuery - Ruta local (URL relativa o absoluta) del archivo jQuery a cargar
 * @param {(jq: JQueryStatic) => void} resolve - Función de resolución de la promesa
 * - Se llama cuando jQuery se carga correctamente y recibe como argumento el objeto `window.jQuery`
 * @param {(error: Error) => void} reject - Función de rechazo de la promesa
 * - Se llama si ocurre un error en la carga y recibe un objeto `Error` con un mensaje descriptivo
 * @returns {void} - No devuelve nada, usa callbacks resolve/reject
 */

export const loadJQueryByLocal = (localJQuery, resolve, reject) => {


    const localScript = document.createElement("script");
    localScript.src = localJQuery;

    //  -----  Eventos de Carga  -----
    localScript.onload = () => {
        
        /** @type {JQueryStatic|undefined} */
        const jQuery = window.jQuery;

        if (jQuery && jQuery.fn && jQuery.fn.jquery) {
            
            console.warn("jQuery cargado desde local - Versión:", jQuery.fn.jquery);
            resolve(jQuery);

        } 
        
        else 
            reject(new Error("jQuery no se inicializó desde local"));
        
    };


    //  -----  Eventos de Error  -----
    localScript.onerror = () => {
        
        console.error("Error al cargar jQuery local.");
        reject(new Error("No se pudo cargar jQuery"));
    };

    
    //  -----  Añadir script al head  -----
    document.head.appendChild(localScript);

}
