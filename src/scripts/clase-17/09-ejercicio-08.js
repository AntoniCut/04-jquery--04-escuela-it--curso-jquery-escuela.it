/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /09-ejercicio-08.js  --  /src/scripts/clase-17/09-ejercicio-08.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  09-ejercicio-08.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - Div grande */
    const $divGrande = $('#grande');

    /** @type {JQuery<HTMLDivElement>} - Div pequeño */
    const $divPequeno = $('#pequeno');

    /** @type {JQuery<HTMLSpanElement>} - Contador de mouseover */
    const $contadorMouseover = $('#mouseover');

    /** @type {JQuery<HTMLSpanElement>} - Contador de mouseenter */
    const $contadorMouseenter = $('#mouseenter');

    //  -----  Contadores  -----

    let contadorMouseover = 0;
    let contadorMouseenter = 0;

    //  -----  Evento mouseover en el div grande  -----
    $divGrande.on('mouseover', function () {
        contadorMouseover++;
        $contadorMouseover.text(contadorMouseover);
    });

    //  -----  Evento mouseenter en el div pequeño  -----
    $divPequeno.on('mouseenter', function () {
        contadorMouseenter++;
        $contadorMouseenter.text(contadorMouseenter);
    });


})(jQuery);
