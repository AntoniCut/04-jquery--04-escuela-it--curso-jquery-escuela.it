/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /06-eventos-personalizados-2.js  --  /src/scripts/clase-19/06-eventos-personalizados-2.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="./types.d.js" />






(($) => {


    console.log('\n');
    console.warn('-----  06-eventos-personalizados-2.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLElement>} - `Todos los elementos con manejador termine` */
    const $elementos = $('.elemento-termine');

    /** @type {JQuery<HTMLDivElement>} - `Divs con manejador termine (muestra hora)` */
    const $divs = $('div.elemento-termine');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de disparos del evento termine` */
    const $estadoTermine = $('#estadoTermine');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de manejadores` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para iniciar animacion slideUp / slideDown` */
    const $btnIniciarSlide = $('#btnIniciarSlide');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para disparar termine manualmente` */
    const $btnTriggerTermine = $('#btnTriggerTermine');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para reiniciar elementos al estado original` */
    const $btnReiniciar = $('#btnReiniciar');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');



    /** @type {number} - `Numero de veces disparado el evento termine` */
    let disparosTermine = 0;

    /** @type {boolean} - `Indica si hay una animacion slide en curso` */
    let animacionEnCurso = false;



    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Registra las entradas en el registro de manejadores
     * - Agrega la clase CSS del tipo de entrada en el registro
     * - Agrega el mensaje a la entrada del registro
     * - Inserta el item al inicio del registro de eventos
     * @param {EntradaLog<TipoEntradaLogTermine>} entrada - `Entrada en el registro de manejadores`
     */

    const registrarLog = (entrada) => {

        const { mensaje, tipo } = entrada;

        /** @type {string} - `Clase CSS del tipo de entrada en el registro` */
        const claseTipo = {
            handler1: 'eventos-personalizados-2__log-item--handler1',
            handler2: 'eventos-personalizados-2__log-item--handler2',
            handler3: 'eventos-personalizados-2__log-item--handler3',
            info: 'eventos-personalizados-2__log-item--info',
        }[tipo];

        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */ (document.createElement('li')))
            .addClass(`eventos-personalizados-2__log-item ${claseTipo}`)
            .text(mensaje);

        $log.prepend($item);
    };



    /**
     * ------------------------------------
     * -----  `actualizarContador()`  -----
     * ------------------------------------
     * - Actualiza el panel de estado con el numero de disparos de termine
     * - Muestra el valor actual de la variable disparosTermine
     */

    const actualizarContador = () => {
        $estadoTermine.text(`Disparos de termine: ${disparosTermine}`);
    };



    /**
     * ------------------------------------
     * -----  `obtenerEtiqueta($el)`  -----
     * -----------------------------------
     * - Obtiene la etiqueta descriptiva del elemento para el registro
     * - Usa data-etiqueta si existe, o el nombre de la etiqueta HTML
     * @param {JQuery<HTMLElement>} $el - `Elemento del que se obtiene la etiqueta`
     * @returns {string} - `Etiqueta descriptiva del elemento`
     */

    const obtenerEtiqueta = ($el) => String($el.data('etiqueta') || $el.prop('tagName'));




    /**
     * -----------------------------------
     * -----  `timestampSegundos()`  -----
     * -----------------------------------
     * - Genera una marca de tiempo con hora, minutos y segundos
     * - Formatea cada componente con dos digitos (padStart)
     * @returns {string} - `Hora actual en formato HH:MM:SS`
     */

    const timestampSegundos = () => {

        const date = new Date();
        const hora = date.getHours();
        const minutos = date.getMinutes();
        const segundos = date.getSeconds();

        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    };



    /**
     * -----------------------------------------------
     * -----  `registrarDisparoTermine(origen)`  -----
     * -----------------------------------------------
     * - Incrementa el contador de disparos del evento termine
     * - Actualiza el panel de estado con el nuevo total
     * - Registra en el log el origen del disparo (slide, manual, etc.)
     * @param {string} origen - `Descripcion del origen del disparo`
     */

    const registrarDisparoTermine = (origen) => {
        disparosTermine += 1;
        actualizarContador();
        registrarLog({
            mensaje: `Evento termine disparado (${origen})`,
            tipo: 'info',
        });
    };



    /*
        *  --------------------------------------------
        *  -----  Manejadores del evento termine  -----
        *  --------------------------------------------
    */

    $elementos.on('termine', function () {

        const $el = $(this);
        const etiqueta = obtenerEtiqueta($el);

        $el.css('background-color', '#9fd');
        registrarLog({
            mensaje: `Manejador 1 (${etiqueta}): cambia color de fondo`,
            tipo: 'handler1',
        });
    });

    $elementos.on('termine', function () {

        const $el = $(this);
        const etiqueta = obtenerEtiqueta($el);

        $el.fadeOut(400).fadeIn(400);
        registrarLog({
            mensaje: `Manejador 2 (${etiqueta}): ejecuta fadeOut / fadeIn`,
            tipo: 'handler2',
        });
    });

    $divs.on('termine', function () {

        const $el = $(this);

        $el.text(timestampSegundos());
        registrarLog({
            mensaje: 'Manejador 3 (Div): muestra hora actual',
            tipo: 'handler3',
        });
    });



    /*
        *  --------------------------------
        *  -----  Botones de control  -----
        *  --------------------------------
    */

    $btnIniciarSlide.on('click', () => {

        if (animacionEnCurso) {
            registrarLog({
                mensaje: 'Animacion slide ya en curso',
                tipo: 'info',
            });
            return;
        }

        animacionEnCurso = true;
        $btnIniciarSlide.prop('disabled', true);

        registrarLog({
            mensaje: 'Iniciando slideUp / slideDown en todos los elementos',
            tipo: 'info',
        });

        $elementos
            .stop(true, true)
            .slideUp(800)
            .slideDown(800, function () {

                const $el = $(this);

                $el.trigger('termine');
                registrarDisparoTermine('callback slideDown');
            })
            .promise()
            .done(() => {
                animacionEnCurso = false;
                $btnIniciarSlide.prop('disabled', false);
            });
    });


    $btnTriggerTermine.on('click', () => {
        $elementos.trigger('termine');
        registrarDisparoTermine('trigger manual');
    });


    $btnReiniciar.on('click', () => {

        $elementos.stop(true, true).each(function () {

            const $el = $(this);
            const textoOriginal = $el.data('textoOriginal');

            if (textoOriginal) {
                $el.text(String(textoOriginal));
            }

            $el
                .css('background-color', '')
                .removeClass('elemento-termine--activo')
                .show();
        });

        animacionEnCurso = false;
        $btnIniciarSlide.prop('disabled', false);
        registrarLog({
            mensaje: 'Elementos reiniciados al estado original',
            tipo: 'info',
        });
    });


    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="eventos-personalizados-2__log-item eventos-personalizados-2__log-item--info">' +
            'Registro limpiado. Inicia slide o dispara termine para continuar.' +
            '</li>'
        );
    });


    /*
        *  ----------------------------
        *  -----  Inicializacion  -----
        *  ----------------------------
    */

    $elementos.each(function () {
        $(this).data('textoOriginal', $(this).text());
    });




})(jQuery);
