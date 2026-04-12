/*
    *  ---------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /05-plugin-ease-animate-colors-options.js  --  /src/scripts/clase-13/05-plugin-ease-animate-colors-options.js  -----  *
    *  ---------------------------------------------------------------------------------------------------------------------------  *
*/


(($) => {


    console.log('\n');
    console.warn('-----  05-plugin-ease-animate-colors-options.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLSelectElement>} - `select` de easing` */
    const $easingSelect = $('.main__section-practica #easingSelect');

    /** @type {JQuery<HTMLAnchorElement>} - `a` de animación */
    const $linkAnim = $('.main__section-practica #linkAnim');

    /** @type {JQuery<HTMLDivElement>} - `div` de la capa a animar */
    const $capa = $('.main__section-practica #capa');


    /**  `-----  Estilos iniciales de mi capa  -----` */
    const originalStyles = {
        width: $capa.css('width'),
        height: $capa.css('height'),
        marginTop: $capa.css('margin-top'),
        padding: $capa.css('padding'),
        display: $capa.css('display'),
        justifyContent: $capa.css('justify-content'),
        alignItems: $capa.css('align-items'),
        color: $capa.css('color'),
        backgroundColor: $capa.css('background-color')
    };


    //  -------------------------------------
    //  ----------  jQuery Easing  ----------
    //  -------------------------------------

    //  ----------  Easing  -------------------------------------------------------------------------------------------------
    //  -----  linear           swing            easeInQuad          easeOutQuad     easeInOutQuad                      -----
    //  -----  easeInCubic      easeOutCubic     easeInOutCubic      easeInQuart     easeOutQuart      easeInOutQuart   -----  
    //  -----  easeInSine       easeOutSine      easeInOutSine       easeInExpo      easeOutExpo       easeInOutExpo    -----
    //  -----  easeInQuint      easeOutQuint     easeInOutQuint      easeInCirc      easeOutCirc       easeInOutCirc    -----
    //  -----  easeInElastic    easeOutElastic   easeInOutElastic    easeInBack      easeOutBack       easeInOutBack    -----
    //  -----  easeInBounce     easeInOutBounce  easeOutBounce                                                          -----                                                                                  -----
    //-----------------------------------------------------------------------------------------------------------------------


    //  -----  Animación con plugin Easing  -----
    $linkAnim.on("click", function (e) {

        e.preventDefault();

        /** `-----  Valor seleccionado del select de easing  -----  ` */
        const easingRawValue = $easingSelect.val();

        /** `-----  Valor final del easing  -----  ` */
        const easingValue = Array.isArray(easingRawValue)
            ? easingRawValue[0] ?? 'swing'
            : (typeof easingRawValue === 'string' ? easingRawValue : 'swing');

        /** `-----  Nombre final del easing  -----  ` */
        const easingName = typeof $.easing[easingValue] === 'function' ? easingValue : 'swing';

        console.log('easingValue => ', easingName);

        $capa.text(easingName);

        $capa.animate({

            width: "50rem",
            height: "25rem",
            backgroundColor: "#000",
            color: "gold",


        }, {

            duration: 10000,

            easing: easingName,

            specialEasing: {
                width: easingName,
                height: easingName,
                backgroundColor: easingName,
                color: easingName
            },

            complete: function () {

                $capa
                    .css(originalStyles)
                    .text('Esto se va a animar con el pluging Easing + animate colors + opciones de animate');

                alert('Terminó!!!');
            },

            step: function () {
                
                const currentWidth = $capa.width() ?? 0;
                $capa.text(currentWidth);
            }
            
        });

    });





})(jQuery);
