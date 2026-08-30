/*
    *  -----------------------------------------------------------------------------------------------------------------------  *
    *  -----  /05-handlebars-template-externo-ajax.js  --  /src/scripts/clase-24/05-handlebars-template-externo-ajax.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  05-handlebars-template-externo-ajax.js  -----');
    console.log('\n');


    /** - `URL base para el template externo` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-24';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton generar HTML` */
    const $myButton = /** @type {JQuery<HTMLButtonElement>} */ ($('#myButton'));

    /** @type {JQuery<HTMLInputElement>} - `Input del titulo` */
    const $title = /** @type {JQuery<HTMLInputElement>} */ ($('#title'));

    /** @type {JQuery<HTMLInputElement>} - `Input del cuerpo` */
    const $body = /** @type {JQuery<HTMLInputElement>} */ ($('#body'));

    /** @type {JQuery<HTMLDivElement>} - `Preview del HTML generado` */
    const $myDiv = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea con el codigo generado` */
    const $myTextarea = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea'));

    /** @type {JQuery<HTMLParagraphElement>} - `Mensaje de error de la peticion` */
    const $tplError = /** @type {JQuery<HTMLParagraphElement>} */ ($('#tplError'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * ------------------------------
     * -----  `showHTML(html)`  -----
     * ------------------------------
     * - Pinta el HTML en el preview y lo copia al textarea.
     * @param {string} html - HTML generado por Handlebars.
     * @return {void}
     */
    const showHTML = (html) => {

        $myDiv.html(html);
        $myTextarea.val(html);
        $tplError.text('');
    };


    /**
     * -----------------------------------
     * -----  `mostrarError(texto)`  -----
     * -----------------------------------
     * - Muestra un error visual si falla la peticion AJAX.
     * @param {string} texto - Mensaje de error.
     * @return {void}
     */
    const mostrarError = (texto) => {

        $tplError.text(texto);
    };


    /**
     * --------------------------
     * -----  `generate()`  -----
     * --------------------------
     * - Carga el template externo, lo compila y lo pinta.
     * @return {void}
     */
    const generate = () => {

        $.get(
            `${URL_BASE}/external-template.html`,
            (/** @type {string} */ source) => {

                const template = Handlebars.compile(source);

                const context = {
                    title: String($title.val() ?? ''),
                    body: String($body.val() ?? ''),
                };

                const html = template(context);

                showHTML(html);
            },
            'text'
        )
            .fail(() => {
                mostrarError('Error al obtener el template externo.');
            });
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.templateExternoAjax');


    //  -----  click en generar html  -----
    $myButton.on('click.templateExternoAjax', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
