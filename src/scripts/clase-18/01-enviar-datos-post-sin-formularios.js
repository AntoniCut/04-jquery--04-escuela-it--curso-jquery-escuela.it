/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /01-enviar-datos-post-sin-formularios.js  --  /src/scripts/clase-18/01-enviar-datos-post-sin-formularios.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-enviar-datos-post-sin-formularios.js  -----');
    console.log('\n');


    /*
        *  ------------------------
        *  -----  Constantes  -----
        *  ------------------------
    */

    /** @type {string} - `URL base para los servicios` */
    const URL_BASE = '/escuelait/curso-jquery-escuelait/app/services/clase-18';

    /** @type {string} - `Endpoint del servicio` */
    const ENDPOINT = 'pagina.php';


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLAnchorElement>} - `Enlace para enviar datos` */
    const $enlace = $('#enlace');

    /** @type {JQuery<HTMLDivElement>} - `Contenedor de salida` */
    const $salida = $('#salida');


    /*
        *  -----------------------
        *  -----  Funciones  -----
        *  -----------------------
    */

    /**
     * --------------------------------------
     * -----  `construirUrl(endpoint)`  -----
     * --------------------------------------
     * - Construye la URL completa del servicio
     * @param {string} endpoint - Nombre del archivo PHP
     * @returns {string} - URL completa del servicio
     */
    
    const construirUrl = (endpoint) => `${URL_BASE}/${endpoint}`;


    /**
     * ------------------------------
     * -----  `obtenerDatos()`  -----
     * ------------------------------
     * - Datos a enviar en la peticion POST
     * @returns {{ dato1: string, dato2: string }} - Objeto con los datos
     */
    
    const obtenerDatos = () => ({
        dato1: "valor del dato 1",
        dato2: "valor del dato 2"
    });


    /**
     * -------------------------------------------
     * -----  `manejarRespuesta(respuesta)`  -----
     * -------------------------------------------
     * - Maneja la respuesta exitosa del servidor
     * @param {string} respuesta - HTML de respuesta del servidor
     */
    
    const manejarRespuesta = (respuesta) => {
        ocultarLoading();
        $salida.html(respuesta);
    };


    /**
     * --------------------------------
     * -----  `mostrarLoading()`  -----
     * --------------------------------
     * - Muestra el indicador de carga en el contenedor de salida
     */
    const mostrarLoading = () => {
        $('#loading').show();
        $('.salida__info').hide();
    };


    /**
     * --------------------------------
     * -----  `ocultarLoading()`  -----
     * --------------------------------
     * - Oculta el indicador de carga
     */
    const ocultarLoading = () => {
        $('#loading').hide();
    };


    /**
     * ---------------------------------
     * -----  `enviarDatosPost()`  -----
     * ---------------------------------
     * - Envia datos al servidor mediante POST sin formulario
     */
    
    const enviarDatosPost = () => {
        
        /** -----  `URL del servicio`  ----- */
        const url = construirUrl(ENDPOINT);
        
        /** -----  `Datos a enviar`  ----- */
        const datos = obtenerDatos();

        //  -----  Mostrar loading antes de enviar  -----
        mostrarLoading();

        $.post(url, datos, manejarRespuesta);
    };


    /*
        *  -----------------------------
        *  -----  Event Listeners  -----
        *  -----------------------------
    */

    //  -----  Click en el enlace para enviar datos  -----
    $enlace.on('click', (e) => {
        e.preventDefault();
        enviarDatosPost();
    });


    //  -----  Ocultar loading al cargar la página  -----
    ocultarLoading();


})(jQuery);
