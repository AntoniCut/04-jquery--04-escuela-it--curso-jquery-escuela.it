/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /04-ejercicio-04.js  --  /src/scripts/clase-17/04-ejercicio-04.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  04-ejercicio-04.js  -----');
    console.log('\n');


     /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */
     
    /** @type {JQuery<HTMLAnchorElement>} - Control */
    const $control1 = $("#control1");

     /** @type {JQuery<HTMLAnchorElement>} - Control 2 */
    const $control2 = $("#control2");

    /** @type {JQuery<HTMLNavElement>} - Menú */
    const $menu1 = $("#menu1");

    /** @type {JQuery<HTMLNavElement>} - Menú 2 */
    const $menu2 = $("#menu2");


    //  -----  Funciones  -----

    /**
     * ----------------------------
     * -----  `ocultarMenu()`  -----
     * -----------------------------
     * - Función para ocultar el menú 2 después de mostrarlo durante un tiempo determinado
     */
    const ocultarMenu = () => {

        $menu2.slideUp(1000);
    }

    //  -----  Eventos  -----

    //  -----  Evento click del control  -  Forma 1  -----
    $control1.on("click", function (e) {
        
        e.preventDefault();
        
        $menu1
            .slideDown(1000)
            .delay(3000)
            .slideUp(1000);
        
    });



    //  -----  Evento click del control  -  Forma 2  -----
    $control2.on("click", function (e) {

        e.preventDefault();

        $menu2
            .slideDown(1000)
        
        setTimeout(ocultarMenu, 3000);

    });
    

})(jQuery);
