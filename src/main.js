/*
    *  ----------------------------------------  *
    *  -----  /main.js  --  /src/main.js  -----  *
    *  ----------------------------------------  *
*/

import { effectLoadingPage } from './scripts/effect-loading-page.js';
import { fallbackJQueryJQueryUI } from './libs/jquery/loaders/fallback-jquery-jquery-ui.js'
import { spaWithMethodLoadFromJQueryPlugins } from './plugins/spa-with-method-load-from-jquery/v3/jquery.spa-with-method-load-from-jquery.js';
import { spaCursoJQueryEscuelaIt } from './spa/spa-curso-jquery-escuela-it.js';


//  -----  Efecto de Loading de la Página  -----
//effectLoadingPage();


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
        spaCursoJQueryEscuelaIt();

        //  -----  Limpiar la consola para produccion  -----
        //console.clear();

    })

    .catch(err => {
        console.log('\n');
        console.error("Error cargando jQuery / jQuery UI:", err);
        console.log('\n');
    });



