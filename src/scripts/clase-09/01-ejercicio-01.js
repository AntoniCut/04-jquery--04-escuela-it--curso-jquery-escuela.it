/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /01-ejercicio-01.js  --  /src/scripts/clase-09/01-ejercicio-01.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-ejercicio-01.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLParagraphElement>} - `Lista de elementos p dentro de .contenido` */
    const $parrafos = $(".contenido p");


    //  -----  recorremos cada elemento p  -----
    $parrafos.each(function (index, elem) {


        console.log('-----  recorrido ' + (index + 1) + ' -----');

        //  -----  indice del elemento actual  -----
        console.log('\nindex => ', index);

        //  -----  elemento actual  -----
        console.log('this => ', this);

        //  -----  elemento actual  -----
        console.log('elem => ', elem);

        //  -----  elemento actual como objeto jQuery  -----
        console.log('$(this) => ', $(this));

        //  -----  elemento actual como objeto jQuery  -----
        console.log('$(elem) => ', $(elem));

        console.log('\n\n');

        //const parrafoActual = $(this);
        const parrafoActual = $(elem);
        parrafoActual.text("Elemento " + (index + 1));

        if (index % 2 === 0)
            parrafoActual.css("color", "red");

    });


})(jQuery);
