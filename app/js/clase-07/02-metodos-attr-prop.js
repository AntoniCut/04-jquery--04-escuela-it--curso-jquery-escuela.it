/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /02-metodos-attr-prop.js  --  /src/scripts/clase-07/02-metodos-attr-prop.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-metodos-attr-prop.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} */
    const $ctx = $('#contenido');

    /** @type {JQuery<HTMLSelectElement>} */
    const $accionSelect = $('#accionSelect');

    /** @type {JQuery<HTMLSelectElement>} */
    const $resetSelect = $('#resetSelect');

    /** @type {JQuery<HTMLParagraphElement>} */
    const $accionHint = $('#accionHint');

    /** @type {JQuery<HTMLElement>} */
    const $infoPanel = $('#infoPanel');

    /** @type {JQuery<HTMLFormElement>} */
    const $form = $('form', $ctx);

    /** @type {JQuery<HTMLInputElement>} */
    const $nombre = $('#inputNombre');

    /** @type {JQuery<HTMLInputElement>} */
    const $check = $('#check');

    /** @type {JQuery<HTMLDivElement>} */
    const $bloqueAvanzado = $('#bloqueAvanzado');

    /** @type {JQuery<HTMLAnchorElement>} */
    const $cerrar = $('#bloqueAvanzado a');


    console.log('$form.eq(0).attr(\'action\') => ', $form.eq(0).attr('action'));
    console.log('$form.eq(1).attr(\'action\') => ', $form.eq(1).attr('action'));

    console.log('\nRecorremos los formularios con .each():');
    $form.each(function (index, element) {
        console.log(` - Formulario ${index + 1}:`, $(element).attr('action'));
    });

    console.log('$check.prop("checked") => ', $check.prop('checked'));
    console.log('$check.attr("checked") => ', $check.attr('checked'));


    const mostrarOcultar = () => {

        if ($check.prop('checked'))
            $bloqueAvanzado.css('opacity', '1');
        else
            $bloqueAvanzado.css('opacity', '0');

    };


    /**
     * ------------------------------
     * -----  resetPlayground()  -----
     * ------------------------------
     */
    const resetPlayground = () => {

        $nombre
            .val('')
            .removeClass('error')
            .css({ backgroundColor: '', borderColor: '' })
            .next('span')
            .remove();

        $check.prop('checked', true);
        mostrarOcultar();

        $infoPanel.text('Resultados de inspeccion apareceran aqui.');
        $accionHint.text('Playground reseteado.');
        $accionSelect.val('');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    const acciones = {

        leerActions: () => {

            const a1 = $form.eq(0).attr('action');
            const a2 = $form.eq(1).attr('action');

            $infoPanel.html(`
                Form 1 action: <kbd>${a1}</kbd><br>
                Form 2 action: <kbd>${a2}</kbd>
            `);
            $accionHint.html("Leido con <kbd>attr('action')</kbd>.");

        },

        compararCheck: () => {

            $infoPanel.html(`
                prop('checked'): <kbd>${String($check.prop('checked'))}</kbd><br>
                attr('checked'): <kbd>${String($check.attr('checked'))}</kbd>
            `);
            $accionHint.html("Comparacion <kbd>prop()</kbd> vs <kbd>attr()</kbd> del checkbox.");

        },

        toggleAvanzado: () => {

            $check.prop('checked', !$check.prop('checked'));
            mostrarOcultar();
            $infoPanel.html(`Checkbox checked: <kbd>${String($check.prop('checked'))}</kbd>`);
            $accionHint.text('Toggle del bloque avanzado con prop().');

        },

    };


    $check.on('click', mostrarOcultar);


    $cerrar.on('click', (e) => {
        e.preventDefault();
        $check.prop('checked', false);
        mostrarOcultar();
    });


    $nombre.on('focus', function () {
        $(this).val('').css('background-color', 'white');
    });


    $nombre.on('input', function () {

        const $campo = $(this);
        const texto = $campo.val();

        $campo.next('span').remove();

        if (texto && String(texto).length < 4) {
            $campo
                .addClass('error')
                .after(`
                    <span style="color:#be123c; margin-left: 10px; font-size: 1.2rem;">
                        Introduce más de 4 caracteres
                    </span>
                `);
        } else {
            $campo.removeClass('error');
        }

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


    mostrarOcultar();


})(jQuery);
