/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /01-selectores-jerarquia.js  --  /src/scripts/clase-08/01-selectores-jerarquia.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-selectores-jerarquia.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} - Playground de la demo */
    const $ctx = $("#contenido");

    /** @type {JQuery<HTMLSelectElement>} - Select de acciones */
    const $accionSelect = $("#accionSelect");

    /** @type {JQuery<HTMLSelectElement>} - Select de reset del playground */
    const $resetSelect = $("#resetSelect");

    /** @type {JQuery<HTMLParagraphElement>} - Hint de la accion */
    const $accionHint = $("#accionHint");


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
        
        //  -----  pintar de azul los span dentro de los párrafos
        btn1: () => $("p span", $ctx).css("color", "blue"),

        //  -----  Pinta de Rojo Solo los span hijos directos de los párrafos
        btn2: () => $("p > span", $ctx).css("color", "red"),
        
        //  -----  Pinta de Naranja los párrafos que sean hermanos de un div
        btn3: () => $("div ~ p", $ctx).css("color", "orange"),
        
        //  -----  Pinta de Verde los párrafos que NO tengan el ID "p2"
        btn4: () => $("p:not(#p2)", $ctx).css("color", "green"),
        
        //  -----  Pinta de un fondo amarillo los primeros hijos de cada párrafo
        btn5: () => {
            
            $("p:first-child", $ctx).css({
                fontSize: "2em",
                border: "1px solid #445",
                backgroundColor: "#ffc"
            });
        },

        //  -----  Selecciona los párrafos que contienen la palabra 'probando' y los Muestra/Oculta
        btn6: () => $("p:contains('probando')", $ctx).toggle(3000)
    };


    //  -----  Al cambiar el select se ejecuta la accion elegida  -----
    $accionSelect.on("change", function () {

        /** @type {string} */
        const value = String($(this).val() || "");

        /** @type {string} */
        const label = $(this).find("option:selected").text();

        if (!value) {
            $accionHint.text("Selecciona una opcion para aplicar el selector sobre el playground.");
            return;
        }

        $accionHint.text(`Ejecutado: ${label}`);
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
