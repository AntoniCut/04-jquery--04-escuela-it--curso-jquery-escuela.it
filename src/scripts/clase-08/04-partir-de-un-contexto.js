/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /04-partir-de-un-contexto.js  --  /src/scripts/clase-08/04-partir-de-un-contexto.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-partir-de-un-contexto.js  -----');
    console.log('\n');



    /** 
     * - `Objeto de acciones` que mapea los IDs de los botones a 
     *    funciones que ejecutan los selectores jQuery correspondientes`
     * @type {Record<string, () => void>} */

    const acciones = {


        /**  
            - Selecciona los elementos con la clase 'grande' 
              dentro del elemento con id 'principal' y colorea de rojo
        */
        btn1: () => {

            $("#principal .grande")
                .css("color", "red");

        },


        /**  
         - Selecciona los elementos con la clase 'grande' 
           que sean hijos directos del elemento con id 'principal' 
           y colorea de verde  
        */
        btn2: () => {

            $("#principal > .grande")
                .css("color", "green");
        },


        /**
         - Selecciona los elementos con la clase 'grande' 
           dentro del elemento con id 'principal' 
           y colorea el fondo de azul claro 
        */
        btn3: () => {

            $(".grande", "#principal")
                .css("background", "#ccf");
        },


        /**
            - Selecciona los elementos con la clase 'grande' 
              dentro del elemento con id 'principal' y colorea de azul
        */
        btn4: () => {
            
            $("#principal")
                .find(".grande")
                .css("color", "blue");
        },

    };


    //  -----  Delegación de eventos para los botones  -----
    $("[id^='btn']").on("click", function () {
        acciones[this.id]?.();
    });


})(jQuery);
