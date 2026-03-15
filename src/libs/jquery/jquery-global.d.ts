/*
    *  -------------------------------------------------------------------------  *
    *  -----  jquery.global.d.ts  --  /src/libs/jquery/jquery-global.d.ts  -----  *
    *  -------------------------------------------------------------------------  *
*/


import type { JQueryStatic } from "jquery";


declare global {

    interface Window {
        jQuery: JQueryStatic;
    }
}

export {};
