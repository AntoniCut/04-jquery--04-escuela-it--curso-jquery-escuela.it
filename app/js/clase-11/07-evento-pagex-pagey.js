/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /07-evento-pagex-pagey.js  --  /src/scripts/clase-11/07-evento-pagex-pagey.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  07-evento-pagex-pagey.js  -----');
    console.log('\n');


    /*
        ---------------------------------  
        -----  Referencias al HTML  -----
        ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - `Referencia al div dentro de la sección de práctica` */
    const $div = $('.main__section-practica .div');


    //  -----  Evento mouseenter y click para mostrar las coordenadas del ratón  -----
    $div.on('mouseenter click', function(e){
        $(this).text(e.pageX + " X " + e.pageY);
    });
    

    //  -----  Evento mouseleave para restaurar el texto que pasamos  -----
    $div.on('mouseleave', function(e){
        $(this).text('Estas fuera del cuadro');
    });


})(jQuery);
