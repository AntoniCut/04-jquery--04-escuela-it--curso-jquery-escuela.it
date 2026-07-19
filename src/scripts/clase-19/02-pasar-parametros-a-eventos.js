/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /02-pasar-parametros-a-eventos.js  --  /src/scripts/clase-19/02-pasar-parametros-a-eventos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="./types.d.js" />


(($) => {


    console.log('\n');
    console.warn('-----  02-pasar-parametros-a-eventos.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton con parametros pasados en on() (Ivan)` */
    const $uno = $('.uno');

    /** @type {JQuery<HTMLButtonElement>} - `Boton con parametros pasados en on() (Marco)` */
    const $dos = $('.dos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton con parametros almacenados en .data() (Lucia)` */
    const $tres = $('.tres');

    /** @type {JQuery<HTMLButtonElement>} - `Boton con parametros almacenados en .data() (Sofia)` */
    const $cuatro = $('.cuatro');

    /** @type {JQuery<HTMLOutputElement>} - `Muestra el ultimo saludo generado` */
    const $ultimoSaludo = $('#ultimoSaludo');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de parametros` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');


    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Registra las entradas en el registro de parametros
     * - Agrega la clase CSS segun el metodo utilizado (on, data o info)
     * - Agrega el mensaje a la entrada del registro
     * - Inserta el item al inicio del registro de eventos
     * @param {EntradaLog<TipoEntradaLogParametros>} entrada - `Entrada en el registro de parametros`
     */

    const registrarLog = (entrada) => {

        const { mensaje, tipo } = entrada;

        /** @type {string} - `Clase CSS del tipo de entrada en el registro` */
        const claseTipo = {
            on: 'pasar-parametros-eventos__log-item--on',
            data: 'pasar-parametros-eventos__log-item--data',
            info: 'pasar-parametros-eventos__log-item--info',
        }[tipo];

        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */ (document.createElement('li')))
            .addClass(`pasar-parametros-eventos__log-item ${claseTipo}`)
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
        
        $el.addClass('pasar-parametros-eventos__flash');

        window.setTimeout(() => {
            $el.removeClass('pasar-parametros-eventos__flash');
        }, 450);
    };


    /**
     * ---------------------------------
     * -----  `crearSaludo(data)`  -----
     * ---------------------------------
     * - Construye el texto del saludo a partir de los parametros recibidos
     * - Combina el nombre y el periodo del dia en un mensaje formateado
     * @param {SaludarEventData} data - `Datos del saludo (nombre y periodo)`
     * @returns {string} - `Texto del saludo generado`
     */

    const crearSaludo = (data) => `hola ${data.nombre} buenos ${data.periodo}`;
    



    /**
     * -------------------------------
     * -----  `mostrarSaludo()`  -----
     * -------------------------------
     * - Genera el saludo con los parametros recibidos
     * - Muestra el saludo en el elemento clickeado y en el panel de estado
     * - Anima el elemento y registra la accion en el log
     * @param {JQuery<HTMLElement>} $elemento - `Elemento donde se muestra el saludo`
     * @param {SaludarEventData} data - `Datos del saludo (nombre y periodo)`
     * @param {TipoEntradaLogParametros} metodo - `Metodo usado para pasar parametros (on o data)`
     * @param {string} etiqueta - `Etiqueta descriptiva del metodo en el registro`
     */

    const mostrarSaludo = ($elemento, data, metodo, etiqueta) => {

        const saludo = crearSaludo(data);

        $elemento
            .text(saludo)
            .addClass('pasar-parametros-eventos__item--activo');
        
        $ultimoSaludo.text(`Ultimo saludo: ${saludo}`);
        
        animarElemento($elemento);
        
        registrarLog({
            mensaje: `${etiqueta}: ${saludo} (metodo ${metodo})`,
            tipo: metodo,
        });
    };


    /**
     * --------------------------
     * -----  `saludar(e)`  -----
     * --------------------------
     * - Manejador de click para botones con parametros pasados en on()
     * - Lee los parametros desde e.data del evento
     * - Delega la visualizacion del saludo a mostrarSaludo()
     * @param {JQuery.TriggeredEvent<HTMLElement, SaludarEventData, HTMLElement, HTMLElement>} e - `Evento click con datos en e.data`
     * @this {HTMLElement}
     */

    function saludar(e) {

        /** @type {SaludarEventData} - `Parametros del evento pasados en on()` */
        const data = e.data;

        mostrarSaludo($(this), data, 'on', 'Parametros en on()');
    }


    /**
     * --------------------------------
     * -----  `saludarConData()`  -----
     * --------------------------------
     * - Manejador de click para botones con parametros almacenados en .data()
     * - Lee los parametros desde $(this).data('saludo')
     * - Delega la visualizacion del saludo a mostrarSaludo()
     * @this {HTMLElement}
     */

    function saludarConData() {

        /** @type {SaludarEventData} - `Parametros del saludo almacenados con .data()` */
        const data = $(this).data('saludo');

        mostrarSaludo($(this), data, 'data', 'Parametros con .data()');
    }


    /*
        *  --------------------------------
        *  -----  Parametros en on()  -----
        *  --------------------------------
    */

    $uno.on('click', {
        nombre: 'Ivan',
        periodo: 'dias',
    }, saludar);


    $dos.on('click', {
        nombre: 'Marco',
        periodo: 'noches',
    }, saludar);


    /*
        *  ------------------------------------
        *  -----  Parametros con .data()  -----
        *  ------------------------------------
    */

    $tres.data('saludo', {
        nombre: 'Lucia',
        periodo: 'tardes',
    });

    $cuatro.data('saludo', {
        nombre: 'Sofia',
        periodo: 'noches',
    });

    $tres.add($cuatro).on('click', saludarConData);


    /*
        *  --------------------------------
        *  -----  Botones de control  -----
        *  --------------------------------
    */

    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="pasar-parametros-eventos__log-item pasar-parametros-eventos__log-item--info">' +
            'Registro limpiado. Haz click en las tarjetas para continuar.' +
            '</li>'
        );
    });



})(jQuery);
