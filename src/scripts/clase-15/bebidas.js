/*
    *  ---------------------------------------------------------------  *
    *  -----  /bebidas.js  --  /src/scripts/clase-15/bebidas.js  -----  *
    *  ---------------------------------------------------------------  *
*/


/**
 * @typedef {object} MarcaBebidaData
 * @property {string} nombre - `Nombre comercial de la marca`
 * @property {string} tipo - `Tipo o estilo de bebida`
 * @property {string} procedencia - `Lugar de procedencia`
 */


/**
 * @typedef {object} BebidasJsonData
 * @property {string} bebida - `Nombre de la bebida`
 * @property {string} inicioProduccion - `Fecha o periodo de inicio de producción`
 * @property {string[]} ingredientes - `Listado de ingredientes`
 * @property {MarcaBebidaData[]} marcas - `Marcas asociadas a la bebida`
 */


/** @type {BebidasJsonData} - `Objeto JSON que representa la información de las bebidas` */
export const bebidas = {

    "bebida": "Cerveza",
    "inicioProduccion": "3500 a.c.",

    "ingredientes": [
        "lupulo",
        "cebada",
        "agua",
        "trigo",
        "malta"
    ],

    "marcas": [

        {
            "nombre": "San Miguel",
            "tipo": "pilsen",
            "procedencia": "España"
        },

        {
            "nombre": "Kölsch",
            "tipo": "Estilo Alemán",
            "procedencia": "Colonia"
        },

        {
            "nombre": "Guinness",
            "tipo": "Negra",
            "procedencia": "Irlanda"
        },

        {
            "nombre": "Mahou",
            "tipo": "Lager",
            "procedencia": "España"
        },

        {
            "nombre": "Heineken",
            "tipo": "Lager",
            "procedencia": "Países Bajos"
        },

        {
            "nombre": "Corona Extra",
            "tipo": "Pale Lager",
            "procedencia": "México"
        },

        {
            "nombre": "Stella Artois",
            "tipo": "Pilsner",
            "procedencia": "Bélgica"
        },

        {
            "nombre": "Pilsner Urquell",
            "tipo": "Pilsner",
            "procedencia": "República Checa"
        }
    ]

};
