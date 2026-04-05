/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /03-inyeccion-dom.js  --  /src/scripts/clase-10/03-inyeccion-dom.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-inyeccion-dom.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLSectionElement>} - `Seccion principal de la practica` */
    const $mainSectionPractica = $(".main__section-practica");

    /** @type {JQuery<HTMLParagraphElement>} - `Número de comentario` */
    const $numberComent = $(".number-comment"); 


    /** @type {JQuery<HTMLDivElement>} - `Items de comentarios` */
    const $items = $(".item");

    //  -----  insertar un separador después de cada comentario  -----
    $items.after("<hr>");


    /** @type {JQuery<HTMLDivElement>} - `Comentarios` */
    const $comentarios = $(".coment");


    //  -----  recorremos cada comentario e insertamos el enlace después de cada comentario  -----
    $comentarios.each(function () {

        /** @type {JQuery<HTMLAnchorElement>} - `Enlace para marcar como spam` */
        const $enlace = $('<a href="#" class="link"> Marcar como spam </a>')

        //  -----  añadimos estilo al enlace  -----
        $enlace.css("color", "#004");

        //  -----  insertamos el enlace después de cada comentario  -----
        $(this).after($enlace);

    });

   
    //  -----  accedemos al enlace y envolvemos cada enlace  ----- 
    //  -----  en un parrafo y cambiamos estilo de fuente    -----
    $comentarios
        .next()
        .wrap("<p>")
        .css("font-size", "80%");

        
    
    //  -----  evento click en el enlace  -----
    $mainSectionPractica.on('click', '.link', function (evento) {

        ///  -----  evitamos el comportamiento por defecto del enlace  -----
        evento.preventDefault();

        //  -----  obtenemos el enlace que se ha pulsado  -----
        const $enlace = $(this);

        /** @type {JQuery<HTMLDivElement>} - `Comentario asociado al enlace` */
        const $coment = $enlace.parent().prev();

        /** @type {number} - `ID del comentario` */
        const idComent = $coment.data("idcomentario");

        console.log("comentario", idComent);
        console.log('this => ', this);

        //  -----  insertamos el número de comentario en el párrafo del header  -----
        $numberComent.text("Comentario " + idComent + " marcado como spam");

        //  -----  Vaciamos el comentario  -----
        setTimeout(() => {
            $numberComent.text("");
        }, 3000);
        
        //  -----  eliminamos el enlace  -----
        $enlace.remove();

    });


    



})(jQuery);
