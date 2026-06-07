/*
    *  -------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-formularios-sin-validacion.js  --  /src/scripts/clase-18/02-formularios-sin-validacion.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-formularios-sin-validacion.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-18';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} - `Formulario principal` */
    const $formulario = $('#form');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de salida` */
    const $salida = $('#salida');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */

    /**
     * ------------------------------------
     * -----  `construirUrl(action)`  -----
     * ------------------------------------
     * - Construye la URL completa del servicio
     * @param {string} action - Action del formulario
     * @returns {string} - URL completa del servicio
     */

    const construirUrl = (action) => `${URL_BASE}/${action}`;


    /**
     * --------------------------------
     * -----  `manejarRespuesta()`  -----
     * --------------------------------
     * - Maneja la respuesta exitosa del servidor
     * @param {string} respuesta - HTML de respuesta del servidor
     */
    const manejarRespuesta = (respuesta) => {
        ocultarLoading();
        $salida.find('.form-ajax__output-info').html(respuesta).show();
    };


    /**
     * ---------------------------
     * -----  `mostrarLoading()`  -----
     * ---------------------------
     * - Muestra el indicador de carga en el contenedor de salida
     */
    const mostrarLoading = () => {
        $('#loading').show();
        $('.form-ajax__output-info').hide();
    };


    /**
     * ---------------------------
     * -----  `ocultarLoading()`  -----
     * ---------------------------
     * - Oculta el indicador de carga
     */
    const ocultarLoading = () => {
        $('#loading').hide();
    };


    /**
     * ---------------------------------------
     * -----  `enviarFormulario($form)`  -----
     * ---------------------------------------
     * - Envia los datos del formulario al servidor mediante POST
     * @param {JQuery<HTMLFormElement>} $form - Referencia al formulario
     */
    const enviarFormulario = ($form) => {
        
        /** -----  `Action del formulario`  ----- */
        const action = $form.attr("action") || '';
        
        /** -----  `URL construida`  ----- */
        const url = construirUrl(action);
        
        /** -----  `Datos del formulario`  ----- */
        const datos = $form.serialize();

        //  -----  Mostrar loading antes de enviar  -----
        mostrarLoading();

        $.post(url, datos, manejarRespuesta);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    //  -----  Envio del formulario sin validacion  -----
    $formulario.on("submit", function (e) {
        e.preventDefault();
        enviarFormulario($formulario);
    });

    //  -----  Ocultar loading al cargar la página  -----
    ocultarLoading();


})(jQuery);
