/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /04-prevent-default.js  --  /src/scripts/clase-11/04-prevent-default.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


(($) => {


    console.log('\n');
    console.warn('-----  04-prevent-default.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace 1 a escuela.it` */
    const $enlace1 = $(".enlace1");
    
    /** @type {JQuery<HTMLAnchorElement>} - `Enlace 2 a escuela.it` */
    const $enlace2 = $(".enlace2");


    //  -----  Click en enlace1 Sin preventDefault()  -----
    $enlace1.on('click', function () {

        $(this).css("color", "blue");
        
    });


    //  -----  Click en enlace2 Con preventDefault()  -----
    $enlace2.on('click', function (event) {

        //  -----  previene el comportamiento por defecto  -----
        event.preventDefault();

        alert("Previene el comportamiento por defecto")
        
        $(this).css("color", "blue");

        //  -----  previene el comportamiento por defecto tambien,     ----- 
        //  -----  y evita la propagación del evento  -  return false  -----
        //return false; 

    });



})(jQuery);
