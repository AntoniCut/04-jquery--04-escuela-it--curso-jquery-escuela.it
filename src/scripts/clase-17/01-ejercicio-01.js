/*
    *  -------------------------------------------------------------------------------  *
    *  -----  /01-ejercicio-01.js  --  /src/scripts/clase-17/01-ejercicio-01.js  -----  *
    *  -------------------------------------------------------------------------------  *
*/



(($) => {


    console.log('\n');
    console.warn('-----  01-ejercicio-01.js  -----');
    console.log('\n');


    /*
        *  ---------------------------------
        *  -----  Referencias al HTML  -----
        *  ---------------------------------
    */

    /** @type {JQuery<HTMLDivElement>} - Contenedor de la lista de ciudades */
    const $listaCiudades = $("#listaCiudades");

    /** @type {JQuery<HTMLUListElement>} - Lista de ciudades */
    const $lista = $("<ul>");


    /*
        *  -----------------------
        *  -----  Variables  -----
        *  -----------------------
    */

    /** @type {string[]} - Array de ciudades */
    const ciudades = ["Madrid", "Barcelona", "Valencia"];

    /** @type {number} - Número de ciudades */
    const numCiudades = ciudades.length;

    /** @type {DocumentFragment} - Fragmento de documento */
    const fragment = document.createDocumentFragment();


    /*
        *  ----------------------------------
        *  -----  Lógica del ejercicio  -----
        *  ----------------------------------
    */

    //  -----  Crear la lista de ciudades  -----
    for (let i = 0; i < numCiudades; i++) {
        
        /** @type {JQuery<HTMLLIElement>} - Elemento de lista */
        const $li = $("<li>");
        
        $li.text(ciudades[i]);
        
        fragment.appendChild($li[0]);
    }

    //  -----  Agregar el fragmento a la lista  -----
    $lista[0].appendChild(fragment);

    //  -----  Agregar la lista al contenedor  -----
    $listaCiudades.append($lista);



})(jQuery);
