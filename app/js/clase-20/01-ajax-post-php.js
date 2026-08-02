/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /01-ajax-post-php.js  --  /src/scripts/clase-20/01-ajax-post-php.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-ajax-post-php.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-20';

    /** @type {string} - `Endpoint del servicio` */
    const ENDPOINT = 'destino.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - `Capa clicable para disparar la peticion` */
    const $capa = $('#capa');

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
     * @param {string} endpoint - Nombre del archivo PHP
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
     * @param {string} respuesta - HTML de respuesta del servidor
     */

    const manejarRespuesta = (respuesta) => {
        ocultarLoading();
        $infoSalida.hide();
        $respuesta.find('.ajax-low__output-info, .respuesta-ajax').remove();
        $respuesta.append(respuesta);
    };



    /**
     * --------------------------------
     * -----  `enviarAjaxPost()`  -----
     * --------------------------------
     */

    const enviarAjaxPost = () => {

        mostrarLoading();

        $.ajax({
            data: { dato: 'valor' },
            url: construirUrl(ENDPOINT),
            type: 'post',
            dataType: 'html',
            success: manejarRespuesta,
            error: (xhr, status, error) => {
                ocultarLoading();
                console.error('error:', status, error);
                $infoSalida
                    .text(`Error en la peticion: ${status}`)
                    .show();
            }
        });

    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $capa.on('click', enviarAjaxPost);

    $capa.on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            enviarAjaxPost();
        }
    });

    ocultarLoading();


})(jQuery);
