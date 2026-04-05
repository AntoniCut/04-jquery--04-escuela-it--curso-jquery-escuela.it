/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /01-seguir-movimiento-raton.js  --  /src/scripts/clase-12/01-seguir-movimiento-raton.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-seguir-movimiento-raton.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} -  `Div con id = moverse`  */
    const $moverse = $('#moverse');

    //  -----  Verificación del elemento HTML  -----
    if (!$moverse.length) 
        return;

    
    //  -----  Permite hacer click en otros elementos aunque este div siga al cursor  -----
    $moverse.css('pointer-events', 'none');
    

    //  -----  Seguir el movimiento del ratón  -----
    $(document).on('mousemove', function (evento) {

        $moverse.css({
            top: evento.pageY + "px",
            left: evento.pageX + "px",
        });

    });
    

})(jQuery);
