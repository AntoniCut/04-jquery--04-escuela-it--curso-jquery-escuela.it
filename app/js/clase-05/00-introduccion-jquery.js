/*
    *  --------------------------------------------------------------------------------------------  *
    *  -----  00-introduccion-jquery.js  --  /src/scripts/clase-05/00-introduccion-jquery.js  -----  *
    *  --------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  introduccion-jquery.js  -----');
    console.log('\n');


    $(function () {


        /*
            *  ---------------------------------  *
            *  -----  Referencias al HTML  -----  *
            *  ---------------------------------  *
        */

        /** @type {JQuery<HTMLDivElement>} - `Capa donde se pinta el saludo` */
        const $capa = /** @type {JQuery<HTMLDivElement>} */ (
            $('#capa')
        );


        /*
            *  -----------------------  *
            *  -----  Funciones  -----  *
            *  -----------------------  *
        */


        /**
         * ----------------------------
         * -----  `pintarCapa()`  -----
         * ----------------------------
         * - Escribe el saludo y aplica el color de fondo.
         * @return {void}
         */
        const pintarCapa = () => {
            
            $capa
                .text('Hola Mundo desde Escuela IT con jQuery!!!')
                .css('background-color', 'red');
        };


        pintarCapa();


    });


})(jQuery);
