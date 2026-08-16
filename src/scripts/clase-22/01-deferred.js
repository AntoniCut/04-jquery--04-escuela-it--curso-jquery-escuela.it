/*
    *  -----------------------------------------------------------------------  *
    *  -----  /01-deferred.js  --  /src/scripts/clase-22/01-deferred.js  -----  *
    *  -----------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-deferred.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton para ejecutar el Deferred` */
    const $btnDeferred = /** @type {JQuery<HTMLButtonElement>} */ ($('#btn-deferred'));

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de mensajes del Deferred` */
    const $message = /** @type {JQuery<HTMLDivElement>} */ ($('#message'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * -----------------------------------
     * -----  `mostrarTexto(texto)`  -----
     * -----------------------------------
     * - Anade un parrafo de texto al contenedor de mensajes.
     * @param {string} texto - Texto a mostrar
     * @return {void}
     */
    const mostrarTexto = (texto) => {
        const $linea = $('<p></p>')
            .addClass('deferred__msg')
            .text(texto);

        $message.append($linea);
    };



    /**
     * ----------------------------------
     * -----  `ejecutarDeferred()`  -----
     * ----------------------------------
     * - Crea un Deferred, registra callbacks y lo rechaza.
     *   Un resolve posterior no cambia el estado.
     * @return {void}
     */
    const ejecutarDeferred = () => {

        $message.empty();

        const deferred = $.Deferred();

        deferred
            .done(() => {
                mostrarTexto('done');
            })
            .fail(() => {
                mostrarTexto('fail');
            })
            .always(() => {
                mostrarTexto('always');
            })
            .always(() => {
                mostrarTexto('always');
            });

        //  -----  se rechaza primero: fail + always  -----
        deferred.reject();
        mostrarTexto(deferred.state());

        //  -----  resolve ignorado: el estado ya es rejected  -----
        deferred.resolve();
        mostrarTexto(deferred.state());
    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $btnDeferred.off('.deferredDemo');
    $btnDeferred.on('click.deferredDemo', (event) => {
        event.preventDefault();
        ejecutarDeferred();
    });


    //  -----  ejecutar al cargar el ejercicio  -----
    ejecutarDeferred();


})(jQuery);
