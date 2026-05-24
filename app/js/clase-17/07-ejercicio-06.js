/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /07-ejercicio-06.js  --  /src/scripts/clase-17/07-ejercicio-06.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  07-ejercicio-06.js  -----');
    console.log('\n');

    
    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} */
    const $formulario = $(".section-practica__form");

    /** @type {JQuery<HTMLInputElement>} */
    const $checkbox = $("#checkbox");

    /** @type {JQuery<HTMLTextAreaElement | HTMLInputElement>} */
    const $camposObjetivo = $("textarea, input[type='text']");



    /** @type {JQuery<HTMLElement>} - Elemento que muestra el estado de los campos */
    const $estado = $('<div class="form__status" aria-live="polite"></div>')
        .css({
            marginTop: '0.8rem',
            fontSize: '1.2rem',
            color: '#334155'
        })
        .appendTo($formulario);

    /**
     * ----------------------------------------
     * -----  `actualizarEstadoCampos()`  -----
     * ----------------------------------------
     * Función que actualiza el estado de los campos de texto y textarea
     * dependiendo del estado del checkbox. También actualiza el texto del
     * elemento de estado para informar al usuario.
     */
    const actualizarEstadoCampos = () => {

        /** @type {boolean} - Indica si los campos deben estar deshabilitados, basado en el estado del checkbox */
        const deshabilitado = $checkbox.prop("checked");

        $camposObjetivo.prop("disabled", deshabilitado);

        $estado.text(deshabilitado ? "Campos de texto y textarea deshabilitados." : "Campos de texto y textarea habilitados.");
    };

    //  -----  Evento change del checkbox para actualizar el estado de los campos  -----
    $checkbox.on("change", function () {
        actualizarEstadoCampos();
    });


    //  -----  Llamada inicial para establecer el estado correcto al cargar la página  -----
    actualizarEstadoCampos();



})(jQuery);
