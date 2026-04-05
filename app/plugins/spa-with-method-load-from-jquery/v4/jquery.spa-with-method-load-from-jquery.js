/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /jquery.spa-with-method-load-from-jquery.js  --  /src/plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/



/**
 *  ----------------------------------------------------
 *  -----  `spaWithMethodLoadFromJQueryPlugins()`  -----
 *  ----------------------------------------------------
 * 
 * @version `4.0.0`
 * 
 * @author `Antonio Francisco Cutillas García`
 * 
 * @description
 *  - Este plugin `spaWithMethodLoadFromJQueryPlugins` permite cargar contenido dinámico
 *    en una aplicación SPA utilizando el método `load` de jQuery.
 *  - Envuelve el plugin en una función de `Módulos ES6` para facilitar su integración.
 * 
 * - `Añadimos`:
 *     - Efecto Loading para la carga inicial de la página.
 *     - 404NotFoundPage: Ruta para manejar páginas no encontradas.
 *     - Normalización de rutas y pathname para evitar problemas con slashes y base.
 *     - Notificación de carga de ruta mediante eventos personalizados.
 *     - Manejo de errores en la carga de componentes y rutas.
 */

export const spaWithMethodLoadFromJQueryPlugins = () => {


    /*
        -------------------------------------------------------------------------------------
        ----------  Función Anónima Autoejecutable que Encapsula el plugin jQuery  ----------
        -------------------------------------------------------------------------------------
    */

    (($) => {


        /**
         * ------------------------------------------------
         * -----  `$.fn.spaWithMethodLoadFromJQuery`  -----
         * ------------------------------------------------
         * 
         * - Plugin SPA que añade funcionalidad al prototipo de jQuery.
         * 
         * @param {ConfigOptionsSPA} options - `Opciones de configuración de la SPA`
         * @returns {JQuery} - `Retorna el objeto jQuery para encadenamiento`
         */

        $.fn.spaWithMethodLoadFromJQuery = function (options) {


            /*
                -------------------------------------------------------------------------
                -----  Configuración por defecto (solo lo estrictamente necesario)  -----
                -------------------------------------------------------------------------
            */


            /**
             * @type {ConfigOptionsSPA} - `Objeto de configuración final del plugin SPA`
             * @description
             * Se crea combinando:
             *   - Los valores por defecto
             *   - Las opciones proporcionadas por el usuario (`options`)
             */

            const settings = $.extend(
                {
                    /** @type {Route[]} */
                    routes: [],
                    base: '',
                    draggable: false
                },
                options
            );



            /*
                -------------------------------------------------------------------
                ----------  Normalización de rutas, pathnames y slashes  ----------
                -------------------------------------------------------------------
            */


            /**
             * -----------------------------------
             * -----  `normalize(raw = '')`  -----
             * -----------------------------------
             * 
             * - Normaliza una ruta (quita base y slashes de inicio/fin)
             * 
             * @param {string} raw - `Ruta sin procesar, posiblemente con base y slashes`
             * @returns {string} - `Ruta normalizada`
             * 
             */

            const normalize = (raw = '') => {

                /** @type {string} - `Base de la aplicación` */
                const base = settings.base || '';

                /** @type {string} - `Cadena normalizada` */
                let s = String(raw || '');

                //  -----  quitar base si está presente  -----
                if (base && s.startsWith(base))
                    s = s.slice(base.length);

                //  -----  quitar leading/trailing slash  -----
                s = s.replace(/^\/|\/$/g, '');

                return s;

            }



            /**
             * ---------------------------------------------
             * -----  `buildPathname(routePath = '')`  -----
             * ---------------------------------------------
             * 
             * - Construye pathname absoluto para pushState, normalizado con base
             * 
             * @param {string} routePath - `Ruta relativa de la ruta`
             * @returns {string} - `Pathname absoluto y normalizado`
             * 
             */

            const buildPathname = (routePath = '') => {

                /** @type {string} - `Base de la aplicación` */
                const base = (settings.base || '').replace(/\/$/, '');

                /** @type {string} - `Ruta normalizada (con leading slash)` */
                const trimmed = routePath ? `/${String(routePath).replace(/^\/|\/$/g, '')}` : '';

                //  -----  Construir pathname absoluto y normalizado  -----
                try {

                    return new URL(base + trimmed, location.origin).pathname;

                } catch (e) {

                    //  -----  fallback básico  -----
                    return (base + trimmed).replace(/\/\/+/g, '/');
                }

            };


            /**
             * -------------------------------------------------
             * -----  `findRouteByPath(rawPathname = '')`  -----
             * -------------------------------------------------
             *
             * - Busca una ruta por pathname (normalizando base y slashes)
             *
             * @param {string} rawPathname - `pathname crudo desde la URL o history state`
             * @returns {Route|undefined} - `Ruta encontrada o undefined`
             */
            const findRouteByPath = (rawPathname = '') => {

                /** @type {string} - `Ruta normalizada para buscar en settings.routes` */
                const normalized = normalize(rawPathname);

                //  -----  Buscar ruta que coincida con el pathname normalizado  -----
                return settings.routes.find(r => normalize(r.path) === normalized);

            };


            /**
             * -----------------------------------
             * -----  `findNotFoundRoute()`  -----
             * -----------------------------------
             *
             * - Obtiene la ruta 404 usando id o path para evitar dependencia de un solo identificador.
             *
             * @returns {Route|undefined} - `Ruta 404 encontrada o undefined`
             */
            const findNotFoundRoute = () => {

                return settings.routes.find(r =>
                    r?.id === '404NotFoundPage' ||
                    normalize(r?.path) === '404' ||
                    /404/i.test(String(r?.id || ''))
                );

            };


            /**
             * -----------------------------------------
             * -----  `loadNotFoundRoute(source)`  -----
             * -----------------------------------------
             * - Carga la ruta 404 si existe.
             * @async
             * @param {'init'|'click'|'popstate'} source - `Origen de la navegación`
             * @returns {Promise<Route|undefined>} - `Ruta cargada o undefined si no existe`
             */

            const loadNotFoundRoute = async (source) => {

                /** @type {Route|undefined} - `Ruta 404` */
                const route404 = findNotFoundRoute();

                if (!route404) {
                    console.error(`No existe ruta 404 configurada (source: ${source}).`);
                    return undefined;
                }

                try {

                    await loadContent(route404);
                    return route404;

                } catch (err) {

                    console.error(`Error loadContent 404 (${source}):`, err);
                    return undefined;
                }

            };



            /*
                ------------------------------------------------------------------------
                ----------  Carga de contenido dinámico, Componentes del DOM  ----------
                ----------  y Metadatos de la Ruta (título, favicon, CSS, JS)  ---------
                ------------------------------------------------------------------------
            */


            /**
            * ----------------------------------
            * -----  `loadContent(route)`  -----
            * ----------------------------------
            * 
            * - Carga contenido con o sin ViewTransition.
            * - Siempre devuelve una Promise.
            * 
            * @param {Route} route
            * @returns {Promise<void>}
            */

            const loadContent = (route) => {


                //  -----  Devolver una promesa que se resuelve cuando la carga y transición (si existe) terminan  -----
                return new Promise(async (resolve, reject) => {


                    /**
                     * -----------------------------------
                     * -----  `notifyRouteLoaded()`  -----
                     * -----------------------------------
                     * @description
                     * - Notifica al sistema que una ruta de la SPA ha terminado de cargarse.
                     * - Dispara el evento personalizado `spa:route-loaded` en `document`, incluyendo
                     *   en `detail` el `id` y el `path` de la ruta actual.
                     * - Si es la primera ruta cargada desde que se inició la aplicación,
                     *   marca el flag global `window.__spaFirstRouteLoaded` y emite
                     *   el evento `spa:first-route-loaded`.
                     * - Este evento suele utilizarse para ocultar el loader inicial
                     *   o ejecutar lógica que solo debe ocurrir una vez al iniciar la SPA.
                     */

                    const notifyRouteLoaded = () => {


                        //  -----  Crea un evento personalizado 'spa:route-loaded' con detalles de la ruta  -----
                        document.dispatchEvent(

                            //  -----  Detalles incluyen id y path de la ruta, o null si no están definidos  -----
                            new CustomEvent('spa:route-loaded', {

                                detail: {
                                    id: route?.id || null,
                                    path: route?.path || window.location.pathname
                                }
                            })
                        );

                        //  -----  Marcar que la primera ruta se ha cargado para el efecto de loading inicial  -----
                        if (!window.__spaFirstRouteLoaded) {
                            
                            // -----  Establecer flag global para indicar que la primera ruta ha sido cargada  -----
                            window.__spaFirstRouteLoaded = true;
                            
                            //  -----  Emitir evento personalizado 'spa:first-route-loaded' ----------
                            // -----  para notificar que la primera ruta ha terminado de cargar  -----
                            document.dispatchEvent(new CustomEvent('spa:first-route-loaded'));
                        }

                    };


                    //  -----  Verificar que la ruta es válida  -----
                    if (!route) {
                        console.warn("No se encontró la ruta para loadContent");
                        return resolve();
                    }


                    //  -----  Función interna asíncrona para cargar componentes y aplicar metadatos  -----
                    const loadComponentsAndMeta = async () => {

                        // ----- Caso especial: ruta sin componentes -----
                        if (!route.components || Object.keys(route.components).length === 0) {

                            console.log('\n');
                            console.warn(`La ruta ${route.id} no contiene 'components'`);
                            console.log('\n');

                            //  -----  Aplicar metadatos de la ruta (título, favicon, css, scripts, URL) -----
                            applyRouteMeta(route);

                            return;

                        }


                        /*
                            -----  Cargar componentes del DOM con jQuery .load()  -----
                            -----  Acciones del navbar  -----
                            -----  Cambio de themes jQuery UI  -----
                            -----  Aplicar metadatos de la ruta (título, favicon, css, scripts, URL)  -----
                        */
                        try {

                            //  ----- Cargar todos los componentes declarados en la ruta -----
                            await loadComponentsDom(route.components);

                            //  -----  Inicializar acciones del navbar  -----
                            actionsNavbar();

                            //  -----  Cambio de themes jQuery UI  -----
                            changeThemesJQueryUI();

                            //  -----  Aplicar metadatos de la ruta (título, favicon, css, scripts, URL)  -----
                            applyRouteMeta(route);

                        } catch (err) {

                            console.log('\n');
                            console.error('Error en loadComponentsDom:', err);
                            console.log('\n');

                            //  -----  Propagar error para que lo capture la Promise externa  -----
                            throw err;
                        }

                    };


                    // ----- Si no existe ViewTransition: carga normal -----
                    if (!document.startViewTransition) {

                        try {

                            await loadComponentsAndMeta();
                            notifyRouteLoaded();
                            resolve();

                        } catch (err) {

                            reject(err);
                        }

                        return;
                    }


                    // ----- Si Existe ViewTransition -----
                    try {

                        /** @type {ViewTransition|null} - `Iniciar ViewTransition y cargar componentes/metadatos dentro de la transición. La promesa se resuelve cuando la transición termina.`
                         * @return {Promise<void>}
                         */
                        const transition = document.startViewTransition(() => loadComponentsAndMeta());

                        //  -----  Esperar a que la transición termine  -----
                        if (transition && typeof transition.finished?.then === "function")

                            //  -----  Notificar que la ruta se ha cargado solo después de que la transición termine  -----
                            transition.finished
                                .then(() => {
                                    notifyRouteLoaded();
                                    resolve();
                                })
                                .catch(reject);

                        else {
                            notifyRouteLoaded();
                            resolve();
                        }


                    } catch (err) {

                        console.log('\n');
                        console.error("Error en startViewTransition:", err);
                        console.log('\n');

                        try {

                            await loadComponentsAndMeta();
                            notifyRouteLoaded();
                            resolve();

                        } catch (err) {

                            reject(err);

                        }

                    }

                });

            };



            /**
             * ---------------------------------------------
             * -----  `loadComponentsDom(components)`  -----
             * ---------------------------------------------
             * 
             * Carga todos los componentes pasados en el objeto `components`.
             * components: { "#selector": "/ruta/archivo.html", ... }
             * Devuelve una promesa que se resuelve cuando TODOS los componentes se cargan.
             * 
             * @param {RouteComponents} components - `Objeto con selectores y URLs de componentes a cargar en el DOM`
             * @returns {Promise<void[]>} - `Promesa que se resuelve cuando todos los componentes se han cargado.`
             * 
             */

            const loadComponentsDom = (components) => {


                /** @type {Promise<void>[]} - `Array de promesas para cada carga de componente.` */
                const promises = [];


                /*
                    ------------------------------------------------------
                    -----  Iterar sobre cada selector en components  -----
                    ------------------------------------------------------
                */
                for (const selector in components) {


                    //  -----  Verificar que la propiedad pertenece a components  -----
                    if (!Object.prototype.hasOwnProperty.call(components, selector))
                        continue;


                    /** @type {string|undefined} - `URL del componente a cargar.` */
                    const url = components[selector];


                    //  -----  Si no hay URL definida para el selector, mostrar advertencia y limpiar el contenedor  -----
                    if (!url) {

                        console.log('\n');
                        console.warn(`No hay URL para el selector ${selector}`);
                        console.log('\n');

                        //  -----  Limpiar el contenedor del componente si la URL es undefined  -----
                        $(selector).empty();

                        //  -----  Saltar a la siguiente iteración  -----
                        continue;

                    }


                    /** @type {Promise<void>} - `Promesa que carga el componente en el selector correspondiente.` */
                    const promise = new Promise((resolve, reject) => {

                        
                        /*
                            *  ------------------------------------------------------------  *
                            *  -----  Cargamos componente del DOM con jQuery .load()  -----  *
                            *  ------------------------------------------------------------  *
                        */

                        $(selector).load(url, function (response, status, xhr) {

                            //  -----  Si ocurre un error al cargar el componente  -----
                            if (status === "error") {

                                console.log('\n');
                                console.error(`Error al cargar ${url}: ${xhr?.statusText || 'Desconocido'}`);
                                console.log('\n');

                                //  -----  Mostrar mensaje de error en el contenedor  -----
                                $(selector).html(`<p>Error 404 al cargar: ${url}</p>`);

                                return reject(new Error(`Error al cargar ${url}`));

                            }

                            //  -----  Componente cargado correctamente  -----
                            resolve(undefined);

                        });

                    });

                    //  -----  Añadir la promesa al array  -----
                    promises.push(promise);

                }

                //  -----  Devolver la promesa que se resuelve cuando todas las cargas terminan  -----
                return Promise.all(promises);

            };



            /**
             * -------------------------------------
             * -----  `applyRouteMeta(route)`  -----
             * -------------------------------------
             * 
             * - `Función para aplicar metadatos de la ruta (título, favicon, URL, etc.)`
             * @async
             * @param {Route} route - `Objeto de la ruta actual con posibles propiedades: headerTitle, pageTitle, favicon, styles, scripts, path, id.`
             * 
             */

            const applyRouteMeta = async (route) => {


                //  -----  Título del Header y Footer  -----
                if (route.headerTitle)
                    addTitleHeaderFooter(route.headerTitle);

                //  -----  Título  -----
                if (route.pageTitle)
                    document.title = route.pageTitle;

                //  -----  Favicon  -----
                if (route.favicon)
                    updateFavicon(route.favicon);

                //  -----  CSS  -----
                if (route.styles)
                    loadStylesheetByPage(route.styles);

                //  -----  JS  -----
                if (route.scripts)
                    loadScriptsByPage(route.scripts);


                /*
                    --------------------------------------------
                    -----  pushState seguro (normalizado)  -----
                    --------------------------------------------
                */


                /** @type {string} - `Nueva pathname para la ruta` */
                const newPathname = buildPathname(route.path || '');


                //  -----  Evitar push duplicado  -----
                if (window.location.pathname !== newPathname) {

                    //  -----  Realizar pushState con el pathname normalizado  -----
                    history.pushState({ id: route.id, path: newPathname }, '', newPathname);

                    console.log('\n');
                    console.warn('navigate ==>', route.id, newPathname);
                    console.log('\n');
                }

            }



            /**
             * -------------------------------------------
             * -----  `addTitleHeaderFooter(title)`  -----
             * -------------------------------------------
             * - Agrega el título al header y footer de la página.
             * @param {string} title - Texto para mostrar en ambos lugares.
             */

            const addTitleHeaderFooter = (title) => {

                //  -----  Añadimos el título al header  -----
                /** @type {JQuery<HTMLElement>} - `Título del header` */
                $('#layoutHeader #headerTitle').html(title);

                //  -----  Añadimos el título al footer  -----
                /** @type {JQuery<HTMLElement>} - `Título del footer` */
                $('#layoutFooter #footerTitle').html(title);

            }



            /*
                -------------------------------------------------------------------------------------
                ----------  Elementos Draggables, Acciones del Navbar, Actualizar Favicon  ----------
                -------------------------------------------------------------------------------------
            */


            /**
             *  -----------------------------------
             *  -----  `enableDraggables()`   -----
             *  -----------------------------------
             *  
             * - Habilita la funcionalidad de elementos arrastrables.
             * - Busca cualquier elemento con la clase `.draggable` y aplica .draggable() (jQuery UI).
             * - Esto evita depender de selectores rígidos.
             */

            const enableDraggables = () => {

                try {

                    //  -----  Iterar sobre cada elemento con clase .draggable y aplicar jQuery UI draggable.  -----
                    $('.draggable').each(function () {

                        //  -----  Si el método draggable está disponible, aplicarlo al elemento actual  -----
                        if ($(this).draggable) {

                            //  -----  Aplicar draggable con scroll desactivado para evitar problemas de scroll durante el arrastre  -----
                            $(this).draggable({
                                scroll: false
                            });
                        }

                    });

                } catch (err) {

                    //  -----  si jQuery UI no está presente, no hacer nada  -----
                    console.log('\n');
                    console.warn('jQuery UI draggable no disponible o falló la inicialización.', err);
                    console.log('\n');

                }

            };



            /**
             * -------------------------------
             * -----  `actionsNavbar()`  -----
             * -------------------------------
             * 
             * Inicializa y controla el comportamiento del navbar:
             *
             * - Maneja la apertura y cierre del menú principal.
             * - Maneja la apertura y cierre del menú de themes (jQuery UI).
             * - Garantiza que solo un menú esté abierto a la vez.
             * - Cierra los menús al hacer click fuera de ellos.
             *
             * Requiere jQuery.
             *
             * Elementos esperados en el DOM:
             * - .navbar__container
             * - .navbar__btn-open
             * - .navbar__btn-close
             * - #linksThemesContainer
             * - .navbar-ui__btn-open
             * - .navbar-ui__btn-close
             * 
             */

            const actionsNavbar = () => {


                /**  
                 * - `Menú Principal`
                 * 
                 * @property {JQuery<HTMLElement>} container - Contenedor del menú
                 * @property {JQuery<HTMLElement>} btnOpen   - Botón para abrir
                 * @property {JQuery<HTMLElement>} btnClose  - Botón para cerrar
                 * 
                 */

                const menuMain = {
                    container: $('.navbar__container'),
                    btnOpen: $('.navbar__btn-open'),
                    btnClose: $('.navbar__btn-close')
                };


                /**  
                 * - `Menú` `Themes jQuery UI`
                 * 
                 * @property {JQuery<HTMLElement>} container - Contenedor del menú
                 * @property {JQuery<HTMLElement>} btnOpen   - Botón para abrir
                 * @property {JQuery<HTMLElement>} btnClose  - Botón para cerrar
                 * 
                 * 
                 */

                const menuThemes = {
                    container: $('#linksThemesContainer'),
                    btnOpen: $('.navbar-ui__btn-open'),
                    btnClose: $('.navbar-ui__btn-close')
                };


                //  -----  Ocultar ambos menús al iniciar  -----
                menuMain.container.hide();
                menuMain.btnClose.hide();

                menuThemes.container.hide();
                menuThemes.btnClose.hide();


                // ---------- FUNCIONES ----------

                /**
                 * ------------------------------
                 * -----  `openMenu(menu)`  -----
                 * ------------------------------
                 * 
                 * - `Abre un menú con animación`
                 *
                 * @param {Object} menu - Objeto del menú a abrir
                 * @param {JQuery} menu.container - Contenedor del menú
                 * @param {JQuery} menu.btnOpen - Botón para abrir
                 * @param {JQuery} menu.btnClose - Botón para cerrar
                 * 
                 */

                const openMenu = (menu) => {
                    menu.container.stop(true, true).slideDown(250);
                    menu.btnOpen.hide();
                    menu.btnClose.show();
                }


                /**
                 * -------------------------------
                 * -----  `closeMenu(menu)`  -----
                 * -------------------------------
                 * 
                 * - `Cierra un menú con animación`
                 *
                 * @param {Object} menu - Objeto del menú a cerrar
                 * @param {JQuery} menu.container - Contenedor del menú
                 * @param {JQuery} menu.btnOpen - Botón para abrir
                 * @param {JQuery} menu.btnClose - Botón para cerrar
                 * 
                 */

                const closeMenu = (menu) => {
                    menu.container.stop(true, true).slideUp(250);
                    menu.btnOpen.show();
                    menu.btnClose.hide();
                }


                /**
                 * --------------------------------------------
                 * -----  `clickInside(element, target)`  -----
                 * --------------------------------------------
                 * 
                 * - `Verifica si un click ocurrió dentro de un elemento`
                 *
                 * @param {JQuery<HTMLElement>} element - Elemento base (objeto jQuery)
                 * @param {EventTarget|null} target - Elemento clickeado o Target del evento
                 * @returns {boolean} - `True` si el click fue interno
                 * 
                 */

                const clickInside = (element, target) => {

                    //  -----  Verificar que target es un HTMLElement  -----
                    if (!(target instanceof HTMLElement)) {
                        return false;
                    }

                    return $(target).closest(element).length > 0;

                }


                // ---------- EVENTOS ----------

                //  -----  Abrir menú principal  -----
                $(document).on("click", ".navbar__btn-open", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  abrir menú principal  -----
                    openMenu(menuMain);

                    //  -----  cerrar menú themes UI  -----
                    closeMenu(menuThemes);

                });


                //  -----  Cerrar menú principal  -----
                $(document).on("click", ".navbar__btn-close", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  cerrar menú principal  -----
                    closeMenu(menuMain);

                });


                //  -----  Abrir menú themes UI  -----
                $(document).on("click", ".navbar-ui__btn-open", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  abrir menú themes UI  -----
                    openMenu(menuThemes);

                    //  -----  cerrar menú principal  -----
                    closeMenu(menuMain);

                });


                //  -----  Cerrar menú themes UI  -----
                $(document).on("click", ".navbar-ui__btn-close", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  cerrar menú themes UI  -----
                    closeMenu(menuThemes);

                });


                // -----  Click Fuera de los Menús  -----
                $(document).on("click", function (e) {


                    //  -----  Verificar si el click fue dentro de algún menú  -----

                    /** @type {boolean} - `Click dentro del menú principal` */
                    const clickMain =
                        clickInside(menuMain.container, e.target) ||
                        clickInside(menuMain.btnOpen, e.target);

                    /** @type {boolean} - `Click dentro del menú themes` */
                    const clickThemes =
                        clickInside(menuThemes.container, e.target) ||
                        clickInside(menuThemes.btnOpen, e.target);


                    //  -----  Si el click fue fuera, cerrar ambos menús  -----   

                    if (!clickMain)
                        closeMenu(menuMain);

                    if (!clickThemes)
                        closeMenu(menuThemes);

                });

            };



            /**
             * --------------------------------------
             * -----  `changeThemesJQueryUI()`  -----
             * --------------------------------------
             * 
             * - Cambia las themes de jQuery UI dinámicamente.
             * 
             */

            const changeThemesJQueryUI = () => {


                /** @type {JQuery<HTMLLinkElement>} - `id del elemento link de la hoja de estilos de jquery UI` */
                const $theme = $('#theme');

                /** @type {JQuery<HTMLElement>} - `contenedor de los links de themes` */
                const $linksThemesContainer = $('#linksThemesContainer');

                /** @type {string} - `Path de las themes de jQuery UI` */
                const pathThemes = `${settings.base}/src/libs/jquery/ui/themes`;

                console.log('\n');
                console.warn(`-----  jQuery UI Themes Path: ${pathThemes}  -----`);
                console.log('\n');


                //  -----  añadimos widget tooltip al layoutNavbarThemesUI  -----
                $linksThemesContainer.tooltip();


                /** 
                 * -----------------------------
                 * ----- `disabledActive()`----- 
                 * - desactiva la clase active de todos los links de themes
                 */
                const disabledActive = () => {

                    $linksThemesContainer
                        .find("a")
                        .removeClass('active');
                }


                //  -----  Evento click en los links de themes  -----
                $linksThemesContainer.on("click", "a", function (e) {


                    //  -----  prevenir acción por defecto del link  -----
                    e.preventDefault();


                    /** @type {string|null|undefined} - `Nombre del theme seleccionado` */
                    const themeName = $(this).data("theme");

                    if (!themeName)
                        return;

                    //  -----  Cambiar href del link del theme  -----
                    $theme.attr("href", `${pathThemes}/${themeName}/jquery-ui.min.css`);

                    console.log('\n');
                    console.warn(`-----  Theme changed to: ${themeName}  -----`);
                    console.log('\n');

                    //  -----  desactivar clase active de todos los links  -----
                    disabledActive();

                    //  -----  marcar link como activo  -----
                    $(this).addClass("active");

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                });

            }



            /**
             * --------------------------------------
             * -----  `updateFavicon(favicon)`  -----
             * --------------------------------------
             * 
             * - Actualiza el favicon añadiendo un query para forzar recarga
             * 
             * @param {string} favicon - URL del nuevo favicon a cargar
             */

            const updateFavicon = (favicon) => {


                /** @type {JQuery<HTMLLinkElement>} - `Elemento link del favicon` */
                let $favicon = $('link[rel="icon"]');

                //  -----  Si no existe el favicon, lo creamos  -----
                if ($favicon.length === 0) {


                    /** @type {HTMLLinkElement} - `Crear un nuevo elemento link para el favicon si no existe` */
                    const link = document.createElement('link');

                    //  -----  Configurar el nuevo elemento link para el favicon  -----
                    link.rel = "icon";
                    link.type = "image/x-icon";

                    //  -----  Añadir el nuevo elemento link al head del documento  -----
                    document.head.appendChild(link);

                    //  -----  Asignar el nuevo elemento link a $favicon para futuras actualizaciones  -----
                    $favicon = $(link);
                }

                //  -----  Actualizar el href del favicon con un query para forzar recarga  -----
                $favicon.attr('href', `${favicon}?t=${Date.now()}`);

            };



            /*
                -----------------------------------
                ----------  STYLESHEETS  ----------
                -----------------------------------
            */


            /**
            * --------------------------------------------
            * -----  loadStylesheetByPage(styles)  -----
            * --------------------------------------------
            *
            * Carga múltiples hojas de estilo para la página sin bloquear el hilo.
            * Preload antes de aplicar para evitar parpadeos.
            *
            * @param {RouteStyle[] | RouteStyle | null | undefined} styles - `Array o único objeto de estilos a cargar para la ruta. 
            * Cada estilo debe tener al menos una propiedad 'href' con la URL de la hoja de estilo.`
            */

            const loadStylesheetByPage = (styles) => {


                //  -----  Si no hay estilos, salir  -----
                if (!styles)
                    return;

                /** @type {RouteStyle[]} - `Array de estilos a cargar` */
                const list = Array.isArray(styles) ? styles : [styles];

                /** @type {string[]} - `Array de hrefs de estilos a cargar` */
                const hrefsToLoad = list.map(s => s?.href).filter(Boolean);

                /** @type {HTMLHeadElement} - Òbtener el elemento del head */
                const head = document.head;

                /** @type {NodeListOf<HTMLLinkElement>} */
                const pageStyleLinks = (head.querySelectorAll('link[data-page-style="true"]'));

                //  -----  Eliminar solo los estilos que NO se van a recargar  -----
                pageStyleLinks.forEach(link => {

                    if (!hrefsToLoad.some(h => link.href.includes(h)))
                        link.remove();

                });


                //  -----  Preload y luego aplicar  -----
                hrefsToLoad.forEach(href => {

                    // Evitar recargar si ya existe
                    if (head.querySelector(`link[data-page-style="true"][href*="${href}"]`)) return;

                    /** @type {HTMLLinkElement} - `Preload para no bloquear repaints` */
                    const preload = document.createElement('link');

                    //  -----  Configurar el elemento preload para la hoja de estilo  -----
                    preload.rel = 'preload';
                    preload.as = 'style';
                    preload.href = href;

                    //  -----  Añadir el elemento preload al head del documento  -----
                    head.appendChild(preload);

                    //  -----  Aplicar después de que preload cargue  -----
                    preload.onload = () => {


                        /** @type {HTMLLinkElement} - `Elemento link para la hoja de estilo` */
                        const link = document.createElement('link');

                        //  -----  Configurar el elemento link para la hoja de estilo  -----
                        link.rel = 'stylesheet';
                        link.href = href; // ✅ producción: sin ?t

                        //  -----  Marcar el link como un estilo de página para futuras gestiones  -----
                        link.dataset.pageStyle = 'true';

                        //  -----  Añadir el elemento link al head del documento  -----
                        head.appendChild(link);

                        // Remover preload (ya no necesario)
                        preload.remove();

                    };
                });
            };



            /*
                -------------------------------
                ----------  SCRIPTS  ----------
                -------------------------------
            */


            /**
             * ------------------------------------------
             * -----  `loadScriptsByPage(scripts)`  -----
             * ------------------------------------------
             *
             * - Carga múltiples scripts para la página.
             * - Antes elimina los scripts dinámicos previos.
             * 
             * @param {RouteScript[]|object} scripts - `Array o diccionario de scripts a cargar para la ruta. 
             * Cada script debe tener al menos una propiedad 'src' con la URL del script.`
             * 
             */

            const loadScriptsByPage = (scripts) => {

                //  -----  Remover scripts anteriores  -----
                //  - Solo elimina scripts cargados por rutas → seguros

                /** @type {JQuery<HTMLScriptElement>} - `Eliminar todos los scripts marcados como data-page-script` */

                $('script[data-page-script="true"]').remove();

                //  -----  Si no hay scripts, salir  -----
                if (!scripts)
                    return;


                //  -----  Aceptar array o diccionario  -----

                /** @type {RouteScript[]} - `Array de scripts a cargar` */
                const scriptArray = Array.isArray(scripts)
                    ? scripts
                    : Object.values(scripts);

                //  -----  Cargar los nuevos scripts  -----
                scriptArray.forEach(script => {

                    if (!script?.src)
                        return;

                    //  -----  Cargar el script  -----
                    loadScripts(script.src);

                });
            };



            /**
             * ---------------------------------------
             * -----  `loadScripts(scriptUrl)`  ------
             * ---------------------------------------
             * 
             * - Carga un script (verifica con HEAD)
             * 
             * @param {string} scriptUrl - URL del script a cargar
             */

            const loadScripts = (scriptUrl) => {


                //  -----  Verificar que el script existe con una petición HEAD con el método .ajax()  -----
                $.ajax({
                    url: scriptUrl,
                    type: 'HEAD',

                    //  -----  Si el script existe, cargarlo con .getScript()  -----
                    success: function () {

                        //  -----  Cargar el script con jQuery.getScript  -----
                        $.getScript(scriptUrl)

                            //  -----  Marcar el script como data-page-script para futuras gestiones  -----
                            .done(() => {

                                console.log(`Cargado: ${scriptUrl}`);

                                /** @type {NodeListOf<HTMLScriptElement>} - `Todos los scripts en el documento` */
                                const scripts = document.querySelectorAll('script');

                                /** @type {HTMLScriptElement} - `Último script en el documento` */
                                const lastScript = scripts[scripts.length - 1];

                                //  -----  Marcar el último script cargado con jQuery.getScript() como data-page-script  -----
                                if (lastScript && lastScript.src.includes(scriptUrl))
                                    lastScript.dataset.pageScript = "true";


                            })

                            //  -----  Manejar errores de carga del script  -----
                            .fail((jqxhr, settings, exception) => {

                                console.log('\n');
                                console.error(`Error en ${scriptUrl}:`, exception);
                                console.log('\n');

                            });

                    },

                    //  -----  Si el script no existe, mostrar advertencia en consola  -----
                    error: function () {

                        console.log('\n');
                        console.warn(`No existe el script: ${scriptUrl}`);
                        console.log('\n');

                    }

                });

            };



            /**
             * ----------------------
             * -----  `init()`  -----
             * ----------------------
             * 
             * - Inicializa la app: encuentra la ruta inicial y la carga, o la 404.
             */

            const init = () => {


                /** @type {string} - `Ruta normalizada actual (sin base ni barra final)` */
                const initialPath = window.location.pathname;

                /** @type {Route|undefined} - `Ruta inicial encontrada en settings.routes` */
                const route = findRouteByPath(initialPath);

                /** @type {Route|undefined} - `Ruta final a cargar al iniciar (ruta encontrada o 404)` */
                const initialRoute = route || findNotFoundRoute();


                //  -----  Cargar la ruta inicial o la 404  -----
                if (route)

                    loadContent(route)

                        .catch(

                            /** @param {Error} err */
                            err => console.error('Error cargando ruta inicial', err)
                        );

                //  -----  Si no se encuentra la ruta, cargar la 404  -----
                else
                    loadNotFoundRoute('init');


                //  -----  Reemplazamos el state inicial con un objeto normalizado  -----
                if (initialRoute) {

                    /** @type {string} - `Pathname final inicial (ruta encontrada o 404)` */
                    const initialPathname = buildPathname(initialRoute.path || '');

                    history.replaceState(
                        { id: initialRoute?.id || null, path: initialPathname },
                        '',
                        initialPathname
                    );

                } else {

                    history.replaceState(
                        { id: null, path: window.location.pathname },
                        '',
                        window.location.pathname
                    );
                }

            };



            /*
                -------------------------------
                ----------  EVENTOS  ----------
                -------------------------------
            */


            /*
                -------------------------------------------------------------------
                -----  Manejadores de navegación  -  clicks  ----------------------
                -----  Enlaces: a[data-id] => data-id corresponde a route.id  -----
                -------------------------------------------------------------------
            */
            $(document).on('click', 'a[data-id]', function (event) {

                event.preventDefault();

                /** @type {string} - `ID de la ruta desde el atributo data-id` */
                const dataId = $(this).data('id');

                /** @type {Route|undefined} - `Ruta correspondiente al data-id` */
                const route = settings.routes.find(r => r.id === dataId);


                //  -----  ocultar menus tipo navbar compact  -----
                $('.navbar__container').slideUp();

                //  -----  Cargar la ruta si existe  -----
                if (route)

                    loadContent(route)

                        .catch(

                            /** @param {Error} err */
                            err => console.error('Error loadContent (click):', err)
                        );

                //  -----  Si no existe la ruta, cargar la 404  -----
                else
                    loadNotFoundRoute('click');

            });



            /*
                ---------------------------------------------------
                -----  Manejadores de navegación - popstate  -----
                -----  popstate: manejar atrás / adelante  -------
                ---------------------------------------------------
            */
            window.addEventListener('popstate', (e) => {

                /** @type {string} - `Ruta normalizada desde el state o la URL actual; usar state.path si está presente, si no usar location.pathname` */
                const raw = e.state?.path ?? window.location.pathname;

                /** @type {Route|undefined} - `Ruta correspondiente a la URL actual` */
                const route = findRouteByPath(raw);

                //  ----- cargamos la ruta sin empujar otra entrada en el historial  ---------
                //  ----- loadContent(route)  -  hace pushState solo si la ruta difiere  -----
                if (route)

                    loadContent(route)

                        .catch(

                            /** @param {Error} err */
                            err => console.error('Error loadContent (popstate):', err)
                        );

                else
                    loadNotFoundRoute('popstate');

            });



            /*
                -----------------------------------------
                ----------  INICIO DEL PLUGIN  ----------
                -----------------------------------------
            */


            //  -----  Mensaje de plugin cargado  -----
            console.log('\n');
            console.log('%c ✅ ✅ ✅ plugin  -  jquery.spa-with-method-load-from-jquery.js  -  versión 4  -  cargado!!! ✅ ✅ ✅', 'background:#3498db; color:black; padding:20px; font-size:20px; font-weight:bold;');
            console.log('\n');


            //  -----  Si está activado, habilitar draggables  -----
            if (settings.draggable)
                enableDraggables();


            //  -----  Inicializar la aplicación SPA  -----
            init();


            //  -----  Retornar this para encadenamiento  -----
            return this;

        };


    })(jQuery);


};
