/*
    *  ----------------------------------------------------------------------  *
    *  -----  02-ejemplo2.js  --  /src/scripts/clase-06/02-ejemplo2.js  -----  *
    *  ----------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  02-ejemplo2.js  -----');
    console.log('\n');


    $(function () {


        /*
            *  ---------------------------------  *
            *  -----  Referencias al HTML  -----  *
            *  ---------------------------------  *
        */

        /** @type {JQuery<HTMLButtonElement>} - `Boton recorre con each` */
        const $btnRunEach = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#btnRunEach')
        );

        /** @type {JQuery<HTMLButtonElement>} - `Boton resetea el playground` */
        const $btnResetEach = /** @type {JQuery<HTMLButtonElement>} */ (
            $('#btnResetEach')
        );

        /** @type {JQuery<HTMLElement>} - `Playground del ejercicio` */
        const $playground = /** @type {JQuery<HTMLElement>} */ (
            $('#contenido')
        );

        /** @type {JQuery<HTMLDivElement>} - `Panel de textos de los parrafos` */
        const $info1 = /** @type {JQuery<HTMLDivElement>} */ (
            $('#info1')
        );

        /** @type {JQuery<HTMLDivElement>} - `Panel de textos de la lista` */
        const $info2 = /** @type {JQuery<HTMLDivElement>} */ (
            $('#info2')
        );

        /** @type {JQuery<HTMLUListElement>} - `Lista de elementos del playground` */
        const $lista = /** @type {JQuery<HTMLUListElement>} */ (
            $('#lista')
        );

        /** @type {JQuery<HTMLLIElement>} - `Copia de los li originales para resetear` */
        const $listaOriginal = /** @type {JQuery<HTMLLIElement>} */ (
            $lista.children().clone()
        );


        /*
            *  -----------------------  *
            *  -----  Funciones  -----  *
            *  -----------------------  *
        */


        /**
         * ---------------------------------
         * -----  `resetPlayground()`  -----
         * ---------------------------------
         * - Limpia paneles de resultado y restaura la lista.
         * @return {void}
         */
        const resetPlayground = () => {
            
            $info1
                .find('.c6-atelier__result')
                .remove();
            
            $info2
                .find('.c6-atelier__result')
                .remove();
            
            $lista
                .empty()
                .append($listaOriginal
                    .clone());
            
            $('.c6-atelier__item').removeClass('is-highlight is-removing');
            
            $playground.removeClass('is-flash');
            $btnRunEach.prop('disabled', false);

        };


        /**
         * --------------------------------------------------------
         * -----  `appendResult($panel, title, text, delay)`  -----
         * --------------------------------------------------------
         * - Inserta un resultado animado en un panel.
         * @param {JQuery<HTMLElement>} $panel - Panel destino del resultado.
         * @param {string} title - Titulo del resultado.
         * @param {string} text - Texto del resultado.
         * @param {number} delay - Retraso en ms para mostrar el resultado.
         * @return {void}
         */
        const appendResult = ($panel, title, text, delay) => {
            
            /** @type {JQuery<HTMLElement>} - `Titulo en negrita del resultado` */
            const $titulo = $('<b>').text(title);

            /** @type {JQuery<HTMLHeadingElement>} - `Resultado animado del panel` */
            const $result = /** @type {JQuery<HTMLHeadingElement>} */ (
                $('<h3>')
                    .addClass('c6-atelier__result')
                    .append($titulo)
                    .append(text)
            );

            $panel.append($result);

            window.setTimeout(() => {
                $result.addClass('is-visible');
            }, delay);

        };


        /**
         * -------------------------------------------
         * -----  `recorridoLista(index, elem)`  -----
         * -------------------------------------------
         * - Recorre un elemento de la lista y elimina el segundo.
         * @param {number} index - Indice del elemento en la lista.
         * @param {HTMLElement} elem - Elemento nativo de la lista.
         * @return {void}
         */
        const recorridoLista = (index, elem) => {

            /** @type {JQuery<HTMLLIElement>} - `Elemento de la lista` */
            const $elem = /** @type {JQuery<HTMLLIElement>} */ (
                $(elem)
            );

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


        /**
         * --------------------------------
         * -----  `runEachExample()`  -----
         * --------------------------------
         * - Recorre parrafos y lista con each().
         * @return {void}
         */
        const runEachExample = () => {

            resetPlayground();
            
            $btnRunEach.prop('disabled', true);
            $playground.addClass('is-flash');


            /** @type {JQuery<HTMLParagraphElement>} - `Parrafos dentro del playground` */
            const $p = $playground.find('p');

            /** @type {JQuery<HTMLLIElement>} - `Elementos li de la lista` */
            const $elemLis = $lista.find('li');


            //  -----  recorrer todos los parrafos con each  -----
            console.log('$p => ', $p.text(), '\n\n');

            $p.each((index, elem) => {

                /** @type {JQuery<HTMLParagraphElement>} - `Elemento de la lista` */
                const $elem = /** @type {JQuery<HTMLParagraphElement>} */ (
                    $(elem)
                );

                console.log(`Parrafo ${index + 1} - ${$elem.text()}`);

                $elem.addClass('is-highlight');

                appendResult(
                    $info1,
                    `Texto del parrafo ${index + 1}`,
                    $elem.text().trim(),
                    index * 120
                );

            });


            //  -----  recorrer todos los elementos de la lista con each  -----
            console.log('$elemLis =>', $elemLis.text());

            $elemLis.each(recorridoLista);

            window.setTimeout(() => {
                $btnRunEach.prop('disabled', false);
                $playground.removeClass('is-flash');
            }, 900);

        };


        /*
            *  -----------------------------  *
            *  -----  Event Listeners  -----  *
            *  -----------------------------  *
        */

        //  -----  click en run each  -----
        $btnRunEach.on('click', (event) => {
            event.preventDefault();
            runEachExample();
        });


        //  -----  click en resetear playground  -----
        $btnResetEach.on('click', (event) => {
            event.preventDefault();
            resetPlayground();
        });


    });


})(jQuery);
