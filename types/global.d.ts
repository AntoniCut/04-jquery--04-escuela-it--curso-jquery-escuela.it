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
    type RouteComponents = import("./route-types.js").RouteComponents;
    type RouteStyle = import("./route-types.js").RouteStyle;
    type RouteScript = import("./route-types.js").RouteScript;
    
}


//  -----  Exportación de tipos globales  -----  //
export {};
