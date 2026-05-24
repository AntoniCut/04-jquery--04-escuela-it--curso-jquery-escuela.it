/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /03-ejercicio-03.js  --  /src/scripts/clase-17/03-ejercicio-03.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  03-ejercicio-03.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLParagraphElement>} - Referencia a todos los párrafos */
    const $parrafos = $('.main__section-practica p');

    /** @type {JQuery<HTMLHRElement>} - Referencia a un elemento HR */
    const $hr = $('<hr>');


    //  -----  Estilos para el elemento HR  -----
    $hr.css({
        width: '100%',
        border: '1px solid #000',
        margin: '10px 0'
    });

    //  -----  Insertar un elemento HR después de cada párrafo excepto el último  -----
    $parrafos.not(':last').after($hr.clone());
    

})(jQuery);
