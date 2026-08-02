/*
    *  ---------------------------------------------------------------------------------------  *
    *  -----  /04-select-combinado.js  --  /src/scripts/clase-20/04-select-combinado.js  -----  *
    *  ---------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  04-select-combinado.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-20';

    /** @type {string} - `Endpoint JSON de provincias` */
    const ENDPOINT = 'ciudades-paises-json.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLSelectElement>} - `Select de pais` */
    const $pais = $('#pais');

    /** @type {JQuery<HTMLSelectElement>} - `Select de provincia` */
    const $provincia = $('#provincia');

    /** @type {JQuery<HTMLParagraphElement>} - `Contenedor de resultado` */
    const $resultado = $('#resultado');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */



    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * @param {string} endpoint
     * @returns {string}
     */

    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;



    /**
     * ---------------------------------
     * -----  `cambiarSelect()`  -----
     * ---------------------------------
     */

    const cambiarSelect = () => {

        const codPais = $pais.val();

        $.ajax({
            url: construirUrl(ENDPOINT),
            data: { pais: codPais },
            type: 'GET',
            dataType: 'json',

            success: (respuesta) => {
                $resultado.empty();
                console.log('\n\nnombre del pais seleccionado: ' + $pais.find('option:selected').text());

                $provincia.empty();

                for (const indice in respuesta) {
                    console.log(respuesta[indice]);

                    $('<option>')
                        .val(respuesta[indice].cod)
                        .text(respuesta[indice].value)
                        .appendTo($provincia);
                }
            },

            beforeSend: () => {
                $provincia.empty();
                $provincia.append('<option>Cargando provincias, por favor, espere...</option>');
            },

            complete: () => {
                console.log('\ncomplete: la peticion ha finalizado');
            },

            cache: false,

            error: (objajax, status, excepcion) => {
                console.log('\n');
                console.error('error: ' + status, ' / ', excepcion);
            }
        });

    };



    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    $pais.on('change', cambiarSelect);

    cambiarSelect();


})(jQuery);
