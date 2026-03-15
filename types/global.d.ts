/*
    *  -------------------------------------------------  *
    *  -----  global.d.ts  --  /types/global.d.ts  -----  *
    *  -------------------------------------------------  *
*/

//  -----  Referencias a otros archivos de tipos  -----  //
/// <reference path="./dom.d.ts" />


//  -----  Declaración de tipos globales  -----  //
declare global {
    type ConfigOptionsSPA = import("./config-options-spa-types.js").ConfigOptionsSPA;
    type Route = import("./route-types.js").Route;
}


//  -----  Exportación de tipos globales  -----  //
export {};
