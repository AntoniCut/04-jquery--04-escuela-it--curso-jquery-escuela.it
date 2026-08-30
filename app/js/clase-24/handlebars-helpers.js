/*
    *  -------------------------------------------------------------------------------------  *
    *  -----  /handlebars-helpers.js  --  /src/scripts/clase-24/handlebars-helpers.js  -----  *
    *  -------------------------------------------------------------------------------------  *
*/


/// <reference path="../../../types/global.d.ts" />


(($) => {


    console.log('\n');
    console.warn('-----  handlebars-helpers.js  -----');
    console.log('\n');


    Handlebars.registerHelper('toH1', (text) => {

        return new Handlebars.SafeString(`<h1>${String(text ?? '')}</h1>`);
    });


    Handlebars.registerHelper('toUl', (items, options) => {

        let salida = '<ul>';

        //  -----  si no hay items, devolver lista vacia  -----
        if (!Array.isArray(items)) {
            return new Handlebars.SafeString(`${salida}</ul>`);
        }

        for (const item of items) {
            salida += `<li>${options.fn(item)}</li>`;
        }

        salida += '</ul>';

        return new Handlebars.SafeString(salida);
    });


})(jQuery);
