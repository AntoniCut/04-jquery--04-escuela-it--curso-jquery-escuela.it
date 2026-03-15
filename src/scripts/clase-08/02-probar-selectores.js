/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /02-probar-selectores.js  --  /src/scripts/clase-08/02-probar-selectores.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-probar-selectores.js  -----');
    console.log('\n');


    $("#bsel").on("click", () => {
                
        
        /** @type {string} - Selector ingresado por el usuario */
        const selector = String(".main__section-practica " + $("#selector").val() || "");
        
        /** @type {string} - Color de fondo ingresado por el usuario */
        const color = "#" + ($("#color").val() || "");
        
        /** @type {string} - Color de texto ingresado por el usuario */
        const colorTexto = "#" + ($("#colorTexto").val() || "");
        

        console.log('selector: ', selector, " - color: ", color);
        

        //  -----  Aplicar estilos CSS a los elementos      -----
        //  -----  seleccionados por el selector ingresado  -----
        $(selector).css({
            "background-color": color,
            "color": colorTexto
        });

    });
       

})(jQuery);
