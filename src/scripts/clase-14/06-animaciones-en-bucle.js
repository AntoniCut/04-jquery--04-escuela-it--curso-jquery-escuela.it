/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /06-animaciones-en-bucle.js  --  /src/scripts/clase-14/06-animaciones-en-bucle.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  06-animaciones-en-bucle.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} - `Contenedor principal de la animación, con clase = animate__container` */
    const $animateContainer = $('.main__section-practica .animate__container');

    /** @type {JQuery<HTMLButtonElement>} - `Botón con id = btnAnimar`  */
    const $btnAnimar = $('#btnAnimar');

    /** @type {JQuery<HTMLButtonElement>} - `Botón con id = btnStop`  */
    const $btnStop = $('#btnStop');

    /** @type {JQuery<HTMLButtonElement>} - `Botón con id = btnReset` */
    const $btnReset = $('#btnReset');

    /** @type {JQuery<HTMLDivElement>} - `Elemento con id = capa`  */
    const $capa = $("#capa");

    /** @type {string} - `Texto inicial del elemento` */
    const textoInicialCapa = $capa.text();


    //  -----  Variables de control del bucle de animación  -----

    /** @type {boolean} - `Controla si el bucle de animación sigue activo` */
    let animacionActiva = false;

    /** @type {boolean} - `Indica si la animación está pausada` */
    let animacionPausada = false;

    /** @type {number} - `Paso actual del ciclo de animación` */
    let pasoActual = 0;

    /** @type {number | null} - `Temporizador usado en las pausas del bucle` */
    let temporizadorEspera = null;

    /** @type {number} - `Marca temporal de inicio de la espera actual` */
    let inicioEspera = 0;

    /** @type {number} - `Tiempo restante de la espera actual` */
    let esperaRestante = 0;


    /**
     * ---------------------------------
     * -----  `limpiarEspera()`  -----
     * ---------------------------------
     * - Limpia cualquier temporizador pendiente usado por las pausas del bucle.
     */

    const limpiarEspera = () => {
        if (temporizadorEspera !== null) {
            clearTimeout(temporizadorEspera);
            temporizadorEspera = null;
        }

        inicioEspera = 0;
        esperaRestante = 0;
    };


    /**
     * --------------------------------------
     * -----  `continuarEnPaso(paso)`  -----
     * --------------------------------------
     * - Avanza al siguiente paso del ciclo de animación.
     * @param {number} paso
     */

    const continuarEnPaso = (paso) => {
        if (!animacionActiva) {
            return;
        }

        pasoActual = paso;
        ejecutarPasoActual();
    };


    /**
     * ----------------------------------
     * -----  `sumarUnaVuelta()`  -----
     * ----------------------------------
     * - Incrementa el contador visual de vueltas completadas.
     */

    const sumarUnaVuelta = () => {
        const vueltasActuales = Number($capa.data('vueltas') ?? 0) + 1;

        $capa
            .data('vueltas', vueltasActuales)
            .text(vueltasActuales);
    };


    /**
     * -------------------------------------
     * -----  `ejecutarEspera(ms, paso)`  -----
     * -------------------------------------
     * - Ejecuta una pausa del bucle y permite reanudarla tras pulsar Stop.
     * @param {number} ms
     * @param {number} pasoSiguiente
     */

    const ejecutarEspera = (ms, pasoSiguiente) => {
        const duracionEspera = esperaRestante || ms;

        esperaRestante = duracionEspera;
        inicioEspera = Date.now();

        temporizadorEspera = window.setTimeout(() => {
            limpiarEspera();
            continuarEnPaso(pasoSiguiente);
        }, duracionEspera);
    };


    /**
     * ------------------------------------
     * -----  `ejecutarPasoActual()`  -----
     * ------------------------------------
     * - Ejecuta el paso actual del ciclo y enlaza con el siguiente.
     */

    const ejecutarPasoActual = () => {
        if (!animacionActiva) {
            return;
        }

        switch (pasoActual) {
            
            case 0: {
                const tamVentana = $animateContainer.innerWidth() ?? $animateContainer.width() ?? 0;
                const tamElemento = $capa.outerWidth() ?? 0;

                $capa.animate({
                    left: (tamVentana - tamElemento - 50) + 'px'
                }, 2000, function () {
                    continuarEnPaso(1);
                });
                break;
            }

            case 1:
                $capa.fadeOut(400, function () {
                    continuarEnPaso(2);
                });
                break;

            case 2:
                ejecutarEspera(1000, 3);
                break;

            case 3:
                $capa.fadeIn(400, function () {
                    continuarEnPaso(4);
                });
                break;

            case 4:
                $capa.animate({
                    left: '30px'
                }, 2000, function () {
                    continuarEnPaso(5);
                });
                break;

            case 5:
                $capa.fadeOut(400, function () {
                    continuarEnPaso(6);
                });
                break;

            case 6:
                ejecutarEspera(1000, 7);
                break;

            case 7:
                sumarUnaVuelta();
                $capa.fadeIn(400, function () {
                    continuarEnPaso(0);
                });
                break;

            default:
                pasoActual = 0;
                ejecutarPasoActual();
        }
    };


    /**
     * ------------------------------
     * -----  `resetearCapa()`  -----
     * ------------------------------
     * - Devuelve el elemento a su estado inicial, como al cargar la página,
     *   sin necesidad de recargar la SPA.
     */

    const resetearCapa = () => {
        
        animacionActiva = false;
        animacionPausada = false;
        pasoActual = 0;

        limpiarEspera();

        $capa
            .stop(true, false)
            .clearQueue('fx')
            .removeData('vueltas')
            .removeAttr('style')
            .text(textoInicialCapa);
    };


    //  -----  Desactivar eventos click en el botón animar, stop y reset  -----
    $btnAnimar.off('click');
    $btnStop.off('click');
    $btnReset.off('click');


    //  -----  click en el botón animar  -----
    $btnAnimar.on('click', function () {
        if (animacionActiva)
            return;

        animacionActiva = true;

        if (!animacionPausada) {
            pasoActual = 0;
            limpiarEspera();
        }

        animacionPausada = false;
        ejecutarPasoActual();
    });


    //  -----  click en el botón stop para pausar la animación -----
    $btnStop.on('click', function () {

        if (!animacionActiva) {
            return;
        }

        animacionActiva = false;
        animacionPausada = true;

        if (temporizadorEspera !== null) {
            const tiempoTranscurrido = Date.now() - inicioEspera;
            esperaRestante = Math.max(esperaRestante - tiempoTranscurrido, 0);

            clearTimeout(temporizadorEspera);
            temporizadorEspera = null;
            inicioEspera = 0;
        }

        $capa
            .stop(false, false);
    });


    //  -----  click en el botón reset para reiniciar la animación -----
    $btnReset.on('click', function () {

        resetearCapa();
    });



})(jQuery);

