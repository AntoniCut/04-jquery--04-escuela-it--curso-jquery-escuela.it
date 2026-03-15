/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /00-practica-primeros-pasos.js  --  /src/scripts/clase-03/00-practica-primeros-pasos.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  practica-primeros-pasos.js  -----');
    console.log('\n');


    /** -----  Cambia la clase `titular` en el título  ----- */
    function cambiarTitular() {
        $('.titulo').addClass('titular');
    }

    //  -----  Cambiar estilos CSS con jQuery  -----
    $('.titulo').css('color', 'orange');
    $('.titulo').css('background-color', '#ffc');


    //  -----  Eventos con jQuery  -----

    $('#annadir').on('click', cambiarTitular);

    $('#quitar').on('click', function () {
        $('.titulo').removeClass('titular');
    });



})(jQuery);
