/*
    *  -------------------------------------------------  *
    *  -----  global.d.ts  --  /types/global.d.ts  -----  *
    *  -------------------------------------------------  *
*/

//  -----  Referencias a otros archivos de tipos  -----  //
/// <reference path="./dom.d.ts" />


//  -----  Declaración de tipos globales  -----  //
declare global {
    
    interface Window {
        __spaFirstRouteLoaded?: boolean;
        $: JQueryStatic;
        jQuery: JQueryStatic;
    }
       
}

//  -----  Exportación de tipos globales  -----  //
export {};
