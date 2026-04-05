/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /05-dimensiones.js  --  /src/scripts/clase-10/05-dimensiones.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  05-dimensiones.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} - `Caja de Ejemplo` */
    const $capa = $(".capa");
    
    /** @type {JQuery<HTMLDivElement>} - `Mostrar información` */
    const $output = $("#output");


    //  -----  click en el botón width para obtener el width de la capa  -----
    $("#btnWidth").on('click', () => {

        $output.text(
            "width(): " + $capa.width() +
            "\n\nSolo mide el CONTENIDO\nNo incluye padding, border ni margin"
        );

    });


    //  -----  click en el botón height para obtener el height de la capa  -----  
    $("#btnHeight").on('click', () => {

        $output.text(
            "height(): " + $capa.height() +
            "\n\nSolo mide la ALTURA del contenido"
        );

    });


    //  -----  click en el botón innerWidth para obtener el innerWidth de la capa  -----
    $("#btnInnerWidth").on('click', () => {

        $output.text(
            "innerWidth(): " + $capa.innerWidth() +
            "\n\nIncluye contenido + padding"
        );

    });


    //  -----  click en el botón innerHeight para obtener el innerHeight de la capa  -----
    $("#btnInnerHeight").on('click', () => {

        $output.text(
            "innerHeight(): " + $capa.innerHeight() +
            "\n\nIncluye contenido + padding"
        );

    });


    //  -----  click en el botón outerWidth para obtener el outerWidth de la capa  -----
    $("#btnOuterWidth").on('click', () => {

        $output.text(
            "outerWidth(): " + $capa.outerWidth() +
            "\nouterWidth(true): " + $capa.outerWidth(true) +
            "\n\nIncluye contenido + padding + border\n(true) incluye margin"
        );

    });

    
    //  -----  click en el botón outerHeight para obtener el outerHeight de la capa  -----
    $("#btnOuterHeight").on('click', () => {

        $output.text(
            "outerHeight(): " + $capa.outerHeight() +
            "\nouterHeight(true): " + $capa.outerHeight(true) +
            "\n\nIncluye contenido + padding + border\n(true) incluye margin"
        );

    });

    
})(jQuery);
