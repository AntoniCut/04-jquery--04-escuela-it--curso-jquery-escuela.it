/*
    *  ---------------------------------------------------------------------------------------------  *
    *  -----  /04-aplicando-conceptos.js  --  /src/scripts/clase-22/04-aplicando-conceptos.js  -----  *
    *  ---------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  04-aplicando-conceptos.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los partials HTML` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-22';

    /** @type {string} - `Partial 1` */
    const PARTIAL_01 = '_partial-01.html';

    /** @type {string} - `Partial inexistente para forzar fallo` */
    const PARTIAL_NO_EXISTE = '_partial-no-existe.html';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 1` */
    const $resultEjemplo1 = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-1'));

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 2` */
    const $resultEjemplo2 = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-2'));

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 3 exito` */
    const $resultEjemplo3Ok = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-3-ok'));

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 3 fallo` */
    const $resultEjemplo3Fail = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-3-fail'));

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 4` */
    const $resultEjemplo4 = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-4'));

    /** @type {JQuery<HTMLInputElement>} - `Input animado ejemplo 5` */
    const $numberEjemplo5 = /** @type {JQuery<HTMLInputElement>} */ ($('#number-ejemplo-5'));

    /** @type {JQuery<HTMLParagraphElement>} - `Texto ejemplo 5` */
    const $resultEjemplo5 = /** @type {JQuery<HTMLParagraphElement>} */ ($('#result-ejemplo-5'));

    /** @type {JQuery<HTMLInputElement>} - `Input CSS ejemplo 6` */
    const $numberEjemplo6 = /** @type {JQuery<HTMLInputElement>} */ ($('#number-ejemplo-6'));

    /** @type {JQuery<HTMLInputElement>} - `Input margen ejemplo 7` */
    const $numberEjemplo7 = /** @type {JQuery<HTMLInputElement>} */ ($('#number-ejemplo-7'));

    /** @type {JQuery<HTMLDivElement>} - `Salida fuente ejemplo 7` */
    const $resultEjemplo7 = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-7'));

    /** @type {JQuery<HTMLDivElement>} - `Salida ejemplo 8` */
    const $resultEjemplo8 = /** @type {JQuery<HTMLDivElement>} */ ($('#result-ejemplo-8'));

    /** @type {HTMLElement | null} - `Panel ejemplo 5` */
    const panelEjemplo5 = document.getElementById('ejemplo-5');

    /** @type {HTMLElement | null} - `Panel ejemplo 6` */
    const panelEjemplo6 = document.getElementById('ejemplo-6');

    /** @type {HTMLElement | null} - `Panel ejemplo 7` */
    const panelEjemplo7 = document.getElementById('ejemplo-7');

    /** @type {string} - `Margen izquierdo original del input del ejemplo 7` */
    const margenOriginalEjemplo7 = $numberEjemplo7.css('margin-left') || '0px';

    /** @type {string} - `Tamano de fuente original del ejemplo 7` */
    const fuenteOriginalEjemplo7 = $resultEjemplo7.css('font-size') || '1.5rem';

    /** @type {JQuery<HTMLElement>} - `Contenedor de la demo` */
    const $demo = $('.deferred');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * - Construye la URL absoluta del partial.
     * @param {string} endpoint - Nombre del archivo HTML
     * @return {string}
     */
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * ----------------------------------
     * -----  `htmlDeGet(retorno)`  -----
     * ----------------------------------
     * - Extrae el HTML de la resolucion de $.get / $.when.
     * @param {unknown} retorno - Valor resuelto por jQuery
     * @return {string}
     */
    const htmlDeGet = (retorno) => {

        if (Array.isArray(retorno)) {
            return String(retorno[0] ?? '');
        }

        return String(retorno ?? '');
    };



    /**
     * ------------------------
     * -----  `esPar(n)`  -----
     * ------------------------
     * - Devuelve una promesa que se resuelve si n es par y se rechaza si es impar o no numerico.
     * @param {string|number} n - Valor a comprobar
     * @return {JQuery.Promise<string, string, string>}
     */
    const esPar = (n) => {

        const deferred = $.Deferred();

        deferred.notify('Comprobando si el numero es par...');

        const valor = Number(n);

        //  -----  no es un numero  -----
        if (n === '' || Number.isNaN(valor)) {
            deferred.reject('Error: El numero no es un numero');
        }
        //  -----  es par  -----
        else if (valor % 2 === 0) {
            deferred.resolve('¡¡Es par!!');
        }
        //  -----  es impar  -----
        else {
            deferred.reject('Mal!!!');
        }

        deferred.notify('Fin de la comprobacion...');

        return deferred.promise();
    };



    /**
     * -----------------------------------------------------------
     * -----  `mostrarMensaje($contenedor, mensaje, color)`  -----
     * -----------------------------------------------------------
     * - Anade un mensaje de color al contenedor.
     * @param {JQuery<HTMLElement>} $contenedor - Contenedor de salida
     * @param {string} mensaje - Texto a mostrar
     * @param {string} [color='blue'] - Color del texto
     * @return {void}
     */
    const mostrarMensaje = ($contenedor, mensaje, color = 'blue') => {
        const $linea = $('<p></p>')
            .addClass('deferred__msg')
            .css('color', color)
            .text(mensaje);

        $contenedor.append($linea);
    };



    /**
     * ----------------------------------
     * -----  `ejecutarEjemplo5()`  -----
     * ----------------------------------
     * - Reinicia el input y lanza $.when con $.get y la animacion de opacidad.
     * @return {void}
     */
    const ejecutarEjemplo5 = () => {

        $numberEjemplo5.stop(true, true).css('opacity', '1');
        $resultEjemplo5.text('');

        $.when(
            $.get(construirUrl(PARTIAL_01)),
            $numberEjemplo5.animate({ opacity: 0.5 }, 1000).animate({ opacity: 1 }, 1000)
        )
            .done(() => {
                console.info('get + animacion terminados');
                $resultEjemplo5.text('get + animacion terminados');
            });
    };



    /**
     * ----------------------------------
     * -----  `ejecutarEjemplo6()`  -----
     * ----------------------------------
     * - Aplica font-weight bold con .css(): la promesa se resuelve al instante.
     * @return {void}
     */
    const ejecutarEjemplo6 = () => {

        $numberEjemplo6.css('font-weight', 'normal');

        $.when($numberEjemplo6.css({ 'font-weight': 'bold' }))
            .done(() => {
                console.info('css aplicado al instante');
            });
    };



    /**
     * ----------------------------------
     * -----  `ejecutarEjemplo7()`  -----
     * ----------------------------------
     * - Reinicia margen y fuente y lanza las dos animaciones en paralelo.
     * @return {void}
     */
    const ejecutarEjemplo7 = () => {

        $numberEjemplo7.stop(true, true).css('margin-left', margenOriginalEjemplo7);
        $resultEjemplo7.stop(true, true).css('font-size', fuenteOriginalEjemplo7);

        $.when(
            $numberEjemplo7.animate({ 'margin-left': '+=10' }, 500),
            $resultEjemplo7.animate({ 'font-size': '+=2' }, 500)
        )
            .done(() => {
                console.info('animaciones terminadas');
            });
    };



    /**
     * ------------------------------------------
     * -----  `observarEjemplosAnimados()`  -----
     * ------------------------------------------
     * - Observa los paneles 5, 6 y 7 y lanza su efecto al entrar en el viewport.
     * @return {void}
     */
    const observarEjemplosAnimados = () => {

        /** @type {IntersectionObserver | undefined} - `Observer previo de la demo` */
        const observerPrevio = $demo.data('observerAnimaciones');

        //  -----  desconectar observer anterior al recargar el ejercicio en la SPA  -----
        if (observerPrevio instanceof IntersectionObserver) {
            observerPrevio.disconnect();
        }

        /** @type {Record<string, () => void>} - `Accion de cada panel observado` */
        const acciones = {
            'ejemplo-5': ejecutarEjemplo5,
            'ejemplo-6': ejecutarEjemplo6,
            'ejemplo-7': ejecutarEjemplo7,
        };

        /** @type {Set<string>} - `Paneles que ya estan visibles en este ciclo` */
        const visibles = new Set();

        /** @type {HTMLElement | null} - `Contenedor de scroll del layout` */
        const layout = document.querySelector('.layout');

        /** @type {IntersectionObserver} - `Observer de los paneles` */
        const observer = new IntersectionObserver(
            (entries) => {

                for (const entry of entries) {

                    const id = entry.target.id;
                    const accion = acciones[id];

                    if (!accion) {
                        continue;
                    }

                    //  -----  al salir, olvidar el ciclo para poder repetir al volver  -----
                    if (!entry.isIntersecting) {
                        visibles.delete(id);

                        //  -----  ejemplo 6: quitar la negrita para notar el cambio al volver  -----
                        if (id === 'ejemplo-6') {
                            $numberEjemplo6.css('font-weight', 'normal');
                        }

                        continue;
                    }

                    //  -----  evitar relanzar mientras sigue a la vista  -----
                    if (visibles.has(id)) {
                        continue;
                    }

                    visibles.add(id);
                    accion();
                }
            },
            {
                root: layout instanceof HTMLElement ? layout : null,
                threshold: 0.35,
                rootMargin: '0px 0px -8% 0px',
            }
        );

        const paneles = [panelEjemplo5, panelEjemplo6, panelEjemplo7];

        for (const panel of paneles) {
            if (panel) {
                observer.observe(panel);
            }
        }

        $demo.data('observerAnimaciones', observer);
    };



    /*
        *  ----------------------------------------------------------
        *  -----  ejemplo 1: $.when con promesa propia y $.get  -----
        *  ----------------------------------------------------------
        *  Con varios deferreds, cada argumento del .done() es un array
        *  [valor, textStatus, jqXHR] o el valor resuelto segun jQuery.
    */

    $.when(
        esPar(2),
        $.get(construirUrl(PARTIAL_01))
    )
        .done((_isPairReturn, getReturn) => {
            const html = htmlDeGet(getReturn);
            const nodos = $.parseHTML(html) || [];
            $resultEjemplo1.append(nodos);
        })
        .fail(() => {
            mostrarMensaje($resultEjemplo1, 'Error', 'red');
        })
        .always(() => {
            console.info('always: esPar + get finalizado');
        });



    /*
        *  -----------------------------------------------------
        *  -----  ejemplo 2: $.when con un valor no diferido  -----
        *  -----------------------------------------------------
        *  jQuery envuelve el 2 en una promesa ya resuelta
    */

    $.when(2)
        .done((n) => {
            console.log('$.when(2):', n);
            mostrarMensaje($resultEjemplo2, `$.when(2) devolvio: ${n}`);
        });



    /*
        *  -------------------------------------------
        *  -----  ejemplo 3: .then con exito y fallo  -----
        *  -------------------------------------------
    */

    $.when($.get(construirUrl(PARTIAL_01)))
        .then(
            (html) => {
                console.info('then exito:', html);
                mostrarMensaje($resultEjemplo3Ok, 'Peticion correcta a _partial-01.html');
            },
            () => {
                console.info('then fallo');
                mostrarMensaje($resultEjemplo3Ok, 'Fallo inesperado', 'red');
            }
        );

    $.when($.get(construirUrl(PARTIAL_NO_EXISTE)))
        .then(
            (html) => {
                console.info('then exito:', html);
                mostrarMensaje($resultEjemplo3Fail, 'Exito inesperado');
            },
            () => {
                console.info('then fallo: partial no encontrado');
                mostrarMensaje($resultEjemplo3Fail, 'Fallo esperado: partial no encontrado', 'red');
            }
        );



    /*
        *  ---------------------------------------
        *  -----  ejemplo 4: esPar con .progress  -----
        *  ---------------------------------------
    */

    esPar(2)
        .progress((notification) => {
            console.info('progress:', notification);
            mostrarMensaje($resultEjemplo4, notification, '#555');
        })
        .done((message) => {
            console.info('done:', message);
            mostrarMensaje($resultEjemplo4, message);
        })
        .fail((message) => {
            console.info('fail:', message);
            mostrarMensaje($resultEjemplo4, message, 'red');
        });



    //  -----  ejemplos 5, 6 y 7: se lanzan al entrar en pantalla  -----
    observarEjemplosAnimados();



    /*
        *  --------------------------------------------------------
        *  -----  ejemplo 8: varios .done en la misma promesa  -----
        *  --------------------------------------------------------
    */

    const pairPromise = esPar(2);

    pairPromise.done(() => {
        console.log('done 1');
        mostrarMensaje($resultEjemplo8, 'done 1');
    });
    pairPromise.done(() => {
        console.log('done 2');
        mostrarMensaje($resultEjemplo8, 'done 2');
    });
    pairPromise.always(() => {
        console.log('always');
        mostrarMensaje($resultEjemplo8, 'always', '#555');
    });
    pairPromise.done(() => {
        console.log('done 3');
        mostrarMensaje($resultEjemplo8, 'done 3');
    });


})(jQuery);
