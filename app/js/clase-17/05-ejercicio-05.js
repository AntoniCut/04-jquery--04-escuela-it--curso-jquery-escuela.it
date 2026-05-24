/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /05-ejercicio-05.js  --  /src/scripts/clase-17/05-ejercicio-05.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  05-ejercicio-05.js  -----');
    console.log('\n');

    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLImageElement>} */
    const $imagenes = $('#destino img');

    /** @type {string} - Texto por defecto si la imagen no tiene alt */
    const textoAlternativoPorDefecto = 'copyright 2026';


    //  -----  Recorrer cada imagen y agregar un pie de foto  -----
    $imagenes.each(function () {
        
        /** @type {JQuery<HTMLImageElement>} - imagen actual */
        const $imagenActual = $(this);
        
        /** @type {string} - texto alt de la imagen */
        const textoPieFoto = $imagenActual.attr('alt') || textoAlternativoPorDefecto;
        
        // -----  Insertar el pie de foto después de la imagen actual  -----
        $('<p>')
            .addClass('piefoto')
            .text(textoPieFoto)
            .insertAfter($imagenActual);

    });


})(jQuery);
