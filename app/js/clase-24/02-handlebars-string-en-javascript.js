/*
    *  ---------------------------------------------------------------------------------------------------------------------  *
    *  -----  /02-handlebars-string-en-javascript.js  --  /src/scripts/clase-24/02-handlebars-string-en-javascript.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-handlebars-string-en-javascript.js  -----');
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
     * - Compila un template en string e interpola title y body.
     * @return {void}
     */
    const generate = () => {

        const source = `
           <h1> {{ title }}  </h1>
           <p> {{ body }}  </p>
        `;

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

    $myButton.off('.stringEnJavascript');


    //  -----  click en generar html  -----
    $myButton.on('click.stringEnJavascript', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
