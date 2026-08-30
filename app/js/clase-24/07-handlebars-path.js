/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /07-handlebars-path.js  --  /src/scripts/clase-24/07-handlebars-path.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  07-handlebars-path.js  -----');
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

    /** @type {JQuery<HTMLInputElement>} - `Input del id de autor` */
    const $id = /** @type {JQuery<HTMLInputElement>} */ ($('#id'));

    /** @type {JQuery<HTMLInputElement>} - `Input del nombre de autor` */
    const $author = /** @type {JQuery<HTMLInputElement>} */ ($('#author'));

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
     * - Compila el template usando paths anidados de author.
     * @return {void}
     */
    const generate = () => {

        const source = String($('#myTemplate').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            title: String($title.val() || 'Titulo'),
            body: String($body.val() || 'Body'),
            author: {
                id: String($id.val() || '1'),
                name: String($author.val() || 'John Doe'),
            },
        };

        const html = template(context);

        showHTML(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.handlebarsPath');


    //  -----  click en generar html  -----
    $myButton.on('click.handlebarsPath', (event) => {
        event.preventDefault();
        generate();
    });


})(jQuery);
