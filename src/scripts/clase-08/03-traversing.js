/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /03-traversing.js  --  /src/scripts/clase-08/03-traversing.js  -----  *
    *  ---------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-traversing.js  -----');
    console.log('\n');


    /** 
     * - `Objeto de acciones` que mapea los IDs de los botones a 
     *    funciones que ejecutan los selectores jQuery correspondientes`
     * @type {Record<string, () => void>} */

    const acciones = {


        /**  
            - Selecciona los hijos de 'p', colorea de rojo,
              recorre con 'each' y muestra en consola
        */
        btn1: () => {

            $("p")
                .children()
                .css("color", "red");

            $("p")
                .children()
                .each(function (index) {
                    console.log('texto del p ', (index + 1), ' - ', $(this).text());
                });

        },


        /**  
            - Selecciona los Hermanos de 'p', colorea de verde
        */
        btn2: () => {

            $("p")
                .siblings()
                .css("color", "green")
        },


        /**
            - Selecciona los Hermanos de 'p' que sean etiquetas 'div', 
              colorea de naranja
        */
        btn3: () => {

            $("p")
                .siblings("div")
                .css("color", "orange");
        },


        /**  
            - Selecciona los Hermanos de 'p' que sean etiquetas 'div',  
              colorea de púrpura, pero excluye el div con id = undiv    
        */
        btn4: () => {

            $("p")
                .siblings("div")
                .not("#undiv")
                .css("color", "purple");
        },


        /**  
            - Selecciona las tablas, luego encuentra los elementos     
              con clase "miclase" dentro de las tablas y colorea su    
              fondo de naranja. Luego encuentra el primer 'tr' dentro  
              de las tablas y colorea su fondo de azul.                
        */
        btn5: () => {

            console.log(
                'Nº de tablas => ', $("table").length,
                '\nNº de TDs => ', $("td").length
            );

            $("table")
                .find(".miclase")
                .css("background-color", "orange");

            $("table")
                .find("tr:first")
                .css("background-color", "blue");
        },


        /**
          - Selecciona todos los 'td', 
            luego filtra los que tienen la clase 'c2' 
            y les cambia el fondo a gris.
         */
        btn6: () => {
            console.log('Nº de TDs', $("td").length);

            $("td")
                .filter(".c2")
                .css("background-color", "grey");
        },


        /**
          - Forma 1 de acceder a la división con texto "división amiga!!"
          - Selecciona el 'li' con clase 'miclase', luego sube a su padre 'ul',
            y finalmente accede a la división con texto "división amiga!!,
            que es hermana del 'ul' y le cambia el color a #3f9"
         */
        btn7: () => {

            $("li.miclase")
                .parent()
                .parent()
                .next()
                .css("color", "#3f9");
        },


        /**
          - Forma 2 de hacer lo mismo que btn7, pero usando 'parents' en vez de 'parent'
          - Selecciona el 'li' con clase 'miclase', luego sube a su padre 'div',
            y finalmente accede a la división con texto "división amiga!!",
            que es hermana del 'div' y le cambia el color a #3f9
         */
        btn8: () => {

            $("li.miclase")
                .parents("div")
                .next()
                .css("color", "#3f9");
        },

        /**
         -  Buscar las negritas de las 'ul y colorearlas de rojo
         */
        btn9: () => {

            $("ul")
                .find("b")
                .css("color", "red");
        },


        /**
            - Ocultar los elementos de 'ul' y 'li' con la clase '.milista'
         */
        btn10: () => {

            $("ul", "li")
                .filter(".milista")
                .hide(4000);

        },


        /**
         - Cambiar estilos a los 'ul' con la clase '.milista'
         */
        btn11: () => {

            $("ul")
                .find(".milista")
                .css({
                    fontSize: "2rem",
                    color: "#f09",
                });
        },

        /**
         - Buscar los elementos con id que empiecen con 'id' y colorear su borde de rojo
         */
        btn12: () => {

            $("[id^='id']")
                .css("border", "2px solid red");
        },


    };



    //  -----  Delegación de eventos para los botones  -----
    $("[id^='btn']").on("click", function () {
        acciones[this.id]?.();
    });




})(jQuery);
