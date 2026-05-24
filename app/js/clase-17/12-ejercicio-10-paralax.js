/*
    *  -----------------------------------------------------------------------------------------------  *
    *  -----  /12-ejercicio-10-paralax.js  --  /src/scripts/clase-17/12-ejercicio-10-paralax.js  -----  *
    *  -----------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  12-ejercicio-10-paralax.js  -----');
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


    //*  -----  configuración  -----

    /** @type {number} - Activa el cambio cuando el div está cerca de entrar en viewport */
    const MARGEN_ACTIVACION = 80;

    /** @type {number} - Multiplicador de desplazamiento horizontal (parallax) */
    const FACTOR_X = 0.14;

    /** @type {number} - Multiplicador de desplazamiento vertical (parallax) */
    const FACTOR_Y = 0.1;

    /** @type {number} - Límite máximo horizontal en px */
    const MAX_X = 140;

    /** @type {number} - Límite máximo vertical en px */
    const MAX_Y = 100;

    /**  - Representa el objeto jQuery de la ventana */
    const $window = $(window);


    /**
     * -----------------------------------
     * -----  `actualizarParalax()`  -----
     * -----------------------------------
     * - Calcula el efecto de paralax y actualiza el estilo del div según su posición en el viewport.
     */

    const actualizarParalax = () => {
        
        /** - Representa el elemento HTML del div */
        const miDivElement = $miDiv.get(0);

        //  -----  Validar que se obtuvo el elemento HTML del div  -----
        if (!miDivElement) {
            console.error('No se pudo obtener el elemento HTML de #miDiv.');
            return;
        }

        /** - Representa las dimensiones y posición del div en el viewport */
        const rectDiv = miDivElement.getBoundingClientRect();
        
        /** - Representa la altura de la ventana del navegador */
        const altoVentana = window.innerHeight || $window.height() || 0;
        
        /** - Determina si el div está cerca de entrar en el viewport según el margen de activación */
        const esVisible = rectDiv.top <= (altoVentana - MARGEN_ACTIVACION);


        //  -----  Si el div no es visible, resetea estilos y texto, y sale de la función  -----    
        if (!esVisible) {
            
            //  -----  Resetea el estilo del div a su estado inicial  -----
            $miDiv
                .css({
                    "background-color": "#ddd",
                    "transform": "translate(0px, 0px)"
                })
                .text("x: 0px | y: 0px");

            return;
        }


        /** - Calcula el avance del div dentro del viewport */
        const avance = Math.max(0, (altoVentana - MARGEN_ACTIVACION) - rectDiv.top);
        
        /** - Calcula el desplazamiento horizontal del div */
        const x = Math.min(MAX_X, Math.max(0, avance * FACTOR_X));
        
        /** - Calcula el desplazamiento vertical del div */
        const y = Math.min(MAX_Y, Math.max(0, avance * FACTOR_Y));

        //  -----  Aplica el estilo de paralax al div y actualiza el texto con la posición actual  -----
        $miDiv
            .css({
                "background-color": "red",
                "transform": `translate(${x.toFixed(1)}px, ${(-y).toFixed(1)}px)`
            })
            .text(`x: ${Math.round(x)}px | y: -${Math.round(y)}px`);
    };


    //  -----  Detecta el scroll y resize para actualizar el efecto de paralax en tiempo real  -----
    $window.on("scroll", actualizarParalax);
    
    //  -----  También detecta cambios de tamaño de la ventana para recalcular el efecto de paralax  -----
    $window.on("resize", actualizarParalax);
    
    //  -----  Captura scroll en cualquier contenedor desplazable del layout SPA  -----
    document.addEventListener("scroll", actualizarParalax, true);
    
    //  -----  Inicializa el efecto de paralax al cargar la página  -----
    actualizarParalax();


})(jQuery);
