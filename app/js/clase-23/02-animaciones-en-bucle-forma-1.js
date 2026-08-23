/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-animaciones-en-bucle-forma-1.js  --  /src/scripts/clase-23/02-animaciones-en-bucle-forma-1.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-animaciones-en-bucle-forma-1.js  -----');
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

    /** - `Texto inicial de la capa` */
    const textoInicialCapa = $capa.text();

    /** - `Margen izquierdo del recorrido` */
    const destinoIzquierda = 15;

    /** - `Duracion base de cada tramo horizontal` */
    const duracionTotal = 2000;


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
     * ------------------------------------------
     * -----  `registrarVuelta(elem, sig)`  -----
     * ------------------------------------------
     * - Incrementa el contador y reinicia el bucle.
     * @param {JQuery<HTMLElement>} elem - Capa animada.
     * @param {Function} sig - Callback de la cola jQuery.
     * @return {void}
     */
    const registrarVuelta = (elem, sig) => {

        if (elem.data('vueltas')) {
            elem.data('vueltas', elem.data('vueltas') + 1);
        } else {
            elem.data('vueltas', 1);
        }

        elem.text(String(elem.data('vueltas')));

        moverBucle();
        sig();
    };


    /**
     * ---------------------------------------------
     * -----  `encadenarTramoIzquierda(elem)`  -----
     * ---------------------------------------------
     * - Continua el bucle desde el borde derecho.
     * @param {JQuery<HTMLElement>} elem - Capa animada.
     * @return {JQuery<HTMLElement>} - Cadena de animacion.
     */
    const encadenarTramoIzquierda = (elem) => {

        return elem
            .queue((sig) => {
                elem.data('fase', 'transicion');
                sig();
            })
            .fadeOut()
            .delay(1000)
            .fadeIn()
            .queue((sig) => {
                elem.data('fase', 'izquierda');
                sig();
            })
            .animate({ left: `${destinoIzquierda}px` }, 2000)
            .delay(1000)
            .queue((sig) => {
                registrarVuelta(elem, sig);
            });
    };


    /**
     * ----------------------------
     * -----  `moverBucle()`  -----
     * ----------------------------
     * - Mueve la capa de forma indefinida.
     * @return {void}
     */
    const moverBucle = () => {

        const destinoDerecha = calcularDestinoDerecha();

        $capa.data('fase', 'derecha');

        $capa.animate({ left: `${destinoDerecha}px` }, 2000);

        encadenarTramoIzquierda($capa);
    };


    /**
     * -------------------------------
     * -----  `reanudarBucle()`  -----
     * -------------------------------
     * - Continua la animacion desde la posicion actual.
     * @return {void}
     */
    const reanudarBucle = () => {

        const destinoDerecha = calcularDestinoDerecha();
        const posicionActual = $capa.position()?.left ?? destinoIzquierda;
        const distanciaTotal = destinoDerecha - destinoIzquierda;
        
        /** @type {'derecha' | 'transicion' | 'izquierda'} - `Fase actual de la capa` */
        const fase = $capa.data('fase');


        //  -----  tramo hacia la derecha  -----
        if (fase === 'derecha') {

            const distanciaRestante = destinoDerecha - posicionActual;
            const duracionRestante = (distanciaRestante / distanciaTotal) * duracionTotal;

            $capa.animate({ left: `${destinoDerecha}px` }, duracionRestante);
            encadenarTramoIzquierda($capa);
            return;
        }


        //  -----  fade, pausa oculta o tramo hacia la izquierda  -----
        if (fase === 'transicion') {
            encadenarTramoIzquierda($capa);
            return;
        }


        //  -----  tramo hacia la izquierda  -----
        if (fase === 'izquierda') {

            const distanciaRestante = posicionActual - destinoIzquierda;
            const duracionRestante = (distanciaRestante / distanciaTotal) * duracionTotal;

            $capa
                .animate({ left: `${destinoIzquierda}px` }, duracionRestante)
                .delay(1000)
                .queue((sig) => {
                    registrarVuelta($capa, sig);
                });
            return;
        }


        //  -----  sin fase guardada: empezar un ciclo nuevo  -----
        moverBucle();
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
            .removeAttr('style')
            .text(textoInicialCapa);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    reiniciarCapa();

    $btnPararReanudar.off('.animacionesBucleForma1');


    //  -----  parar o reanudar el bucle  -----
    $btnPararReanudar.on('click.animacionesBucleForma1', (event) => {
        event.preventDefault();

        $capa.toggleClass('en-movimiento');


        //  -----  reanudar o iniciar la animacion  -----
        if ($capa.hasClass('en-movimiento')) {

            if ($capa.data('pausado')) {
                $capa.data('pausado', false);
                reanudarBucle();
            } else {
                moverBucle();
            }
        }

        //  -----  pausar en la posicion actual  -----
        else {
            $capa
                .data('pausado', true)
                .stop(true, false);
        }
    });


})(jQuery);
