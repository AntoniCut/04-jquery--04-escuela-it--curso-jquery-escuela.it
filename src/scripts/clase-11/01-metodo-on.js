/*
    *  -------------------------------------------------------------------------  *
    *  -----  /01-metodo-on.js  --  /src/scripts/clase-11/01-metodo-on.js  -----  *
    *  -------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-metodo-on.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} -  `Div para el método on()`  */
    const $div = $(".div");


    //  -----  Método on()  -----
    $div.on("click", function() {

        //  -----  codigo a ejecutar cuando se produzca el click  -----

        /** @type {string} -  `Texto a mostrar en el div` */
        let texto = "";

        /** @type {JQuery<HTMLDivElement>} -  `Div que se ha clicado. Guardará el texto anterior` */
        const $elem = $(this);

        //  -----  Si el div tiene un texto anterior guardado en data, se muestra ese texto  -----
        if ($elem.data("textoAnterior"))
            texto = $elem.data("textoAnterior");

        //  -----  Si el div no tiene un texto anterior guardado en data,        -----
        //  -----  se muestra un texto indicando que se ha hecho clic en el div  -----
        else
            texto = `hiciste Clic en el div con id ${$elem.attr("id")}`;


        //  -----  Se guarda el texto actual del div en data para mostrarlo en el próximo click  -----
        $elem.data("textoAnterior", $elem.text());
        
        //  -----  Se muestra el texto en el div  -----
        $elem.text(texto);

    });


})(jQuery);
