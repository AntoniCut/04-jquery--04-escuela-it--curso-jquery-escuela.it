/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /03-metodos-data-removedata.js  --  /src/scripts/clase-07/03-metodos-data-removedata.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-metodos-data-removedata.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} */
    const $ctx = $('#contenido');

    /** @type {JQuery<HTMLSelectElement>} */
    const $accionSelect = $('#accionSelect');

    /** @type {JQuery<HTMLSelectElement>} */
    const $resetSelect = $('#resetSelect');

    /** @type {JQuery<HTMLParagraphElement>} */
    const $accionHint = $('#accionHint');

    /** @type {JQuery<HTMLDivElement>} */
    const $capa = $('#capa');

    /** @type {JQuery<HTMLDivElement>} */
    const $infoCapa = $('#infoCapa');

    /** @type {JQuery<HTMLDivElement>} */
    const $acumula = $('#acumula');

    /** @type {JQuery<HTMLDivElement>} */
    const $infoAcumula = $('#infoAcumula');


    const pintarInfoInicial = () => {

        $infoCapa.html(`
            <h3> usuario: ${$capa.data('usuario') ?? ''} </h3>
            <h3> clicks: ${$capa.data('numclics') ?? '0'} </h3>
        `);

        $infoAcumula.html(`
            <h3> usuario: ${$acumula.data('usuario') ?? ''} </h3>
            <h3> clicks: ${$acumula.data('numclics') ?? '0'} </h3>
        `);

    };


    const dataRemoveDataInit = () => {

        console.log('Valor inicial => ', $capa.data());

        $capa.data('dato', '1234');
        console.log("$capa.data('dato', '1234') => ", $capa.data());

        $capa.removeData('usuario');
        console.log("$capa.removeData('usuario') => ", $capa.data());

        $capa.removeData('dato');
        console.log("$capa.removeData('dato') => ", $capa.data());

        //  -----  Restaurar usuario visual para la demo interactiva  -----
        $capa.data('usuario', 'AntonyDev');
        pintarInfoInicial();

    };


    /**
     * @this {HTMLDivElement}
     */
    function acumulaClicks() {

        /** @type {JQuery<HTMLDivElement>} */
        const $div = $(this);

        /** @type {string | undefined} */
        const id = $div.attr('id');

        /** @type {JQuery<HTMLDivElement>} */
        const $info = id === 'capa' ? $infoCapa : $infoAcumula;

        /** @type {number} */
        let clics = $div.data('numclics') || 0;

        clics++;

        if (clics === 10)
            $div.removeData('numclics');
        else
            $div.data('numclics', clics);

        console.log(`Nº de Clics ${clics} en div: #${id}`);

        $info.html(`
            <h3 class="texto-info">
                Nº de clicks: ${clics}, en el div: ${id}
            </h3>
        `);

        $accionHint.text(`Click acumulado en #${id}: ${clics}`);

    }


    /**
     * ------------------------------
     * -----  resetPlayground()  -----
     * ------------------------------
     */
    const resetPlayground = () => {

        $capa.removeData('numclics').removeData('dato').data('usuario', 'AntonyDev');
        $acumula.removeData('numclics').data('usuario', 'Random');

        pintarInfoInicial();
        $accionHint.text('Estilos y contadores del playground reseteados.');
        $accionSelect.val('');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    const acciones = {

        mostrarDatos: () => {

            $infoCapa.html(`<h3>data(#capa): ${JSON.stringify($capa.data())}</h3>`);
            $infoAcumula.html(`<h3>data(#acumula): ${JSON.stringify($acumula.data())}</h3>`);
            $accionHint.html("Mostrando objeto <kbd>data()</kbd> actual.");

        },

        setDato: () => {

            $capa.data('dato', '1234');
            $infoCapa.html(`<h3>data(#capa): ${JSON.stringify($capa.data())}</h3>`);
            $accionHint.html("Ejecutado: <kbd>data('dato', '1234')</kbd>.");

        },

        removeUsuario: () => {

            $capa.removeData('usuario');
            $infoCapa.html(`<h3>data(#capa): ${JSON.stringify($capa.data())}</h3>`);
            $accionHint.html("Ejecutado: <kbd>removeData('usuario')</kbd>.");

        },

    };


    $('#capa, #acumula').on('click', function () {
        acumulaClicks.call(/** @type {HTMLDivElement} */ (this));
    });


    $accionSelect.on('change', function () {

        /** @type {string} */
        const value = String($(this).val() || '');

        if (!value) return;

        acciones[value]?.();
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    });


    $resetSelect.on('change', function () {

        if (String($(this).val() || '') === 'reset') resetPlayground();
        $(this).val('');

    });


    dataRemoveDataInit();


})(jQuery);
