/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /04-ejercicio-04.js  --  /src/scripts/clase-09/04-ejercicio-04.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-ejercicio-04.js  -----');
    console.log('\n');

        
    /** @type {JQuery<HTMLParagraphElement>} - `Colección de párrafos` */
    const $parrafos = $("p");


    //  -----  Recorremos cada párrafo y aplicamos estilos y contenido dinámico  -----
    $parrafos.each(function(index, elem) {
        
        
        /** - `tamaño de fuente` */
        let tamano = 1.6 + (index * 0.25);
        

        /** @type {JQuery<HTMLParagraphElement>} - `Elemento del párrafo` */
        const $elem = $(elem);
        

        //  -----  Aplicamos el tamaño de fuente y agregamos un span con información al inicio del párrafo  -----
        $elem
            .css("font-size", tamano + "rem")
            .prepend(`
                <span class="parrafo">
                    Párrafo ${index + 1} - Tamaño ${tamano}rem
                    <br> <br>
                </span> 
            `);
        
    });
      
           

})(jQuery);
