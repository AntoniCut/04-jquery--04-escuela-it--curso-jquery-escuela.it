/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /01-metodos-html-text.js  --  /src/scripts/clase-07/01-metodos-html-text.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-metodos-html-text.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} */
    const $ctx = $('#contenido');

    /** @type {JQuery<HTMLSelectElement>} */
    const $accionSelect = $('#accionSelect');

    /** @type {JQuery<HTMLSelectElement>} */
    const $resetSelect = $('#resetSelect');

    /** @type {JQuery<HTMLParagraphElement>} */
    const $accionHint = $('#accionHint');

    /** @type {JQuery<HTMLParagraphElement>} */
    const $info = $('#info');

    /** @type {JQuery<HTMLElement>} */
    const $description = $('#description');

    /** @type {JQuery<HTMLElement>} */
    const $output = $('#output');


    /**
     * ------------------------------
     * -----  resetPlayground()  -----
     * ------------------------------
     */
    const resetPlayground = () => {

        $output
            .empty()
            .removeClass('is-visible')
            .css({ opacity: '', transform: '' });

        $info.text('Abajo se renderiza el contenido segun el metodo elegido.');
        $accionHint.text('Playground reseteado. Elige html() o text() de nuevo.');
        $accionSelect.val('');
        $ctx.removeClass('is-flash');

    };


    const renderHtml = () => {

        $info.html('Renderizado con el metodo <kbd>.html()</kbd>');
        $output
            .html($description.html())
            .addClass('is-visible')
            .css('opacity', '1');

        $accionHint.html('Ejecutado: <kbd>html()</kbd> — se interpretan las etiquetas.');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    const renderText = () => {

        $info.html('Renderizado con el metodo <kbd>.text()</kbd>');
        $output
            .text($description.text())
            .addClass('is-visible')
            .css('opacity', '1');

        $accionHint.html('Ejecutado: <kbd>text()</kbd> — todo como texto plano.');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    $accionSelect.on('change', function () {

        /** @type {string} */
        const value = String($(this).val() || '');

        if (value === 'html') renderHtml();
        if (value === 'text') renderText();

    });


    $resetSelect.on('change', function () {

        if (String($(this).val() || '') === 'reset') resetPlayground();
        $(this).val('');

    });


})(jQuery);
