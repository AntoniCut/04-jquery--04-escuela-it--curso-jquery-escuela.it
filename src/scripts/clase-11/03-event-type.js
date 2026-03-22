/*
    *  ---------------------------------------------------------------------------  *
    *  -----  /02-metodo-off.js  --  /src/scripts/clase-11/02-metodo-off.js  -----  *
    *  ---------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-metodo-off.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace de información de eventos` */
    const $enlace = $(".enlace");


    /**
     * -------------------------------------------
     * -----  `gestionaVariosEventos(event)` -----
     * -------------------------------------------
     * - Función manejadora de eventos para varios tipos de eventos en el enlace. 
     *   Actualiza el texto del enlace con el tipo de evento que se ha disparado.
     * @param {JQuery.Event} event - `Objeto de evento que contiene información sobre el evento que se ha disparado` 
     * @this {HTMLAnchorElement} - `El elemento enlace al que se le asignan los eventos`
     */
    
    function gestionaVariosEventos(event) {
        
        event.preventDefault();

        $(this).text(event.type);
    }


    //  -----  Asignar la función manejadora a varios tipos de eventos en el enlace  -----
    $enlace.on('click dblclick mouseenter mouseleave focus blur', gestionaVariosEventos);



})(jQuery);
