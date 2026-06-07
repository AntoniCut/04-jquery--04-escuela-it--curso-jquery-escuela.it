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

    { id: 'clase14', path: 'clase14-cola-de-efectos', file: 'route-clase14' },
    { id: 'clase14EncoladoEfectos', path: 'clase14-cola-de-efectos/encolado-efectos', file: 'route-clase14-encolado-efectos' },
    { id: 'clase14EjemploStop', path: 'clase14-cola-de-efectos/ejemplo-stop', file: 'route-clase14-ejemplo-stop' },
    { id: 'clase14LongitudColaEfectos', path: 'clase14-cola-de-efectos/longitud-cola-efectos', file: 'route-clase14-longitud-cola-efectos' },
    { id: 'clase14EncolarFuncionesNoEfectos', path: 'clase14-cola-de-efectos/encolar-funciones-no-efectos', file: 'route-clase14-encolar-funciones-no-efectos' },
    { id: 'clase14EncoladoRespuestasEventos', path: 'clase14-cola-de-efectos/encolado-respuestas-eventos', file: 'route-clase14-encolado-respuestas-eventos' },
    { id: 'clase14AnimacionesEnBucle', path: 'clase14-cola-de-efectos/animaciones-en-bucle', file: 'route-clase14-animaciones-en-bucle' },
  
    { id: 'clase15', path: 'clase15-json', file: 'route-clase15' },

    { id: 'clase16', path: 'clase16-ajax-interfaz-alto-nivel', file: 'route-clase16' },
    { id: 'clase16Load', path: 'clase16-ajax-interfaz-alto-nivel/load', file: 'route-clase16-load' },
    { id: 'clase16GetAjax', path: 'clase16-ajax-interfaz-alto-nivel/get-ajax', file: 'route-clase16-get-ajax' },
    { id: 'clase16GetAjaxDatos', path: 'clase16-ajax-interfaz-alto-nivel/get-ajax-datos', file: 'route-clase16-get-ajax-datos' },
    { id: 'clase16GetAjaxDatosObjetoAjax', path: 'clase16-ajax-interfaz-alto-nivel/get-ajax-datos-objeto-ajax', file: 'route-clase16-get-ajax-datos-objeto-ajax' },
    
    { id: 'clase17', path: 'clase17-dudas-y-conceptos-parte-2', file: 'route-clase17' },
    { id: 'clase17Ejercicio01', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-01', file: 'route-clase17-ejercicio01' },
    { id: 'clase17Ejercicio02', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-02', file: 'route-clase17-ejercicio02' },
    { id: 'clase17Ejercicio03', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-03', file: 'route-clase17-ejercicio03' },
    { id: 'clase17Ejercicio04', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-04', file: 'route-clase17-ejercicio04' },
    { id: 'clase17Ejercicio05', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-05', file: 'route-clase17-ejercicio05' },
    { id: 'clase17Ejercicio05Hover', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-05-hover', file: 'route-clase17-ejercicio05-hover' },
    { id: 'clase17Ejercicio06', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-06', file: 'route-clase17-ejercicio06' },
    { id: 'clase17Ejercicio07', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-07', file: 'route-clase17-ejercicio07' },
    { id: 'clase17Ejercicio08', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-08', file: 'route-clase17-ejercicio08' },
    { id: 'clase17Ejercicio09', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-09', file: 'route-clase17-ejercicio09' },
    { id: 'clase17Ejercicio10', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-10', file: 'route-clase17-ejercicio10' },
    { id: 'clase17Ejercicio10Paralax', path: 'clase17-dudas-y-conceptos-parte-2/ejercicio-10-paralax', file: 'route-clase17-ejercicio10-paralax' },
    
    { id: 'clase18', path: 'clase18-formularios-ajax', file: 'route-clase18' },
    { id: 'clase18EnviarDatosPostSinFormularios', path: 'clase18-formularios-ajax/enviar-datos-post-sin-formularios', file: 'route-clase18-enviar-datos-post-sin-formularios' },
    { id: 'clase18FormulariosSinValidacion', path: 'clase18-formularios-ajax/formularios-sin-validacion', file: 'route-clase18-formularios-sin-validacion' },
    { id: 'clase18FormularioValidacionCliente', path: 'clase18-formularios-ajax/formulario-validacion-cliente', file: 'route-clase18-formulario-validacion-cliente' },
    { id: 'clase18FormularioValidacionClienteServidor', path: 'clase18-formularios-ajax/formulario-validacion-cliente-servidor', file: 'route-clase18-formulario-validacion-cliente-servidor' },
    
    { id: '404NotFoundPage', path: '404', file: 'route-404-not-found-page' },

    
    
];
