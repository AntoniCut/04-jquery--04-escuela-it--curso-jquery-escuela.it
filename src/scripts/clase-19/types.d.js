/*
    *  ---------------------------------------------------------------  *
    *  -----  /types.d.js  --  /src/scripts/clase-19/types.d.js  -----  *
    *  ---------------------------------------------------------------  *
*/


/*
    *  Tipos de datos compartidos por los scripts de la clase 19.
    *  Para usarlos desde un script de esta carpeta añade al inicio del archivo:
    *
    *  /// <reference path="./types.d.js" />
*/



/*
    *  -------------------------------------------------------------------
    *  -----  Registro de eventos: mensaje + tipo  (01, 02, 05, 06)  -----
    *  -------------------------------------------------------------------
*/


/**
 * ----------------------------------------
 * -----  `TipoEntradaLogDelegacion`  -----
 * ----------------------------------------
 * @typedef {'directo' | 'delegado' | 'sistema'} TipoEntradaLogDelegacion
 * - Tipos de entrada del registro de `01-delegacion-eventos.js`
 */


/**
 * ----------------------------------------
 * -----  `TipoEntradaLogParametros`  -----
 * ----------------------------------------
 * @typedef {'on' | 'data' | 'info'} TipoEntradaLogParametros
 * - Tipos de entrada del registro de `02-pasar-parametros-a-eventos.js`
 */


/**
 * ---------------------------------------
 * -----  `TipoEntradaLogDespertar`  -----
 * ---------------------------------------
 * @typedef {'manual' | 'trigger' | 'info'} TipoEntradaLogDespertar
 * - Tipos de entrada del registro de `05-eventos-personalizados-1.js`
 */


/**
 * -------------------------------------
 * -----  `TipoEntradaLogTermine`  -----
 * -------------------------------------
 * @typedef {'handler1' | 'handler2' | 'handler3' | 'info'} TipoEntradaLogTermine
 * - Tipos de entrada del registro de `06-eventos-personalizados-2.js`
 */


/**
 * ---------------------------
 * -----  `EntradaLog`  -----
 * ---------------------------
 * - Entrada generica del registro de eventos (mensaje + tipo)
 * - El parametro `T` concreta la union de tipos de cada script
 * @template {string} T
 * @typedef {object} EntradaLog
 * @property {string} mensaje - `Descripcion de la accion`
 * @property {T} tipo - `Tipo de entrada en el registro`
 */



/*
    *  -------------------------------------------------------
    *  -----  Registro de disparos de eventos  (03, 04)  -----
    *  -------------------------------------------------------
*/


/**
 * ----------------------------
 * -----  `OrigenEvento`  -----
 * ----------------------------
 * @typedef {'manual' | 'trigger'} OrigenEvento
 * - Origen del disparo en `03-disparar-eventos.js`
 */


/**
 * -------------------------------
 * -----  `OrigenManejador`  -----
 * -------------------------------
 * @typedef {OrigenEvento | 'triggerHandler'} OrigenManejador
 * - Origen del disparo en `04-disparar-manejadores.js`
 */


/**
 * ---------------------------------
 * -----  `EntradaLogDisparo`  -----
 * ---------------------------------
 * - Entrada generica del registro de disparos (elemento + evento + manejador + origen)
 * - El parametro `T` concreta el origen del disparo de cada script
 * @template {string} T
 * @typedef {object} EntradaLogDisparo
 * @property {string} elemento - `Nombre del elemento objetivo`
 * @property {string} evento - `Tipo de evento disparado`
 * @property {string} manejador - `Descripcion del manejador ejecutado`
 * @property {T} origen - `Origen del disparo`
 */


/*
    *  ------------------------------------------------
    *  -----  Parametros pasados a eventos  (02)  -----
    *  ------------------------------------------------
*/


/**
 * -------------------------------
 * -----  `SaludarEventData`  -----
 * -------------------------------
 * @typedef {object} SaludarEventData
 * @property {string} nombre - `Nombre de la persona`
 * @property {string} periodo - `Periodo del dia`
 */
