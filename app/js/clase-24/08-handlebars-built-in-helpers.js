/*
    *  -------------------------------------------------------------------------------------------------------------  *
    *  -----  /08-handlebars-built-in-helpers.js  --  /src/scripts/clase-24/08-handlebars-built-in-helpers.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  08-handlebars-built-in-helpers.js  -----');
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

    /** @type {JQuery<HTMLInputElement>} - `Input del id` */
    const $id = /** @type {JQuery<HTMLInputElement>} */ ($('#id'));

    /** @type {JQuery<HTMLInputElement>} - `Input del autor` */
    const $author = /** @type {JQuery<HTMLInputElement>} */ ($('#author'));

    /** @type {JQuery<HTMLInputElement>} - `Input del cuerpo` */
    const $body = /** @type {JQuery<HTMLInputElement>} */ ($('#body'));

    /** @type {JQuery<HTMLDivElement>} - `Preview del helper if` */
    const $myDiv1 = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv1'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea del helper if` */
    const $myTextarea1 = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea1'));

    /** @type {JQuery<HTMLDivElement>} - `Preview del helper each` */
    const $myDiv2 = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv2'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea del helper each` */
    const $myTextarea2 = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea2'));

    /** @type {JQuery<HTMLDivElement>} - `Preview del select` */
    const $myDiv3 = /** @type {JQuery<HTMLDivElement>} */ ($('#myDiv3'));

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea del select` */
    const $myTextarea3 = /** @type {JQuery<HTMLTextAreaElement>} */ ($('#myTextarea3'));


    /** @type {{ firstName: string, lastName: string }[]} - `Personas del ejercicio` */
    const people = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'Jim', lastName: 'Beam' },
    ];


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */


    /**
     * -----------------------------------------
     * -----  `ordenarPersonas(personas)`  -----
     * -----------------------------------------
     * - Ordena el array por apellido y, si coinciden, por nombre.
     * @param {{ firstName: string, lastName: string }[]} personas - Personas a ordenar.
     * @return {{ firstName: string, lastName: string }[]}
     */
    const ordenarPersonas = (personas) => {

        return [...personas].sort((a, b) => {

            const porApellido = a.lastName.localeCompare(b.lastName, 'es', {
                sensitivity: 'base',
            });

            //  -----  si el apellido coincide, ordenar por nombre  -----
            if (porApellido !== 0) {
                return porApellido;
            }

            return a.firstName.localeCompare(b.firstName, 'es', {
                sensitivity: 'base',
            });
        });
    };


    /**
     * -------------------------------
     * -----  `showHTML1(html)`  -----
     * -------------------------------
     * - Pinta el HTML del helper if.
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
     * - Pinta el HTML del helper each.
     * @param {string} html - HTML generado por Handlebars.
     * @return {void}
     */
    const showHTML2 = (html) => {

        $myDiv2.html(html);
        $myTextarea2.val(html);
    };


    /**
     * -------------------------------
     * -----  `showHTML3(html)`  -----
     * -------------------------------
     * - Pinta el HTML del select.
     * @param {string} html - HTML generado por Handlebars.
     * @return {void}
     */
    const showHTML3 = (html) => {

        $myDiv3.html(html);
        $myTextarea3.val(html);
    };


    /**
     * ---------------------------
     * -----  `generate1()`  -----
     * ---------------------------
     * - Compila el template con #if / else.
     * @return {void}
     */
    const generate1 = () => {

        const source = String($('#myTemplate1').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            title: $title.val() || null,
            id: $id.val() || null,
            author: $author.val() || null,
            body: $body.val() || null,
        };

        const html = template(context);

        showHTML1(html);
    };


    /**
     * ---------------------------
     * -----  `generate2()`  -----
     * ---------------------------
     * - Compila el template con #each sobre people.
     * @return {void}
     */
    const generate2 = () => {

        const source = String($('#myTemplate2').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            title: 'People',
            people: ordenarPersonas(people),
        };

        const html = template(context);

        showHTML2(html);
    };


    /**
     * ---------------------------
     * -----  `generate3()`  -----
     * ---------------------------
     * - Compila el template del select con #each.
     * @return {void}
     */
    const generate3 = () => {

        const source = String($('#myTemplate3').html() ?? '');
        const template = Handlebars.compile(source);

        const context = {
            options: ordenarPersonas(people),
        };

        const html = template(context);

        showHTML3(html);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $myButton.off('.builtInHelpers');


    //  -----  click en generar html  -----
    $myButton.on('click.builtInHelpers', (event) => {
        event.preventDefault();
        generate1();
        generate2();
        generate3();
    });


})(jQuery);
