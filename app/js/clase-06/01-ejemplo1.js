/*
    *  -----------------------------------------------------------------------  *
    *  -----  /01-ejemplo1.js  --  /src/scripts/clase-06/01-ejemplo1.js  -----  *
    *  -----------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-ejemplo1.js  -----');
    console.log('\n');


    /**
     * ----------------------------------------------------------------
     * -----  Método Deprecado a partir de la versión jQuery 3.0  -----
     * ----------------------------------------------------------------
     * 
     * - La función pasada a `$(document).ready()` se ejecuta cuando el DOM está listo.
     * - Equivalente a usar `$(function() { ... })`.
     * 
     * $(document).ready( function() { 
     *      ... 
     *      ... Código a ejecutar cuando el DOM esté listo
     *      ...
     *  })
     * 
     */


    $(function () {


        console.log('\n');
        console.warn('-----  1º Ready  -----');
        console.log('\n');


        /** @type {JQuery<HTMLButtonElement>} - `Botón inicia la logica` */
        const $btnRun = $('#btnRun');

        /** @type {JQuery<HTMLElement>} - `Playground del ejercicio` */
        const $playground = $('#contenido');


        /** - `Función que se ejecuta toda la lógica cuando se hace clic en el botón #btnRun` */
        const runExample1 = () => {


            //  -----  desactivar el botón mientras se ejecuta la lógica  -----
            $btnRun.prop('disabled', true);
            $playground.addClass('is-flash');


            /** @type {JQuery<HTMLDivElement>} - `div con id "capaContainer"`  */
            const $capaContainer = $('#capaContainer');

            //  -----  vaciar el contenido del div #capaContainer  -----
            $capaContainer.empty().addClass('is-active');

            //  -----  ocultar todos los párrafos con clase miclase  -----
            $('.miclase').hide(2000);


            //  -----  crear y añadir nuevo elemento  -----

            /**
             * - Crear un nuevo elemento `<div>` con jQuery,
             *   con clase `capa` y contenido HTML.
             * - Añadirlo al final del contenedor con id `#capaContainer`.
             * - Aplicar estilos CSS al nuevo elemento.
             * @type {JQuery<HTMLElement>}
            */
            const $capa = $(`
                <div class='capa'> 
                    texto - añadido con jQuery
                    <p> parrafo - añadido con jQuery </p> 
                    <b> negrita  - añadido con jQuery </b> 
                </div>
            `)
                .appendTo($capaContainer);


            //  -----  aplicar estilos CSS al nuevo elemento  -----
            $capa.css("color", "red");


            //  -----  mostrar todos los párrafos, al terminar activar el botón  -----
            $('p.miclase')
                .show(2000)
                .promise()
                .done(() => {
                    $btnRun.prop('disabled', false);
                    $playground.removeClass('is-flash');
                    $('.miclase').addClass('is-highlight');

                    window.setTimeout(() => {
                        $('.miclase').removeClass('is-highlight');
                    }, 900);
                });

        }


        //  -----  asignar la función `runExample1` al evento `click` del botón `#btnRun`  -----
        $btnRun.on('click', runExample1);


    });
   

})(jQuery);
