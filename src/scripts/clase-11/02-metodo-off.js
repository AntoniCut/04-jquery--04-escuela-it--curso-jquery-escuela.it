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

    /** @type {JQuery<HTMLDivElement>} - `Div de información de eventos` */
    const $div = $(".div");
    
    /** @type {JQuery<HTMLButtonElement>} - `Botón para quitar todos los eventos` */
    const $btnAllOffEvent = $("#btnAllOffEvent");
    
    /** @type {JQuery<HTMLButtonElement>} - `Botón para quitar eventos click` */
    const $btnClickOffEvent = $("#btnClickOffEvent");
    
    /** @type {JQuery<HTMLButtonElement>} - `Botón para quitar un manejador de evento específico` */
    const $btnOffEventHandler = $("#btnOffEventHandler");
    

    

    /**
     * -----------------------------
     * -----  `gestionClick()` -----
     * -----------------------------
     * - Función manejadora de eventos para el evento click en el div. 
     *   Agrega texto al div indicando que se ha hecho clic.
     * @this {HTMLDivElement} - `El elemento div al que se le asigna el evento click`
     */
    function gestionClick() {
        
        $(this).html($(this).html() + "<br> Evento Clic del Manejador");
    }


    //  -----  Evento click en el div Con manejador  -----
    $div.on("click", gestionClick);
   

    //  -----  Evento click en el div Sin manejador  -----
    $div.on("click", function () {
        $(this).html($(this).html() + "<br> Evento Click Sin Manejador");
    });
    

    //  -----  one, solo ejecuta una vez los eventos  -----
    $div.one("mouseenter", function () {
        $(this).html($(this).html() + "<br> Entraste solo esta vez - One");
    });


    //  -----  botón que quita todos los eventos  -----
    $btnAllOffEvent.on("click", function () {
    
        //  -----  quitar todos los eventos  -----
        $div.off();
    });


    //  -----  botón que quita todos los manejadores de 1 tipo de evento, en este caso el click  -----
    $btnClickOffEvent.on("click", function () {
    
        //  -----  quitar todos los manejadores de tipo click  -----
        $div.off("click");
    });

   

    //  -----  botón que quita un manejador en concreto...  -----
    $btnOffEventHandler.on("click", function () {
        
        //  -----  quitar un manejador en concreto  -----
        $div.off("click", gestionClick);
    });



})(jQuery);
