/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /02-ajax-load-scripts.js  --  /src/scripts/clase-20/02-ajax-load-scripts.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-ajax-load-scripts.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-20';

    /** @type {string} - `Endpoint del script remoto` */
    const ENDPOINT = 'script.js';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - `Capa clicable para disparar la peticion` */
    const $capa = $('#capa');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */



    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * @param {string} endpoint
     * @returns {string}
     */

    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * ----------------------------------
     * -----  `cargarScriptRemoto()`  -----
     * ----------------------------------
     */

    const cargarScriptRemoto = () => {

        $.ajax({
            url: construirUrl(ENDPOINT),
            dataType: 'script',
            error: (xhr, status, error) => {
                console.error('error:', status, error);
                $('#respuesta').html(`
                    <div class="ajax-low__output-info">
                        Error al cargar el script: ${status}
                    </div>
                `);
            }
        });

    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $capa.on('click', cargarScriptRemoto);

    $capa.on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cargarScriptRemoto();
        }
    });


})(jQuery);
