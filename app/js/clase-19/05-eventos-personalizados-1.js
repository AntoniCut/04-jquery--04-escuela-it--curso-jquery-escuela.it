/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /05-eventos-personalizados-1.js  --  /src/scripts/clase-19/05-eventos-personalizados-1.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="./types.d.js" />




(($) => {


    console.log('\n');
    console.warn('-----  05-eventos-personalizados-1.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLElement>} - `Todos los elementos con manejador despertarse` */
    const $elementos = $('.elemento-despertar');

    /** @type {JQuery<HTMLElement>} - `Divs y parrafo con manejador despertarse` */
    const $divs = $('div.elemento-despertar, p.elemento-despertar');

    /** @type {JQuery<HTMLLIElement>} - `Elementos li con manejador despertarse` */
    const $lis = $('li.elemento-despertar');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de elementos despiertos` */
    const $estadoDespertar = $('#estadoDespertar');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de eventos` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar despertarse en todos los elementos` */
    const $btnDespertarTodos = $('#btnDespertarTodos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar despertarse solo en divs y parrafo` */
    const $btnDespertarDivs = $('#btnDespertarDivs');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar despertarse solo en elementos li` */
    const $btnDespertarLis = $('#btnDespertarLis');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para restaurar textos al estado original` */
    const $btnRestaurarTextos = $('#btnRestaurarTextos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');



    /** @type {number} - `Cantidad de elementos en estado despierto` */
    let elementosDespiertos = 0;



    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Registra las entradas en el registro de eventos personalizados
     * - Agrega la clase CSS del tipo de entrada en el registro
     * - Agrega el mensaje a la entrada del registro
     * - Inserta el item al inicio del registro de eventos
     * @param {EntradaLog<TipoEntradaLogDespertar>} entrada - `Entrada en el registro de eventos`
     */

    const registrarLog = (entrada) => {

        const { mensaje, tipo } = entrada;

        /** @type {string} - `Clase CSS del tipo de entrada en el registro` */
        const claseTipo = {
            manual: 'eventos-personalizados-1__log-item--manual',
            trigger: 'eventos-personalizados-1__log-item--trigger',
            info: 'eventos-personalizados-1__log-item--info',
        }[tipo];

        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */ (document.createElement('li')))
            .addClass(`eventos-personalizados-1__log-item ${claseTipo}`)
            .text(mensaje);

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
        
        $el.addClass('eventos-personalizados-1__flash');

        window.setTimeout(() => {
            $el.removeClass('eventos-personalizados-1__flash');
        }, 450);
    };


    /**
     * ------------------------------------
     * -----  `actualizarContador()`  -----
     * ------------------------------------
     * - Cuenta los elementos con clase activa (despiertos)
     * - Actualiza el texto del panel de estado con el total
     */

    const actualizarContador = () => {
        elementosDespiertos = $elementos.filter('.elemento-despertar--activo').length;
        $estadoDespertar.text(`Elementos despiertos: ${elementosDespiertos}`);
    };



    /**
     * --------------------------------------
     * -----  `guardarTextoOriginal()`  -----
     * --------------------------------------
     * - Guarda el texto original del elemento en .data('textoOriginal')
     * - Solo almacena el texto si aun no fue guardado previamente
     * @param {JQuery<HTMLElement>} $el - `Elemento cuyo texto se preserva`
     */

    const guardarTextoOriginal = ($el) => {

        if (!$el.data('textoOriginal')) {
            $el.data('textoOriginal', $el.text());
        }
    };



    /*
        *  ------------------------------------------------
        *  -----  Manejador del evento personalizado  -----
        *  ------------------------------------------------
    */

    $elementos.on('despertarse', function () {

        const $el = $(this);
        const etiqueta = String($el.data('etiqueta') || $el.prop('tagName'));

        guardarTextoOriginal($el);

        $el
            .text('¡Despierto!')
            .addClass('elemento-despertar--activo');

        animarElemento($el);
        actualizarContador();
        registrarLog({
            mensaje: `Evento despertarse ejecutado en ${etiqueta}`,
            tipo: 'trigger',
        });
    });



    /*
        *  --------------------------------
        *  -----  Botones de control  -----
        *  --------------------------------
    */

    $btnDespertarTodos.on('click', () => {
        $elementos.trigger('despertarse');
        registrarLog({
            mensaje: 'trigger(despertarse) disparado en todos los elementos',
            tipo: 'info',
        });
    });

    $btnDespertarDivs.on('click', () => {
        $divs.trigger('despertarse');
        registrarLog({
            mensaje: 'trigger(despertarse) disparado solo en divs y parrafo',
            tipo: 'info',
        });
    });

    $btnDespertarLis.on('click', () => {
        $lis.trigger('despertarse');
        registrarLog({
            mensaje: 'trigger(despertarse) disparado solo en elementos li',
            tipo: 'info',
        });
    });

    $btnRestaurarTextos.on('click', () => {

        $elementos.each(function () {

            const $el = $(this);
            const textoOriginal = $el.data('textoOriginal');

            if (textoOriginal) {
                $el.text(String(textoOriginal));
            }

            $el.removeClass('elemento-despertar--activo');
        });

        actualizarContador();
        registrarLog({
            mensaje: 'Textos restaurados al estado original',
            tipo: 'info',
        });
    });

    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="eventos-personalizados-1__log-item eventos-personalizados-1__log-item--info">' +
            'Registro limpiado. Dispara despertarse para ver nuevas entradas.' +
            '</li>'
        );
    });



})(jQuery);
