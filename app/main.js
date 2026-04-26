/*
    *  ----------------------------------------  *
    *  -----  /main.js  --  /src/main.js  -----  *
    *  ----------------------------------------  *
*/


import { effectLoadingPage } from './effects/effect-loading-page.js';
import { loadJQueryJQueryUIByImport } from './libs/jquery-module/loader/load-jquery-jquery-ui-by-import.js'
import { spaWithMethodLoadFromJQueryPlugins } from './plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js';
import { spa } from './spa/spa.js';


//  -----  Efecto de Loading de la Página  -----
effectLoadingPage();


/** @type {string} - `-----  Base del proyecto  -----` */
export const base = '/escuelait/curso-jquery-escuelait';



/*
    -----------------------------------------------------------------------------------
    -----  Esperar a la carga de jQuery + jQuery UI desde imports de vendor/local  -----
    -----  y luego iniciar el plugin y la SPA  ----------------------------------------
    -----------------------------------------------------------------------------------
*/



loadJQueryJQueryUIByImport()

    .then(() => {
        
        console.log('\n');
        console.warn("----- jQuery y jQuery UI cargados correctamente desde imports -----");
        console.log('\n');

        //  -----  version de jQuery confirmada en consola  -----
        console.log('\n');
        console.log('Versión de jQuery cargada:', $.fn.jquery);
        console.log('Versión de jQuery UI cargada:', $.ui.version);
        console.log('\n');

        //  -----  Iniciar el plugin que carga la SPA  -----
        spaWithMethodLoadFromJQueryPlugins();

        //  -----  Iniciar la SPA específica del sitio  -----
        spa();

        //  -----  Limpiar la consola para produccion  -----
        //console.clear();

    })

    .catch(err => {
        console.log('\n');
        console.error("Error cargando jQuery / jQuery UI desde imports:", err);
        console.log('\n');
    });
