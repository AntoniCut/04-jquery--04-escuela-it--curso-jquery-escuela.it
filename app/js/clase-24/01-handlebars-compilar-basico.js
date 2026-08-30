/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /01-handlebars-compilar-basico.js  --  /src/scripts/clase-24/01-handlebars-compilar-basico.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  01-handlebars-compilar-basico.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLButtonElement>} - `Boton generar HTML` */
    const $myButton = /** @type {JQuery<HTMLButtonElement>} */ ($('#myButton'));

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
     * - Compila un template fijo y muestra el resultado.
     * @return {void}
     */
    const generate = () => {

        const source = '<h1> Template </h1>';
        const template = Handlebars.compile(source);
        const context = {};
        const html = template(context);

        showHTML(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.compilarBasico');


    //  -----  click en generar html  -----
    $myButton.on('click.compilarBasico', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
