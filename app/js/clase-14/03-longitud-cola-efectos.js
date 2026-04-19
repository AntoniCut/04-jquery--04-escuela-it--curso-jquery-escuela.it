/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /03-longitud-cola-efectos.js  --  /src/scripts/clase-14/03-longitud-cola-efectos.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-longitud-cola-efectos.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /**@type {JQuery<HTMLButtonElement>} - `Botón con id = btnAnimar`  */
    const $btnAnimar = $('#btnAnimar');
    
    /**@type {JQuery<HTMLDivElement>} - `Div con clase = texto`  */
    const $texto = $('.texto');
    
    /**@type {JQuery<HTMLParagraphElement>} - `Párrafo con clase = parrafo`  */
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
     * ---------------------------------------------
     * -----  `encolarLongitudCola(total)`  -----
     * ---------------------------------------------
     * - Muestra cuantas funciones de efecto quedan por ejecutar
     *   justo antes de lanzar cada animación.
     * @param {number} total
     * @returns {(next: () => void) => void}
     */

    const encolarLongitudCola = (total) => function (next) {
        $texto.text(`Tienes ${total} funciones encoladas`);
        next();
    };


    //  -----  Desactivar el botón de animar y el click en el texto  -----
    $btnAnimar.off('click');
    $texto.off('click');
        

    //  -----  Encolado de efectos al hacer click en el botón -----
    $btnAnimar.on('click', function () {


        $texto

            .stop(true, true)

            .queue(encolarLongitudCola(6))
            .slideUp(4000)

            .queue(encolarLongitudCola(5))
            .slideDown(4000)

            .queue(encolarLongitudCola(4))
            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .queue(encolarLongitudCola(3))
            .animate({
                fontSize: "1.2rem"
            }, 4000)

            .queue(encolarLongitudCola(2))
            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .queue(encolarLongitudCola(1))
            .animate({
                fontSize: "1.2rem"
            }, 4000)

            .queue(encolarCambioTexto('Texto Animado'));
           
        $parrafo

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

    })
    
    


})(jQuery);

