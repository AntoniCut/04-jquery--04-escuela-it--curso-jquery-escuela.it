/*
    ---------------------------------------------------------------
    ----------  /actions-navbars-with-jquery-jquery-ui/  ----------
    ----------  /jquery-actions-navbars-plugin.d.ts  --------------
    ---------------------------------------------------------------
*/


import $ from "jquery";


declare global {
    
    interface JQuery {
        
        /**
         * - `Plugin Actions Navbar` personalizado para implementar funcionalidades y efectos conjQuery y jQuery UI.
         * - Permite gestionar barras de navegación con acciones de mostrar/ocultar menús con animaciones.
         * 
         * @param options - Objeto de configuración para la SPA.
         * @returns {JQuery}
         */
        
        actionsNavbarsWithJQueryJQueryUI(options: object): JQuery;

    }

}

export { };
