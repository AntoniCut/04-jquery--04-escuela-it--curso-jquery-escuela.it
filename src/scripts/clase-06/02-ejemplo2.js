/*
    *  -----------------------------------------------------------------------  *
    *  -----  /02-ejemplo2.js  --  /src/scripts/clase-06/02-ejemplo2.js  -----  *
    *  -----------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-ejemplo2.js  -----');
    console.log('\n');



    $(function () {


        //  ---------------------------------
        //  -----  Referencias al HTML  -----
        //  ---------------------------------

        /** @type {JQuery<HTMLButtonElement>} */
        const $btnRunEach = $('#btnRunEach');

        /** @type {JQuery<HTMLButtonElement>} */
        const $btnResetEach = $('#btnResetEach');

        /** @type {JQuery<HTMLElement>} */
        const $playground = $('#contenido');

        /** @type {JQuery<HTMLDivElement>} - `Muestra los textos de los párrafos` */
        const $info1 = $('#info1');

        /** @type {JQuery<HTMLDivElement>} - `Muestra los textos de los elementos de la lista` */
        const $info2 = $('#info2');

        /** @type {string} - `HTML original de la lista para poder resetear` */
        const listaOriginal = $('#lista').html();


        /**
         * - Limpia paneles de resultado y restaura la lista.
         */
        const resetPlayground = () => {
            $info1.find('.c6-atelier__result').remove();
            $info2.find('.c6-atelier__result').remove();
            $('#lista').html(listaOriginal);
            $('.c6-atelier__item').removeClass('is-highlight is-removing');
            $playground.removeClass('is-flash');
            $btnRunEach.prop('disabled', false);
        };


        /**
         * - Inserta un resultado animado en un panel.
         * @param {JQuery<HTMLElement>} $panel
         * @param {string} title
         * @param {string} text
         * @param {number} delay
         */
        const appendResult = ($panel, title, text, delay) => {
            const $result = $(`
                <h3 class="c6-atelier__result">
                    <b>${title}</b>
                    ${text}
                </h3>
            `);

            $panel.append($result);

            window.setTimeout(() => {
                $result.addClass('is-visible');
            }, delay);
        };


        /**
         * - Recorre párrafos y lista con each().
         */
        const runEachExample = () => {

            resetPlayground();
            $btnRunEach.prop('disabled', true);
            $playground.addClass('is-flash');


            /** @type {JQuery<HTMLParagraphElement>} - `Todos los párrafos <p> dentro del playground`  */
            const $p = $playground.find('p');

            /** @type {JQuery<HTMLLIElement>} - `elementos li dentro de la lista <ul> con id="lista"`  */
            const $elemLis = $('#lista li');


            //  -----------------------------------------------------------------------
            //  -----  recorrer todos los párrafos con .each() y función callback -----
            //  -----------------------------------------------------------------------

            console.log('$p => ', $p.text(), '\n\n');

            $p.each((index, elem) => {

                const $elem = $(elem);

                console.log(`Párrafo ${index + 1} - ${$elem.text()}`);

                $elem.addClass('is-highlight');

                appendResult(
                    $info1,
                    `Texto del párrafo ${index + 1}`,
                    $elem.text().trim(),
                    index * 120
                );

            });



            //  -----------------------------------------------------------------
            //  -----  recorrer todos los elementos de la lista con .each() -----
            //  -----  y una función que se llame recorridoLista()          -----
            //  -----------------------------------------------------------------

            console.log('$elemLis =>', $elemLis.text());

            /**
             * - `Función para recorrer los elementos de la lista`-
             * @param {number} index - índice del elemento en la lista
             * @param {HTMLElement} elem - elemento nativo de la lista
             */
            const recorridoLista = (index, elem) => {

                const $elem = $(elem);

                console.log(`Elemento de la lista ${index + 1} - ${$elem.text()}`);

                //  -----  eliminar el segundo elemento de la lista  -----
                if ($elem.text().trim() === 'elemento de la lista 2') {
                    $elem.addClass('is-removing is-highlight');

                    window.setTimeout(() => {
                        $elem.remove();
                    }, 450);

                    return;
                }

                $elem.addClass('is-highlight');

                appendResult(
                    $info2,
                    `Texto del elemento ${index + 1} de la lista`,
                    $elem.text().trim(),
                    index * 120
                );

            };

            $elemLis.each(recorridoLista);

            window.setTimeout(() => {
                $btnRunEach.prop('disabled', false);
                $playground.removeClass('is-flash');
            }, 900);

        };


        $btnRunEach.on('click', runEachExample);
        $btnResetEach.on('click', resetPlayground);


    });


})(jQuery);
