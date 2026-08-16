/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /03-funcion-como-promesa.js  --  /src/scripts/clase-22/03-funcion-como-promesa.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-funcion-como-promesa.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLInputElement>} - `Input numerico` */
    const $number = /** @type {JQuery<HTMLInputElement>} */ ($('#number'));

    /** @type {JQuery<HTMLDivElement>} - `Contenedor del resultado` */
    const $result = /** @type {JQuery<HTMLDivElement>} */ ($('#result'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * ------------------------
     * -----  `esPar(n)`  -----
     * ------------------------
     * - Devuelve una promesa que se resuelve si n es par y se rechaza si es impar o no numerico.
     * @param {string|number} n - Valor a comprobar
     * @return {JQuery.Promise<string, string, string>}
     */
    const esPar = (n) => {

        const deferred = $.Deferred();

        deferred.notify('Comprobando si el numero es par...');

        const valor = Number(n);

        //  -----  no es un numero  -----
        if (n === '' || Number.isNaN(valor)) {
            deferred.reject('Error: El numero no es un numero');
        }
        //  -----  es par  -----
        else if (valor % 2 === 0) {
            deferred.resolve('¡¡Es par!!');
        }
        //  -----  es impar  -----
        else {
            deferred.reject('Mal!!!');
        }

        deferred.notify('Fin de la comprobacion...');

        return deferred.promise();
    };



    /**
     * -----------------------------------------------------------
     * -----  `mostrarMensaje($contenedor, mensaje, color)`  -----
     * -----------------------------------------------------------
     * - Sustituye el contenido del contenedor por un mensaje de color.
     * @param {JQuery<HTMLElement>} $contenedor - Contenedor de salida
     * @param {string} mensaje - Texto a mostrar
     * @param {string} [color='blue'] - Color del texto
     * @return {void}
     */
    const mostrarMensaje = ($contenedor, mensaje, color = 'blue') => {
        const $linea = $('<p></p>')
            .addClass('deferred__msg')
            .css('color', color)
            .text(mensaje);

        $contenedor.empty().append($linea);
    };



    /**
     * ---------------------------------
     * -----  `comprobarNumero()`  -----
     * ---------------------------------
     * - Lee el input y consume la promesa de esPar.
     * @return {void}
     */
    const comprobarNumero = () => {

        const number = String($number.val() ?? '');

        esPar(number)
            .done((message) => mostrarMensaje($result, message))
            .fail((message) => mostrarMensaje($result, message, 'red'));
    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $number.off('.funcionPromesa');
    $number.on('change.funcionPromesa', comprobarNumero);


})(jQuery);
