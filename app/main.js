/*
    *  ----------------------------------------  *
    *  -----  /main.js  --  /src/main.js  -----  *
    *  ----------------------------------------  *
*/

//import $ from 'jquery';

import { effectLoadingPage } from './effects/effect-loading-page.js';
import { fallbackJQueryJQueryUI } from './libs/jquery/loaders/fallback-jquery-jquery-ui.js'
import { spaWithMethodLoadFromJQueryPlugins } from './plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js';
import { spa } from './spa/spa.js';


//  -----  Efecto de Loading de la Página  -----
effectLoadingPage();


/** @type {string} - `-----  Base del proyecto  -----` */
export const base = '/cursos/escuelait/curso-jquery-escuelait';


//spaWithMethodLoadFromJQueryPlugins();
//spaCursoJQueryEscuelaIt();

/*
    ---------------------------------------------------------------------------------
    -----  Esperar a la Carga de jQuery + jQuery UI con fallback (CDN → local)  -----
    -----  y luego iniciar el plugin y la SPA  --------------------------------------
    ---------------------------------------------------------------------------------
*/



fallbackJQueryJQueryUI()

    .then(() => {
        
        console.log('\n');
        console.warn("----- jQuery y jQuery UI cargados correctamente -----");
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
        console.error("Error cargando jQuery / jQuery UI:", err);
        console.log('\n');
    });
