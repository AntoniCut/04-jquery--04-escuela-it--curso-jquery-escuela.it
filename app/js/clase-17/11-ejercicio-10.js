/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /11-ejercicio-10.js  --  /src/scripts/clase-17/11-ejercicio-10.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  11-ejercicio-10.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */


    /** @type {JQuery<HTMLDivElement>} - Representa el objeto jQuery del div */
    const $miDiv = $("#miDiv");

    //  -----  Validar que el elemento exista en el DOM  -----
    if (!$miDiv.length) {
        console.error('No se encontro el elemento #miDiv en el DOM.');
        return;
    }


    /** @type {HTMLElement | undefined} - Representa el elemento HTML del div */
    const miDivElement = $miDiv.get(0);

    //  -----  Validar que se obtuvo el elemento HTML del div  -----
    if (!miDivElement) {
         console.error('No se pudo obtener el elemento HTML de #miDiv.');
         return;
    }
    

    
    //*  -----  Funciones  -----
   
    /** 
     * --------------------------------
     * -----  `pintarVisible()`  ------
     * --------------------------------
     * - Cambia el color de fondo del div después de un retraso de 500ms según su visibilidad.
     * @param {boolean} esVisible 
     */
    
    const pintarVisible = (esVisible) => {
        
        //  -----  Cambia el color de fondo del div después de un retraso de 500ms  -----
        setTimeout(() => {
            $miDiv.css("background-color", esVisible ? "red" : "#ddd");
        }, 500);
            
    };



    //* -----  Detecta de forma fiable cuando el div entra/sale del viewport  -----

    //  -----  Detecta de forma fiable cuando el div entra/sale del viewport  -----
    if ("IntersectionObserver" in window) {
        

        /**  - `Representa el objeto IntersectionObserver` */
        const observer = new IntersectionObserver(
            (entries) => {
                const entrada = entries[0];
                pintarVisible(entrada.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px 0px -100px 0px",
                threshold: 0
            }
        );

        observer.observe(miDivElement);
        return;
    }



    //*  -----  Fallback para navegadores sin IntersectionObserver  -----

    /**  - Representa el objeto jQuery de la ventana */
    const $window = $(window);
    
    //  -----  Actualiza el color del div según su visibilidad  -----
    const actualizarColorDiv = () => {
        
        /** - Representa la posición del div en el documento */
        const offsetDiv = $miDiv.offset();

        if (!offsetDiv) {
            return;
        }

        /** - Representa la posición superior del div en el documento */
        const posicionDiv = offsetDiv.top;
        
        /** - Representa la posición actual del scroll */
        const scrollActual = $window.scrollTop() || 0;
        
        /** - Representa la altura de la ventana */
        const altoVentana = $window.height() || 0;
        
        /** - Calcula la posición del borde inferior del viewport */
        const bordeInferiorViewport = scrollActual + altoVentana;
        
        pintarVisible(bordeInferiorViewport >= (posicionDiv - 100));

    };


    // -----  Captura scroll en cualquier contenedor desplazable del layout SPA  -----
    $window.on("scroll", actualizarColorDiv);
    
    //  -----  Inicializa el color del div al cargar la página  -----
    actualizarColorDiv();


})(jQuery);
