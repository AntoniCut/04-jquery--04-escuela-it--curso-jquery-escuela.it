/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /04-disparar-manejadores.js  --  /src/scripts/clase-19/04-disparar-manejadores.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  04-disparar-manejadores.js  -----');
    console.log('\n');


    /**
     * @typedef {'manual' | 'trigger' | 'triggerHandler'} OrigenManejador
     */

    /**
     * @typedef {object} EntradaLog
     * @property {string} elemento - `Nombre del elemento objetivo`
     * @property {string} evento - `Tipo de evento disparado`
     * @property {string} manejador - `Descripcion del manejador ejecutado`
     * @property {OrigenManejador} origen - `Origen del disparo`
     */

    
    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace de demostracion con dos manejadores click` */
    const $enlace = $('#enlaceDemo');

    /** @type {JQuery<HTMLFormElement>} - `Formulario de demostracion con manejador submit` */
    const $form = $('#formDemo');

    /** @type {JQuery<HTMLDivElement>} - `Caja clickeable de demostracion` */
    const $caja = $('#cajaDemo');

    /** @type {JQuery<HTMLOutputElement>} - `Estado del enlace tras ejecutar manejadores` */
    const $estadoEnlace = $('#estadoEnlace');

    /** @type {JQuery<HTMLOutputElement>} - `Muestra el valor retornado por triggerHandler()` */
    const $valorRetorno = $('#valorRetorno');

    /** @type {JQuery<HTMLOutputElement>} - `Estado del formulario tras el submit` */
    const $estadoForm = $('#estadoForm');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de clics recibidos en la caja` */
    const $estadoCaja = $('#estadoCaja');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de disparos` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar triggerHandler(click) en el enlace` */
    const $btnTriggerHandlerClickEnlace = $('#btnTriggerHandlerClickEnlace');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar trigger(click) en el enlace` */
    const $btnTriggerClickEnlace = $('#btnTriggerClickEnlace');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar triggerHandler(submit) en el formulario` */
    const $btnTriggerHandlerSubmitForm = $('#btnTriggerHandlerSubmitForm');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar triggerHandler(click) en la caja` */
    const $btnTriggerHandlerClickCaja = $('#btnTriggerHandlerClickCaja');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');



    /** @type {number} - `Total de clics recibidos en la caja` */
    let totalClicsCaja = 0;

    /** @type {OrigenManejador | null} - `Origen del proximo disparo programatico (trigger o triggerHandler)` */
    let origenDisparo = null;



    /**
     * --------------------------------
     * -----  `obtenerOrigen(e)`  -----
     * --------------------------------
     * - Determina el origen del evento disparado (manual, trigger o triggerHandler)
     * - Usa origenDisparo si fue establecido antes de un disparo programatico
     * - Comprueba originalEvent para distinguir click manual de trigger()
     * @param {JQuery.TriggeredEvent} e - `Evento jQuery disparado`
     * @returns {OrigenManejador} - `Origen del disparo del manejador`
     */

    const obtenerOrigen = (e) => {

        if (origenDisparo) {
            const origen = origenDisparo;
            origenDisparo = null;
            return origen;
        }

        return e.originalEvent ? 'manual' : 'trigger';
    };



    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Registra los disparos de manejadores en el panel de log
     * - Agrega la clase CSS segun el origen (manual, trigger o triggerHandler)
     * - Construye el HTML de la entrada con elemento, evento, manejador y origen
     * - Inserta el item al inicio del registro de eventos
     * @param {EntradaLog} entrada - `Datos del disparo registrado`
     */

    const registrarLog = (entrada) => {

        const { elemento, evento, manejador, origen } = entrada;

        /** @type {string} - `Clase CSS segun el origen del disparo` */
        const claseOrigen = {
            manual: 'disparar-manejadores__log-item--manual',
            trigger: 'disparar-manejadores__log-item--trigger',
            triggerHandler: 'disparar-manejadores__log-item--handler',
        }[origen];


        /** @type {string} - `Etiqueta legible del origen del disparo` */
        const etiquetaOrigen = {
            manual: 'Click manual',
            trigger: 'trigger()',
            triggerHandler: 'triggerHandler()',
        }[origen];

        
        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */ (document.createElement('li')))
            .addClass(`disparar-manejadores__log-item ${claseOrigen}`)
            .html(
                `<strong>${elemento}</strong> · ` +
                `<span>${evento}</span> · ` +
                `${manejador} · ` +
                `<em>${etiquetaOrigen}</em>`
            );

        $log.prepend($item);
    };



    /**
     * -----------------------------------
     * -----  `animarElemento($el)`  -----
     * -----------------------------------
     * - Aplica una animacion visual de destello al elemento
     * - Agrega la clase CSS de flash al elemento
     * - Elimina la clase CSS de flash tras 450 ms
     * @param {JQuery<HTMLElement>} $el - `Elemento jQuery a animar`
     */

    const animarElemento = ($el) => {
        
        $el.addClass('disparar-manejadores__flash');

        window.setTimeout(() => {
            $el.removeClass('disparar-manejadores__flash');
        }, 450);
    };


    /**
     * ----------------------------------------
     * -----  `mostrarValorRetorno(val)`  -----
     * ----------------------------------------
     * - Muestra en pantalla el valor retornado por triggerHandler()
     * - Convierte undefined a la cadena 'undefined' para visualizarlo
     * - Actualiza el panel de valor retorno del ejercicio
     * @param {unknown} valor - `Valor retornado por el manejador ejecutado`
     */

    const mostrarValorRetorno = (valor) => {
        const texto = valor === undefined ? 'undefined' : String(valor);
        $valorRetorno.text(`Valor retornado: ${texto}`);
    };



    /*
        *  ------------------------------------
        *  -----  Manejadores del enlace  -----
        *  ------------------------------------
    */

    $enlace.on('click', function (e) {

        e.preventDefault();

        const origen = obtenerOrigen(e);

        $(this).text('Texto cambiado por manejador 1');
        $estadoEnlace.text('Manejador 1 ejecutado');
        animarElemento($enlace);
        registrarLog({
            elemento: 'Enlace',
            evento: 'click',
            manejador: 'Manejador 1: cambia el texto',
            origen,
        });

        return 'Manejador 1';
    });

    $enlace.on('click', function (e) {

        const origen = obtenerOrigen(e);

        $(this).css('color', '#e63946');
        $estadoEnlace.text('Manejadores 1 y 2 ejecutados');
        registrarLog({
            elemento: 'Enlace',
            evento: 'click',
            manejador: 'Manejador 2: cambia el color',
            origen,
        });

        return 'Manejador 2';
    });


    /*
        *  --------------------------------------
        *  -----  Manejador del formulario  -----
        *  --------------------------------------
    */

    $form.on('submit', function (e) {

        e.preventDefault();

        const origen = obtenerOrigen(e);
        const nombre = String($form.find('[name="nombre"]').val() || '').trim();
        const mensaje = nombre
            ? `Submit recibido. Nombre: ${nombre}`
            : 'Submit recibido sin nombre';

        $estadoForm.text(mensaje);
        animarElemento($form);
        registrarLog({
            elemento: 'Formulario',
            evento: 'submit',
            manejador: 'Intercepta el envio y muestra el resultado',
            origen,
        });

        return mensaje;
    });


    /*
        *  ----------------------------------
        *  -----  Manejador de la caja  -----
        *  ----------------------------------
    */

    $caja.on('click', function (e) {

        const origen = obtenerOrigen(e);

        totalClicsCaja += 1;
        $estadoCaja.text(`Clics recibidos: ${totalClicsCaja}`);
        $(this).toggleClass('disparar-manejadores__caja--activa');
        animarElemento($caja);
        registrarLog({
            elemento: 'Caja',
            evento: 'click',
            manejador: 'Alterna estado visual y cuenta clics',
            origen,
        });

        return `Clic ${totalClicsCaja}`;
    });



    /*
        *  --------------------------------------------
        *  -----  Botones triggerHandler/trigger  -----
        *  --------------------------------------------
    */

    $btnTriggerHandlerClickEnlace.on('click', () => {

        origenDisparo = 'triggerHandler';
        const valor = $enlace.triggerHandler('click');

        mostrarValorRetorno(valor);
    });

    $btnTriggerClickEnlace.on('click', () => {

        origenDisparo = 'trigger';
        $enlace.trigger('click');
        mostrarValorRetorno('trigger() no devuelve valor de manejador');
    });

    $btnTriggerHandlerSubmitForm.on('click', () => {

        origenDisparo = 'triggerHandler';
        const valor = $form.triggerHandler('submit');

        mostrarValorRetorno(valor);
    });

    $btnTriggerHandlerClickCaja.on('click', () => {

        origenDisparo = 'triggerHandler';
        const valor = $caja.triggerHandler('click');

        mostrarValorRetorno(valor);
    });

    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="disparar-manejadores__log-item disparar-manejadores__log-item--info">' +
            'Registro limpiado. Compara triggerHandler() y trigger() en el enlace.' +
            '</li>'
        );
    });



})(jQuery);
