/*
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /04-formulario-validacion-cliente-servidor.js  --  /src/scripts/clase-18/04-formulario-validacion-cliente-servidor.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  04-formulario-validacion-cliente-servidor.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-18';

    /** @type {number} - `Longitud minima del nombre` */
    const MIN_LONGITUD_NOMBRE = 3;

    /** @type {number} - `Longitud minima del email` */
    const MIN_LONGITUD_EMAIL = 5;

    /** @type {string} - `Clase CSS para inputs con error` */
    const CLASE_ERROR = 'form-ajax__input--error';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} - `Formulario principal` */
    const $formulario = $('#form');

    /** @type {JQuery<HTMLInputElement>} - `Boton de envio` */
    const $submit = $formulario.find('input[type="submit"]');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de salida` */
    const $salida = $('#salida');

    /** @type {JQuery<HTMLInputElement>} - `Input del nombre` */
    const $nombre = $('#nombre');

    /** @type {JQuery<HTMLInputElement>} - `Input del email` */
    const $email = $('#email');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de errores` */
    const $muestraError = $('#muestraerror');


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
     * ------------------------------------
     * -----  `obtenerValor($input)`  -----
     * ------------------------------------
     * - Obtiene el valor de un input como string
     * @param {JQuery<HTMLInputElement>} $input - Elemento input
     * @returns {string} - Valor del input
     */

    const obtenerValor = ($input) => String($input.val() || '');


    /**
     * ------------------------------------
     * -----  `validarFormulario()`  -----
     * ------------------------------------
     * - Valida los campos del formulario
     * @returns {string} - Mensaje de error vacio si todo es valido
     */

    const validarFormulario = () => {
        
        
        /** -----  `Mensaje de error`  ----- */
        let error = '';

        if (obtenerValor($nombre).length < MIN_LONGITUD_NOMBRE) {
            error += 'No es un nombre valido';
        }

        if (obtenerValor($email).length < MIN_LONGITUD_EMAIL) {
            if (error) 
                error += '<br>';
            
            error += 'No es un email valido';
        }

        return error;
    };


    /**
     * ------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * ------------------------------------
     * - Muestra los errores en el contenedor
     * @param {string} mensaje - Mensaje de error a mostrar
     */

    const mostrarError = (mensaje) => {
        $muestraError.html(mensaje);
    };


    /**
     * --------------------------------
     * -----  `limpiarErrores()`  -----
     * --------------------------------
     * - Limpia los errores del contenedor
     */

    const limpiarErrores = () => {
        $muestraError.empty();
    };


    /**
     * -------------------------------
     * -----  `limpiarSalida()`  -----
     * -------------------------------
     * - Limpia el contenedor de salida
     */

    const limpiarSalida = () => {
        $salida.find('.form-ajax__output-info').empty();
    };


    /**
     * ---------------------------------
     * -----  `habilitarSubmit()`  -----
     * ---------------------------------
     * - Habilita el boton de envio
     */
    const habilitarSubmit = () => {
        $submit.prop('disabled', false);
    };


    /**
     * ------------------------------------
     * -----  `deshabilitarSubmit()`  -----
     * ------------------------------------
     * - Deshabilita el boton de envio
     */
    const deshabilitarSubmit = () => {
        $submit.prop('disabled', true);
    };


    
    /**
     * --------------------------------------------------
     * -----  `manejarRespuesta(respuesta, $form)`  -----
     * --------------------------------------------------
     * - Maneja la respuesta del servidor
     * @param {{ valido: boolean, mensaje: string }} respuesta - Respuesta JSON del servidor
     * @param {JQuery<HTMLFormElement>} $form - Referencia al formulario
     */
    const manejarRespuesta = (respuesta, $form) => {
        ocultarLoading();
        $salida.find('.form-ajax__output-info').html(respuesta.mensaje).show();

        if (respuesta.valido) 
            $form.trigger('reset');
        
    };


    /**
     * --------------------------------
     * -----  `mostrarLoading()`  -----
     * --------------------------------
     * - Muestra el indicador de carga en el contenedor de salida
     */
    const mostrarLoading = () => {
        $('#loading').show();
        $('.form-ajax__output-info').hide();
    };


    /**
     * --------------------------------
     * -----  `ocultarLoading()`  -----
     * --------------------------------
     * - Oculta el indicador de carga
     */
    const ocultarLoading = () => {
        $('#loading').hide();
    };


    /**
     * ---------------------------------------
     * -----  `enviarFormulario($form)`  -----
     * ---------------------------------------
     * - Envia los datos del formulario al servidor mediante POST con AJAX
     * @param {JQuery<HTMLFormElement>} $form - Referencia al formulario
     */

    const enviarFormularioAjax = ($form) => {
        
        /** -----  `Action del formulario`  ----- */
        const action = $form.attr('action') || '';
        
        /** -----  `URL construida`  ----- */
        const url = construirUrl(action);
        
        /** -----  `Datos del formulario`  ----- */
        const datos = $form.serialize();

        deshabilitarSubmit();

        //  -----  Mostrar loading antes de enviar  -----
        mostrarLoading();

        /** -----  `Envio de datos mediante AJAX`  ----- */
        const objAjax = $.post(url, datos, ( /** @type {{ valido: boolean, mensaje: string }} */ respuesta) => {
            manejarRespuesta(respuesta, $form);
        }, 'json');

        //  -----  Habilitar el submit al finalizar la peticion  -----
        objAjax.always(habilitarSubmit);
        
    };


    /**
     * ----------------------------------------------------------------
     * -----  `validarCampoEnTiempoReal($campo, longitudMinima)`  -----
     * ----------------------------------------------------------------
     * - Valida un campo en tiempo real y actualiza su estilo
     * @param {JQuery<HTMLInputElement>} $campo - Campo a validar
     * @param {number} longitudMinima - Longitud minima requerida
     */

    const validarCampoEnTiempoReal = ($campo, longitudMinima) => {
        
        /** -----  `Valor del campo`  ----- */
        const valor = obtenerValor($campo);

        if (valor.length < longitudMinima) 
            $campo.addClass(CLASE_ERROR);
        
        else 
            $campo.removeClass(CLASE_ERROR);
        
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    //  -----  Envio del formulario con validacion cliente-servidor  -----
    $formulario.on('submit', function (e) {
        
        e.preventDefault();
        
        limpiarSalida();

        /** -----  `mensaje de error`  ----- */
        const error = validarFormulario();

        if (error) 
            mostrarError(error);
        
        else {
            limpiarErrores();
            enviarFormularioAjax($formulario);
        }
    });


    //  -----  Validacion en tiempo real del campo nombre  -----
    $nombre.on('change', function () {
        validarCampoEnTiempoReal($(this), MIN_LONGITUD_NOMBRE);
    });


    //  -----  Ocultar loading al cargar la página  -----
    ocultarLoading();


})(jQuery);
