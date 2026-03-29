/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /04-metodo-each-recorrer-elementos.js  --  /src/scripts/clase-07/04-metodo-each-recorrer-elementos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-metodo-each-recorrer-elementos.js  -----');
    console.log('\n');


    /*  
        ---------------------------------
        -----  referencias al HTML  -----
        --------------------------------- 
    */

        
    /** @type {JQuery<HTMLParagraphElement>} */
    const $parrafosProbando = $(".main__section-practica p.probando");

    /** @type {JQuery<HTMLParagraphElement>} */
    const $totalParrafos = $(".main__section-practica p");

    /** @type {JQuery<HTMLDivElement>} */
    const $info = $("#info");


    //  -----  numero de elementos que tengo en $parrafosProbando  -----
    let numParrafosProbando = $parrafosProbando.length;


    //  -----  Nº total de párrafos  -----
    console.log('Nº total de párrafos: ', $totalParrafos.length);
    $info.append(`<h3 class="info-paragraph"> Nº total de Párrafos ${$totalParrafos.length} </h3>`);


    //  -----  Nº de párrafos con la clase probando  -----
    console.log('\nNº de parrafosProbando: ', numParrafosProbando);
    $info.append(`<h3 class="info-paragraph"> Nº de Párrafos con la clase probando ${numParrafosProbando} </h3>`);
    

    //  -----  cadena para obtener este listado de textos  -----
    let parrafosProbandoText = '<br>';
    
    //  -----  bucle each para reccorrer esos párrafos y guardarse los textos  -----
    $parrafosProbando.each(function (id, elem) {

        parrafosProbandoText += $(elem).text();

        //  -----  compruemo si quedan párrafos  -----
        if (id < (numParrafosProbando - 1)) {
            parrafosProbandoText += "<br><br>";
        }
    });

    console.log('\n', parrafosProbandoText);
    $info.append(`<h3 class="info-paragraph"> Contenido de los párrafos con la clase probando son los siguientes... </h3>`);
    $info.append(parrafosProbandoText);


})(jQuery);
