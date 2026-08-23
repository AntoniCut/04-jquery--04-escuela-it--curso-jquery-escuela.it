/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /03-animaciones-en-bucle-forma-2.js  --  /src/scripts/clase-23/03-animaciones-en-bucle-forma-2.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-animaciones-en-bucle-forma-2.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton Parar / Reanudar` */
    const $btnPararReanudar = /** @type {JQuery<HTMLButtonElement>} */ ($('#btnPararReanudar'));

    /** @type {JQuery<HTMLElement>} - `Capa animada` */
    const $capa = /** @type {JQuery<HTMLElement>} */ ($('#capa'));

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de la animacion` */
    const $animateContainer = /** @type {JQuery<HTMLDivElement>} */ (
        $('.main__section-practica .animate__container')
    );


    /*
        *  -----------------------
        *  -----  Variables  -----
        *  -----------------------
    */

    /** - `Texto inicial de la capa` */
    const textoInicialCapa = $capa.text();

    /** @type {number} - `Posicion izquierda del borde izquierdo` */
    const destinoIzquierda = 15;

    /** @type {number} - `Duracion de cada tramo horizontal` */
    const duracionTramo = 5000;


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * ----------------------------------------
     * -----  `calcularDestinoDerecha()`  -----
     * ----------------------------------------
     * - Calcula el left maximo de la capa dentro del contenedor.
     * @return {number} - Posicion izquierda del borde derecho.
     */
    const calcularDestinoDerecha = () => {

        const tamContenedor = $animateContainer.innerWidth() ?? $animateContainer.width() ?? 0;
        const tamElemento = $capa.outerWidth() ?? $capa.width() ?? 0;

        return tamContenedor - tamElemento - destinoIzquierda;
    };


    /**
     * -----------------------------------------------------------
     * -----  `calcularDuracionRestante(posicion, destino)`  -----
     * -----------------------------------------------------------
     * - Calcula el tiempo que falta segun la distancia pendiente.
     * @param {number} posicion - Posicion horizontal actual.
     * @param {number} destino - Posicion horizontal objetivo.
     * @return {number} - Duracion restante en milisegundos.
     */
    const calcularDuracionRestante = (posicion, destino) => {

        const destinoDerecha = calcularDestinoDerecha();
        const distanciaTramo = destinoDerecha - destinoIzquierda;
        const distanciaRestante = Math.abs(destino - posicion);

        return (distanciaRestante / distanciaTramo) * duracionTramo;
    };


    /**
     * ------------------------------------
     * -----  `registrarVuelta(sig)`  -----
     * ------------------------------------
     * - Incrementa el contador y reinicia el bucle.
     * @param {Function} sig - Callback de la cola jQuery.
     * @return {void}
     */
    const registrarVuelta = (sig) => {

        if ($capa.data('vueltas')) {
            $capa.data('vueltas', $capa.data('vueltas') + 1);
        } else {
            $capa.data('vueltas', 1);
        }

        $capa.text(String($capa.data('vueltas')));
        movimientoDerecha();
        sig();
    };


    /**
     * -------------------------------------
     * -----  `encadenarTransicion()`  -----
     * -------------------------------------
     * - Ejecuta la pausa y el fade entre tramo derecho e izquierdo.
     * @return {void}
     */
    const encadenarTransicion = () => {

        $capa.data('fase', 'transicion');

        $capa
            .delay(1000)
            .fadeOut(1000)
            .fadeIn(1000)
            .queue((sig) => {
                sig();
                movimientoIzquierda();
            });
    };


    /**
     * -------------------------------------------
     * -----  `movimientoDerecha(duracion)`  -----
     * -------------------------------------------
     * - Mueve la capa hacia la derecha del contenedor.
     * @param {number} [duracion=duracionTramo] - Duracion del tramo en ms.
     * @return {void}
     */
    const movimientoDerecha = (duracion = duracionTramo) => {

        $capa.data('direccion', 'derecha');
        $capa.data('fase', 'derecha');

        $capa
            .animate({
                left: `${calcularDestinoDerecha()}px`,
            }, duracion)
            .queue((sig) => {
                sig();
                encadenarTransicion();
            });
    };


    /**
     * ---------------------------------------------
     * -----  `movimientoIzquierda(duracion)`  -----
     * ---------------------------------------------
     * - Mueve la capa hacia la izquierda del contenedor.
     * @param {number} [duracion=duracionTramo] - Duracion del tramo en ms.
     * @return {void}
     */
    const movimientoIzquierda = (duracion = duracionTramo) => {

        $capa.data('direccion', 'izquierda');
        $capa.data('fase', 'izquierda');

        $capa
            .animate({
                left: `${destinoIzquierda}px`,
            }, duracion)
            .delay(1000)
            .queue((sig) => {
                registrarVuelta(sig);
            });
    };


    /**
     * --------------------------
     * -----  `reanudar()`  -----
     * --------------------------
     * - Continua la animacion desde la posicion y fase actuales.
     * @return {void}
     */
    const reanudar = () => {

        /** @type {'derecha' | 'izquierda' | 'transicion' | undefined} - `Fase actual` */
        const fase = $capa.data('fase');

        /** @type {number} - `Posicion horizontal actual` */
        const posicionActual = $capa.position()?.left ?? destinoIzquierda;


        //  -----  tramo hacia la derecha  -----
        if (fase === 'derecha') {
            movimientoDerecha(calcularDuracionRestante(posicionActual, calcularDestinoDerecha()));
            return;
        }

        //  -----  pausa y fade entre tramos  -----
        if (fase === 'transicion') {
            encadenarTransicion();
            return;
        }

        //  -----  tramo hacia la izquierda  -----
        if (fase === 'izquierda') {
            movimientoIzquierda(calcularDuracionRestante(posicionActual, destinoIzquierda));
            return;
        }

        //  -----  sin fase guardada: empezar desde la derecha  -----
        movimientoDerecha();
    };


    /**
     * --------------------------------
     * -----  `mover(direccion)`  -----
     * --------------------------------
     * - Mueve la capa a la izquierda o a la derecha del contenedor.
     * @param {'izquierda' | 'derecha'} direccion - Direccion inicial del recorrido.
     * @return {void}
     */
    const mover = (direccion) => {

        if (direccion === 'derecha')
            movimientoDerecha();
        
        if (direccion === 'izquierda') 
            movimientoIzquierda();
        
    };


    /**
     * -------------------------------
     * -----  `reiniciarCapa()`  -----
     * -------------------------------
     * - Devuelve la capa al estado inicial al entrar en la pagina.
     * @return {void}
     */
    const reiniciarCapa = () => {

        $capa
            .stop(true, false)
            .clearQueue('fx')
            .removeClass('en-movimiento')
            .removeData('vueltas')
            .removeData('pausado')
            .removeData('fase')
            .removeData('direccion')
            .removeAttr('style')
            .text(textoInicialCapa);

        $capa.data('direccion', 'derecha');
        $capa.data('fase', 'derecha');
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    reiniciarCapa();

    //  -----  desactivar eventos anteriores  -----
    $btnPararReanudar.off('.animacionesBucleForma2');


    //  -----  parar o reanudar el bucle  -----
    $btnPararReanudar.on('click.animacionesBucleForma2', (event) => {
        event.preventDefault();

        /** @type {'izquierda' | 'derecha'} - `Direccion hacia donde va la capa` */
        const direccion = $capa.data('direccion') || 'derecha';


        //  -----  parar  -----
        if ($capa.hasClass('en-movimiento')) {

            $capa
                .data('pausado', true)
                .stop(true, false)
                .removeClass('en-movimiento');
        }

        //  -----  reanudar o iniciar  -----
        else {
            $capa.addClass('en-movimiento');

            if ($capa.data('pausado')) {
                $capa.data('pausado', false);
                reanudar();
            } else {
                mover(direccion);
            }
        }
    });


})(jQuery);
