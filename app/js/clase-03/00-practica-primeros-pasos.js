/*
    *  ----------------------------------------------------------------------------------------------------  *
    *  -----  00-practica-primeros-pasos.js  --  /src/scripts/clase-03/00-practica-primeros-pasos.js  -----  *
    *  ----------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  practica-primeros-pasos.js  -----');
    console.log('\n');


    $(function () {


        /*
            *  ---------------------------------  *
            *  -----  Referencias al HTML  -----  *
            *  ---------------------------------  *
        */

        /** @type {JQuery<HTMLHeadingElement>} - `Titulo del playground` */
        const $titulo = /** @type {JQuery<HTMLHeadingElement>} */ (
            $('.titulo')
        );

        /** @type {JQuery<HTMLDivElement>} - `Playground del ejercicio` */
        const $playground = /** @type {JQuery<HTMLDivElement>} */ (
            $('#contenido')
        );

        /** @type {JQuery<HTMLButtonElement>} - `Boton anadir titular` */
        const $btnAnnadir = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#annadir')
        );

        /** @type {JQuery<HTMLButtonElement>} - `Boton quitar titular` */
        const $btnQuitar = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#quitar')
        );


        /*
            *  -----------------------  *
            *  -----  Funciones  -----  *
            *  -----------------------  *
        */


        /**
         * ---------------------------------
         * -----  `flashPlayground()`  -----
         * ---------------------------------
         * - Anima el playground con un flash breve.
         * @return {void}
         */
        const flashPlayground = () => {
            
            $playground.addClass('is-flash');

            window.setTimeout(() => {
                $playground.removeClass('is-flash');
            }, 450);
            
        };


        /**
         * --------------------------------
         * -----  `cambiarTitular()`  -----
         * --------------------------------
         * - Anade la clase `titular` al titulo.
         * @return {void}
         */
        const cambiarTitular = () => {
            $titulo.addClass('titular');
            flashPlayground();
        };


        /**
         * -------------------------------
         * -----  `quitarTitular()`  -----
         * -------------------------------
         * - Quita la clase `titular` del titulo.
         * @return {void}
         */
        const quitarTitular = () => {
            $titulo.removeClass('titular');
            flashPlayground();
        };


        /*
            *  -----------------------------  *
            *  -----  Event Listeners  -----  *
            *  -----------------------------  *
        */

        //  -----  estilos css iniciales con jquery  -----
        $titulo.css('color', 'orange');
        $titulo.css('background-color', '#ffc');


        //  -----  click en anadir titular  -----
        $btnAnnadir.on('click', (event) => {
            event.preventDefault();
            cambiarTitular();
        });


        //  -----  click en quitar titular  -----
        $btnQuitar.on('click', (event) => {
            event.preventDefault();
            quitarTitular();
        });


    });


})(jQuery);
