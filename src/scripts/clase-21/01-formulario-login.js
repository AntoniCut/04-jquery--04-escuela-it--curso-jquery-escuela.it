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

    /** @type {JQuery<HTMLDivElement>} - `Caja modal de login` */
    const $cajalogin = $('#cajalogin');

    /** @type {JQuery<HTMLDivElement>} - `Capa modal de fondo` */
    const $capamodal = $('#capamodal');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace para abrir el login` */
    const $enlacelogin = $('#enlacelogin');

    /** @type {JQuery<HTMLFormElement>} - `Formulario de login` */
    const $form = /** @type {JQuery<HTMLFormElement>} */ ($('form', '#cajalogin'));

    /** @type {JQuery<HTMLParagraphElement>} - `Parrafo de estado del login` */
    const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ ($form.prev());

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
     * @returns {string}
     */
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * -----------------------------------------
     * -----  `ajustarPosicionesLogin()`  -----
     * -----------------------------------------
     * - Centra la caja de login y ajusta el tamaño del overlay.
     * @returns {void}
     */
    const ajustarPosicionesLogin = () => {

        $cajalogin.css({
            top: (($ventana.height() - $cajalogin.outerHeight()) / 2) + 'px',
            left: (($ventana.width() - $cajalogin.outerWidth()) / 2) + 'px',
        });

        $capamodal.css({
            width: $doc.width(),
            height: $doc.height(),
        });
    };



    /**
     * --------------------------------
     * -----  `resetearLogin()`  -----
     * --------------------------------
     * - Restaura el estado inicial de la caja de login y el overlay.
     * @returns {void}
     */
    const resetearLogin = () => {

        $cajalogin.hide().stop(true, true);
        $capamodal.hide().stop(true, true);

        $parrafo
            .text('Login de usuarios')
            .css('color', '#fff')
            .removeClass('cargando');

        $form.find('input[type="submit"]').prop('disabled', false);
        $form.find('input[type="text"]').val('');
    };



    /**
     * ---------------------------------------
     * -----  `mostrarVistaDentro()`  -----
     * ---------------------------------------
     * - Muestra la zona privada y oculta la vista publica.
     * @returns {void}
     */
    const mostrarVistaDentro = () => {
        $vistaLogin.attr('hidden', true);
        $vistaDentro.removeAttr('hidden');
    };



    /**
     * --------------------------------------
     * -----  `mostrarVistaLogin()`  -----
     * --------------------------------------
     * - Vuelve a la vista publica tras cerrar sesion.
     * @returns {void}
     */
    const mostrarVistaLogin = () => {
        $vistaDentro.attr('hidden', true);
        $vistaLogin.removeAttr('hidden');
        resetearLogin();
    };



    /**
     * -------------------------------------------
     * -----  `procesaFormulario(event)`  -----
     * -------------------------------------------
     * - Envia el formulario por Ajax y gestiona la respuesta JSON.
     * @param {JQuery.SubmitEvent} event - Evento submit del formulario
     * @returns {void}
     */
    const procesaFormulario = (event) => {

        event.preventDefault();

        $.ajax({
            data: $form.serialize(),
            type: 'post',
            dataType: 'json',
            url: construirUrl(ENDPOINT),

            beforeSend: () => {
                $form.find('input[type="submit"]').prop('disabled', true);
                $parrafo.css('color', '#fff');
                $parrafo.text('Cargando...');
                $parrafo.addClass('cargando');
            },

            success: (respuesta) => {
                console.log(respuesta);
                $parrafo.text(respuesta.mensaje);

                //  -----  login valido: entrar a zona privada  -----
                if (respuesta.valido) {
                    $parrafo.css('color', '#fff');
                    resetearLogin();
                    mostrarVistaDentro();
                }
                //  -----  login invalido: mostrar error en rojo  -----
                else {
                    $parrafo.css('color', '#c33');
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



    /**
     * ---------------------------------------
     * -----  `mostrarLogin(event)`  -----
     * ---------------------------------------
     * - Muestra la caja de login y el overlay con fundido.
     * @param {JQuery.ClickEvent} event - Evento click del enlace
     * @returns {void}
     */
    const mostrarLogin = (event) => {

        event.preventDefault();

        $cajalogin.removeAttr('hidden');
        $capamodal.removeAttr('hidden');

        ajustarPosicionesLogin();

        $cajalogin.fadeIn(2000);
        $capamodal.fadeIn(2000);
    };



    /*
        *  -----------------------------
        *  -----  Inicializacion  -----
        *  -----------------------------
    */

    $cajalogin
        .css({
            position: 'fixed',
            'z-index': 1000,
        })
        .hide();

    $capamodal
        .css({
            opacity: 0.80,
            'z-index': 900,
            width: $doc.width(),
            height: $doc.height(),
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
    $enlaceCerrarSesion.off('.loginPractica');

    $enlacelogin.on('click.loginPractica', mostrarLogin);
    $ventana.on('resize.loginPractica', ajustarPosicionesLogin);
    $ventana.on('scroll.loginPractica', ajustarPosicionesLogin);

    //  -----  al volver desde cache del navegador, resetear el login  -----
    $ventana.on('pageshow.loginPractica', (e) => {
        if (e.originalEvent && e.originalEvent.persisted) {
            resetearLogin();
        }
    });

    $form.on('submit.loginPractica', procesaFormulario);

    $enlaceCerrarSesion.on('click.loginPractica', (event) => {
        event.preventDefault();
        mostrarVistaLogin();
    });


})(jQuery);
