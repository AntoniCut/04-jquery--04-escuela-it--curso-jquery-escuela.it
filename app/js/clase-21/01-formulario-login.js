/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /01-formulario-login.js  --  /src/scripts/clase-21/01-formulario-login.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-formulario-login.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-21';

    /** @type {string} - `Endpoint del servicio de login` */
    const ENDPOINT = 'login.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<Window>} - `Ventana del navegador` */
    const $ventana = $(window);

    /** @type {JQuery<Document>} - `Documento` */
    const $doc = $(document);

    /** @type {JQuery<HTMLDivElement>} - `Boton azul del navbar` */
    const $btnNavbar = $('#btnNavbar');

    /** @type {JQuery<HTMLDivElement>} - `Boton naranja de themes jQuery UI` */
    const $btnNavbarThemes = $('#btnNavbarThemesJQueryUI');

    /** @type {JQuery<HTMLDivElement>} - `Caja modal de login` */
    const $cajalogin = $('#cajalogin');

    /** @type {JQuery<HTMLDivElement>} - `Capa modal de fondo` */
    const $capamodal = $('#capamodal');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace para abrir el login` */
    const $enlacelogin = $('#enlacelogin');

    /** @type {JQuery<HTMLFormElement>} - `Formulario de login` */
    const $form = /** @type {JQuery<HTMLFormElement>} */ ($('form', '#cajalogin'));

    /** @type {JQuery<HTMLParagraphElement>} - `Titulo de la caja de login` */
    const $titulo = /** @type {JQuery<HTMLParagraphElement>} */ ($('#msg-login'));

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de errores` */
    const $errores = $('#errores-login');

    /** @type {JQuery<HTMLButtonElement>} - `Boton cancelar` */
    const $btnCancelar = /** @type {JQuery<HTMLButtonElement>} */ ($('#btn-cancelar-login'));

    /** @type {JQuery<HTMLDivElement>} - `Vista publica con el sitio` */
    const $vistaLogin = $('#vista-login');

    /** @type {JQuery<HTMLDivElement>} - `Vista privada tras login` */
    const $vistaDentro = $('#vista-dentro');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace para cerrar sesion` */
    const $enlaceCerrarSesion = $('#enlace-cerrar-sesion');


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
     * -----------------------------------
     * -----  `ocultarBotonesNav()`  -----
     * -----------------------------------
     * - Oculta los botones azul y naranja del layout.
     * @return {void}
     */
    const ocultarBotonesNav = () => {
        $btnNavbar.hide();
        $btnNavbarThemes.hide();
    };



    /**
     * -----------------------------------
     * -----  `mostrarBotonesNav()`  -----
     * -----------------------------------
     * - Muestra de nuevo los botones azul y naranja del layout.
     * @return {void}
     */
    const mostrarBotonesNav = () => {
        $btnNavbar.show();
        $btnNavbarThemes.show();
    };



    /**
     * --------------------------------
     * -----  `limpiarErrores()`  -----
     * --------------------------------
     * - Vacia el contenedor de errores.
     * @return {void}
     */
    const limpiarErrores = () => {
        $errores.text('').removeClass('login-practica__errores--ok');
    };



    /**
     * --------------------------------------
     * -----  `mostrarError(mensaje)`  -----
     * --------------------------------------
     * - Muestra un mensaje de error o servidor en el contenedor.
     * @param {string} mensaje - Texto del error
     * @return {void}
     */
    const mostrarError = (mensaje) => {
        $errores
            .removeClass('login-practica__errores--ok')
            .text(mensaje);
    };



    /**
     * -----------------------------------------
     * -----  `ajustarPosicionesLogin()`  -----
     * -----------------------------------------
     * - Centra la caja de login y ajusta el tamaño del overlay.
     * @return {void}
     */
    const ajustarPosicionesLogin = () => {

        /** @type {number} - `Alto de la ventana` */
        const altoVentana = $ventana.height() || 0;

        /** @type {number} - `Ancho de la ventana` */
        const anchoVentana = $ventana.width() || 0;

        /** @type {number} - `Alto de la caja de login` */
        const altoCaja = $cajalogin.outerHeight() || 0;

        /** @type {number} - `Ancho de la caja de login` */
        const anchoCaja = $cajalogin.outerWidth() || 0;

        $cajalogin.css({
            top: ((altoVentana - altoCaja) / 2) + 'px',
            left: ((anchoVentana - anchoCaja) / 2) + 'px',
        });

        $capamodal.css({
            width: ($doc.width() || 0) + 'px',
            height: ($doc.height() || 0) + 'px',
        });
    };



    /**
     * --------------------------------
     * -----  `cerrarModal()`  -----
     * --------------------------------
     * - Cierra la caja modal, limpia estado y restaura los botones del layout.
     * @return {void}
     */
    const cerrarModal = () => {

        $cajalogin.hide().stop(true, true);
        $capamodal.hide().stop(true, true);

        $titulo
            .text('Login de usuarios')
            .css('color', '#fff')
            .removeClass('cargando');

        limpiarErrores();

        $form.find('input[type="submit"]').prop('disabled', false);
        $form.find('input[type="text"]').val('');

        mostrarBotonesNav();
    };



    /**
     * ---------------------------------------
     * -----  `mostrarVistaDentro()`  -----
     * ---------------------------------------
     * - Muestra la zona privada y oculta la vista publica.
     * @return {void}
     */
    const mostrarVistaDentro = () => {
        $vistaLogin.prop('hidden', true);
        $vistaDentro.prop('hidden', false);
    };



    /**
     * --------------------------------------
     * -----  `mostrarVistaLogin()`  -----
     * --------------------------------------
     * - Vuelve a la vista publica tras cerrar sesion.
     * @return {void}
     */
    const mostrarVistaLogin = () => {
        $vistaDentro.prop('hidden', true);
        $vistaLogin.prop('hidden', false);
        cerrarModal();
    };



    /**
     * -------------------------------------------
     * -----  `procesaFormulario(event)`  -----
     * -------------------------------------------
     * - Envia el formulario por Ajax y gestiona la respuesta JSON.
     * @param {JQuery.SubmitEvent} event - Evento submit del formulario
     * @return {void}
     */
    const procesaFormulario = (event) => {

        event.preventDefault();
        limpiarErrores();

        $.ajax({
            data: $form.serialize(),
            type: 'post',
            dataType: 'json',
            url: construirUrl(ENDPOINT),

            beforeSend: () => {
                $form.find('input[type="submit"]').prop('disabled', true);
                $titulo.css('color', '#fff');
                $titulo.text('Cargando...');
                $titulo.addClass('cargando');
            },

            success: (respuesta) => {
                console.log(respuesta);

                //  -----  login valido: entrar a zona privada  -----
                if (respuesta.valido) {
                    cerrarModal();
                    mostrarVistaDentro();
                }
                //  -----  login invalido: mostrar error  -----
                else {
                    $titulo.text('Login de usuarios');
                    mostrarError(respuesta.mensaje || 'No se corresponde el usuario o la clave');
                }
            },

            error: (xhr, status, error) => {
                console.error('error:', status, error);
                $titulo.text('Login de usuarios');
                mostrarError(`Error del servidor: ${status}`);
            },

            complete: () => {
                $form.find('input[type="submit"]').prop('disabled', false);
                $titulo.removeClass('cargando');
            },
        });
    };



    /**
     * ---------------------------------------
     * -----  `mostrarLogin(event)`  -----
     * ---------------------------------------
     * - Muestra la caja de login y el overlay con fundido.
     * @param {JQuery.ClickEvent} event - Evento click del enlace
     * @return {void}
     */
    const mostrarLogin = (event) => {

        event.preventDefault();

        limpiarErrores();
        ocultarBotonesNav();

        $cajalogin.prop('hidden', false);
        $capamodal.prop('hidden', false);

        ajustarPosicionesLogin();

        $cajalogin.fadeIn(2000);
        $capamodal.fadeIn(2000);
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

    $cajalogin
        .css({
            position: 'fixed',
            'z-index': 1000,
            cursor: 'pointer',
        })
        .hide();

    $capamodal
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



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    //  -----  limpiar listeners previos al recargar el ejercicio en la SPA  -----
    $ventana.off('.loginPractica');
    $enlacelogin.off('.loginPractica');
    $form.off('.loginPractica');
    $btnCancelar.off('.loginPractica');
    $enlaceCerrarSesion.off('.loginPractica');

    $enlacelogin.on('click.loginPractica', mostrarLogin);
    $ventana.on('resize.loginPractica', ajustarPosicionesLogin);
    $ventana.on('scroll.loginPractica', ajustarPosicionesLogin);

    //  -----  al volver desde cache del navegador, resetear el login  -----
    $ventana.on('pageshow.loginPractica', (e) => {

        /** @type {PageTransitionEvent | undefined} - `Evento nativo pageshow` */
        const eventoNativo = /** @type {PageTransitionEvent | undefined} */ (e.originalEvent);

        //  -----  si la pagina viene de bfcache, resetear el login  -----
        if (eventoNativo?.persisted) {
            cerrarModal();
        }
    });

    $form.on('submit.loginPractica', procesaFormulario);

    $btnCancelar.on('click.loginPractica', (event) => {
        event.preventDefault();
        cerrarModal();
    });

    $enlaceCerrarSesion.on('click.loginPractica', (event) => {
        event.preventDefault();
        mostrarVistaLogin();
    });


})(jQuery);
