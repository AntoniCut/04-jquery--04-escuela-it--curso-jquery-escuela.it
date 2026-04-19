/*
    *  ----------------------------------------------------------------------------------------------  *
    *  -----  /01-encolado-efectos-toggle.js  --  /src/scripts/clase-14/01-encolado-efectos.js  -----  *
    *  ----------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-encolado-efectos.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLButtonElement>} - `Botón con id = btnAnimar`  */
    const $btnAnimar = $('#btnAnimar');

    /** @type {JQuery<HTMLDivElement>} - `Div con clase = texto`  */
    const $texto = $('.texto');

    /** @type {JQuery<HTMLParagraphElement>} - `Párrafo con clase = parrafo`  */
    const $parrafo = $('.parrafo');


    /**
     * -------------------------------------------
     * -----  `encolarCambioTexto(message)`  -----
     * -------------------------------------------
     * - Encola un cambio de texto dentro de la cola `fx` para que se ejecute
     *   exactamente antes de cada animación.
     * @param {string} message
     * @returns {(next: () => void) => void}
     */

    const encolarCambioTexto = (message) => function (next) {
        $texto.text(message);
        next();
    };


    /**
     * -------------------------------------------
     * -----  `detenerEfectosTexto()`  -----
     * -------------------------------------------
     * - Detiene los efectos en ejecución y limpia la cola de efectos `fx` del elemento `$texto`.
     */

    const detenerEfectosTexto = () => {
        $texto.finish('fx');
    };


    //  -----  Detener efectos al hacer click en el texto -----
    $texto.off('click').on('click', detenerEfectosTexto);


    //  -----  Encolado de efectos al hacer click en el botón ----- 
    $btnAnimar.off('click').on('click', function () {

        $texto

            .stop(true, true)

            .queue(encolarCambioTexto('Animación SlideUp'))
            .slideUp(4000)

            .queue(encolarCambioTexto('Animación SlideDown'))
            .slideDown(4000)

            .queue(encolarCambioTexto('Animación FadeOut'))
            .fadeOut(4000)

            .queue(encolarCambioTexto('Animación FadeIn'))
            .fadeIn(4000)

            .queue(encolarCambioTexto('Animación Agrandar'))
            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .queue(encolarCambioTexto('Animación Reducir'))
            .animate({
                fontSize: "1.2rem"
            }, 4000)

            .queue(encolarCambioTexto('Texto Animado'))

            

        $parrafo

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

    })



})(jQuery);

