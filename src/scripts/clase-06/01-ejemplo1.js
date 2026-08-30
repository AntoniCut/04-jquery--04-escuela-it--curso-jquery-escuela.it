/*
    *  ----------------------------------------------------------------------  *
    *  -----  01-ejemplo1.js  --  /src/scripts/clase-06/01-ejemplo1.js  -----  *
    *  ----------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  01-ejemplo1.js  -----');
    console.log('\n');


    /**
     * ----------------------------------------------------------------
     * -----  Metodo deprecado a partir de la version jQuery 3.0  -----
     * ----------------------------------------------------------------
     * - La funcion pasada a `$(document).ready()` se ejecuta cuando el DOM esta listo.
     * - Equivalente a usar `$(function() { ... })`.
     *
     * $(document).ready( function() {
     *      ...
     *      ... Codigo a ejecutar cuando el DOM este listo
     *      ...
     *  })
     */


    $(function () {


        console.log('\n');
        console.warn('-----  1 Ready  -----');
        console.log('\n');


        /*
            *  ---------------------------------  *
            *  -----  Referencias al HTML  -----  *
            *  ---------------------------------  *
        */

        /** @type {JQuery<HTMLButtonElement>} - `Boton inicia la logica` */
        const $btnRun = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#btnRun')
        );

        /** @type {JQuery<HTMLButtonElement>} - `Boton resetea el playground` */
        const $btnReset = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#btnReset')
        );

        /** @type {JQuery<HTMLElement>} - `Playground del ejercicio` */
        const $playground = /** @type {JQuery<HTMLElement>} */ (
            $('#contenido')
        );

        /** @type {JQuery<HTMLDivElement>} - `Contenedor de la capa inyectada` */
        const $capaContainer = /** @type {JQuery<HTMLDivElement>} */ (
            $('#capaContainer')
        );

        /** @type {number} - `Timeout del resalte de .miclase` */
        let highlightTimeoutId = 0;

        /** - `Token para invalidar un Run en curso si se resetea` */
        let runToken = 0;


        /*
            *  -----------------------  *
            *  -----  Funciones  -----  *
            *  -----------------------  *
        */


        /**
         * ---------------------------------
         * -----  `resetPlayground()`  -----
         * ---------------------------------
         * - Restaura el playground al estado inicial.
         * @return {void}
         */
        const resetPlayground = () => {
            
            runToken += 1;
            window.clearTimeout(highlightTimeoutId);

            $('.miclase')
                .stop(true, true)
                .show()
                .removeClass('is-highlight');
            
            $capaContainer
                .empty()
                .removeClass('is-active');
            
            $playground.removeClass('is-flash');
            
            $btnRun.prop('disabled', false);
            
        };


        /**
         * -----------------------------
         * -----  `runExample1()`  -----
         * -----------------------------
         * - Oculta `.miclase`, inyecta una capa y vuelve a mostrar los parrafos.
         * @return {void}
         */
        const runExample1 = () => {

            resetPlayground();

            /** - `Token de esta ejecucion de Run` */
            const currentRun = runToken;

            //  -----  desactivar el boton mientras se ejecuta la logica  -----
            $btnRun.prop('disabled', true);
            $playground.addClass('is-flash');

            //  -----  vaciar el contenedor de la capa  -----
            $capaContainer
                .empty()
                .addClass('is-active');

            //  -----  ocultar todos los parrafos con clase miclase  -----
            $('.miclase').hide(2000);


            //  -----  crear y anadir la capa con jquery  -----
            /** @type {JQuery<HTMLParagraphElement>} - `Parrafo inyectado en la capa` */
            const $parrafo = /** @type {JQuery<HTMLParagraphElement>} */ (
                $('<p>').text('parrafo - añadido con jQuery')
            );

            /** @type {JQuery<HTMLElement>} - `Negrita inyectada en la capa` */
            const $negrita = $('<b>').text('negrita  - añadido con jQuery');

            /** @type {JQuery<HTMLDivElement>} - `Capa inyectada en el playground` */
            const $capa = /** @type {JQuery<HTMLDivElement>} */ (
                $('<div>')
                    .addClass('capa')
                    .append('texto - añadido con jQuery')
                    .append($parrafo)
                    .append($negrita)
                    .appendTo($capaContainer)
            );


            //  -----  aplicar estilos css al nuevo elemento  -----
            $capa.css('color', 'red');


            //  -----  mostrar todos los parrafos, al terminar activar el boton  -----
            $('p.miclase')
                .show(2000)
                .promise()
                .done(() => {
                    
                    //  -----  si se pulso reset, no aplicar el cierre de este run  -----
                    if (currentRun !== runToken) {
                        return;
                    }

                    $btnRun.prop('disabled', false);
                    $playground.removeClass('is-flash');
                    $('.miclase').addClass('is-highlight');

                    highlightTimeoutId = window.setTimeout(() => {
                        $('.miclase').removeClass('is-highlight');
                    }, 900);

                });

        };


        /*
            *  -----------------------------  *
            *  -----  Event Listeners  -----  *
            *  -----------------------------  *
        */

        //  -----  click en run hide show  -----
        $btnRun.on('click', (event) => {
            event.preventDefault();
            runExample1();
        });


        //  -----  click en resetear playground  -----
        $btnReset.on('click', (event) => {
            event.preventDefault();
            resetPlayground();
        });


    });


})(jQuery);
