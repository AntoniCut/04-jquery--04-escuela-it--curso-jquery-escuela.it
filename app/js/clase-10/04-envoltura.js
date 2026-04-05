/*
    *  -------------------------------------------------------------------------  *
    *  -----  /04-envoltura.js  --  /src/scripts/clase-10/04-envoltura.js  -----  *
    *  -------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  04-envoltura.js  -----');
    console.log('\n');


    //  -----  Envuelve el div con clase "envoltura" dentro de un article  -----
    $('.envoltura')
        .wrap("<article> </article>");


    //  -----  Envuelve el article dentro de una section  -----
    $('article')
        .wrap("<section> </section>");


    //  -----  desenvolvemos el texto del b, quitando las etiquetas li y ul  -----      
    $('b')
        .unwrap()
        .unwrap();



})(jQuery);
