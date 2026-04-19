/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /02-ejemplo-stop.js  --  /src/scripts/clase-14/02-ejemplo-stop.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-ejemplo-stop.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----


    /** @type {JQuery<HTMLDivElement>} - `Div con id = tip`  */
    const $tip = $('.main__section-practica #tip');

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace con id = enlace`  */
    const $enlace = $('#enlace');


    $enlace

        .off('mouseenter mouseleave')

        .on('mouseenter', function () {

            $tip
                .stop(true, true)
                .fadeIn(1200);
        })

        .on('mouseleave', function () {

            $tip
                .stop(true, true)
                .fadeOut(1200);
        });




})(jQuery);

