/*
    *  ---------------------------------------------------------------------  *
    *  -----  /02-animate.js  --  /src/scripts/clase-13/02-animate.js  -----  *
    *  ---------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-animate.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLFormElement>} - `form` */
    const $form = $('.main__section-practica form');

    /** @type {JQuery<HTMLInputElement>} - `#tamTexto` */
    const $tamTexto = $('.main__section-practica #tamTexto');

    /** @type {JQuery<HTMLInputElement>} - `#tamCaja` */
    const $tamCaja = $('.main__section-practica #tamCaja');

    /** @type {JQuery<HTMLInputElement>} - `#padding` */
    const $padding = $('.main__section-practica #padding');


    //  -----  Evento al enviar el formulario  -----
    $form.on("submit", function (e) {

        //  -----  prevenimos el comportamiento por defecto del formulario  -----
        e.preventDefault();

        /**  - `-----  almacenamos la referencia al formulario  -----` */
        const $cajaForm = /** @type {JQuery<HTMLFormElement>} */ ($(this));

        /**  - `-----  almacenamos el valor del tamaño del texto  -----` */
        const tamTexto = $tamTexto.val();

        /**  - `-----  almacenamos el valor del tamaño de la caja  -----` */
        const tamCaja = $tamCaja.val();

        /**  - `-----  almacenamos el valor del padding  -----` */
        const padding = $padding.val();

        ///  - `-----  animamos la caja del formulario  -----`
        $cajaForm.animate({

            fontSize: tamTexto,
            width: tamCaja,
            padding: padding

        }, 4000, function () {

            alert('Termino la animación Animate y Comenzará fadeOut!!!');

            $cajaForm.fadeOut(5000, function () {

                alert('Termino la animación de fadeOut y Comenzará fadeIn!!!');

                $(this).fadeIn(5000, function () {

                    alert('Termino la animación de fadeIn y vuelve al inicio!!!');

                    $(this).animate({

                        fontSize: '16px',
                        width: '300px',
                        padding: '10px'
                        
                    }, 4000);

                });
            });

        });

    });


})(jQuery);
