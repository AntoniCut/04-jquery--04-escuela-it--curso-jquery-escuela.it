/*
    *  -------------------------------------------------------------------------  *
    *  -----  /04-envoltura.js  --  /src/scripts/clase-10/04-envoltura.js  -----  *
    *  -------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-envoltura.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLElement>} - Contenedor de la demo */
    const $demo = $('.main__demo');

    if (!$demo.length) 
        return;


    //  -----  Envuelve el div con clase "envoltura" dentro de un article  -----
    $demo.find('.envoltura')
        .wrap('<article></article>');


    //  -----  Envuelve el article dentro de una section (solo en la demo)  -----
    $demo.find('article')
        .wrap('<section></section>');


    //  -----  desenvolvemos el texto del b, quitando las etiquetas li y ul  -----
    $demo.find('b')
        .unwrap()
        .unwrap();



})(jQuery);
