/*
    *  ----------------------------------------  *
    *  -----  /main.js  --  /src/main.js  -----  *
    *  ----------------------------------------  *
*/


import { effectLoadingPage } from './effects/effect-loading-page.js';
import { loadJQueryCoreByImport } from './libs/jquery-module/loader/load-jquery-by-import.js'
import { preloadAllJQueryUI } from './libs/jquery-module/loader/load-jquery-ui-by-import.js';
import { spaWithMethodLoadFromJQueryPlugins } from './plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js';
import { spa } from './spa/spa.js';


//  -----  Efecto de Loading de la Página  -----
effectLoadingPage();


/** @type {string} - `-----  Base del proyecto  -----` */
export const base = '/escuelait/curso-jquery-escuelait';



/*
    -----------------------------------------------------------------------------------
    -----  Esperar a la carga de jQuery Core desde imports de vendor/local  -----------
    -----  y luego iniciar el plugin y la SPA  ----------------------------------------
    -----  jQuery UI se cargará bajo demanda según las necesidades de cada ruta  -----
    -----------------------------------------------------------------------------------
*/



loadJQueryCoreByImport()

    .then(() => {
        
        console.log('\n');
        console.warn("----- jQuery core cargado correctamente desde imports -----");
        console.log("-----  jQuery UI se cargará en background tras window load  -----");
        console.log('\n');

        //  -----  version de jQuery confirmada en consola  -----
        console.log('\n');
        console.log('Versión de jQuery cargada:', $.fn.jquery);
        console.log('\n');

        //  -----  Iniciar el plugin que carga la SPA  -----
        spaWithMethodLoadFromJQueryPlugins();

        //  -----  Iniciar la SPA específica del sitio  -----
        spa();

        //  -----  Pre-cargar jQuery UI en background una vez que la página esté completamente cargada  -----
        window.addEventListener('load', () => {
            
            preloadAllJQueryUI()
                .then(() => {
                    console.log('\n');
                    console.warn('-----  Todos los módulos de jQuery UI pre-cargados en background  -----');
                    console.log('\n');
                })
                .catch(err => {
                    console.error('Error pre-cargando jQuery UI:', err);
            });

        });

        //  -----  Limpiar la consola para produccion  -----
        //console.clear();

    })

    .catch(err => {
        console.log('\n');
        console.error("Error cargando jQuery core desde imports:", err);
        console.log('\n');
    });
