/*
    *  ---------------------------------------------------------------------------------------------------  *
    *  -----  /02-inyeccion-after-before.js  --  /src/scripts/clase-10/02-inyeccion-after-before.js  -----  *
    *  ---------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-inyeccion-after-before.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} -  `Div para insertAfter`  */
    const $divInsertAfter = $('#divInsertAfter');

    /** @type {JQuery<HTMLDivElement>} -  `Div para insertBefore`  */
    const $divInsertBefore = $('#divInsertBefore');

    /** @type {JQuery<HTMLDivElement>} -  `Div para after`  */
    const $divAfter = $("#divAfter");

    /** @type {JQuery<HTMLDivElement>} -  `Div para before`  */
    const $divBefore = $('#divBefore');


    //  -----  Comprobamos que las referencias al HTML son correctas  -----
    if(!$divInsertAfter.length || !$divInsertBefore.length || !$divAfter.length || !$divBefore.length) 
        throw new Error("No se han encontrado las divisiones en el HTML");


    //  -----  Añadimos estilos para diferenciar las divisiones  -----
    $divInsertAfter.css("background-color", "rgb(204, 211, 226)");
    $divInsertBefore.css("background-color", "rgb(204, 211, 226)");
    $divAfter.css("background-color", "rgb(204, 211, 226)");
    $divBefore.css("background-color", "rgb(204, 211, 226)");

    
    //  -----  Inyección de elementos con insertAfter  -----
    $("<p class='parrafo'> párrafo lo añadimos con insertAfter a la division </p>")
        .insertAfter($divInsertAfter)
        
    
    //  -----  Inyección de elementos con insertBefore  -----
    $("<p class='parrafo'> párrafo lo añadimos con insertBefore a la division </p>")
        .insertBefore($divInsertBefore)
        

    //  -----  Inyección de elementos con after  -----
    $divAfter
        .after("<p class='parrafo'> párrafo lo añadimos con after a la division </p>")
        

    //  -----  Inyección de elementos con before  -----
    $divBefore
        .before("<p class='parrafo'> párrafo lo añadimos con before a la division </p>")
        

})(jQuery);
