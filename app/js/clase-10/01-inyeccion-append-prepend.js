/*
    *  -------------------------------------------------------------------------------------------------------  *
    *  -----  /01-inyeccion-append-prepend.js  --  /src/scripts/clase-10/01-inyeccion-append-prepend.js  -----  *
    *  -------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  00-inyeccion-append-prepend.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} -  `Div para appendTo`  */
    const $divAppendTo = $('#divAppendTo');

    /** @type {JQuery<HTMLDivElement>} -  `Div para prependTo`  */
    const $divPrependTo = $('#divPrependTo');

    /** @type {JQuery<HTMLDivElement>} -  `Div para append`  */
    const $divAppend = $("#divAppend");

    /** @type {JQuery<HTMLDivElement>} -  `Div para prepend`  */
    const $divPrepend = $('#divPrepend');


    //  -----  Comprobamos que las referencias al HTML son correctas  -----
    if(!$divAppendTo.length || !$divPrependTo.length || !$divAppend.length || !$divPrepend.length) 
        throw new Error("No se han encontrado las divisiones en el HTML");


    //  -----  Añadimos estilos para diferenciar las divisiones  -----
    $divAppendTo.css("background-color", "rgb(204, 211, 226)");
    $divPrependTo.css("background-color", "rgb(204, 211, 226)");
    $divAppend.css("background-color", "rgb(204, 211, 226)");
    $divPrepend.css("background-color", "rgb(204, 211, 226)");

    

    //  -----  Inyección de elementos con appendTo  -----
    $("<p class='parrafo'> párrafo lo añadimos con appendTo a la division </p>")
        .appendTo($divAppendTo)
        
    //  -----  Inyección de elementos con prependTo  -----
    $("<p class='parrafo'> párrafo lo añadimos con prependTo a la division </p>")
        .prependTo($divPrependTo)
        
    //  -----  Inyección de elementos con append  -----
    $divAppend
        .append("<p class='parrafo'> párrafo lo añadimos con append a la division </p>")
        
    //  -----  Inyección de elementos con prepend  -----
    $divPrepend
        .prepend("<p class='parrafo'> párrafo lo añadimos con prepend a la division </p>")
        


})(jQuery);
