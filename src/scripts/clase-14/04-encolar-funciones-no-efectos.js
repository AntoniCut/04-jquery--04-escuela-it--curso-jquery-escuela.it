/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /04-encolar-funciones-no-efectos.js  --  /src/scripts/clase-14/04-encolar-funciones-no-efectos.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-encolar-funciones-no-efectos.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /**@type {JQuery<HTMLButtonElement>} - `Botón con id = btnAnimar`  */
    const $btnAnimar = $('#btnAnimar');

    /**@type {JQuery<HTMLDivElement>} - `Div con clase = texto`  */
    const $texto = $('.texto');


    //  -----  Desactivar el botón de animar y el click en el texto  -----
    $btnAnimar.off('click');
    $texto.off('click');


    //  -----  Encolado de efectos al hacer click en el botón -----
    $btnAnimar.on('click', function () {


        $texto

            .stop(true, true)

            .slideUp(4000)
            .slideDown(4000)

            //  -----  utiliza .dequeue() explícitamente  -----
            .queue(function () {

                $(this).css({
                    color: 'blue',
                    backgroundColor: "#9f9"
                })

                //  -----  Desencola la siguiente función en la cola `fx` para que se ejecute  -----
                $(this).dequeue();
            })

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

            //  -----  utiliza .next() implicitamente  -----
            .queue(function (next) {

                $(this).css({
                    color: 'white',
                    backgroundColor: "black"
                })

                //  -----  Desencola la siguiente función en la cola `fx` para que se ejecute  -----
                next();

            })

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

    })


})(jQuery);
