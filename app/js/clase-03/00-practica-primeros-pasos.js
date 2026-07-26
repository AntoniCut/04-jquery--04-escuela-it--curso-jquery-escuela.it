/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /00-practica-primeros-pasos.js  --  /src/scripts/clase-03/00-practica-primeros-pasos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  practica-primeros-pasos.js  -----');
    console.log('\n');


    $(function () {


        /** @type {JQuery<HTMLElement>} */
        const $titulo = $('.titulo');

        /** @type {JQuery<HTMLElement>} */
        const $playground = $('#contenido');


        /** -----  Cambia la clase `titular` en el título  ----- */
        function cambiarTitular() {
            $titulo.addClass('titular');
            $playground.addClass('is-flash');

            window.setTimeout(() => {
                $playground.removeClass('is-flash');
            }, 450);
        }


        //  -----  Cambiar estilos CSS con jQuery  -----
        $titulo.css('color', 'orange');
        $titulo.css('background-color', '#ffc');


        //  -----  Eventos con jQuery  -----
        $('#annadir').on('click', cambiarTitular);

        $('#quitar').on('click', function () {
            $titulo.removeClass('titular');
            $playground.addClass('is-flash');

            window.setTimeout(() => {
                $playground.removeClass('is-flash');
            }, 450);
        });


    });


})(jQuery);
