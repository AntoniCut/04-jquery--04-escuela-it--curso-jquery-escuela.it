/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /02-ejercicio-02.js  --  /src/scripts/clase-09/02-ejercicio-02.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-ejercicio-02.js  -----');
    console.log('\n');


    /** - `Array de colores RGB` */
    const arrayRGB = [
        "#FF8C00",
        "#FFD700",
        "#B8860B",
        "#F0E68C",
        "#FF4500",
        "#FF0000",
        "#FF7F50",
        "#FA8072",
        "#00FF00",
        "#00FA9A"
    ];


    /** @type {JQuery<HTMLLIElement>} - Lista de elementos 'li' dentro de .contenido */
    const $lista = $(".contenido ul li");


    //  -----  Recorrer cada elemento de la lista y asignar un color de fondo diferente utilizando el arrayRGB  -----
    $lista.each(function (index, elem) {

        //  -----  Asignar el color de fondo utilizando   -----
        //  -----  el índice del elemento en el arrayRGB  -----
        $(elem).css("background-color", arrayRGB[index]);

    });
     
           

})(jQuery);
