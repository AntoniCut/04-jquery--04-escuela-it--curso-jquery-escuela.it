/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /06-evitar-doble-click.js  --  /src/scripts/clase-11/06-evitar-doble-click.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/



/**
 * @typedef {object} ClickEventLike
 * @property {number} which - `Codigo del boton pulsado`
 * @property {EventTarget | null} target - `Elemento origen del evento`
 * @property {EventTarget | null} currentTarget - `Elemento que maneja el evento`
 * @property {() => void} stopPropagation - `Detiene la propagacion del evento`
 */


(($) => {


    console.log('\n');
    console.warn('-----  06-evitar-doble-click.js  -----');
    console.log('\n');


    /*
        ---------------------------------  
        -----  Referencias al HTML  -----
        ---------------------------------
    */

    /** @type {JQuery<HTMLSpanElement>} - `Referencia al span dentro del párrafo` */
    const $span = $(".main__section-practica span");

    /** @type {JQuery<HTMLDivElement>} - `Referencia al div de salida 1` */
    const $salida = $("#salida");

    /** @type {number} - `Tiempo de bloqueo entre clics en milisegundos` */
    const BLOQUEO_MS = 4000;

    /** @type {boolean} - `Controla si el evento esta activo` */
    let eventoActivo = true;

    /** @type {number | null} - `Id del timeout de reactivacion` */
    let timeoutReactivacion = null;

    /** @type {number | null} - `Id del intervalo del contador visual` */
    let intervaloContador = null;

    /** @type {number} - `Segundos restantes para reactivar el evento` */
    let segundosRestantes = 0;

    /** @type {EventTarget | null} - `Ultimo target para mostrar en la salida` */
    let ultimoTarget = null;

    /** @type {EventTarget | null} - `Ultimo currentTarget para mostrar en la salida` */
    let ultimoCurrentTarget = null;



    /*
        -----------------------
        -----  Funciones  -----
        -----------------------    
    */


    /**
     * --------------------------------------------
     * -----  `obtenerValorElemento(target)`  -----
     * --------------------------------------------
     * - Devuelve un valor legible del elemento del evento.
     * @param {EventTarget | null} target - `Elemento del evento`
     * @returns {string}
     */

    function obtenerValorElemento(target) {


        //  -----  Si el target no es un Elemento, no tiene valor legible  -----
        if (!(target instanceof Element))
            return 'sin valor';


        //  -----  Si el target es un input, textarea o select, devuelve su valor  -----
        if (
            target instanceof HTMLInputElement
            || target instanceof HTMLTextAreaElement
            || target instanceof HTMLSelectElement
        ) {
            return target.value || '(vacio)';
        }

        /** - `obtenemos el texto del elemento` */
        const texto = target.textContent?.trim();

        //  -----  Si el texto no esta vacío, lo devolvemos, sino indicamos que no tiene texto  -----
        return texto ? texto : '(sin texto)';

    }



    /**
     * ------------------------------------------
     * -----  `describirElemento(target)`  -----
     * ------------------------------------------
     * - Devuelve una etiqueta legible del elemento para mostrar en pantalla.
     * @param {EventTarget | null} target - `Elemento del evento`
     * @returns {string} - `Descripción legible del elemento (ej: div#id.clase1.clase2) o 'sin elemento' si no es un Elemento`
     */

    function describirElemento(target) {

        //  -----  Si el target no es un Elemento, no tiene una descripción legible  -----
        if (!(target instanceof Element))
            return 'sin elemento';

        /**  Nombre de etiqueta del elemento (span, div, p, etc.) en minusculas.  */
        const tag = target.tagName.toLowerCase();

        /**  Agrega #id solo si el elemento tiene id.  */
        const id = target.id ? `#${target.id}` : '';

        /**  Convierte la lista de clases a formato .clase1.clase2.  */
        const classNames = target.classList.length ? `.${[...target.classList].join('.')}` : '';

        //  -----  Devuelve la descripción combinando etiqueta, id y clases  -----
        return `${tag}${id}${classNames}`;
    }



    /**
     * ------------------------------------------------------------------------------
     * -----  `renderSalida(titulo, modo, target, currentTarget, estadoEvento)`  -----
     * ------------------------------------------------------------------------------
     * - Renderiza una tarjeta de salida con formato similar al ejercicio 05.
     * @param {string} titulo - `Titulo de la tarjeta`
     * @param {'con' | 'sin'} modo - `Variante visual de la tarjeta`
     * @param {EventTarget | null} target - `Elemento origen del evento`
     * @param {EventTarget | null} currentTarget - `Elemento que maneja el evento`
     * @param {string} estadoEvento - `Estado actual del evento`
     * @param {number | null} contador - `Segundos restantes del bloqueo`
     */

    function renderSalida(titulo, modo, target, currentTarget, estadoEvento, contador = null) {

        /**  `Etiqueta legible del elemento origen del evento`  */
        const targetLabel = describirElemento(target);

        /**  Etiqueta legible del elemento que maneja el evento` */
        const currentTargetLabel = describirElemento(currentTarget);

        /**  `Valor legible del elemento origen del evento`  */
        const valorTarget = obtenerValorElemento(target);

        /**  `Valor legible del elemento que atiende el evento`  */
        const valorCurrentTarget = obtenerValorElemento(currentTarget);

        //  -----  Renderizamos la tarjeta de salida con toda la información  -----
        $salida.html(`
            
            <article class="event-card event-card--${modo}">
                
                <h4 class="event-card__title"> ${titulo} </h4>

                <div class="event-card__row">
                        <span class="event-card__label">estado del evento</span>
                        <code class="event-card__value">${estadoEvento}</code>
                </div>

                ${contador !== null ? `

                    <div class="event-card__row">
                        <span class="event-card__label">contador visual</span>
                        <code class="event-card__value">${contador}</code>
                    </div>
                    `
                :
                ''
            }

                <div class="event-card__row">
                    <span class="event-card__label">e.target</span>
                    <code class="event-card__value">${targetLabel}</code>
                </div>

                <div class="event-card__row">
                    <span class="event-card__label">valor e.target</span>
                    <code class="event-card__value">${valorTarget}</code>
                </div>

                <div class="event-card__row">
                    <span class="event-card__label">e.currentTarget</span>
                    <code class="event-card__value">${currentTargetLabel}</code>
                </div>

                <div class="event-card__row">
                    <span class="event-card__label">valor e.currentTarget</span>
                    <code class="event-card__value">${valorCurrentTarget}</code>
                </div>

            </article>

        `);

    }



    /**
     * ---------------------------------------
     * -----  `iniciarBloqueoVisual()`  -----
     * ---------------------------------------
     * - Activa el contador visual y reanuda el evento al finalizar.
     */

    function iniciarBloqueoVisual() {

        //  -----  Calculamos los segundos restantes para mostrar en el contador visual  -----
        segundosRestantes = Math.ceil(BLOQUEO_MS / 1000);

        //  -----  Renderizamos la salida inicial del bloqueo con el contador  -----
        renderSalida(
            'Evento desactivado',
            'sin',
            ultimoTarget,
            ultimoCurrentTarget,
            'Evento desactivado: espera para volver a usarlo',
            segundosRestantes
        );

        //  -----  Si ya hay un intervalo o timeout activo, los limpiamos para evitar conflictos  -----
        if (intervaloContador !== null)
            clearInterval(intervaloContador);


        //  -----  Si ya hay un timeout de reactivacion activo, lo limpiamos para evitar conflictos  -----
        if (timeoutReactivacion !== null)
            clearTimeout(timeoutReactivacion);


        //  -----  Iniciamos el intervalo para actualizar el contador visual cada segundo  -----
        intervaloContador = window.setInterval(() => {

            //  -----  Reducimos los segundos restantes y actualizamos la salida con el nuevo valor  -----
            segundosRestantes -= 1;

            //  -----  Si el contador llega a 0 o menos, limpiamos el intervalo y esperamos a la reactivacion  -----
            if (segundosRestantes > 0) {

                renderSalida(
                    'Evento desactivado',
                    'sin',
                    ultimoTarget,
                    ultimoCurrentTarget,
                    'Evento desactivado: espera para volver a usarlo',
                    segundosRestantes
                );

                return;
            }

            //  -----  Limpiamos el intervalo del contador visual al finalizar el bloqueo  -----
            if (intervaloContador !== null) {
                clearInterval(intervaloContador);
                intervaloContador = null;
            }

        }, 1000);


        //  -----  Iniciamos el timeout para reactivar el evento después del tiempo de bloqueo  -----
        timeoutReactivacion = window.setTimeout(() => {

            eventoActivo = true;
            timeoutReactivacion = null;
            segundosRestantes = 0;

            //  -----  Limpiamos el intervalo del contador visual por si aún estuviera activo  -----
            if (intervaloContador !== null) {
                clearInterval(intervaloContador);
                intervaloContador = null;
            }

            //  -----  Renderizamos la salida indicando que el evento ya esta activo nuevamente  -----
            renderSalida(
                'Evento activo de nuevo',
                'con',
                ultimoTarget,
                ultimoCurrentTarget,
                'Evento activo: ya puedes volver a hacer click'
            );

        }, BLOQUEO_MS);
    }



    /**
     * --------------------------------
     * -----  `manejadorClick(e)`  -----
     * --------------------------------
     * - Evita dobles clics bloqueando temporalmente el evento.
      * @param {ClickEventLike} e - `Evento click de jQuery`
      * @this {HTMLSpanElement} - `Elemento span que maneja el evento`
     */

    function manejadorClick(e) {

        console.log('\n');
        console.log('e.which =>', e.which);
        console.log('current target => ', e.target);
        console.log('this => ', this);

        if (!eventoActivo) {
            ultimoTarget = e.target;
            ultimoCurrentTarget = e.currentTarget;

            renderSalida(
                'Evento desactivado',
                'sin',
                e.target,
                e.currentTarget,
                `Evento desactivado: espera para volver a usarlo`,
                segundosRestantes > 0 ? segundosRestantes : Math.ceil(BLOQUEO_MS / 1000)
            );

            e.stopPropagation();
            return;
        }

        eventoActivo = false;
        ultimoTarget = e.target;
        ultimoCurrentTarget = e.currentTarget;

        iniciarBloqueoVisual();

        e.stopPropagation();
    }


    //  -----  Asignamos el manejador de click al span para evitar dobles clics  -----
    $span.on('click', manejadorClick);


})(jQuery);
