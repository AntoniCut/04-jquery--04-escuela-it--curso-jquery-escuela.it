/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /02-probar-selectores.js  --  /src/scripts/clase-08/02-probar-selectores.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-probar-selectores.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} - Playground de la demo */
    const $ctx = $("#contenido");

    /** @type {JQuery<HTMLInputElement>} - Input del selector */
    const $selector = $("#selector");

    /** @type {JQuery<HTMLSelectElement>} - Presets de selector */
    const $presetSelect = $("#presetSelect");

    /** @type {JQuery<HTMLSelectElement>} - Select aplicar / reset */
    const $aplicarSelect = $("#aplicarSelect");

    /** @type {JQuery<HTMLParagraphElement>} - Hint de la accion */
    const $accionHint = $("#accionHint");


    /**
     * ---------------------------------
     * -----  aplicarSelector()  -----
     * ---------------------------------
     */
    const aplicarSelector = () => {

        /** @type {string} - Selector ingresado por el usuario */
        const selectorRaw = String($selector.val() || "").trim();

        if (!selectorRaw) {
            $accionHint.text("Escribe o elige un selector antes de aplicar.");
            return;
        }

        /** @type {string} - Selector limitado al playground */
        const selector = "#contenido " + selectorRaw;
        
        /** @type {string} - Color de fondo ingresado por el usuario */
        const color = "#" + ($("#color").val() || "");
        
        /** @type {string} - Color de texto ingresado por el usuario */
        const colorTexto = "#" + ($("#colorTexto").val() || "");
        

        console.log('selector: ', selector, " - color: ", color);
        

        //  -----  Aplicar estilos CSS a los elementos      -----
        //  -----  seleccionados por el selector ingresado  -----
        $(selector).css({
            "background-color": color,
            "color": colorTexto
        });

        $ctx.addClass("is-flash");
        $accionHint.text(`Aplicado: ${selectorRaw}`);
        setTimeout(() => $ctx.removeClass("is-flash"), 450);

    };


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


    //  -----  Al elegir un preset se carga en el input  -----
    $presetSelect.on("change", function () {

        /** @type {string} */
        const value = String($(this).val() || "");

        if (!value) return;

        $selector.val(value);
        $accionHint.text(`Preset cargado: ${value}. Confirma en "Aplicar".`);

    });


    //  -----  Select de aplicar / reset (sin botones)  -----
    $aplicarSelect.on("change", function () {

        /** @type {string} */
        const value = String($(this).val() || "");

        if (value === "aplicar") aplicarSelector();
        if (value === "reset") resetPlayground();

        //  -----  Volver al placeholder para poder reaplicar  -----
        $(this).val("");

    });
       

})(jQuery);
