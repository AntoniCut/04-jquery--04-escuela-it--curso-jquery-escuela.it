/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /05-ejercicio-05.js  --  /src/scripts/clase-09/05-ejercicio-05.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  05-ejercicio-05.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLParagraphElement>} - `Colección de párrafos` */
    const $parrafos = $(".contenido p");

    
    //  -----  Agregar un borde verde de 5px a cada párrafo  -----
    $parrafos.css("border", "5px solid green")
       
                 

})(jQuery);
