/*
    *  ------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-formulario-validacion-cliente.js  --  /src/scripts/clase-18/03-formulario-validacion-cliente.js  -----  *
    *  ------------------------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-formulario-validacion-cliente.js  -----');
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

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de salida` */
    const $salida = $('#salida');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de errores` */
    const $muestraError = $('#muestraerror');

    /** @type {JQuery<HTMLInputElement>} - `Input del nombre` */
    const $nombre = $('#nombre');

    /** @type {JQuery<HTMLInputElement>} - `Input del email` */
    const $email = $('#email');


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

        if (obtenerValor($nombre).length < MIN_LONGITUD_NOMBRE)
            error += 'No es un nombre valido';
        
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
        const action = $form.attr('action') || '';
        
        /** -----  `URL construida`  ----- */
        const url = construirUrl(action);
        
        /** -----  `Datos del formulario`  ----- */
        const datos = $form.serialize();

        //  -----  Mostrar loading antes de enviar  -----
        mostrarLoading();

        $.post(url, datos, (respuesta) => {
            manejarRespuesta(respuesta);
            $form.trigger('reset');
        });
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

    //  -----  Envio del formulario con validacion cliente  -----
    $formulario.on('submit', function (e) {
        
        e.preventDefault();
        
        limpiarSalida();

        /** -----  `Mensaje de error`  ----- */
        const error = validarFormulario();

        if (error) 
            mostrarError(error);
        
        else {
            limpiarErrores();
            enviarFormulario($formulario);
        }
    });



    //  -----  Validacion en tiempo real del campo nombre  -----
    $nombre.on('change', function () {
        validarCampoEnTiempoReal($(this), MIN_LONGITUD_NOMBRE);
    });


     //  -----  Ocultar loading al cargar la página  -----
    ocultarLoading();

    

})(jQuery);
