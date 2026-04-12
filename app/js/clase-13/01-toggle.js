/*
    *  -------------------------------------------------------------------  *
    *  -----  /01-toggle.js  --  /src/scripts/clase-13/01-toggle.js  -----  *
    *  -------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-toggle.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace con id = linkAnim`  */
    const $linkAnim = $('#linkAnim');
    
    /** @type {JQuery<HTMLDivElement>} - `Div con id = anim lo que se anima`  */
    const $anim = $('#anim');


    //  -----  Evento click al enlace  -----
    $linkAnim.on("click", function (e) {
        
        e.preventDefault();

        /** @type {JQuery<HTMLAnchorElement>} - `Enlace que se clickea`  */
        const $enlace = $(this);

        $anim.toggle(4000, function () {
            $enlace.text($(this).is(':visible') ? 'Ocultar' : 'Mostrar');
        });

    });



})(jQuery);

