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


    /** @type {JQuery<HTMLElement>} -  Contenedor de la demo (ámbito de los eventos)  */
    const $demo = $(".main__demo");

    /** @type {JQuery<HTMLNavElement>} -  Menú contextual  */
    const $menu = $("#menu");

    /** @type {JQuery<HTMLElement>} -  Contenedor de info del botón pulsado  */
    const $info = $("#info");

    //  -----  Verificación de elementos HTML  -----
    if (!$demo.length || !$menu.length || !$info.length)
        throw new Error("No se han encontrado los elementos necesarios en el DOM. Asegúrate de que existen y tienen los IDs correctos.");


    //  -----  variables  -----

    /** @type {string} - `Namespace de eventos para poder limpiarlos sin afectar al resto de la SPA` */
    const NS = ".ejercicio07";

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


    // ------------------------------------------------------------------
    // -----  Limpieza de handlers huérfanos en document (SPA)  -----
    // ------------------------------------------------------------------
    // Versiones anteriores enlazaban contextmenu/mousedown en document
    // y al cambiar de ruta seguían haciendo preventDefault (botón derecho "muerto").
    $(document).off("contextmenu").off("mousedown");
    $demo.off(NS);
    $menu.off(NS);
    clearTimeout(retardo);


    // -------------------------------------------------
    // -----  Manejo de eventos dentro de la demo  -----
    // -------------------------------------------------

    //  -----  Evento `contextmenu` para mostrar el menú contextual personalizado  -----
    $demo.on(`contextmenu${NS}`, (e) => {

        //  -----  Evita que se muestre el menú contextual predeterminado del navegador  -----
        e.preventDefault();

        //  -----  Mantiene el menu visible dentro del viewport  -----
        $menu.css("display", "block");

        //  -----  Calcula la posición del menú contextual para que no se salga del viewport  -----

        /** @type {number} - `Ancho del menú contextual` */
        const anchoMenu = $menu.outerWidth() || 0;

        /** @type {number} - `Alto del menú contextual` */
        const altoMenu = $menu.outerHeight() || 0;

        /** @type {number} - `Coordenada X del puntero` */
        const clientX = e.clientX ?? 0;

        /** @type {number} - `Coordenada Y del puntero` */
        const clientY = e.clientY ?? 0;

        /** @type {number} - `Posición horizontal del menú contextual` */
        const left = Math.max(0, Math.min(clientX, window.innerWidth - anchoMenu));

        /** @type {number} - `Posición vertical del menú contextual` */
        const top = Math.max(0, Math.min(clientY, window.innerHeight - altoMenu));

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
    $menu.on(`mouseenter${NS}`, () => {
        clearTimeout(retardo);
    });


    //  -----  Evento `mouseleave` para programar el cierre automático cuando el ratón sale del menú  -----
    $menu.on(`mouseleave${NS}`, () => {
        programarAutoCierre();
    });



    //  -----  Evento `mousedown` para detectar clicks y ocultar el menú contextual  -----
    $demo.on(`mousedown${NS}`, (e) => {

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
