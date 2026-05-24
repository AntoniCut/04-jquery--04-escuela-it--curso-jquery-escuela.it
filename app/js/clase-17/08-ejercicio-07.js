/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /08-ejercicio-07.js  --  /src/scripts/clase-17/08-ejercicio-07.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  08-ejercicio-07.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */


    /** @type {JQuery<Document>} -  Documento HTML  */
    const $document = $(document);

    /** @type {JQuery<HTMLNavElement>} -  Menú contextual  */
    const $menu = $("#menu");

    /** @type {JQuery<HTMLDivElement>} -  Div con id = info  */
    const $info = $("#info");

    //  -----  Verificación de elementos HTML  -----
    if (!$menu.length || !$info.length)
        throw new Error("No se han encontrado los elementos necesarios en el DOM. Asegúrate de que existen y tienen los IDs correctos.");


    //  -----  variables  -----

    /** @type {number} - `Duración en milisegundos que el menú permanece visible` */
    const DURACION_MENU_MS = 2000;

    /** @type {ReturnType<typeof setTimeout> | undefined} - `Variable que almacena el identificador del retardo para el cierre automático del menú` */
    let retardo;


    /**
     * ----------------------------
     * -----  `ocultaMenu()`  -----
     * ----------------------------
     * - `Oculta el menú contextual`
     */

    const ocultarMenu = () => $menu.css("display", "none");


    /**
     * -------------------------------------
     * -----  `programarAutoCierre()`  -----
     * -------------------------------------
     * - `Programa el cierre automático del menú contextual después de un tiempo definido`
     */

    const programarAutoCierre = () => {

        //  -----  Limpia cualquier retardo previo para evitar cierres prematuros  -----
        clearTimeout(retardo);

        //  -----  Programa un nuevo retardo para ocultar el menú después de DURACION_MENU_MS  -----
        retardo = setTimeout(() => ocultarMenu(), DURACION_MENU_MS);

    };


    // ---------------------------------------------
    // -----  Manejo de eventos del documento  -----
    // ---------------------------------------------

    //  -----  Evento `contextmenu` para mostrar el menú contextual personalizado  -----
    $document.on('contextmenu', (e) => {

        //  -----  Evita que se muestre el menú contextual predeterminado del navegador  -----
        e.preventDefault();

        //  -----  Mantiene el menu visible dentro del viewport  -----
        $menu.css("display", "block");

        //  -----  Calcula la posición del menú contextual para que no se salga del viewport  -----

        /** @type {number} - `Ancho del menú contextual` */
        const anchoMenu = $menu.outerWidth() || 0;

        /** @type {number} - `Alto del menú contextual` */
        const altoMenu = $menu.outerHeight() || 0;

        /** @type {number} - `Posición horizontal del menú contextual` */
        const left = Math.max(0, Math.min(e.clientX, window.innerWidth - anchoMenu));

        /** @type {number} - `Posición vertical del menú contextual` */
        const top = Math.max(0, Math.min(e.clientY, window.innerHeight - altoMenu));

        //  -----  Posiciona el menú contextual en la ubicación calculada  -----
        $menu.css({
            "position": "fixed",
            "display": "block",
            "top": `${top}px`,
            "left": `${left}px`
        });

        //  -----  Programa el cierre automático del menú contextual después de mostrarlo  -----
        programarAutoCierre();

    });



    //  -----  Evento `mouseenter` para evitar que el menú se oculte mientras el ratón está sobre él  -----
    $menu.on('mouseenter', () => {
        clearTimeout(retardo);
    });


    //  -----  Evento `mouseleave` para programar el cierre automático cuando el ratón sale del menú  -----
    $menu.on('mouseleave', () => {
        programarAutoCierre();
    });

    

    //  -----  Evento `mousedown` para detectar clicks y ocultar el menú contextual  -----
    $document.on('mousedown', (e) => {

        console.log('Has pulsado el boton ' + e.which + ' del mouse');

        //  -----  Actualiza el contenido del div con id = info para mostrar qué botón del mouse se ha pulsado  -----
        $info.html(`
            Has pulsado el boton <span> ${e.which} </span> del mouse`);

        //  -----  Si se pulsa el botón derecho, no ocultamos aquí el menú para evitar parpadeos/desfase  -----
        if (e.which === 3) {
            return;
        }

        //  -----  Para otros botones, limpiamos retardo y ocultamos menú  -----
        clearTimeout(retardo);
        ocultarMenu();

    });








})(jQuery);
