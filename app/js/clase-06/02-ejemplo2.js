/*
    *  -----------------------------------------------------------------------  *
    *  -----  /02-ejemplo2.js  --  /src/scripts/clase-06/02-ejemplo2.js  -----  *
    *  -----------------------------------------------------------------------  *
*/

(($) => {


    console.log('\n');
    console.warn('-----  02-ejemplo2.js  -----');
    console.log('\n');



    $(function () {


        //  ---------------------------------
        //  -----  Referencias al HTML  -----
        //  ---------------------------------
        
        /** @type {JQuery<HTMLParagraphElement>} - `Todos los párrafos <p> dentro de .main__section--practica`  */
        const $p = $('.main__section-practica p');

        /** @type {JQuery<HTMLLIElement>} - `elementos li dentro de la lista <ul> con id="lista"`  */
        const $elemLis = $('#lista li');

         /** @type {JQuery<HTMLDivElement>} - `Muestra los textos de los párrafos` */
        const $info1 = $('#info1');
        
        /** @type {JQuery<HTMLDivElement>} - `Muestra los textos de los elementos de la lista` */
        const $info2 = $('#info2');
       


        //  -----------------------------------------------------------------------
        //  -----  recorrer todos los párrafos con .each() y función callback -----
        //  -----------------------------------------------------------------------

        //  -----  mostrar todos los párrafos en consola -----
        console.log('$p => ', $p.text(), '\n\n');


        /** @type {string[]} - `Arreglo para almacenar los textos de los párrafos` */
        let arrElemP = [];
        
        //  -----  recorrer todos los párrafos -----
        $p.each((index, elem) => {

            //  -----  envolver el elemento nativo en un objeto jQuery  -----
            const $elem = $(elem);

            //  -----  mostrar en consola el texto de cada párrafo  -----
            console.log(`Párrafo ${index + 1} - ${$elem.text()}`);
                    
            //  -----  agregar el texto de cada párrafo al arreglo arrElem  -----
            arrElemP.push(`
                <h3> 
                    <b> Texto del párrafo ${(index + 1)} </b>
                    <br> 
                    ${$elem.text()} 
                </h3>
            `);


        });

        $info1.append(arrElemP.join(''));



        //  -----------------------------------------------------------------
        //  -----  recorrer todos los elementos de la lista con .each() -----
        //  -----  y una función que se llame recooridoLista()          -----
        //  -----------------------------------------------------------------
        

        /** @type {string[]} - `Arreglo para almacenar los textos de los elementos de la lista` */
        let arrElemLis = [];

         //  -----  mostrar todos los elementos de la lista en consola -----
        console.log('$elemLis =>', $elemLis.text());
        
        /**
         * - `Función para recorrer los elementos de la lista`-
         * @param {number} index - índice del elemento en la lista
         * @param {HTMLElement} elem - elemento nativo de la lista
         */

        const recorridoLista = (index, elem) => {

            const $elem = $(elem);

            console.log(`Elemento de la lista ${index + 1} - ${$elem.text()}`);

             //  -----  eliminar el segundo elemento de la lista  ----- 
           if ( $elem.text().trim() === "elemento de la lista 2") {
               $elem.remove();
                return; // salir de la función para no agregar el texto al arreglo
           }

           //  -----  agregar el texto de cada elemento de la lista al arreglo arrElemLis  -----
            arrElemLis.push(`
                <h3> 
                    <b> Texto del elemento ${(index + 1)} de la lista </b>
                    <br> 
                    ${$elem.text()} 
                </h3>
            `);

        }

        //  -----  recorrer todos los elementos de la lista -----
        $elemLis.each(recorridoLista);

        //  -----  agregar los textos de los elementos de la lista al contenedor #info2 -----
        $info2.append(arrElemLis.join(''));

    });


})(jQuery);
