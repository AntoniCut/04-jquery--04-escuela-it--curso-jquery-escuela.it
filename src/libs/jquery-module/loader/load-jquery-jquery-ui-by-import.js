/*
    *  ------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-jquery-ui-by-import.js  --  /src/libs/jquery-module/loader/load-jquery-jquery-ui-by-import.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------  *
*/


/** @type {string[]} - `Módulos necesarios de jQuery UI para tooltip y draggable` */
const jqueryUiModulePaths = [
    '../jquery-ui/ui/version.js',
    '../jquery-ui/ui/widget.js',
    '../jquery-ui/ui/data.js',
    '../jquery-ui/ui/plugin.js',
    '../jquery-ui/ui/scroll-parent.js',
    '../jquery-ui/ui/keycode.js',
    '../jquery-ui/ui/position.js',
    '../jquery-ui/ui/unique-id.js',
    '../jquery-ui/ui/widgets/mouse.js',
    '../jquery-ui/ui/widgets/draggable.js',
    '../jquery-ui/ui/widgets/tooltip.js',
];


/** @type {Promise<JQueryStatic>|null} - `Promesa singleton para evitar dobles inicializaciones` */
let jqueryUiModulesPromise = null;


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
 * -----  `loadJQueryJQueryUIByImport()`  ---------
 * ------------------------------------------------
 * - Carga jQuery 4 como ESM real y registra en global los widgets necesarios de jQuery UI.
 * - Los archivos se copian desde node_modules a app/libs/jquery-module durante el build/dev.
 * @returns {Promise<JQueryStatic>}
 */

export const loadJQueryJQueryUIByImport = () => {

    //  -----  Si ya se está cargando o se cargó, retornar la promesa existente  -----
    if (jqueryUiModulesPromise)
        return jqueryUiModulesPromise;


    //  -----  Crear una nueva promesa para cargar jQuery y los módulos de jQuery UI  -----
    jqueryUiModulesPromise = (async () => {

        const $ = await importJQueryModule();

        window.$ = $;
        window.jQuery = $;

        for (const modulePath of jqueryUiModulePaths)
            await import(modulePath);

        return $;

    })().catch((err) => {

        jqueryUiModulesPromise = null;
        throw err;

    });


    return jqueryUiModulesPromise;

};
