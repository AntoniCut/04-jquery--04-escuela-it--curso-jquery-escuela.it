/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /04-jquery-generar-dom.js  --  /src/scripts/clase-24/04-jquery-generar-dom.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  04-jquery-generar-dom.js  -----');
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
     * -----  `generateHTML()`  -----
     * ------------------------------
     * - Crea el markup con nodos jQuery a partir de title y body.
     * @return {string} - HTML generado con jQuery.
     */
    const generateHTML = () => {

        const title = String($title.val() ?? '');
        const body = String($body.val() ?? '');

        const $div = $('<div></div>');
        const $h1 = $('<h1></h1>').text(title);
        const $p = $('<p></p>').text(body);

        $div.append($h1, $p);

        return String($div.prop('outerHTML') ?? '');
    };


    /**
     * ------------------------------
     * -----  `showHTML(html)`  -----
     * ------------------------------
     * - Pinta el HTML en el preview y lo copia al textarea.
     * @param {string} html - HTML generado con jQuery.
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
     * - Genera el DOM y lo muestra en preview y textarea.
     * @return {void}
     */
    const generate = () => {

        const html = generateHTML();

        showHTML(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.jqueryGenerarDom');


    //  -----  click en generar html  -----
    $myButton.on('click.jqueryGenerarDom', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
