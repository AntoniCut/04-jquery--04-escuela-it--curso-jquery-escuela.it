/*
    *  -------------------------------------------------------------------------------------------  *
    *  -----  /06-ejercicio-05-hover.js  --  /src/scripts/clase-17/06-ejercicio-05-hover.js  -----  *
    *  -------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  06-ejercicio-05-alternativa-1.js  -----');
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

        // -----  Crear pie de foto y ocultar solo el texto (no el contenedor)  -----
        const $textoPieFoto = $('<span>').text(textoPieFoto).css('opacity', 0);

        const $pieFoto = $('<p>')
            .addClass('piefoto')
            .append($textoPieFoto)
            .insertAfter($imagenActual);

        // -----  Mostrar/ocultar el pie de foto al pasar el ratón por la imagen  -----
        $imagenActual.on('mouseenter', () => {
            $textoPieFoto.stop(true, true).fadeTo(200, 1);
        });

        $imagenActual.on('mouseleave', () => {
            $textoPieFoto.stop(true, true).fadeTo(200, 0);
        });

    });


})(jQuery);
