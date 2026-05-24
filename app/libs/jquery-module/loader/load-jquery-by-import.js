/*
    *  ------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-jquery-ui-by-import.js  --  /src/libs/jquery-module/loader/load-jquery-jquery-ui-by-import.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------  *
*/


/** @type {Promise<JQueryStatic>|null} - `Promesa singleton para jQuery core` */
let jqueryCorePromise = null;


/**
 * ------------------------------------------------
 * -----  `importJQueryModule()`  -----------------
 * ------------------------------------------------
 * @async
 * - Importa jQuery 4 como módulo ESM real desde el archivo copiado en jquery-module.
 * - Retorna la función jQuery y la asigna a global para compatibilidad con plugins.
 * @returns {Promise<JQueryStatic>}
 */

const importJQueryModule = async () => {

     const jqueryModuleUrl = new URL('../jquery/jquery.module.min.js', import.meta.url).href;
    
    
    const jqueryModule = /** @type {{ default: JQueryStatic }} */ (await import(jqueryModuleUrl));

    return jqueryModule.default;

};


/**
 * ------------------------------------------------
 * -----  `loadJQueryCoreByImport()`  -------------
 * ------------------------------------------------
 * @async
 * - Carga solo jQuery 4 como módulo ESM sin ningún módulo de jQuery UI.
 * - Retorna la función jQuery y la asigna a global para compatibilidad.
 * - Singleton: si ya se está cargando o se cargó, retorna la promesa existente.
 * @returns {Promise<JQueryStatic>}
 */

export const loadJQueryCoreByImport = () => {

    //  -----  Si ya se está cargando o se cargó, retornar la promesa existente  -----
    if (jqueryCorePromise)
        return jqueryCorePromise;

    //  -----  Crear una nueva promesa para cargar solo jQuery core  -----
    jqueryCorePromise = (async () => {

        const $ = await importJQueryModule();

        window.$ = $;
        window.jQuery = $;

        return $;

    })().catch((err) => {

        jqueryCorePromise = null;
        throw err;

    });

    return jqueryCorePromise;

};

