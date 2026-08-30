/*
    *  ---------------------------------------------------------------------------------------------------------  *
    *  -----  /03-handlebars-script-en-html.js  --  /src/scripts/clase-24/03-handlebars-script-en-html.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  03-handlebars-script-en-html.js  -----');
    console.log('\n');


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
    };


    /**
     * --------------------------
     * -----  `generate()`  -----
     * --------------------------
     * - Lee el template del script HTML, lo compila y lo pinta.
     * @return {void}
     */
    const generate = () => {

        const source = String($('#myTemplate').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            title: String($title.val() ?? ''),
            body: String($body.val() ?? ''),
        };

        const html = template(context);

        showHTML(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.scriptEnHtml');


    //  -----  click en generar html  -----
    $myButton.on('click.scriptEnHtml', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
