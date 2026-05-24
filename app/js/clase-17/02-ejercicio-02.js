/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /02-ejercicio-02.js  --  /src/scripts/clase-17/02-ejercicio-02.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  02-ejercicio-02.js  -----');
    console.log('\n');


     /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLFormElement>} - Formulario */
    const $formulario = $("form");

    /** @type {JQuery<HTMLDivElement>} - Contenedor de salida */
    const $salida = $("#salida");

    /** @type {JQuery<HTMLInputElement>} - Campo de texto */
    const $texto = $("#texto");

    //  -----  Evento submit del formulario  -----
    $formulario.on("submit", function (e) {
        
        e.preventDefault();
        
        /** - Valor del campo de texto */
        const valor = $texto.val();
        
        /** - Texto limpio del campo de texto */
        const texto = typeof valor === "string" ? valor.trim() : "";

        if (texto === "") {
            alert("Por favor, ingresa un texto.");
            return;
        }
        
        
        /** @type {JQuery<HTMLHeadingElement>} - Elemento h4 que contendrá el texto */
        const $h4 = $("<h4>");
        
        $h4.text(texto).appendTo($salida);
        
        //  -----  Limpiar el campo de texto y enfocarlo  -----
        $texto.val("").trigger("focus");
    })



})(jQuery);
