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


        /** - `Función que se ejecuta toda la lógica cuando se hace clic en el botón #btnRun` */
        const runExample1 = () => {


            //  -----  desactivar el botón mientras se ejecuta la lógica  -----
            $btnRun
                .css({
                    opacity: 0,
                    cursor: 'not-allowed'
                })
                .prop('disabled', true);


            //  -----  ocultar todos los párrafos  -----
            $('.miclase').hide(2000);


            /** @type {JQuery<HTMLDivElement>} - `div con id "capaContainer"`  */
            const $capaContainer = $('#capaContainer');

            //  -----  vaciar el contenido del div #capaContainer  -----
            $capaContainer.empty();

            //  -----  ocultar todos los párrafos con clase miclase  -----
            $('.miclase').hide(2000);


            //  -----  crear y añadir nuevo elemento  -----

            /**
             * - Crear un nuevo elemento `<div>` con jQuery,
             *   con clase `capa` y contenido HTML.
             * - Añadirlo al final del contenedor con id `#algo`.
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
           $('p')
               .show(2000)
               .promise()
               .done(() => {
                    $btnRun
                        .css({
                            opacity: 1,
                            cursor: 'pointer'
                        })
                        .prop('disabled', false);
                });

        }


        //  -----  asignar la función `runExample1` al evento `click` del botón `#btnRun`  -----
        $btnRun.on('click', runExample1);


    });
   

})(jQuery);
