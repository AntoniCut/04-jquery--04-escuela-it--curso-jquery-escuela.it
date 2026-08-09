/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-formulario-login-autenticacion.js  --  /src/scripts/clase-21/02-formulario-login-autenticacion.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-formulario-login-autenticacion.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-21';

    /** @type {string} - `Endpoint de login` */
    const ENDPOINT_LOGIN = 'login-auth.php';

    /** @type {string} - `Endpoint de registro` */
    const ENDPOINT_REGISTRO = 'register-auth.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<Window>} - `Ventana del navegador` */
    const $ventana = $(window);

    /** @type {JQuery<Document>} - `Documento` */
    const $doc = $(document);

    /** @type {JQuery<HTMLDivElement>} - `Caja modal de auth` */
    const $cajaAuth = $('#caja-auth');

    /** @type {JQuery<HTMLDivElement>} - `Capa modal de fondo` */
    const $capaModal = $('#capamodal-auth');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace iniciar sesion` */
    const $enlaceLogin = $('#enlace-login-auth');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace registrarse` */
    const $enlaceRegistro = $('#enlace-registro-auth');

    /** @type {JQuery<HTMLFormElement>} - `Formulario de auth` */
    const $form = /** @type {JQuery<HTMLFormElement>} */ ($('#form-auth'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de estado` */
    const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ ($('#msg-auth'));

    /** @type {JQuery<HTMLInputElement>} - `Campo modo oculto` */
    const $modo = /** @type {JQuery<HTMLInputElement>} */ ($('#modo-auth'));

    /** @type {JQuery<HTMLInputElement>} - `Boton submit` */
    const $submit = /** @type {JQuery<HTMLInputElement>} */ ($('#submit-auth'));

    /** @type {JQuery<HTMLButtonElement>} - `Tab login` */
    const $tabLogin = /** @type {JQuery<HTMLButtonElement>} */ ($('#tab-login-auth'));

    /** @type {JQuery<HTMLButtonElement>} - `Tab registro` */
    const $tabRegistro = /** @type {JQuery<HTMLButtonElement>} */ ($('#tab-registro-auth'));

    /** @type {JQuery<HTMLDivElement>} - `Vista publica` */
    const $vistaLogin = $('#vista-login-auth');

    /** @type {JQuery<HTMLDivElement>} - `Vista privada` */
    const $vistaDentro = $('#vista-dentro-auth');

    /** @type {JQuery<HTMLSpanElement>} - `Nombre de usuario en zona privada` */
    const $usuarioDentro = /** @type {JQuery<HTMLSpanElement>} */ ($('#usuario-dentro-auth'));

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace cerrar sesion` */
    const $enlaceCerrarSesion = $('#enlace-cerrar-sesion-auth');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * - Construye la URL absoluta del servicio PHP.
     * @param {string} endpoint - Nombre del archivo PHP
     * @return {string}
     */
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * -----------------------------------------
     * -----  `ajustarPosicionesAuth()`  -----
     * -----------------------------------------
     * - Centra la caja de auth y ajusta el overlay.
     * @return {void}
     */
    const ajustarPosicionesAuth = () => {

        /** @type {number} - `Alto de la ventana` */
        const altoVentana = $ventana.height() || 0;

        /** @type {number} - `Ancho de la ventana` */
        const anchoVentana = $ventana.width() || 0;

        /** @type {number} - `Alto de la caja` */
        const altoCaja = $cajaAuth.outerHeight() || 0;

        /** @type {number} - `Ancho de la caja` */
        const anchoCaja = $cajaAuth.outerWidth() || 0;

        $cajaAuth.css({
            top: ((altoVentana - altoCaja) / 2) + 'px',
            left: ((anchoVentana - anchoCaja) / 2) + 'px',
        });

        $capaModal.css({
            width: ($doc.width() || 0) + 'px',
            height: ($doc.height() || 0) + 'px',
        });
    };



    /**
     * -----------------------------------
     * -----  `obtenerModoActual()`  -----
     * -----------------------------------
     * - Devuelve el modo actual del formulario.
     * @return {'login' | 'registro'}
     */
    const obtenerModoActual = () => {
        return /** @type {'login' | 'registro'} */ ($modo.val() === 'registro' ? 'registro' : 'login');
    };



    /**
     * ---------------------------------
     * -----  `cambiarModo(modo)`  -----
     * ---------------------------------
     * - Cambia entre login y registro (tabs + textos).
     * @param {'login' | 'registro'} modo - Modo a activar
     * @return {void}
     */
    const cambiarModo = (modo) => {

        $modo.val(modo);

        $tabLogin.toggleClass('is-active', modo === 'login');
        $tabRegistro.toggleClass('is-active', modo === 'registro');

        //  -----  actualizar textos segun modo  -----
        if (modo === 'registro') {
            $parrafo.text('Registro de usuarios').css('color', '#fff');
            $submit.val('Registrarse');
            $form.attr('action', ENDPOINT_REGISTRO);
            $('#pass-auth').attr('autocomplete', 'new-password');
        } else {
            $parrafo.text('Iniciar sesion').css('color', '#fff');
            $submit.val('Entrar');
            $form.attr('action', ENDPOINT_LOGIN);
            $('#pass-auth').attr('autocomplete', 'current-password');
        }

        $parrafo.removeClass('cargando');
        ajustarPosicionesAuth();
    };



    /**
     * -------------------------------
     * -----  `resetearAuth()`  -----
     * -------------------------------
     * - Restaura el estado inicial de la caja modal.
     * @return {void}
     */
    const resetearAuth = () => {

        $cajaAuth.hide().stop(true, true);
        $capaModal.hide().stop(true, true);

        $parrafo
            .text(obtenerModoActual() === 'registro' ? 'Registro de usuarios' : 'Iniciar sesion')
            .css('color', '#fff')
            .removeClass('cargando');

        $form.find('input[type="submit"]').prop('disabled', false);
        $form.find('input[name="user"], input[name="pass"]').val('');
    };



    /**
     * ---------------------------------------
     * -----  `mostrarVistaDentro()`  -----
     * ---------------------------------------
     * - Muestra la zona privada tras login correcto.
     * @param {string} username - Usuario autenticado
     * @return {void}
     */
    const mostrarVistaDentro = (username) => {
        $usuarioDentro.text(username ? `(${username})` : '');
        $vistaLogin.prop('hidden', true);
        $vistaDentro.prop('hidden', false);
    };



    /**
     * --------------------------------------
     * -----  `mostrarVistaPublica()`  -----
     * --------------------------------------
     * - Vuelve a la vista publica tras cerrar sesion.
     * @return {void}
     */
    const mostrarVistaPublica = () => {
        $vistaDentro.prop('hidden', true);
        $vistaLogin.prop('hidden', false);
        $usuarioDentro.text('');
        cambiarModo('login');
        resetearAuth();
    };



    /**
     * -------------------------------------------
     * -----  `mostrarCajaAuth(modo)`  -----
     * -------------------------------------------
     * - Abre la caja modal en el modo indicado.
     * @param {'login' | 'registro'} modo - Modo inicial
     * @return {void}
     */
    const mostrarCajaAuth = (modo) => {

        cambiarModo(modo);

        $cajaAuth.prop('hidden', false);
        $capaModal.prop('hidden', false);

        ajustarPosicionesAuth();

        $cajaAuth.fadeIn(600);
        $capaModal.fadeIn(600);
    };



    /**
     * -------------------------------------------
     * -----  `procesaFormulario(event)`  -----
     * -------------------------------------------
     * - Envia login o registro por Ajax segun el modo.
     * @param {JQuery.SubmitEvent} event - Evento submit
     * @return {void}
     */
    const procesaFormulario = (event) => {

        event.preventDefault();

        /** @type {'login' | 'registro'} - `Modo del formulario` */
        const modo = obtenerModoActual();

        /** @type {string} - `Endpoint segun modo` */
        const endpoint = modo === 'registro' ? ENDPOINT_REGISTRO : ENDPOINT_LOGIN;

        $.ajax({
            data: $form.serialize(),
            type: 'post',
            dataType: 'json',
            url: construirUrl(endpoint),

            beforeSend: () => {
                $form.find('input[type="submit"]').prop('disabled', true);
                $parrafo.css('color', '#fff');
                $parrafo.text('Cargando...');
                $parrafo.addClass('cargando');
            },

            success: (respuesta) => {
                console.log(respuesta);
                $parrafo.text(respuesta.mensaje);

                //  -----  registro correcto: pasar a modo login  -----
                if (modo === 'registro') {
                    if (respuesta.valido) {
                        $parrafo.css('color', '#0a7a3e');
                        cambiarModo('login');
                        $parrafo.text(respuesta.mensaje).css('color', '#0a7a3e');
                    } else {
                        $parrafo.css('color', '#c33');
                    }
                    return;
                }

                //  -----  login correcto: entrar a zona privada  -----
                if (respuesta.valido) {
                    $parrafo.css('color', '#fff');
                    resetearAuth();
                    mostrarVistaDentro(respuesta.username || '');
                }
                //  -----  login invalido / no registrado  -----
                else {
                    $parrafo.css('color', '#c33');

                    //  -----  si no esta dado de alta, sugerir registro  -----
                    if (respuesta.codigo === 'no_registrado') {
                        $tabRegistro.trigger('focus');
                    }
                }
            },

            error: (xhr, status, error) => {
                console.error('error:', status, error);
                $parrafo
                    .text(`Error en la peticion: ${status}`)
                    .css('color', '#c33')
                    .removeClass('cargando');
            },

            complete: () => {
                $form.find('input[type="submit"]').prop('disabled', false);
                $parrafo.removeClass('cargando');
            },
        });
    };



    /*
        *  -----------------------------
        *  -----  Inicializacion  -----
        *  -----------------------------
    */

    /** @type {number} - `Ancho del documento para el overlay` */
    const anchoDocumento = $doc.width() || 0;

    /** @type {number} - `Alto del documento para el overlay` */
    const altoDocumento = $doc.height() || 0;

    $cajaAuth
        .css({
            position: 'fixed',
            'z-index': 1000,
        })
        .hide();

    $capaModal
        .css({
            opacity: 0.80,
            'z-index': 900,
            width: anchoDocumento + 'px',
            height: altoDocumento + 'px',
            backgroundColor: '#33ffcc',
            position: 'fixed',
            top: '0px',
            left: '0px',
            overflow: 'hidden',
        })
        .hide();

    cambiarModo('login');



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    //  -----  limpiar listeners previos al recargar el ejercicio en la SPA  -----
    $ventana.off('.loginAuth');
    $enlaceLogin.off('.loginAuth');
    $enlaceRegistro.off('.loginAuth');
    $form.off('.loginAuth');
    $tabLogin.off('.loginAuth');
    $tabRegistro.off('.loginAuth');
    $enlaceCerrarSesion.off('.loginAuth');

    $enlaceLogin.on('click.loginAuth', (event) => {
        event.preventDefault();
        mostrarCajaAuth('login');
    });

    $enlaceRegistro.on('click.loginAuth', (event) => {
        event.preventDefault();
        mostrarCajaAuth('registro');
    });

    $tabLogin.on('click.loginAuth', (event) => {
        event.preventDefault();
        cambiarModo('login');
    });

    $tabRegistro.on('click.loginAuth', (event) => {
        event.preventDefault();
        cambiarModo('registro');
    });

    $ventana.on('resize.loginAuth', ajustarPosicionesAuth);
    $ventana.on('scroll.loginAuth', ajustarPosicionesAuth);

    $ventana.on('pageshow.loginAuth', (e) => {

        /** @type {PageTransitionEvent | undefined} - `Evento nativo pageshow` */
        const eventoNativo = /** @type {PageTransitionEvent | undefined} */ (e.originalEvent);

        //  -----  si la pagina viene de bfcache, resetear  -----
        if (eventoNativo?.persisted) {
            resetearAuth();
        }
    });

    $form.on('submit.loginAuth', procesaFormulario);

    $enlaceCerrarSesion.on('click.loginAuth', (event) => {
        event.preventDefault();
        mostrarVistaPublica();
    });


})(jQuery);
