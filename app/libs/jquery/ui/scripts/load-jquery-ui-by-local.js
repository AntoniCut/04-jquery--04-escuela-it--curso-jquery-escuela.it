/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-ui-by-local.js  --  /src/libs/jquery/ui/scripts/load-jquery-ui-by-local.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/


/**
 * -------------------------------------------------------------------
 * -----  `loadJQueryUIByLocal(localJQueryUI, resolve, reject)`  -----
 * -------------------------------------------------------------------
 * 
 * - `Carga la librería jQuery UI desde una ruta local`.
 * 
 * @param {string} localJQueryUI - Ruta local (URL relativa o absoluta) del archivo jQuery UI a cargar.
 * @param {Function} resolve - Función de resolución de la promesa.
 * - Se llama cuando jQuery UI se carga correctamente y recibe como argumento el objeto `window.jQuery`.
 * @param {Function} reject - Función de rechazo de la promesa.  
 * - Se llama si ocurre un error en la carga y recibe un objeto `Error` con un mensaje descriptivo.
 * @returns {void} No devuelve nada; usa callbacks resolve/reject
 * @note - Requiere que jQuery esté cargado previamente. Si no, lanzará error al intentar acceder a `jQuery.ui`.
 */

export const loadJQueryUIByLocal = (localJQueryUI, resolve, reject) => {
    
    const localScript = document.createElement("script");
    
    localScript.src = localJQueryUI;

    //  -----  Evento de carga exitosa  -----
    localScript.onload = () => {

        if (jQuery.ui) {
            
            console.warn("jQuery UI cargado correctamente desde local - version: ", $.ui.version);
            resolve(jQuery);

        } 
        
        else
            reject(new Error("jQuery UI no se cargó correctamente desde local"));
        
    };

    //  -----  Evento de error en la carga  -----
    localScript.onerror = () => reject(new Error("Error al cargar jQuery UI localmente"));
    
    //  -----  Agregar el script al head  -----
    document.head.appendChild(localScript);

}
