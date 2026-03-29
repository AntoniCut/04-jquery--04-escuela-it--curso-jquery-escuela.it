/*
    *  -----------------------------------------------------------------------------------------------------------  *
    *  -----  /03-textarea-cuenta-caracteres.js  --  /src/scripts/clase-12/03-textarea-cuenta-caracteres.js  -----  *
    *  -----------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-textarea-cuenta-caracteres.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLTextAreaElement>} - `Textarea para escribir texto` */
    const $textArea = $("#textArea");

    /** @type {JQuery<HTMLDivElement>} - `Div para mostrar el mensaje` */
    const $mensaje = $("#mensaje");


    /** @type {JQuery<HTMLDivElement>} - `Div para mostrar la cuenta de caracteres creado dinámicamente` */
    const $cuentaCaracteres = $(`
        <div class='cuenta-caracteres'> 
            Llevas escritos <span> </span> caracteres 
        </div>
    `);


    //  -----  insertamos el contador de caracteres después del textarea  -----
    $cuentaCaracteres.insertAfter($textArea);


    //  -----  Estructura fija del mensaje: una fila por evento  -----
    $mensaje.html(`
        <p class="msg-keydown">  <strong>keydown</strong>  &rarr; <span>-</span> </p>
        <p class="msg-keypress"> <strong>keypress</strong> &rarr; <span>-</span> </p>
        <p class="msg-keyup">    <strong>keyup</strong>    &rarr; <span>-</span> </p>
    `);


  
    
    /**
     * --------------------------------------------
     * -----  `calcularCaracteresTextarea()`  -----
     * --------------------------------------------
     * - `Calcula el número de caracteres escritos en el textarea y actualiza el contador`
     */
    
    const calcularCaracteresTextarea = () => {

        
        /** @type {number} - `Número de caracteres escritos en el textarea` */
        const numeroCaracteres = ($textArea.val()?.toString() ?? "").length;

        //  -----  Actualiza el texto del contador de caracteres con el número calculado  -----
        $cuentaCaracteres.find("span").text(numeroCaracteres);

    }



    /*  
        -------------------------------
        ----------  EVENTOS  ----------
        -------------------------------
    */


    //  -----  keydown: se dispara al presionar la tecla (antes de que el carácter aparezca)  -----
    $textArea.on("keydown", function (e) {

        //  -----  Muestra el código de la tecla y el carácter asociado al evento keydown  -----
        $mensaje.find(".msg-keydown span").text(`código ${e.which}  —  tecla "${e.key}"`);

        //  -----  Calcula y muestra el número de caracteres escritos en el textarea  -----
        calcularCaracteresTextarea();

    });



    //  -----  keypress: se dispara al generar un carácter imprimible + controla el límite máximo  -----
    $textArea.on("keypress", function (e) {


        /** @type {number} - `Número máximo de caracteres permitidos` */
        const maximo = $(this).data("maximo");


        /** -----  `Muestra el código de la tecla y el carácter asociado al evento keypress, incluyendo modificadores Shift y Ctrl`  ----- */  
        let info = `carácter "${String.fromCharCode(e.which)}"  (código ${e.which})`;

        //  -----  Si se presiona Shift o Ctrl, se indica en el mensaje  -----
        if (e.shiftKey) 
            info = "SHIFT + " + info;
        
        //  -----  Si se presiona Ctrl, se indica en el mensaje  -----
        if (e.ctrlKey) 
            info = "CTRL + " + info;

        //  -----  Muestra la información del evento keypress en el mensaje  -----
        $mensaje.find(".msg-keypress span").text(info);
    

        //  -----  bloquea la tecla si se alcanzó el máximo (excepto borrar / teclas especiales)  -----
        if (($(this).val()?.toString() ?? "").length >= maximo && e.which !== 0 && e.which !== 8) {
            
            e.preventDefault();
        }

        //  -----  Calcula y muestra el número de caracteres escritos en el textarea  -----
        calcularCaracteresTextarea();

    });


    //  -----  keyup: se dispara al soltar la tecla — muestra el texto actual del textarea  -----
    $textArea.on("keyup", function () {

        const texto = ($(this).val()?.toString() ?? "").trim() || "(vacío)";

        $mensaje.find(".msg-keyup span").text(texto);

        calcularCaracteresTextarea();

    });


   
    //  -----  al iniciar  -----
    calcularCaracteresTextarea();



})(jQuery);
