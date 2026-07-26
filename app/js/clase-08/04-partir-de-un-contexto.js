/*
    *  -------------------------------------------------------------------------------------------------  *
    *  -----  /04-partir-de-un-contexto.js  --  /src/scripts/clase-08/04-partir-de-un-contexto.js  -----  *
    *  -------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-partir-de-un-contexto.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLSelectElement>} - Select de acciones */
    const $accionSelect = $("#accionSelect");

    /** @type {JQuery<HTMLSelectElement>} - Select de reset del playground */
    const $resetSelect = $("#resetSelect");

    /** @type {JQuery<HTMLParagraphElement>} - Hint de la accion */
    const $accionHint = $("#accionHint");

    /** @type {JQuery<HTMLElement>} - Playground de la demo */
    const $ctx = $("#contenido");


    /**
     * ------------------------------
     * -----  resetPlayground()  -----
     * ------------------------------
     */
    const resetPlayground = () => {

        $ctx.find("*").each(function () {
            this.style.removeProperty("background-color");
            this.style.removeProperty("background");
            this.style.removeProperty("color");
            this.style.removeProperty("font-size");
            this.style.removeProperty("border");
            this.style.removeProperty("display");
        });

        $ctx.find("*").show();
        $accionHint.text("Estilos del playground reseteados.");
    };


    /** 
     * - `Objeto de acciones` que mapea los valores del select a 
     *    funciones que ejecutan los selectores jQuery correspondientes`
     * @type {Record<string, () => void>} */

    const acciones = {


        /**  
            - Selecciona los elementos con la clase 'grande' 
              dentro del elemento con id 'principal' y colorea de rojo
        */
        btn1: () => {

            $("#principal .grande")
                .css("color", "red");

        },


        /**  
         - Selecciona los elementos con la clase 'grande' 
           que sean hijos directos del elemento con id 'principal' 
           y colorea de verde  
        */
        btn2: () => {

            $("#principal > .grande")
                .css("color", "green");
        },


        /**
         - Selecciona los elementos con la clase 'grande' 
           dentro del elemento con id 'principal' 
           y colorea el fondo de azul claro 
        */
        btn3: () => {

            $(".grande", "#principal")
                .css("background", "#ccf");
        },


        /**
            - Selecciona los elementos con la clase 'grande' 
              dentro del elemento con id 'principal' y colorea de azul
        */
        btn4: () => {
            
            $("#principal")
                .find(".grande")
                .css("color", "blue");
        },

    };


    //  -----  Al cambiar el select se ejecuta la accion elegida  -----
    $accionSelect.on("change", function () {

        /** @type {string} */
        const value = String($(this).val() || "");

        /** @type {string} */
        const label = $(this).find("option:selected").text();

        if (!value) {
            $accionHint.text('Cada opcion usa un contexto distinto para localizar .grande.');
            return;
        }

        $accionHint.html(`Ejecutado: <kbd>${label}</kbd>`);
        $ctx.addClass("is-flash");
        acciones[value]?.();
        setTimeout(() => $ctx.removeClass("is-flash"), 450);

    });


    //  -----  Select de reset del playground  -----
    $resetSelect.on("change", function () {

        /** @type {string} */
        const value = String($(this).val() || "");

        if (value === "reset") resetPlayground();

        //  -----  Volver al placeholder para poder resetear de nuevo  -----
        $(this).val("");

    });


})(jQuery);
