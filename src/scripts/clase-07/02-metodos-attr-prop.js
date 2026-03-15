/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /02-metodos-attr-prop.js  --  /src/scripts/clase-07/02-metodos-attr-prop.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-metodos-attr-prop.js  -----');
    console.log('\n');


    /*  
        ---------------------------------
        -----  referencias al HTML  -----
        --------------------------------- 
    */
    
    /** @type {JQuery<HTMLFormElement>} `formulario` */
    const $form = $("form");

    /** @type {JQuery<HTMLInputElement>} `input nombre` del formulario */
    const $nombre = $("#inputNombre");

    /** @type {JQuery<HTMLInputElement>} `checked` del formulario */
    const $check = $("#check");

    /** @type {JQuery<HTMLDivElement>} `div del bloque avanzado` del formulario */
    const $bloqueAvanzado = $("#bloqueAvanzado");
    
    /** @type {JQuery<HTMLAnchorElement>} `cierra el bloque avanzado` del formulario */
    const $cerrar = $("#bloqueAvanzado a");


    //  -----  con el método .eq(), accedo a elementos específicos  -----
    console.log('\n');
    console.log('$form.eq(0).attr(\'action\') => ', $form.eq(0).attr('action'));
    console.log('$form.eq(1).attr(\'action\') => ', $form.eq(1).attr('action'));


    //  -----  con el método .each(), recorro todos los elementos  -----
    console.log('\nRecorremos los formularios con .each():');
    $form.each(function (index, element) {
        console.log(` - Formulario ${index + 1}:`, $(element).attr('action'));
    });


    //  -----  métodos .prop() y .attr() para obtener el estado de un checkbox  -----
    console.log('\n');
    console.log('$form.eq(1).attr("action") => ', $form.eq(1).attr("action"));
    console.log('$check.prop() => ', $check.prop("checked"));
    console.log('$check.attr() => ', $check.attr("checked"));


    /**
     * - `mostrarOcular()`
     * - Muestra u oculta el bloque avanzado según el estado del checkbox. Si el checkbox está marcado, se muestra el bloque avanzado estableciendo su opacidad a 1; si no está marcado, se oculta estableciendo su opacidad a 0.
     */
    const mostrarOcular = () => {

        if ($check.prop("checked"))
            $bloqueAvanzado.css("opacity", "1");
        
        else
            $bloqueAvanzado.css("opacity", "0");
    }


    /*
        -----------------------------  
        -----  eventos 'click'  -----
        -----------------------------
    */

    //  -----  al hacer click en el checkbox, se muestra u oculta el bloque avanzado  -----
    $check.on("click", mostrarOcular);


    //  -----  al hacer click en el enlace de cerrar, se desmarca  -----          
    //  -----  el checkbox y se oculta el bloque avanzado          -----
    $cerrar.on("click", e => {
        
        //  -----  evita el comportamiento por defecto del enlace  -----
        e.preventDefault();  
        
        //  -----  desmarca el checkbox  -----
        $check.prop("checked", false);

        //  -----  muestra u oculta el bloque avanzado segun el estado del checkbox  -----
        mostrarOcular();
    });


    /*
        ----------------------------
        -----  evento 'focus'  -----
        ----------------------------
    */
    $nombre.on('focus', function () {
        
        $(this)
            .val('')
            .css('background-color', 'white');

    })


    /*  
        -----------------------------
        -----  evento 'change'  ----- 
        -----------------------------
    */

    $nombre.on("input", function () {

        //  -----  'this', atajo acceder al elemento actual (contexto)  -----
        const campoInput = $(this);
        
        /** @type {string|undefined} - `almacena el valor del campo de texto` */
        const texto = campoInput.val();

        //  -----  Elimina el mensaje de error si ya existe  -----
        campoInput.next("span").remove();

        if (texto && texto.length < 4) {
            
            campoInput
                .addClass("error")
                //.css('background-color', 'red')
                .after(`
                    <span style="color:red; margin-left: 10px; font-size: 1.2rem;"> 
                        Introduce más de 4 caracteres 
                    </span>
                `);
        
        } 
        
        else 
            campoInput.removeClass("error");
        
    });


    //  -----  se ejecuta al iniciar la página  -----
    mostrarOcular();

       

})(jQuery);
