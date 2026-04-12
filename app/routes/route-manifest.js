/*
    *  -------------------------------------------------------------------  *
    *  -----  /route-manifest.js  --  /src/routes/route-manifest.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/**
 * - Manifiesto ligero de rutas: solo id, path y nombre de archivo (sin imports).
 * - Se usa para lazy loading: el modulo de cada ruta se importa dinamicamente bajo demanda.
 * @type {import('../../types/index.js').RouteManifest[]}
 */
export const routeManifest = [

    { id: 'home', path: '', file: 'route-home' },
    
    { id: 'clase01', path: 'clase01-que-es-jquery', file: 'route-clase01' },
    { id: 'clase02', path: 'clase02-utilizar-jquery-en-la-actualidad', file: 'route-clase02' },
    { id: 'clase03', path: 'clase03-practica-primeros-pasos-con-jquery', file: 'route-clase03' },
    { id: 'clase04', path: 'clase04-como-se-organiza-el-curso', file: 'route-clase04' },
    { id: 'clase05', path: 'clase05-introduccion-a-jquery', file: 'route-clase05' },
    { id: 'clase06', path: 'clase06-primeros-pasos', file: 'route-clase06' },
    { id: 'clase06Ejemplo1', path: 'clase06-primeros-pasos/01-ejemplo1', file: 'route-clase06-ejemplo1' },
    { id: 'clase06Ejemplo2', path: 'clase06-primeros-pasos/02-ejemplo2', file: 'route-clase06-ejemplo2' },
    { id: 'clase07', path: 'clase07-manipulacion-basica-de-elementos', file: 'route-clase07' },
    { id: 'clase07AttrProp', path: 'clase07-manipulacion-basica-de-elementos/02-metodos-attr-prop', file: 'route-clase07-attr-prop' },
    { id: 'clase07DataRemoveData', path: 'clase07-manipulacion-basica-de-elementos/03-metodos-data-removedata', file: 'route-clase07-data-remove-data' },
    { id: 'clase07Each', path: 'clase07-manipulacion-basica-de-elementos/04-metodo-each-recorrer-elementos', file: 'route-clase07-each' },
    { id: 'clase07HtmlText', path: 'clase07-manipulacion-basica-de-elementos/01-metodos-html-text', file: 'route-clase07-html-text' },
    { id: 'clase08', path: 'clase08-selectores-jquery-traversing', file: 'route-clase08' },
    { id: 'clase08Contexto', path: 'clase08-selectores-jquery-traversing/04-partir-de-un-contexto', file: 'route-clase08-contexto' },
    { id: 'clase08ProbarSelectores', path: 'clase08-selectores-jquery-traversing/02-probar-selectores', file: 'route-clase08-probar-selectores' },
    { id: 'clase08SelectoresJerarquia', path: 'clase08-selectores-jquery-traversing/01-selectores-jerarquia', file: 'route-clase08-selectores-jerarquia' },
    { id: 'clase08Traversing', path: 'clase08-selectores-jquery-traversing/03-traversing', file: 'route-clase08-traversing' },
    { id: 'clase09', path: 'clase09-dudas-y-conceptos-1', file: 'route-clase09' },
    { id: 'clase09Ejercicio00This', path: 'clase09-ejercicio-0-this', file: 'route-clase09-ejercicio00-this' },
    { id: 'clase09Ejercicio01', path: 'clase09-ejercicio-1', file: 'route-clase09-ejercicio01' },
    { id: 'clase09Ejercicio02', path: 'clase09-ejercicio-2', file: 'route-clase09-ejercicio02' },
    { id: 'clase09Ejercicio03', path: 'clase09-ejercicio-3', file: 'route-clase09-ejercicio03' },
    { id: 'clase09Ejercicio04', path: 'clase09-ejercicio-4', file: 'route-clase09-ejercicio04' },
    { id: 'clase09Ejercicio05', path: 'clase09-ejercicio-5', file: 'route-clase09-ejercicio05' },
    { id: 'clase09Ejercicio06Date', path: 'clase09-ejercicio-6-date', file: 'route-clase09-ejercicio06-date' },
    { id: 'clase10', path: 'clase10-manipulacion-avanzada-del-contenido', file: 'route-clase10' },
    { id: 'clase10AfterBefore', path: 'clase10-manipulacion-avanzada-del-contenido/02-inyeccion-after-before', file: 'route-clase10-after-before' },
    { id: 'clase10AppendPrepend', path: 'clase10-manipulacion-avanzada-del-contenido/01-inyeccion-append-prepend', file: 'route-clase10-append-prepend' },
    { id: 'clase10Dimensiones', path: 'clase10-manipulacion-avanzada-del-contenido/05-dimensiones', file: 'route-clase10-dimensiones' },
    { id: 'clase10Dom', path: 'clase10-manipulacion-avanzada-del-contenido/03-inyeccion-dom', file: 'route-clase10-dom' },
    { id: 'clase10Envoltura', path: 'clase10-manipulacion-avanzada-del-contenido/04-envoltura', file: 'route-clase10-envoltura' },
    { id: 'clase10ScrollOffset', path: 'clase10-manipulacion-avanzada-del-contenido/06-scroll-offset', file: 'route-clase10-scroll-offset' },
    { id: 'clase11', path: 'clase11-eventos-en-jquery', file: 'route-clase11' },
    { id: 'clase11EventType', path: 'clase11-eventos-en-jquery/03-event-type', file: 'route-clase11-event-type' },
    { id: 'clase11EventoPageXPageY', path: 'clase11-eventos-en-jquery/07-evento-pagex-pagey', file: 'route-clase11-evento-page-xpage-y' },
    { id: 'clase11EvitarDobleClick', path: 'clase11-eventos-en-jquery/06-evitar-doble-click', file: 'route-clase11-evitar-doble-click' },
    { id: 'clase11MetodoOff', path: 'clase11-eventos-en-jquery/02-metodo-off', file: 'route-clase11-metodo-off' },
    { id: 'clase11MetodoOn', path: 'clase11-eventos-en-jquery/01-metodo-on', file: 'route-clase11-metodo-on' },
    { id: 'clase11PreventDefault', path: 'clase11-eventos-en-jquery/04-prevent-default', file: 'route-clase11-prevent-default' },
    { id: 'clase11StopPropagation', path: 'clase11-eventos-en-jquery/05-stop-propagation', file: 'route-clase11-stop-propagation' },
    { id: 'clase12', path: 'clase12-eventos-teclado-raton', file: 'route-clase12' },
    { id: 'clase12MenuContextual', path: 'clase12-eventos-teclado-raton/02-menu-contextual-personalizado', file: 'route-clase12-menu-contextual' },
    { id: 'clase12MovimientoRaton', path: 'clase12-eventos-teclado-raton/01-seguir-movimiento-del-raton', file: 'route-clase12-movimiento-raton' },
    { id: 'clase12TextareaCuentaCaracteres', path: 'clase12-eventos-teclado-raton/03-textarea-cuenta-caracteres', file: 'route-clase12-textarea-cuenta-caracteres' },
    
    { id: 'clase13', path: 'clase13-efectos-y-animaciones', file: 'route-clase13' },
    { id: 'clase13Toggle', path: 'clase13-efectos-y-animaciones/toggle', file: 'route-clase13-toggle' },
    { id: 'clase13Animate', path: 'clase13-efectos-y-animaciones/animate', file: 'route-clase13-animate' },
    { id: 'clase13PluginEase', path: 'clase13-efectos-y-animaciones/plugin-ease', file: 'route-clase13-plugin-ease' },
    { id: 'clase13PluginEaseAnimateColors', path: 'clase13-efectos-y-animaciones/plugin-ease-animate-colors', file: 'route-clase13-plugin-ease-animate-colors' },
    { id: 'clase13PluginEaseAnimateColorsOptions', path: 'clase13-efectos-y-animaciones/plugin-ease-animate-colors-options', file: 'route-clase13-plugin-ease-animate-colors-options' },
  
    { id: '404NotFoundPage', path: '404', file: 'route-404-not-found-page' }
    
];
