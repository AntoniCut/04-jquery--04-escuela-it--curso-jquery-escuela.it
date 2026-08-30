/*
    *  ---------------------------------------------------------------------------------------------------------------  *
    *  -----  /06-handlebars-block-expressions.js  --  /src/scripts/clase-24/06-handlebars-block-expressions.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  06-handlebars-block-expressions.js  -----');
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

    /** @type {JQuery<HTMLDivElement>} - `Preview del helper toH1` */
    const $myDiv1 = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv1'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea del helper toH1` */
    const $myTextarea1 = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea1'));

    /** @type {JQuery<HTMLDivElement>} - `Preview del helper toUl` */
    const $myDiv2 = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv2'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea del helper toUl` */
    const $myTextarea2 = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea2'));


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * -------------------------------
     * -----  `showHTML1(html)`  -----
     * -------------------------------
     * - Pinta el HTML del primer template.
     * @param {string} html - HTML generado por Handlebars.
     * @return {void}
     */
    const showHTML1 = (html) => {

        $myDiv1.html(html);
        $myTextarea1.val(html);
    };


    /**
     * -------------------------------
     * -----  `showHTML2(html)`  -----
     * -------------------------------
     * - Pinta el HTML del segundo template.
     * @param {string} html - HTML generado por Handlebars.
     * @return {void}
     */
    const showHTML2 = (html) => {

        $myDiv2.html(html);
        $myTextarea2.val(html);
    };


    /**
     * ---------------------------
     * -----  `generate1()`  -----
     * ---------------------------
     * - Compila el template con el helper toH1.
     * @return {void}
     */
    const generate1 = () => {

        const source = String($('#myTemplate1').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            title: String($title.val() ?? ''),
            body: String($body.val() ?? ''),
        };

        const html = template(context);

        showHTML1(html);
    };


    /**
     * ---------------------------
     * -----  `generate2()`  -----
     * ---------------------------
     * - Compila el template con el helper de bloque toUl.
     * @return {void}
     */
    const generate2 = () => {

        const source = String($('#myTemplate2').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            people: [
                { firstName: 'John', lastName: 'Doe' },
                { firstName: 'Jane', lastName: 'Doe' },
                { firstName: 'Jim', lastName: 'Beam' },
            ],
        };

        const html = template(context);

        showHTML2(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.blockExpressions');


    //  -----  click en generar html  -----
    $myButton.on('click.blockExpressions', (event) => {
        event.preventDefault();
        generate1();
        generate2();
    });


})(jQuery);
