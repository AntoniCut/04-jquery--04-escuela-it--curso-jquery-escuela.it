/*
    *  -----------------------------------------------------------------------  *
    *  -----  /02-promesas.js  --  /src/scripts/clase-22/02-promesas.js  -----  *
    *  -----------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-promesas.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los partials HTML` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-22';

    /** @type {string} - `Partial 1` */
    const PARTIAL_01 = '_partial-01.html';

    /** @type {string} - `Partial 2` */
    const PARTIAL_02 = '_partial-02.html';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton $.get` */
    const $myButton = /** @type {JQuery<HTMLButtonElement>} */ ($('#mybutton'));

    /** @type {JQuery<HTMLButtonElement>} - `Boton $.when una peticion` */
    const $myButton2 = /** @type {JQuery<HTMLButtonElement>} */ ($('#mybutton2'));

    /** @type {JQuery<HTMLButtonElement>} - `Boton $.when varias peticiones` */
    const $myButton3 = /** @type {JQuery<HTMLButtonElement>} */ ($('#mybutton3'));

    /** @type {JQuery<HTMLDivElement>} - `Salida $.get` */
    const $myDiv = /** @type {JQuery<HTMLDivElement>} */ ($('#mydiv'));

    /** @type {JQuery<HTMLDivElement>} - `Salida $.when una peticion` */
    const $myDiv2 = /** @type {JQuery<HTMLDivElement>} */ ($('#mydiv2'));

    /** @type {JQuery<HTMLDivElement>} - `Salida $.when varias peticiones` */
    const $myDiv3 = /** @type {JQuery<HTMLDivElement>} */ ($('#mydiv3'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * - Construye la URL absoluta del partial.
     * @param {string} endpoint - Nombre del archivo HTML
     * @return {string}
     */
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * ----------------------------------
     * -----  `htmlDeGet(retorno)`  -----
     * ----------------------------------
     * - Extrae el HTML de la resolucion de $.get / $.when.
     * @param {unknown} retorno - Valor resuelto por jQuery
     * @return {string}
     */
    const htmlDeGet = (retorno) => {

        if (Array.isArray(retorno)) {
            return String(retorno[0] ?? '');
        }

        return String(retorno ?? '');
    };



    /**
     * -------------------------------------------------
     * -----  `mostrarResultado($elemento, html)`  -----
     * -------------------------------------------------
     * - Inserta el HTML del partial en el contenedor.
     * @param {JQuery<HTMLElement>} $elemento - Contenedor de salida
     * @param {string} html - Fragmento HTML del servidor
     * @return {void}
     */
    const mostrarResultado = ($elemento, html) => {
        const nodos = $.parseHTML(html) || [];
        $elemento.append(nodos);
    };



    /**
     * ----------------------------------------------
     * -----  `mostrarErrorPartial($elemento)`  -----
     * ----------------------------------------------
     * - Muestra un error visual si falla la carga del partial.
     * @param {JQuery<HTMLElement>} $elemento - Contenedor de salida
     * @return {void}
     */
    const mostrarErrorPartial = ($elemento) => {
        const $error = $('<p></p>')
            .addClass('deferred__msg deferred__msg--error')
            .text('Error al cargar el partial');

        $elemento.append($error);
    };



    /**
     * ------------------------------
     * -----  `cargarConGet()`  -----
     * ------------------------------
     * - Carga partials con callback, .done() y los tres argumentos de $.get.
     * @return {void}
     */
    const cargarConGet = () => {

        $myDiv.empty();

        $.get(construirUrl(PARTIAL_01), (data) => {
            console.log({ data });
            mostrarResultado($myDiv, String(data));
        });

        $.get(construirUrl(PARTIAL_02))
            .done((html) => mostrarResultado($myDiv, htmlDeGet(html)))
            .fail(() => mostrarErrorPartial($myDiv));

        $.get(construirUrl(PARTIAL_01)).done((x1, _x2, _x3) => {
            mostrarResultado($myDiv, htmlDeGet(x1));
        });
    };



    /**
     * ----------------------------------
     * -----  `cargarConWhenUno()`  -----
     * ----------------------------------
     * - Envuelve un $.get en $.when y pinta el HTML al resolverse.
     * @return {void}
     */
    const cargarConWhenUno = () => {

        $myDiv2.empty();

        $.when($.get(construirUrl(PARTIAL_01)))
            .done((html) => mostrarResultado($myDiv2, htmlDeGet(html)))
            .fail(() => mostrarErrorPartial($myDiv2));
    };



    /**
     * -------------------------------------
     * -----  `cargarConWhenVarios()`  -----
     * -------------------------------------
     * - Espera a dos $.get y concatena ambos HTML.
     * @return {void}
     */
    const cargarConWhenVarios = () => {

        $myDiv3.empty();

        $.when(
            $.get(construirUrl(PARTIAL_01)),
            $.get(construirUrl(PARTIAL_02))
        )
            .done((get1Return, get2Return) => {
                const html1 = htmlDeGet(get1Return);
                const html2 = htmlDeGet(get2Return);
                mostrarResultado($myDiv3, html1);
                mostrarResultado($myDiv3, html2);
            })
            .fail(() => mostrarErrorPartial($myDiv3));
    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.promesasDemo');
    $myButton2.off('.promesasDemo');
    $myButton3.off('.promesasDemo');

    $myButton.on('click.promesasDemo', (event) => {
        event.preventDefault();
        cargarConGet();
    });

    $myButton2.on('click.promesasDemo', (event) => {
        event.preventDefault();
        cargarConWhenUno();
    });

    $myButton3.on('click.promesasDemo', (event) => {
        event.preventDefault();
        cargarConWhenVarios();
    });


})(jQuery);
