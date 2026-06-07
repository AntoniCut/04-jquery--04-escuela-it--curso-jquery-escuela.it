/*
    *  ---------------------------------------------------------------  *
    *  -----  /01-load.js  --  /src/scripts/clase-16/01-load.js  -----  *
    *  ---------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-load.js  -----');
    console.log('\n');

    /** -----  `URL base para los servicios`  */
    const urlBase = '/escuelait/curso-jquery-escuelait/app/services/clase-16';


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLButtonElement>} - `Botón con id = btnLoad`  */
    const $btnLoad = $('#btnLoad');

    /** @type {JQuery<HTMLDivElement>} - `Div con id = salida`  */
    const $salida = $('#salida'); 

    
    //  -----  Evento click  -----
    $btnLoad.on('click', function () {

        //  -----  Método LOAD  -----
        $salida.load(

            `${urlBase}/contenido-load.php`,

            function () {
                alert("Información cargada");

            });
    });


})(jQuery);

