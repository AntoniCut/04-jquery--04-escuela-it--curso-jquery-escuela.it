/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /03-disparar-eventos.js  --  /src/scripts/clase-19/03-disparar-eventos.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/


/// <reference path="./types.d.js" />


(($) => {


    console.log('\n');
    console.warn('-----  03-disparar-eventos.js  -----');
    console.log('\n');


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

    /** @type {JQuery<HTMLOutputElement>} - `Estado del formulario tras el submit` */
    const $estadoForm = $('#estadoForm');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de clics recibidos en la caja` */
    const $estadoCaja = $('#estadoCaja');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de disparos` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar click en el enlace` */
    const $btnTriggerClickEnlace = $('#btnTriggerClickEnlace');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar submit del formulario` */
    const $btnTriggerSubmitForm = $('#btnTriggerSubmitForm');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar click en la caja` */
    const $btnTriggerClickCaja = $('#btnTriggerClickCaja');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');



    /** @type {number} - `Total de clics recibidos en la caja` */
    let totalClicsCaja = 0;


 
    /**
     * ---------------------------------
     * -----  `esEventoManual(e)`  -----
     * ---------------------------------
     * - Determina si el evento fue disparado por el usuario o por trigger()
     * - Comprueba si existe originalEvent en el objeto del evento
     * @param {JQuery.TriggeredEvent} e - `Evento jQuery disparado`
     * @returns {OrigenEvento} - `Origen del evento: manual o trigger`
     */

    const esEventoManual = (e) => e.originalEvent ? 'manual' : 'trigger';
    

 
    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Registra los disparos de eventos en el panel de log
     * - Agrega la clase CSS segun el origen (manual o trigger)
     * - Construye el HTML de la entrada con elemento, evento, manejador y origen
     * - Inserta el item al inicio del registro de eventos
     * @param {EntradaLogDisparo<OrigenEvento>} entrada - `Datos del disparo registrado`
     */

    const registrarLog = (entrada) => {

        const { elemento, evento, manejador, origen } = entrada;

        /** @type {string} - `Clase CSS segun el origen del evento` */
        const claseOrigen = origen === 'manual'
            ? 'disparar-eventos__log-item--manual'
            : 'disparar-eventos__log-item--trigger';

        /** @type {string} - `Etiqueta legible del origen del evento` */
        const etiquetaOrigen = origen === 'manual' ? 'Click manual' : 'trigger()';

        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */ (document.createElement('li')))
            .addClass(`disparar-eventos__log-item ${claseOrigen}`)
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
        
        $el.addClass('disparar-eventos__flash');

        window.setTimeout(() => {
            $el.removeClass('disparar-eventos__flash');
        }, 450);
    };


    /*
        *  ------------------------------------
        *  -----  Manejadores del enlace  -----
        *  ------------------------------------
    */

    $enlace.on('click', function (e) {

        e.preventDefault();

        const origen = esEventoManual(e);

        $(this).text('Texto cambiado por manejador 1');
        $estadoEnlace.text('Manejador 1 ejecutado');
        animarElemento($enlace);
        registrarLog({
            elemento: 'Enlace',
            evento: 'click',
            manejador: 'Cambia el texto del enlace',
            origen,
        });
    });

    $enlace.on('click', function (e) {

        const origen = esEventoManual(e);

        $(this).css('color', '#e63946');
        $estadoEnlace.text('Manejadores 1 y 2 ejecutados');
        registrarLog({
            elemento: 'Enlace',
            evento: 'click',
            manejador: 'Cambia el color del enlace',
            origen,
        });
    });


    /*
        *  --------------------------------------
        *  -----  Manejador del formulario  -----
        *  --------------------------------------
    */

    $form.on('submit', function (e) {

        e.preventDefault();

        const origen = esEventoManual(e);
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
    });


    /*
        *  ----------------------------------
        *  -----  Manejador de la caja  -----
        *  ----------------------------------
    */

    $caja.on('click', function (e) {

        const origen = esEventoManual(e);

        totalClicsCaja += 1;
        $estadoCaja.text(`Clics recibidos: ${totalClicsCaja}`);
        $(this).toggleClass('disparar-eventos__caja--activa');
        animarElemento($caja);
        registrarLog({
            elemento: 'Caja',
            evento: 'click',
            manejador: 'Alterna estado visual y cuenta clics',
            origen,
        });
    });


    /*
        *  ----------------------------------
        *  -----  Botones de trigger()  -----
        *  ----------------------------------
    */

    $btnTriggerClickEnlace.on('click', () => {
        $enlace.trigger('click');
    });

    $btnTriggerSubmitForm.on('click', () => {
        $form.trigger('submit');
    });

    $btnTriggerClickCaja.on('click', () => {
        $caja.trigger('click');
    });

    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="disparar-eventos__log-item disparar-eventos__log-item--info">' +
            'Registro limpiado. Dispara un evento para ver nuevas entradas.' +
            '</li>'
        );
    });



})(jQuery);
