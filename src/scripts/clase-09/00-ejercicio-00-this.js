/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /00-ejercicio-00-this.js  --  /src/scripts/clase-09/00-ejercicio-00-this.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  00-ejercicio-00-this.js  -----');
    console.log('\n');


    /** @type {JQuery<HTMLLIElement>} - `Lista de elementos li dentro de #lista` */
    const $lista = $("#lista li");


    /*
        -----  ejemplo con this, objeto nativo de JavaScript.  ---------------------------- 
        -----  No esta extendido con las funcionalidades de jQuery.  ----------------------
        -----  Sobre this yo podre ejecutar cosas que tengan que ver con JavaScript.  -----
        -----  Pero no cosas que tengan que ver con jQuery.  ------------------------------
    */

    //  -----  recorremos cada elemento li  -----
    $lista.each(function (index, elem) {


        /*
            -----  Operaciones que quieres realizar para cada elemento "genérico", en este  -----
            -----  caso son los LI de mi página. Este código se ejecuta 5 veces.  ---------------
            -----  this, en cada iteración serta el li actual  ----------------------------------
        */


        //  -----  Mostrar información por la consola  -----

        console.log('-----  recorrido ' + (index + 1) + ' -----');

        //  -----  indice del elemento actual  -----
        console.log('\nindex => ', index);

        //  -----  elemento actual  -----
        console.log('this => ', this);

        //  -----  elemento actual  -----
        console.log('elem => ', elem);

        //  -----  elemento actual como objeto jQuery  -----
        console.log('$(this) => ', $(this));

        //  -----  elemento actual como objeto jQuery  -----
        console.log('$(elem) => ', $(elem));

        console.log('\n\n');

        /** @type {JQuery<HTMLLIElement>} - `Elemento li actual como objeto jQuery` */
        const liActual = $(elem);


        //  -----  Modificar el texto del elemento li actual  -----
        liActual.text("Elemento " + (index + 1));

        
        //  -----  Modificar el estilo del elemento li actual si el índice es par  -----
        if (index % 2 === 0)
            liActual.css({
                color: 'green',
                backgroundColor: 'orange'
            });

    });


})(jQuery);
