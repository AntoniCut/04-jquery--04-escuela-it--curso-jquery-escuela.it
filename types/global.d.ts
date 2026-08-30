/*
    *  -------------------------------------------------  *
    *  -----  global.d.ts  --  /types/global.d.ts  -----  *
    *  -------------------------------------------------  *
*/

//  -----  Referencias a otros archivos de tipos  -----  //
/// <reference path="./dom.d.ts" />


//  -----  Declaración de tipos globales  -----  //
declare global {

    interface HandlebarsHelperOptions {
        fn: (context: object) => string;
    }

    interface HandlebarsStatic {
        compile: (source: string) => (context: object) => string;
        registerHelper: (
            name: string,
            fn: (context: unknown, options: HandlebarsHelperOptions) => unknown
        ) => void;
        SafeString: new (html: string) => { toString(): string };
    }

    const Handlebars: HandlebarsStatic;
    
    interface Window {
        __spaFirstRouteLoaded?: boolean;
        $: JQueryStatic;
        jQuery: JQueryStatic;
        Handlebars: HandlebarsStatic;
    }
       
}

//  -----  Exportación de tipos globales  -----  //
export {};
