/*
    *  -----------------------------------------------------------------------  *
    *  -----  /02-get-ajax.js  --  /src/scripts/clase-16/02-get-ajax.js  -----  *
    *  -----------------------------------------------------------------------  *
*/

(($) => {

    
    console.log('\n');
    console.warn('-----  02-get-ajax.js  -----');
    console.log('\n');


    /** -----  `URL base para los servicios`  */
    const urlBase = '/escuelait/curso-jquery-escuelait/app/services/clase-16';


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace con id = enlace`  */
    const $enlace = $('#enlace');

    /** @type {JQuery<HTMLDivElement>} - `Div con id = salida`  */
    const $salida = $('#salida');

    
    $enlace.on('click', function (e) {

        e.preventDefault();

        $.get(

            `${urlBase}/contenido-get-ajax.php`,

            function (respuesta) {

                /** -----  `Parsea la respuesta como HTML`  -----  */
                const $html = $('<div>').html(respuesta);
                
                /** -----  `Busca el h3 dentro del HTML parseado`  -----  */
                const $h3 = $html.find('h3');

                //  -----  Muestra solo el contenido del h3  -----
                $salida
                    .empty()
                    .append($h3);
                
            });

    });

    


})(jQuery);

