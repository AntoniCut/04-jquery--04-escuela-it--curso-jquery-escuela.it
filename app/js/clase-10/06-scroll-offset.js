/*
    *  ---------------------------------------------------------------------------------  *
    *  -----  /06-scroll-offset.js  --  /src/scripts/clase-10/06-scroll-offset.js  -----  *
    *  ---------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  06-scroll-offset.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLDivElement>} - `Documento HTML y BODY` */
    const $htmlBody = $('html, body');

    /** @type {JQuery<HTMLElement>} - `Layout principal` */
    const $layout = $('#layout');

    /** @type {JQuery<HTMLDivElement>} - `Div para mostrar información` */
    const $output = $("#output");

    /** @type {JQuery<HTMLButtonElement>} - `botón para animar el div capa` */
    const $btnCapa = $("#btnCapa");

    /** @type {JQuery<HTMLButtonElement>} - `botón para hacer scroll hasta el párrafo` */
    const $btnScroll = $("#btnScroll");

    /** @type {JQuery<HTMLButtonElement>} - `botón para animar el scroll hasta el párrafo` */
    const $btnScrollAnimation = $("#btnScrollAnimation");

    /** @type {JQuery<HTMLParagraphElement>} - `Párrafo para mostrar el scroll actual de la ventana` */
    const $parrafo = $("#parrafo");


    /** @type {JQuery<HTMLDivElement>} - `Div capa para animar` */
    const $capa = $(".capa");

    /** @type {JQuery<HTMLDivElement>} - `Div children capa  dentro de la capa` */
    const $childrenCapa = $("#childrenCapa");


    if( !$layout || 
        !$output || 
        !$btnCapa || 
        !$btnScroll || 
        !$btnScrollAnimation || 
        !$parrafo || 
        !$capa || 
        !$childrenCapa) {
        throw new Error("No se encontraron los elementos necesarios en el HTML. Verifica que existan los elementos con los IDs y clases correspondientes.");
    }


    //  -----  Mostrar información inicial de childrenCapa (offset y position) por consola y en el div output  -----
    
    console.log('ChildrenCapa offset inicial   => ', $childrenCapa.offset());
    console.log('ChildrenCapa position inicial => ', $childrenCapa.position());

    $output.html(`
        ChildrenCapa offset inicial => top: ${$childrenCapa?.offset()?.top} - left: ${$childrenCapa?.offset()?.left}
        <br>
        ChildrenCapa position inicial => top: ${$childrenCapa?.position()?.top} - left: ${$childrenCapa?.position()?.left}
    `);


    //  -----  al hacer click en el botón de animar capa,             -----
    //  -----  anima la capa y mostrar la posición offset y position  -----
    //  -----  antes y después de la animación                        -----
    $btnCapa.on("click", function () {

        // -----  Animar la capa a una nueva posición (top: 100px, left: 300px) en 10 segundos  -----
        $capa.animate({

            top: "100px",
            left: "300px"

        }, 10000, function () {

            // -----  Mostrar la posición offset y position de childrenCapa después de la animación  -----
            console.log('\nChildrenCapa offset animación terminada => ', $childrenCapa.offset());
            console.log('ChildrenCapa position animación terminada =>', $childrenCapa.position());

            $output.html(`
                ChildrenCapa offset animación terminada => ${JSON.stringify($childrenCapa.offset())}
                <br>
                ChildrenCapa position animación terminada => ${JSON.stringify($childrenCapa.position())}
            `);

        });

        // -----  Mostrar la posición offset y position de childrenCapa antes de la animación  -----
        console.log('ChildrenCapa offset antes de la animación => ', $childrenCapa.offset());
        console.log('ChildrenCapa position antes de la animación => ', $childrenCapa.position());
        
        $output.html(`
            ChildrenCapa offset antes de la animación => ${JSON.stringify($childrenCapa.offset())}
            <br>
            ChildrenCapa position antes de la animación => ${JSON.stringify($childrenCapa.position())}
        `);

    });



    //  -----  al hacer click en el párrafo, mostrar el scroll actual de la ventana  -----  
    $parrafo.on("click", function () {

        /** @type {number} - `Scroll actual de la ventana` */
        const scrollActual = $(window).scrollTop() ?? 0;

        // -----  Mostrar el scroll actual de la ventana en consola y en el div output  -----
        console.log("\nEl scroll actual de la ventana es: " + scrollActual);
        $output.html("El scroll actual de la ventana es: " + scrollActual);

    });


    // --- Scroll instantáneo hasta el párrafo ---
    $btnScroll.on("click", function () {
        
        /** @type {number} - `Posición del párrafo` */
        const posicionParrafo = Math.max($parrafo?.offset()?.top ?? 0, 0);
        
        $htmlBody.scrollTop(posicionParrafo);

    });


    // --- Scroll animado hasta el párrafo ---
    $btnScrollAnimation.on("click", function () {
        
        /** @type {number} - `Offset del párrafo` */
        const offsetParrafo = $parrafo?.offset()?.top ?? 0;
        
        /** @type {number} - `Offset de la layout principal` */
        const offsetContenedor = $layout?.offset()?.top ?? 0;
        
        /** @type {number} - `Posición del párrafo` */
        const posicionParrafo = Math.max(offsetParrafo - offsetContenedor, 0);

        // -----  Animar el scroll hasta la posición del párrafo en 2 segundos  -----
        $htmlBody.animate({
            scrollTop: posicionParrafo
        }, 2000);

    });
    



})(jQuery);
