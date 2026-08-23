/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /01-validar-formulario.js  --  /src/scripts/clase-23/01-validar-formulario.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-validar-formulario.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} - `Formulario de pedido` */
    const $formulario = /** @type {JQuery<HTMLFormElement>} */ ($('#pedido'));

    /** @type {JQuery<HTMLSelectElement>} - `Selects del pedido` */
    const $selecProductos = /** @type {JQuery<HTMLSelectElement>} */ ($('.form-control'));

    /** @type {JQuery<HTMLDivElement>} - `Area de stock y estado` */
    const $stock = /** @type {JQuery<HTMLDivElement>} */ ($('#stock'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * -----------------------------------------
     * -----  `estanCambiados(elementos)`  -----
     * -----------------------------------------
     * - Recorre los selects y comprueba que ninguno sigue vacio.
     * @param {JQuery<HTMLSelectElement>} elementos - Coleccion de selects del pedido.
     * @return {boolean} - `true` si todos tienen valor, `false` si alguno esta vacio.
     */
    const estanCambiados = (elementos) => {

        for (let index = 0; index < elementos.length; index++) {

            if (elementos.eq(index).val() === '') {
                return false;
            }
        }

        return true;
    };


    /**
     * --------------------------------------
     * -----  `obtenerValoresPedido()`  -----
     * --------------------------------------
     * - Lee los valores actuales de producto, tipo y tamano.
     * @return {{ producto: string, tipo: string, tamano: string }} - Valores del pedido.
     */
    const obtenerValoresPedido = () => {

        return {
            producto: String($('#producto').val() || ''),
            tipo: String($('#tipo').val() || ''),
            tamano: String($('#tamano').val() || ''),
        };
    };


    /**
     * ---------------------------------------------
     * -----  `mostrarEstado(texto, esError)`  -----
     * ---------------------------------------------
     * - Sustituye el contenido del area de stock por un mensaje visual.
     * @param {string} texto - Texto a mostrar.
     * @param {boolean} esError - `true` para marcar el mensaje como error.
     * @return {void}
     */
    const mostrarEstado = (texto, esError) => {

        $stock.empty();

        const $linea = $('<p></p>')
            .addClass(esError ? 'form-ajax__msg form-ajax__msg--error' : 'form-ajax__msg')
            .text(texto);

        $stock.append($linea);
        $stock.toggleClass('form-ajax__output--error', esError);
        $stock.toggleClass('form-ajax__output--ok', !esError);
    };


    /**
     * ---------------------------------
     * -----  `actualizarStock()`  -----
     * ---------------------------------
     * - Actualiza el area de stock segun el estado de los selects.
     * @return {void}
     */
    const actualizarStock = () => {

        const cambiados = estanCambiados($selecProductos);

        //  -----  faltan campos por seleccionar  -----
        if (!cambiados) {
            mostrarEstado('Los elementos no han cambiado. Completa producto, tipo y tamano.', true);
            return;
        }

        const pedido = obtenerValoresPedido();

        mostrarEstado(
            `Los elementos han cambiado. Stock listo para ${pedido.producto} ${pedido.tipo} de ${pedido.tamano}.`,
            false
        );
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $selecProductos.off('.validarFormulario');
    $formulario.off('.validarFormulario');


    //  -----  cambio en cualquier select del pedido  -----
    $selecProductos.on('change.validarFormulario', () => {
        actualizarStock();
    });


    //  -----  envio del formulario  -----
    $formulario.on('submit.validarFormulario', (event) => {
        
        event.preventDefault();

        const cambiados = estanCambiados($selecProductos);

        //  -----  no enviar si falta algun select  -----
        if (!cambiados) {
            mostrarEstado('No se puede enviar: completa todos los campos del pedido.', true);
            return;
        }

        const pedido = obtenerValoresPedido();

        mostrarEstado(
            `Pedido enviado: ${pedido.producto} ${pedido.tipo} / ${pedido.tamano}.`,
            false
        );
    });


})(jQuery);
