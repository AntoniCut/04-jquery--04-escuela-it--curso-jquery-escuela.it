/*
    *  ---------------------------------------------------------------  *
    *  -----  /00-json.js  --  /src/scripts/clase-15/00-json.js  -----  *
    *  ---------------------------------------------------------------  *
*/


import { bebidas } from './bebidas.js';


/** @typedef {import('./bebidas.js').BebidasJsonData} BebidasJson */


(($) => {


    console.log('\n');
    console.warn('-----  00-json.js  -----');
    console.log('\n');



    //  -----  Referencias al HTML  -----

    /** @type {JQuery<HTMLHeadingElement>} - `nombre de la bebida` */
    const $bebida = $('#bebida');

    /** @type {JQuery<HTMLSpanElement>} - `fecha de inicio de producción` */
    const $inicio = $('#inicio');

    /** @type {JQuery<HTMLUListElement>} - `Lista de ingredientes` */
    const $ingredientes = $('#ingredientes');

    /** @type {JQuery<HTMLTableSectionElement>} - `Tabla de marcas` */
    const $tablaMarcas = $('#tablaMarcas');

    //  -----  variables  -----
    /** @type {string[]} - `Array para almacenar los ingredientes` */
    const arrIngredientes = [];

    /** @type {string[]} - `Array para almacenar las marcas` */
    const arrMarcas = [];


    /**
     * @param {BebidasJson} bebidas
     * @returns {void}
     */
    const renderizarBebidas = (bebidas) => {


        //  -----  encabezados  -----
        $bebida.text(`${bebidas.bebida}`);
        $inicio.text(bebidas.inicioProduccion);


        //  -----  Ingredientes  -----
        bebidas.ingredientes.forEach(ing => arrIngredientes.push(`<li> - ${ing} </li>`));
        $ingredientes.empty().append(arrIngredientes.join(''));


        //  -----  Marcas  -----
        bebidas.marcas.forEach(marca => {

            arrMarcas.push(`
                <tr>
                    <td>${marca.nombre}</td>
                    <td>${marca.tipo}</td>
                    <td>${marca.procedencia}</td>
                </tr>
            `);
        });

        $tablaMarcas.empty().append(arrMarcas.join(''));

    };


    renderizarBebidas(bebidas);




})(jQuery);

