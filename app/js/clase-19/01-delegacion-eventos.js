/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /01-delegacion-eventos.js  --  /src/scripts/clase-19/01-delegacion-eventos.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/


/// <reference path="./types.d.js" />


(($) => {


    console.log('\n');
    console.warn('-----  01-delegacion-eventos.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLUListElement>} - `Lista directa de elementos` */
    const $listaDirecta = $('#listaDirecta');

    /** @type {JQuery<HTMLUListElement>} - `Lista delegada de elementos` */
    const $listaDelegada = $('#listaDelegada');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de clics atendidos por enlace directo` */
    const $estadoDirecto = $('#estadoDirecto');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de clics atendidos por delegacion` */
    const $estadoDelegado = $('#estadoDelegado');

    /** @type {JQuery<HTMLOutputElement>} - `Contador de elementos dinamicos añadidos` */
    const $contadorElementos = $('#contadorElementos');

    /** @type {JQuery<HTMLUListElement>} - `Lista del registro de eventos` */
    const $log = $('#logEventos');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para añadir elementos dinamicos` */
    const $btnAnadirElemento = $('#btnAnadirElemento');

    /** @type {JQuery<HTMLButtonElement>} - `Boton para limpiar el registro` */
    const $btnLimpiarLog = $('#btnLimpiarLog');



    /** @type {number} - `Numero de clics atendidos por enlace directo` */
    let clicsDirectos = 0;

    /** @type {number} - `Numero de clics atendidos por delegacion` */
    let clicsDelegados = 0;

    /** @type {number} - `Cantidad de elementos dinamicos creados` */
    let elementosDinamicos = 0;


    /**
     * ------------------------------
     * -----  `registrarLog()`  -----
     * ------------------------------
     * - Esta funcion se encarga de registrar las entradas en el registro de eventos
     * - Se encarga de agregar la clase CSS del tipo de entrada en el registro
     * - Se encarga de agregar el mensaje a la entrada
     * - Se encarga de agregar el item al registro de eventos
     * @param {EntradaLog<TipoEntradaLogDelegacion>} entrada - `Entrada en el registro de eventos`
     */

    const registrarLog = (entrada) => {

        const { mensaje, tipo } = entrada;

        /** @type {string} - `Clase CSS del tipo de entrada en el registro` */
        const claseTipo = {
            directo: 'delegacion-eventos__log-item--directo',
            delegado: 'delegacion-eventos__log-item--delegado',
            sistema: 'delegacion-eventos__log-item--info',
        }[tipo];

        /** @type {JQuery<HTMLLIElement>} - `Item del registro de eventos` */
        const $item = $(/** @type {HTMLLIElement} */(document.createElement('li')))
            .addClass(`delegacion-eventos__log-item ${claseTipo}`)
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


        $el.addClass('delegacion-eventos__flash');

        window.setTimeout(() => {
            $el.removeClass('delegacion-eventos__flash');
        }, 450);
    };


    /*
        *  --------------------------------------------------
        *  -----  Enlace directo (solo al inicializar)  -----
        *  --------------------------------------------------
    */

    $listaDirecta

        .find('.elemento--directo')

        .on('click', function () {

            clicsDirectos += 1;
            $estadoDirecto.text(`Clics atendidos: ${clicsDirectos}`);

            $(this)
                .text('Click atendido por enlace directo')
                .addClass('elemento--activo');

            animarElemento($(this));
            registrarLog({
                mensaje: 'Enlace directo: manejador ejecutado',
                tipo: 'directo',
            });
        });


    /*
        *  --------------------------------------
        *  -----  Delegacion en contenedor  -----
        *  --------------------------------------
    */

    $listaDelegada.on('click', '.elemento--delegado', function () {

        clicsDelegados += 1;
        $estadoDelegado.text(`Clics atendidos: ${clicsDelegados}`);

        const esDinamico = $(this).data('tipo') === 'dinamico';
        const etiqueta = esDinamico ? 'elemento dinamico' : 'elemento inicial';

        $(this)
            .text(`Click atendido por delegacion (${etiqueta})`)
            .addClass('elemento--activo');

        animarElemento($(this));
        registrarLog({
            mensaje: `Delegacion: manejador ejecutado en ${etiqueta}`,
            tipo: 'delegado',
        });
    });



    /*
        *  --------------------------------
        *  -----  Botones de control  -----
        *  --------------------------------
    */

    $btnAnadirElemento.on('click', () => {

        elementosDinamicos += 1;
        const numero = elementosDinamicos;

        $listaDirecta.append(
            `<li class="elemento elemento--directo" data-tipo="dinamico">` +
            `Elemento directo nuevo ${numero}` +
            `</li>`
        );

        $listaDelegada.append(
            `<li class="elemento elemento--delegado" data-tipo="dinamico">` +
            `Elemento delegado nuevo ${numero}` +
            `</li>`
        );

        $contadorElementos.text(`Elementos dinamicos añadidos: ${numero}`);
        registrarLog({
            mensaje: `Se añadio el elemento dinamico ${numero} a ambas listas`,
            tipo: 'sistema',
        });
        registrarLog({
            mensaje: 'El nuevo elemento delegado respondera al click; el directo no',
            tipo: 'sistema',
        });
    });


    /*
        *  --------------------------------
        *  -----  Limpiar el registro  -----
        *  --------------------------------
    */

    $btnLimpiarLog.on('click', () => {
        $log.empty();
        $log.append(
            '<li class="delegacion-eventos__log-item delegacion-eventos__log-item--info">' +
            'Registro limpiado. Sigue probando clics y elementos nuevos.' +
            '</li>'
        );
    });



})(jQuery);
