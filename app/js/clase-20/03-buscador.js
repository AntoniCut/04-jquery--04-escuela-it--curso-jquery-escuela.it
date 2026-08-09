/*
    *  -----------------------------------------------------------------------  *
    *  -----  /03-buscador.js  --  /src/scripts/clase-20/03-buscador.js  -----  *
    *  -----------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-buscador.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-20';

    /** @type {string} - `Endpoint del buscador` */
    const ENDPOINT = 'buscar.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} - `Formulario de busqueda` */
    const $formulario = $('#f1');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de respuesta` */
    const $respuesta = $('#respuesta');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de loading` */
    const $loading = $('#loading');

    /** @type {JQuery<HTMLDivElement>} - `Texto informativo de salida` */
    const $infoSalida = $('.ajax-low__output-info');



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
     * --------------------------------
     * -----  `mostrarLoading()`  -----
     * --------------------------------
     */

    const mostrarLoading = () => {
        $loading.show();
        $infoSalida.hide();
        $respuesta.find('table, .ajax-low__source').remove();
    };



    /**
     * --------------------------------
     * -----  `ocultarLoading()`  -----
     * --------------------------------
     */

    const ocultarLoading = () => {
        $loading.hide();
    };



    /**
     * -------------------------------------------
     * -----  `manejarRespuesta(respuesta)`  -----
     * -------------------------------------------
     * @param {string} respuesta
     */

    const manejarRespuesta = (respuesta) => {
        ocultarLoading();
        $infoSalida.hide();
        $respuesta.find('table, .ajax-low__source').remove();
        $respuesta.append(respuesta);
    };



    /**
     * ---------------------------------
     * -----  `buscarProductos()`  -----
     * ---------------------------------
     * @param {JQuery.SubmitEvent} e
     */

    const buscarProductos = (e) => {
        
        e.preventDefault();

        mostrarLoading();

        $.ajax({
            data: $formulario.serialize(),
            url: construirUrl(ENDPOINT),
            type: 'post',
            dataType: 'html',
            success: manejarRespuesta,
            error: (xhr, status, error) => {
                ocultarLoading();
                console.error('error:', status, error);
                $infoSalida
                    .text(`Error en la busqueda: ${status}`)
                    .show();
            }
        });

    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $formulario.on('submit', buscarProductos);

    ocultarLoading();


})(jQuery);
