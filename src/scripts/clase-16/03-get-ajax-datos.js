/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  /03-get-ajax-datos.js  --  /src/scripts/clase-16/03-get-ajax-datos.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-get-ajax-datos.js  -----');
    console.log('\n');


    /** -----  `URL base para los servicios`  */
    const urlBase = '/escuelait/curso-jquery-escuelait/app/services/clase-16';


    //*  -----  Referencias al HTML  -----

    /** @type {JQuery<Document>} - `Documento`   */
    const $document = $(document);

    /**  @type {JQuery<HTMLAnchorElement>} - `Enlace con id = enlace`  */
    const $enlace = $('#enlace');

    /**  @type {JQuery<HTMLDivElement>} - `Div con id = salida`  */
    const $salida = $('#salida');

    /**  @type {JQuery<HTMLDivElement>} - `Div con clase salida__content`  */
    const $salidaContent = $salida.find('.salida__content');

    /**  @type {JQuery<HTMLDivElement>} - `Div con id = cargando`  */
    const $cargando = $('#cargando');

    /**  @type {JQuery<HTMLUListElement>} - `Lista de eventos AJAX`  */
    const $ajaxLog = $('#ajax-log');

    /**  @type {JQuery<HTMLButtonElement>} - `Botón limpiar log`  */
    const $ajaxLogClear = $('#ajax-log-clear');


    //*  -----  Variables  -----

    /** -----  `Nombre de la persona`  -----  */
    const nombrePersona = 'Ivan';


    /** -----  `Apellido de la persona`  -----  */
    const apellidoPersona = 'Martin';

    /** -----  `Objeto JSON con los datos de la persona`  -----  */
    const myJSON = {
        nombre: nombrePersona,
        apellido: apellidoPersona
    }


    //*  -----  Helpers  -----


    /**
     * Añade una entrada al log de eventos AJAX en el DOM.
     * @param {string} eventName - Nombre del evento (ej. 'ajaxStart').
     * @param {string} modifier  - Modificador CSS BEM (ej. 'start').
     * @param {string} [detail]  - Detalle opcional a mostrar junto al badge.
     */

    const logEvent = (eventName, modifier, detail = '') => {

        //  -----  Elimina el placeholder vacío la primera vez  -----
        $ajaxLog.find('.ajax-log__empty').remove();

        const time = new Date().toLocaleTimeString('es-ES', {
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });

        const $item = $('<li>')
            .addClass(`ajax-log__item ajax-log__item--${modifier}`)
            .append(
                $('<span>').addClass('ajax-log__time').text(time),
                $('<span>').addClass('ajax-log__badge').text(eventName),
                $('<span>').addClass('ajax-log__detail').text(detail),
            );

        $ajaxLog.append($item);

        //  -----  Scroll al final del log  -----
        $ajaxLog.scrollTop($ajaxLog[0]?.scrollHeight ?? 0);

    };


    
    //*  -----  Flag: solo loguear peticiones iniciadas por el usuario  -----

    /** -----  `Indica si la petición fue iniciada por el usuario`  -----  */
    let peticionUsuario = false;


    //*  -----  Eventos AJAX  --  Global Ajax Event Handlers  -----


    //  -----  Evento click del enlace  -----
    $enlace.on('click', function (e) {

        e.preventDefault();

        peticionUsuario = true;

        $.get(

            `${urlBase}/contenido-get-ajax-dato.php`,

            myJSON,

            function (respuesta) {

                /** -----  `Parsea la respuesta como HTML`  -----  */
                const $html = $('<div>').html(respuesta);

                /** -----  `Busca el h3 dentro del HTML parseado`  -----  */
                const $h3 = $html.find('h3');

                //  -----  Muestra solo el contenido del h3  -----
                $salidaContent
                    .empty()
                    .append($h3);

            }
        );

    });


    //  -----  Limpiar log  -----
    $ajaxLogClear.on('click', function () {

        $ajaxLog
            .empty()
            .append($('<li>').addClass('ajax-log__empty').text('Sin eventos aún. Haz clic en el enlace.'));

    });


    //  -----  cuando se lanza la primera petición AJAX  -----
    $document.ajaxStart(function () {

        if (!peticionUsuario) 
            return;

        logEvent('ajaxStart', 'start', 'Primera petición lanzada');

        $cargando.css('display', 'flex');

    });


    //  -----  cuando se está enviando la información  -----
    $document.ajaxSend(function () {

        if (!peticionUsuario) 
            return;

        logEvent('ajaxSend', 'send', 'Enviando datos al servidor');

        $cargando.css('display', 'flex');

    });


    //  -----  cuando la información se completa con éxito  -----
    $document.ajaxSuccess(function () {

        if (!peticionUsuario) 
            return;

        logEvent('ajaxSuccess', 'success', 'Petición completada con éxito');

        $cargando.css('display', 'none');

    });


    //  -----  cuando ha ocurrido un error  -----
    $document.ajaxError(function (event, jqxhr, settings, thrownError) {

        if (!peticionUsuario) 
            return;

        logEvent('ajaxError', 'error', `HTTP ${jqxhr.status} — ${thrownError || 'sin detalle'}`);

        $salidaContent.html('<h3 class="info error"> ⚠️ ERROR CARGANDO DATOS </h3>');
        $cargando.css('display', 'none');

    });


    //  -----  cuando la petición termina haya o no error  -----
    $document.ajaxComplete(function () {

        if (!peticionUsuario) 
            return;

        logEvent('ajaxComplete', 'complete', 'Petición finalizada');

        peticionUsuario = false;

    });


})(jQuery);
