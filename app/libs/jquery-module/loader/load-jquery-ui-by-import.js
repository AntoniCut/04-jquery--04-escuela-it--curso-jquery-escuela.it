/*
    *  ----------------------------------------------------------------------------------------------------------------  *
    *  -----  /load-jquery-ui-by-import.js  --  /src/libs/jquery-module/loader/load-jquery-ui-by-import.js  ---------  *
    *  ----------------------------------------------------------------------------------------------------------------  *
*/


/** @type {string[]} - `Módulos core de jQuery UI (sin widgets, solo infraestructura base)` */
const jqueryUiCoreModules = [
    '../jquery-ui/ui/version.js',
    '../jquery-ui/ui/widget.js',
    '../jquery-ui/ui/keycode.js',
    '../jquery-ui/ui/position.js',
    '../jquery-ui/ui/unique-id.js',
];


/**
 * @type {Record<string, string[]>}
 * - Módulos de cada widget de jQuery UI con sus dependencias.
 * - Solo incluye lo que cada widget necesita además del core base ya cargado.
 */
const jqueryUIWidgetDeps = {

    tooltip: [
        '../jquery-ui/ui/widgets/tooltip.js',
    ],

    draggable: [
        '../jquery-ui/ui/data.js',
        '../jquery-ui/ui/plugin.js',
        '../jquery-ui/ui/scroll-parent.js',
        '../jquery-ui/ui/widgets/mouse.js',
        '../jquery-ui/ui/widgets/draggable.js',
    ],

    sortable: [
        '../jquery-ui/ui/data.js',
        '../jquery-ui/ui/plugin.js',
        '../jquery-ui/ui/scroll-parent.js',
        '../jquery-ui/ui/widgets/mouse.js',
        '../jquery-ui/ui/widgets/sortable.js',
    ],

    resizable: [
        '../jquery-ui/ui/data.js',
        '../jquery-ui/ui/plugin.js',
        '../jquery-ui/ui/scroll-parent.js',
        '../jquery-ui/ui/widgets/mouse.js',
        '../jquery-ui/ui/widgets/resizable.js',
    ],

    dialog: [
        '../jquery-ui/ui/data.js',
        '../jquery-ui/ui/plugin.js',
        '../jquery-ui/ui/scroll-parent.js',
        '../jquery-ui/ui/widgets/mouse.js',
        '../jquery-ui/ui/widgets/draggable.js',
        '../jquery-ui/ui/widgets/resizable.js',
        '../jquery-ui/ui/widgets/button.js',
        '../jquery-ui/ui/widgets/dialog.js',
    ],

    datepicker: [
        '../jquery-ui/ui/widgets/datepicker.js',
    ],

};


/** @type {Set<string>} - `Widgets ya cargados para evitar re-imports` */
const loadedLibs = new Set();

/** @type {Promise<void>|null} - `Promesa singleton para módulos core de jQuery UI` */
let jqueryUiCorePromise = null;


/**
 * --------------------------------------------------
 * -----  `loadJQueryUICoreModules()`  --------------
 * --------------------------------------------------
 * @async
 * - Carga los módulos base de jQuery UI (version, widget, keycode, position, unique-id).
 * - Son los módulos que necesitan todos los widgets de jQuery UI.
 * - Singleton: si ya se está cargando o se cargó, retorna la promesa existente.
 * @returns {Promise<void>}
 */

export const loadJQueryUICoreModules = () => {

    //  -----  Si ya se está cargando o se cargó, retornar la promesa existente  -----
    if (jqueryUiCorePromise)
        return jqueryUiCorePromise;

    jqueryUiCorePromise = (async () => {

        for (const modulePath of jqueryUiCoreModules) {
            await import(modulePath);
            console.log(`Módulo jQuery UI core cargado: ${modulePath.split('/').pop()}`);
        }

    })().catch((err) => {

        jqueryUiCorePromise = null;
        throw err;

    });

    return jqueryUiCorePromise;

};


/**
 * -------------------------------------------
 * -----  `loadJQueryUILib(name)`  -----------
 * -------------------------------------------
 * @async
 * - Carga bajo demanda los módulos de un widget de jQuery UI.
 * - Se usa desde el plugin SPA para cargar los módulos que necesita cada ruta
 *   una vez que el DOM de la página ya está renderizado.
 * - Carga automáticamente los módulos core de jQuery UI si no están cargados.
 * - Singleton: evita re-importar un widget que ya fue cargado en la sesión.
 * @param {string} name - Nombre del widget ('tooltip', 'draggable', 'sortable', 'dialog', 'datepicker', 'resizable').
 * @returns {Promise<void>}
 */

export const loadJQueryUILib = async (name) => {

    //  -----  Si el widget ya fue cargado, no hacer nada  -----
    if (loadedLibs.has(name))
        return;

    //  -----  Asegurarse de que los módulos core de jQuery UI estén cargados  -----
    await loadJQueryUICoreModules();

    const deps = jqueryUIWidgetDeps[name];

    if (!deps) {
        console.warn(`loadJQueryUILib: módulo desconocido "${name}"`);
        return;
    }

    for (const modulePath of deps) {
        await import(modulePath);
        console.log(`Módulo jQuery UI widget cargado: ${modulePath.split('/').pop()}`);
    }

    loadedLibs.add(name);

};


/**
 * -----------------------------------------------
 * -----  `preloadAllJQueryUI()`  ----------------
 * -----------------------------------------------
 * @async
 * - Pre-carga todos los módulos de jQuery UI en background.
 * - Debe llamarse después del evento `window load` para no bloquear
 *   el renderizado inicial de la página.
 * - Los módulos quedan en caché: cuando una ruta los necesite, ya están disponibles.
 * @returns {Promise<void>}
 */

export const preloadAllJQueryUI = async () => {

    console.log('\n');
    console.warn('-----  Pre-cargando jQuery UI en background...  -----');
    console.log('\n');

    //  -----  Pre-cargar todos los widgets (core se carga automáticamente en el primero)  -----
    for (const name of Object.keys(jqueryUIWidgetDeps)) {
        await loadJQueryUILib(name);
    }

    console.log('\n');
    console.warn('-----  jQuery UI pre-cargado completamente  -----');
    console.log('\n');

};
