/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /03-ejercicio-03.js  --  /src/scripts/clase-09/03-ejercicio-03.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-ejercicio-03.js  -----');
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

        //  -----  operador % --> resto de la división: 4 % 3 = 1,  23 % 5 = 3  -----
       
        /** 
         * @type {number} - `Índice del color en el arrayRGB`
         * - Se utiliza el operador módulo (%) para asegurarse de que el índice se mantenga dentro del rango del arrayRGB, 
         *   incluso si hay más elementos en la lista que colores disponibles.
         * */
        const indice = index % arrayRGB.length;

        
        //  -----  Asignar el color de fondo utilizando   -----
        //  -----  el índice del elemento en el arrayRGB  -----
        $(elem).css("background-color", arrayRGB[indice]);

    });
           

})(jQuery);
