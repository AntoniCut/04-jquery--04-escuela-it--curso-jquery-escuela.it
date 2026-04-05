/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /06-ejercicio-06-date.js  --  /src/scripts/clase-09/06-ejercicio-06-date.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  06-ejercicio-06-date.js  -----');
    console.log('\n');



    //  -----  Referencias a elementos del DOM  -----

    /** @type {JQuery<HTMLParagraphElement>} - `Colección de todos los párrafos dentro de .contenido` */
    const $parrafos = $('.contenido p');

    /** @type {JQuery<HTMLDivElement>} - `Elemento donde se mostrará el resultado` */
    const $result = $('#result');



    /**
     * ---------------------------------
     * -----  timestampSegundos()  -----
     * ---------------------------------
     * @function  
     * @description - `Función que devuelve el timestamp actual en segundos utilizando el objeto Date.`
     * @returns {number} - `Devuelve el timestamp actual en segundos.`
     */

    const timestampSegundos = () => {

        /** @type {Date} - `objeto Date que representa el instante actual` */
        const date = new Date();

        return Math.round(date.getTime() / 1000);
    }  



    /** @type {number} - `se guarda el Instante actual en segundos desde la carga de la página` */
    const instanteInicio = timestampSegundos();

    console.log('\ninstante inicio => ', instanteInicio);



    //  -----  asignamos el evento click a cada párrafo  -----
    $parrafos.on("click", function () {


        /** @type {number} - `Instante actual en segundos desde el ultimo click` */
        const ahora = timestampSegundos();

        console.log('ahora => ', ahora);


        /** @type {JQuery<HTMLParagraphElement>} - `Párrafo clicado convertido en objeto jQuery` */
        const $parrafoPulsado = $(this);


        /** @type {number} - `Número de párrafo pulsado` */
        const numParrafo = $parrafos.index(this) + 1;


        /** @type {number | undefined} - `Instante del último clic almacenado en .data("time")` */
        const instanteUltimoClic = $parrafoPulsado.data("time");



        //  -----  Click por primera vez en el párrafo  -----
        if (instanteUltimoClic === undefined) {


            /** @type {number} - `Número de segundos transcurridos desde el inicio` */
            const segundosDesdeInicio = ahora - instanteInicio;

            console.log(
                '\nsegundos desde inicio => ', segundosDesdeInicio,
                '\nNum párrafo => ', numParrafo);

            $result.html(`
                <h3>
                    Es la primera vez que haces click en el párrafo ${numParrafo}
                    <br>
                    Han pasado ${segundosDesdeInicio} segundos desde que inició la página
                </h3>
            `);

        }


        //  -----  Clicks posteriores al primero  -----
        else {


            /** @type {number} - `Número de segundos transcurridos desde el último clic`     */
            const numSegundos = ahora - instanteUltimoClic;

            console.log(
                '\nsegundos desde último clic => ', numSegundos,
                '\nNum párrafo => ', numParrafo
            );

            $result.html(`
                <h3>
                    El número de segundos desde el último clic es ${numSegundos}
                    <br>
                    y el número de párrafo es ${numParrafo}
                </h3>
            `);

        }


        //  -----  Actualizamos el tiempo del último click  -----
        $parrafoPulsado.data("time", ahora);

    });


})(jQuery);
