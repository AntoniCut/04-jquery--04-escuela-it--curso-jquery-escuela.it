/*
    *  -----------------------------------------------------------------------------------------------------  *
    *  -----  /03-metodos-data-removedata.js  --  /src/scripts/clase-07/03-metodos-data-removedata.js  -----  *
    *  -----------------------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  03-metodos-data-removedata.js  -----');
    console.log('\n');


    /*  
        ---------------------------------
        -----  referencias al HTML  -----
        --------------------------------- 
    */

    /** @type {JQuery<HTMLDivElement>} `div con id = capa` */
    const $capa = $('#capa');

    /** @type {JQuery<HTMLDivElement>} `div con id = infoCapa` */
    const $infoCapa = $('#infoCapa');

    /** @type {JQuery<HTMLDivElement>} `div con id = acumula` */
    const $acumula = $('#acumula');

    /** @type {JQuery<HTMLDivElement>} `div con id = infoAcumula` */
    const $infoAcumula = $('#infoAcumula');


    
    /**
     * ------------------------------------
     * -----  `dataRemoveDataInit()`  -----
     * ------------------------------------
     * - Función para establecer y eliminar datos utilizando los métodos data() y removeData() de jQuery.
     */

    const dataRemoveDataInit = () => {


        //  -----  Obtenemos todos los datos asociados al div #capa  -----
        console.log('Valor inicial => ', $capa.data());

        //  -----  Establecemos un nuevo dato con clave 'dato' y valor '1234'  -----
        $capa.data('dato', '1234');
        console.log('$capa.data(\'dato\', \'1234\') => ', $capa.data());

        //  -----  Eliminamos el dato con clave 'usuario'  -----
        $capa.removeData('usuario');
        console.log('$capa.removeData(\'usuario\') => ', $capa.data());

        $capa.removeData('dato');
        console.log('$capa.removeData(\'dato\') => ', $capa.data());


        //  -----  Mostramos datos iniciales de #capa  -----
        $infoCapa.append(`
            <h3> usuario: ${$capa.data('usuario') ?? ''} </h3>
            <h3> clicks: ${$capa.data('clicks') ?? '0'} </h3>    
        `);

        $infoAcumula.append(`
            <h3> usuario: ${$acumula.data('usuario') ?? ''} </h3>
            <h3> clicks: ${$acumula.data('clicks') ?? '0'} </h3>    
        `);

    }



    /**
     * -------------------------------
     * -----  `acumulaClicks()`  -----
     * -------------------------------
     * - Función para acumular el número de clics en cada div, utilizando el método data() para almacenar el número de clics en cada div.
     * Al llegar a 10 clics, se eliminará el dato almacenado en el div utilizando el método removeData().
     * @this {HTMLDivElement} El div que ha sido clicado.
     */

    function acumulaClicks() {


        /** @type {JQuery<HTMLDivElement>} - `div clicado` */
        const $div = $(this);

        console.log('\nthis => ', this);
        console.log('$(this) => ', $(this), '\n');


        /** @type {string | undefined} - `id del div clicado` */
        const id = $div.attr('id');



        /**
         * - `div de información asociado al div clicado`
         * - Obtenemos el número de clics almacenado en el div clicado, o 0 si no existe
         * @type {JQuery<HTMLDivElement>} 
         */
        const $info = id === 'capa' ? $infoCapa : $infoAcumula;

        /** @type {number} `contador de clics` */
        let clics = $div.data('numclics') || 0;

        clics++;

        if (clics === 10)
            $div.removeData('numclics');

        else
            $div.data('numclics', clics);


        console.log(`Nº de Clics ${clics} en div: #${id}`);

        const html = `
            <h3 class="texto-info"> 
                Nº de clicks: ${clics}, en el div: ${id} 
            </h3>
        `;

        $info.html(html);


    }


    //  -----  Evento click para ambos divs  -----
    $('#capa, #acumula').on('click', function () {

        acumulaClicks
            .call(
                /** @type {HTMLDivElement} */(this)
            );
    });


    //  -----  Inicializamos la función para establecer y eliminar datos  -----
    dataRemoveDataInit();


})(jQuery);
