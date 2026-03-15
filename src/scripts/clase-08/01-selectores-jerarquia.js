/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /01-selectores-jerarquia.js  --  /src/scripts/clase-08/01-selectores-jerarquia.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-selectores-jerarquia.js  -----');
    console.log('\n');

      
    /** 
     * - `Objeto de acciones` que mapea los IDs de los botones a 
     *    funciones que ejecutan los selectores jQuery correspondientes`
     * @type {Record<string, () => void>} */
    
    const acciones = {
        
        //  -----  pintar de azul los span dentro de los párrafos
        btn1: () => $("p span").css("color", "blue"),

        //  -----  Pinta de Rojo Solo los span hijos directos de los párrafos
        btn2: () => $("p > span").css("color", "red"),
        
        //  -----  Pinta de Naranja los párrafos que sean hermanos de un div
        btn3: () => $("div ~ p").css("color", "orange"),
        
        //  -----  Pinta de Verde los párrafos que NO tengan el ID "p2"
        btn4: () => $("p:not(#p2)").css("color", "green"),
        
        //  -----  Pinta de un fondo amarillo los primeros hijos de cada párrafo
        btn5: () => {
            
            $("p:first-child").css({
                fontSize: "2em",
                border: "1px solid #445",
                backgroundColor: "#ffc"
            });
        },

        //  -----  Selecciona los párrafos que contienen la palabra 'probando' y los Muestra/Oculta
        btn6: () => $("p:contains('probando')").toggle(3000)
    };


    //  -----  Delegación de eventos para los botones  -----
    $("[id^='btn']").on("click", function () {
        acciones[this.id]?.();
    });
       

})(jQuery);
