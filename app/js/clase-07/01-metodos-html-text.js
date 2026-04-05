/*
    *  -----------------------------------------------------------------------------------------  *
    *  -----  /01-metodos-html-text.js  --  /src/scripts/clase-07/01-metodos-html-text.js  -----  *
    *  -----------------------------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  01-metodos-html-text.js  -----');
    console.log('\n');


    const $btnHtml = $('#btnHtml');
    const $btnText = $('#btnText');
    
    const $info = $('#info');
    
    const $description = $('#description');
    const $output = $('#output');


    $btnHtml.on('click', () => {
        
        //  -----  Obtener el contenido HTML del elemento $description  -----

        const info = 'Renderizado con el metodo .html()';
        $info.html(info);

        const output = $description.html();

        $output
            .html(output)
            .css('opacity', '1');
        
    });


    $btnText.on('click', () => {
        
        //  -----  Obtener el contenido de texto del elemento $description  -----
        const info = 'Renderizado con el metodo .text()';
        $info.html(info);

        const output = $description.text();

        $output
            .text(output)
            .css('opacity', '1');

    });
   

       

})(jQuery);
