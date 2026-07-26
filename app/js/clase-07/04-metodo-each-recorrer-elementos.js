/*
    *  -------------------------------------------------------------------------------------------------------------------  *
    *  -----  /04-metodo-each-recorrer-elementos.js  --  /src/scripts/clase-07/04-metodo-each-recorrer-elementos.js  -----  *
    *  -------------------------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-metodo-each-recorrer-elementos.js  -----');
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
    const $parrafos = $('.c7-atelier__p', $ctx);

    /** @type {JQuery<HTMLParagraphElement>} */
    const $parrafosProbando = $('p.probando', $ctx);

    /** @type {JQuery<HTMLParagraphElement>} */
    const $totalParrafos = $('p.c7-atelier__p', $ctx);

    /** @type {JQuery<HTMLDivElement>} */
    const $info = $('#info');


    const animarEntrada = () => {

        $parrafos.each(function (index, elem) {
            setTimeout(() => {
                $(elem).addClass('is-visible');
            }, index * 80);
        });

    };


    /**
     * ---------------------------
     * -----  ejecutarEach()  -----
     * ---------------------------
     */
    const ejecutarEach = () => {

        const numParrafosProbando = $parrafosProbando.length;

        console.log('Nº total de párrafos: ', $totalParrafos.length);
        console.log('\nNº de parrafosProbando: ', numParrafosProbando);

        $info.empty();
        $info.append(`<h3 class="info-paragraph"> Nº total de Párrafos ${$totalParrafos.length} </h3>`);
        $info.append(`<h3 class="info-paragraph"> Nº de Párrafos con la clase probando ${numParrafosProbando} </h3>`);

        let parrafosProbandoText = '<br>';

        $parrafosProbando.each(function (id, elem) {

            parrafosProbandoText += $(elem).text();

            if (id < (numParrafosProbando - 1)) {
                parrafosProbandoText += '<br><br>';
            }

        });

        console.log('\n', parrafosProbandoText);

        $info.append(`
            <h3 class="info-paragraph">
                Contenido de los párrafos con la clase probando son los siguientes...
            </h3>
        `);
        $info.append(parrafosProbandoText);

        $accionHint.html('Ejecutado: <kbd>each()</kbd> sobre <kbd>.probando</kbd>.');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    const resaltarProbando = () => {

        $parrafos.removeClass('is-highlight');
        $parrafosProbando.addClass('is-highlight');
        $accionHint.html('Resaltados los parrafos con clase <kbd>probando</kbd>.');

    };


    /**
     * ------------------------------
     * -----  resetPlayground()  -----
     * ------------------------------
     */
    const resetPlayground = () => {

        $parrafos.removeClass('is-highlight');
        $info.empty();
        $accionHint.text('Playground reseteado. Puedes ejecutar each() de nuevo.');
        $accionSelect.val('');
        $ctx.addClass('is-flash');
        setTimeout(() => $ctx.removeClass('is-flash'), 450);

    };


    $accionSelect.on('change', function () {

        /** @type {string} */
        const value = String($(this).val() || '');

        if (value === 'ejecutar') ejecutarEach();
        if (value === 'resaltar') resaltarProbando();

    });


    $resetSelect.on('change', function () {

        if (String($(this).val() || '') === 'reset') resetPlayground();
        $(this).val('');

    });


    animarEntrada();
    ejecutarEach();


})(jQuery);
