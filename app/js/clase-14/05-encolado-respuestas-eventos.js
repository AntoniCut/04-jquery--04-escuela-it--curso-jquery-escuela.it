/*
    *  -------------------------------------------------------------------------------------------------------------  *
    *  -----  /05-encolado-respuestas-eventos.js  --  /src/scripts/clase-14/05-encolado-respuestas-eventos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  05-encolado-respuestas-eventos.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

     const $texto = $('.texto');


    //  -----  función que crea un animate para el borde  -----

    /**
     * ---------------------------------
     * -----  `miAnimacion(elem)`  -----
     * ---------------------------------
     * - Función que encola una animación personalizada para el borde del elemento.
     * @param {JQuery<HTMLElement>} elem - El elemento al que se le aplicará la animación.
     * @param {() => void} siguiente - Función que se llama para continuar con el siguiente efecto en la cola.
     */
    const miAnimacion = (elem, siguiente) => {
        
        console.log('elem => ', elem);
        
        elem.animate({
            borderWidth: "2rem",
            fontSize: '1.6rem'
        }, {
            duration: 2000,
            queue: false,
            complete: function() {
                $(this)
                    .css('color', 'blue')
                    .text('Cambiado el borde, tamaño y color del texto');

                siguiente();
            }
        });
    }


    //  -----  click en el div texto  -----
    $texto.off('click').on('click', function () {

        //  -----  cola de efectos  -----
        $texto

            .stop(true, true)

            .slideUp(2000)                      //  -----  Efecto 1  -----
            .delay(4000)                        //  -----  Efecto 2  -----
            .slideDown(2000)                    //  -----  Efecto 3  -----

            .queue(function (siguiente) {       //  -----  Efecto 4  -----
                miAnimacion($(this), siguiente);   //  -----  continuamos cuando termina la animación  -----
            })

            .queue(function (siguiente) {       //  -----  Efecto 5  -----  
                //  -----  para encolar métodos que no son efectos  -----
                $(this)
                    .css({
                        color: 'blue',
                        backgroundColor: "#9f9"
                    })
                    .text('cambiamos el texto y el color de fondo');

                siguiente();                    //  -----  continuamos con el resto de efectos  -----
            })

            .animate({                          //  -----  Efecto 6  -----
                fontSize: "2.4rem"
            }, 2000)

            .queue(function (siguiente) {       //  -----  Efecto 7  -----
                
                $(this).css({
                    color: "#fff",
                    backgroundColor: "#f99"
                });

                siguiente();
            })

            .animate({                          //  -----  Efecto 8  -----
                fontSize: "1.2rem"
            }, 2000)


        //  -----  funciones en la cola del div texto  -----
        $texto.text("Tienes encoladas " + $texto.queue().length + " funciones...");

    })
    
    


})(jQuery);

