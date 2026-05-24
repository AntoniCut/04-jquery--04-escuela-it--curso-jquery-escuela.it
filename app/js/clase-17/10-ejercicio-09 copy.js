/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /10-ejercicio-09.js  --  /src/scripts/clase-17/10-ejercicio-09.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  10-ejercicio-09.js  -----');
    console.log('\n');


    $("#t1").on("keydown", function (e) {
        
        if (e.which === 9) {
            e.preventDefault();
        }
    })


})(jQuery);
