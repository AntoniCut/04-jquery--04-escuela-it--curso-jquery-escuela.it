/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /05-stop-propagation.js  --  /src/scripts/clase-11/05-stop-propagation.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  05-stop-propagation.js  -----');
    console.log('\n');


    /*
        ---------------------------------  
        -----  Referencias al HTML  -----
        ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - `Referencia al div principal` */
    const $div = $('.div');

    /** @type {JQuery<HTMLParagraphElement>} - `Referencia al párrafo dentro del div` */
    const $p = $(".main__section-practica p");

    /** @type {JQuery<HTMLSpanElement>} - `Referencia al span dentro del párrafo` */
    const $span = $(".main__section-practica span");

    /** @type {JQuery<HTMLDivElement>} - `Referencia al div de salida 1` */
    const $salida1 = $("#salida1");

    /** @type {JQuery<HTMLDivElement>} - `Referencia al div de salida 2` */
    const $salida2 = $("#salida2");


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

        if (!(target instanceof Element)) 
            return 'sin valor';

        if (
            target instanceof HTMLInputElement
            || target instanceof HTMLTextAreaElement
            || target instanceof HTMLSelectElement
        ) {
            return target.value || '(vacío)';
        }

        const texto = target.textContent?.trim();
        
        return texto ? texto : '(sin texto)';
    }


    /**
     * ------------------------------------------
     * -----  `describirElemento(target)`  -----
     * ------------------------------------------
     * - Devuelve una etiqueta legible del elemento para mostrar en pantalla.
     * @param {EventTarget | null} target - `Elemento del evento`
     * @returns {string}
     */

    function describirElemento(target) {

        if (!(target instanceof Element)) 
            return 'sin elemento';

        const tag = target.tagName.toLowerCase();
        const id = target.id ? `#${target.id}` : '';
        const classNames = target.classList.length ? `.${[...target.classList].join('.')}` : '';

        return `${tag}${id}${classNames}`;
    }


    /**
     * ------------------------------------------------------------------------
     * -----  `renderSalida($salida, titulo, modo, target, currentTarget)`  -----
     * ------------------------------------------------------------------------
     * - Renderiza la salida visual con una estructura uniforme y legible.
     * @param {JQuery<HTMLDivElement>} $salida - `Contenedor de salida`
     * @param {string} titulo - `Título de la salida`
     * @param {'con' | 'sin'} modo - `Modo de propagación`
     * @param {EventTarget | null} target - `Elemento origen del evento`
     * @param {EventTarget | null} currentTarget - `Elemento que maneja el evento`
     */

    function renderSalida($salida, titulo, modo, target, currentTarget) {

        const targetLabel = describirElemento(target);
        const currentTargetLabel = describirElemento(currentTarget);
        const valorTarget = obtenerValorElemento(target);
        const valorCurrentTarget = obtenerValorElemento(currentTarget);

        $salida.html(`
            
            <article class="event-card event-card--${modo}">
                
            <h4 class="event-card__title">${titulo}</h4>

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
     * ------------------------------------------------------------------
     * -----  `mostrarSalidaSinPropagacion(target, currentTarget)`  -----
     * ------------------------------------------------------------------
     * - Pinta en la salida 2 la información relevante del evento sin propagación.
     * @param {EventTarget | null} target - `Elemento origen del evento`
     * @param {EventTarget | null} currentTarget - `Elemento que maneja el evento`
     */

    function mostrarSalidaSinPropagacion(target, currentTarget) {
        renderSalida($salida2, 'Sin Propagacion - Has hecho click', 'sin', target, currentTarget);

    }


    /*  
        -------------------------------------
        -----  Eventos con Propagación  -----
        -------------------------------------
    */


    //  -----  Asignar un evento click a varios elementos para demostrar la propagación de eventos  -----
    $('body, .div, p, span').on('click', function (e) {

        console.log('\n');
        console.log("-----  Con Propagación  -----");
        console.log("current target => ", e.target);
        console.log("this => ", this);

        renderSalida($salida1, 'Con Propagacion - Has hecho click', 'con', e.target, e.currentTarget);

    });


    /*
        -------------------------------------
        -----  Eventos Sin Propagación  -----
        -------------------------------------
    */


    //  -----  Asignar un evento click al documento para demostrar la detención de la propagación de eventos  -----
    $(document).on('click', function (e) {

        console.log('\n');
        console.log("-----  Sin Propagación  -----");
        console.log("current target => ", e.target);
        console.log("this => ", this);

        mostrarSalidaSinPropagacion(e.target, e.currentTarget);

        e.stopPropagation();
    });


    //  -----  Asignar un evento click al div para demostrar la detención de la propagación de eventos  -----
    $div.on('click', function (e) {
        
        $(this).css("background-color", "green");
        
        e.stopPropagation();

    });


    //  -----  Asignar un evento click al párrafo para demostrar la detención de la propagación de eventos  -----
    $p.on('click', function (e) {
        
        $(e.target).css("color", "red");
        e.stopPropagation();

    });


    //  -----  Asignar un evento click al span para demostrar la detención de la propagación de eventos  -----
    $span.on('click', function (e) {

        console.log('\n');
        console.log("-----  Sin Propagación  -----");
        console.log("current target => ", e.target);
        console.log("this => ", this);

        $(e.target).css("color", "orange");

        mostrarSalidaSinPropagacion(e.target, e.currentTarget);

        e.stopPropagation();
    });




})(jQuery);
