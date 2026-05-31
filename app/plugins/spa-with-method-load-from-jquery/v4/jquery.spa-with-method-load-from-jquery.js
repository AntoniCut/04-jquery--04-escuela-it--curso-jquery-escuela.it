/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /jquery.spa-with-method-load-from-jquery.js  --  /src/plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/


/** @typedef {import('../../../../types/index.js').ConfigOptionsSPA} ConfigOptionsSPA */
/** @typedef {import('../../../../types/index.js').RouteManifest} RouteManifest */
/** @typedef {import('../../../../types/index.js').RouteComponents} RouteComponents */
/** @typedef {import('../../../../types/index.js').RouteScript} RouteScript */
/** @typedef {import('../../../../types/index.js').RouteStyle} RouteStyle */
/** @typedef {import('../../../../types/index.js').RouteLib} RouteLib */
/** @typedef {import('../../../../types/index.js').Route} Route */


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
 *     - Soporte para scripts clásicos y módulos ES6 (type="module").
 *     - Markdown con Shiki para código fuente resaltado.
 *     - Reescritura de URLs en HTML inyectado para evitar roturas en la SPA.
 *     - Funciones auxiliares para manejo de rutas, módulos y metadatos.
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
                    /** @type {RouteManifest[]} */
                    routeManifest: [],
                    routeModulesBase: '',
                    base: '',
                    draggable: false,
                    /** @type {((name: string) => Promise<void>)|null} */
                    libLoader: null,
                },
                options
            );


            /** @type {Map<string, Route>} - `Cache de módulos de ruta cargados con import()` */
            const routeCache = new Map();



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
             * ---------------------------------------------------------
             * -----  `findManifestEntryByPath(rawPathname = '')`  -----
             * ---------------------------------------------------------
             * - Busca una entrada del manifiesto por pathname normalizado.
             * @param {string} rawPathname - `pathname crudo desde la URL o history state`
             * @returns {RouteManifest|undefined} - `Entrada del manifiesto o undefined`
             */
            const findManifestEntryByPath = (rawPathname = '') => {

                /** @type {string} - `Ruta normalizada para buscar en settings.routeManifest` */
                const normalized = normalize(rawPathname);

                return (settings.routeManifest || []).find(entry => normalize(entry.path) === normalized);

            };


            /**
             * ----------------------------------------------
             * -----  `findManifestEntryById(routeId)`  -----
             * ----------------------------------------------
             * - Busca una entrada del manifiesto por id.
             * @param {string} routeId - `Id de la ruta a buscar`
             * @returns {RouteManifest|undefined} - `Entrada del manifiesto o undefined`
             */
            const findManifestEntryById = (routeId) => {

                return (settings.routeManifest || []).find(entry => entry.id === routeId);

            };


            /**
             * ----------------------------------------
             * -----  `loadRouteModule(file)`  -----
             * ----------------------------------------
             * - Importa dinámicamente un módulo de ruta y lo cachea.
             * @async
             * @param {string} file - `Nombre del archivo de ruta sin extensión`
             * @returns {Promise<Route|undefined>} - `Ruta importada o undefined`
             */
            const loadRouteModule = async (file) => {

                if (routeCache.has(file))
                    return routeCache.get(file);

                try {

                    /** @type {string} - `URL del módulo de ruta` */
                    const moduleUrl = `${settings.routeModulesBase}/${file}.js`;

                    /** @type {Record<string, unknown>} - `Módulo ESM importado` */
                    const mod = await import(moduleUrl);

                    /** @type {Route|undefined} - `Primer export del módulo` */
                    const route = /** @type {Route|undefined} */ (Object.values(mod)[0]);

                    if (route)
                        routeCache.set(file, route);

                    return route;

                } catch (error) {

                    console.error(`Error importando modulo de ruta: ${file}`, error);
                    return undefined;
                }

            };


            /**
             * -----------------------------------
             * -----  `findNotFoundRoute()`  -----
             * -----------------------------------
             * - Obtiene la entrada 404 desde el manifiesto.
             * @returns {RouteManifest|undefined} - `Entrada 404 o undefined`
             */
            const findNotFoundRoute = () => {

                return (settings.routeManifest || []).find(entry =>
                    entry?.id === '404NotFoundPage' ||
                    normalize(entry?.path) === '404' ||
                    /404/i.test(String(entry?.id || ''))
                );

            };


            /**
             * -----------------------------------------
             * -----  `loadNotFoundRoute(source)`  -----
             * -----------------------------------------
             * - Carga la ruta 404 si existe.
             * @async
             * @param {'init'|'click'|'popstate'} source - `Origen de la navegación`
             * @returns {Promise<Route|undefined>} - `Ruta 404 cargada o undefined`
             */

            const loadNotFoundRoute = async (source) => {

                /** @type {RouteManifest|undefined} - `Entrada 404` */
                const entry404 = findNotFoundRoute();

                if (!entry404) {
                    console.error(`No existe ruta 404 configurada (source: ${source}).`);
                    return undefined;
                }

                /** @type {Route|undefined} - `Ruta 404 importada dinámicamente` */
                const route404 = await loadRouteModule(entry404.file);

                if (!route404) {
                    console.error(`No se pudo importar la ruta 404 (source: ${source}).`);
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

                            //  -----  Renderizar Markdown Shiki (código fuente resaltado)  -----
                            await renderMarkdownShiki(route);

                            //  -----  Cargar libs de jQuery UI bajo demanda para esta ruta  -----
                            await loadLibsByRoute(route.libs);

                            //  -----  Habilitar elementos draggables tras cargar el DOM y las libs  -----
                            enableDraggables();

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



            /*
                *  ----------------------------------------------------------------------------------------------------  *
                *  -----  Funciones auxiliares para manejo de URLs en HTML inyectado (src, href, poster, srcset)  -----  *
                *  ----------------------------------------------------------------------------------------------------  *
            */


            /**
             * -----------------------------------------------------
             * -----  `resolveInjectedAssetUrl(value, baseUrl)`  -----
             * -----------------------------------------------------
             * - Normaliza rutas de recursos dentro de HTML inyectado.
             * - Soporta rutas relativas al archivo HTML fuente y rutas absolutas prefijadas con settings.base.
             * @param {string} value - Valor del atributo (src, href, poster, etc.)
             * @param {string} baseUrl - URL del archivo HTML inyectado
             * @returns {string}
             */
            const resolveInjectedAssetUrl = (value, baseUrl) => {

                const raw = String(value || '').trim();

                //  -----  Ignorar anchors, data URI, protocolos externos y especiales  -----
                if (!raw || /^#|^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(raw) || /^(data|blob|mailto|tel|javascript):/i.test(raw))
                    return value;

                //  -----  Si es ruta absoluta desde raíz, prefijar base de la SPA (si aplica)  -----
                if (raw.startsWith('/')) {

                    const base = (settings.base || '').replace(/\/$/, '');

                    if (!base)
                        return raw;

                    if (raw === base || raw.startsWith(`${base}/`))
                        return raw;

                    return `${base}${raw}`;
                }

                //  -----  Resolver rutas relativas contra la URL del HTML inyectado  -----
                try {

                    const resolved = new URL(raw, new URL(baseUrl, window.location.origin));

                    return `${resolved.pathname}${resolved.search}${resolved.hash}`;

                } catch (e) {
                    return value;
                }
            };


            /**
             * -------------------------------------------------------
             * -----  `rewriteInjectedDomUrls(selector, sourceUrl)`  -----
             * -------------------------------------------------------
             * - Reescribe URLs de recursos en el DOM ya inyectado por jQuery .load() para evitar roturas en SPA.
             * @param {string} selector - Selector CSS del contenedor donde se inyectó el HTML.
             * @param {string} sourceUrl - URL del archivo HTML origen.
             * @returns {void}
             */
            const rewriteInjectedDomUrls = (selector, sourceUrl) => {

                $(selector).find('[src],[href],[poster],[srcset]').each(function () {

                    /** @type {JQuery<HTMLElement>} */
                    const $node = $(this);

                    if ($node.attr('src')) {
                        const src = $node.attr('src');
                        if (src)
                            $node.attr('src', resolveInjectedAssetUrl(src, sourceUrl));
                    }

                    if ($node.attr('href')) {
                        const href = $node.attr('href');
                        if (href)
                            $node.attr('href', resolveInjectedAssetUrl(href, sourceUrl));
                    }

                    if ($node.attr('poster')) {
                        const poster = $node.attr('poster');
                        if (poster)
                            $node.attr('poster', resolveInjectedAssetUrl(poster, sourceUrl));
                    }

                    if ($node.attr('srcset')) {

                        const srcset = $node.attr('srcset');

                        if (srcset) {

                            const normalized = srcset
                                .split(',')
                                .map((entry) => {

                                    const value = entry.trim();

                                    if (!value)
                                        return value;

                                    const [srcCandidate, descriptor] = value.split(/\s+/, 2);

                                    const resolvedSrc = resolveInjectedAssetUrl(srcCandidate, sourceUrl);

                                    return descriptor ? `${resolvedSrc} ${descriptor}` : resolvedSrc;
                                })
                                .join(', ');

                            $node.attr('srcset', normalized);
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

                            //  -----  Reescribir rutas de recursos para que funcionen con HTML inyectado en SPA  -----
                            rewriteInjectedDomUrls(selector, url);

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
             * -------------------------------------------
             * -----  `renderMarkdownShiki(route)`  -----
             * -------------------------------------------
             * - Carga los archivos HTML generados con Shiki y los inyecta en los contenedores del DOM.
             * - Cada entrada debe ser un objeto `{ url, target }` donde `target` es un selector CSS
             *   del contenedor (p.ej. `'[data-shiki="codeJs"]'`, `'[data-shiki="codeJs-2"]'`).
             * @async
             * @param {Route} route
             * @returns {Promise<void>}
             */
            const renderMarkdownShiki = async (route) => {

                if (!route.MarkdownShikiHtml || !Array.isArray(route.MarkdownShikiHtml)) return;

                for (const entry of route.MarkdownShikiHtml) {

                    const { url, target } = entry;

                    if (!url || !target) continue;

                    try {

                        const html = await fetch(url).then(r => r.text());

                        /** @type {HTMLElement|null} */
                        const container = document.querySelector(target);

                        if (!container) {
                            console.warn(`⚠️ renderMarkdownShiki: No se encontró contenedor para: ${url}`);
                            continue;
                        }

                        container.innerHTML = html;

                    } catch (error) {
                        console.error(`❌ renderMarkdownShiki: Error cargando: ${url}`, error);
                    }
                }

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
                const pathThemes = `${settings.base}/app/libs/jquery/ui/themes`;

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
                    if (head.querySelector(`link[data-page-style="true"][href*="${href}"]`)) 
                        return;

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
                *  -------------------------------
                *  ----------  SCRIPTS  ----------
                *  -------------------------------
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

                /**  -----  Cargar los nuevos scripts en serie  ----- */
                let scriptQueue = Promise.resolve();

                //  -----  Iterar sobre cada script y cargarlo en orden  -----
                scriptArray.forEach(script => {

                    if (!script?.src)
                        return;

                    scriptQueue = scriptQueue.then(() => loadScripts(script));

                });
            };



            /**
             * ---------------------------------------
             * -----  `loadScripts(scriptUrl)`  ------
             * ---------------------------------------
             * - Carga un script (verifica con HEAD)
             * - Soporta scripts clásicos y módulos ES6 (type="module")
             *  @param {RouteScript} scriptOptions - Configuración del script a cargar
             * @returns {Promise<void>}
             */

            const loadScripts = (scriptOptions) => {

                /** @type {string} - `URL del script a cargar` */
                const scriptUrl = String(scriptOptions?.src || '');

                /** @type {'classic'|'module'} - `Tipo de carga del script` */
                const scriptType = scriptOptions?.type === 'module' ? 'module' : 'classic';

                /** @type {string|null} - `Export opcional del módulo a ejecutar tras la carga` */
                const exportFunctionName = scriptOptions?.exportFunctionName || null;


                //  -----  Devolver una promesa que se resuelve cuando el script se carga o si ocurre un error  -----
                return new Promise((resolve) => {

                    if (!scriptUrl) {
                        resolve();
                        return;
                    }

                    //  -----  Verificar que el script existe con una petición HEAD con el método .ajax()  -----
                    $.ajax({
                        
                        url: scriptUrl,
                        type: 'HEAD',

                        //  -----  Si el script existe cargar como script clásico o módulo ES6  -----
                        success: function () {

                            /** @type {string} - `URL con cache bypass para forzar recarga del script o módulo` */
                            const urlWithCacheBypass = `${scriptUrl}${scriptUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;

                            //  -----  Si el script es un módulo ES6, cargar con import() dinámico  -----
                            if (scriptType === 'module') {

                                import(urlWithCacheBypass)

                                    .then((module) => {

                                        console.log(`Módulo cargado: ${scriptUrl}`);

                                        if (exportFunctionName && typeof module[exportFunctionName] === 'function')
                                            module[exportFunctionName]();

                                        resolve();

                                    })

                                    .catch((error) => {

                                        console.log('\n');
                                        console.error(`Error en módulo ${scriptUrl}:`, error);
                                        console.log('\n');

                                        resolve();

                                    });

                                return;

                            }


                            //  -----  Si el script es clásico, cargar con jQuery.getScript()  -----
                            $.getScript(urlWithCacheBypass)

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


                                    resolve();

                                })

                                //  -----  Manejar errores de carga del script  -----
                                .fail((jqxhr, settings, exception) => {

                                    console.log('\n');
                                    console.error(`Error en ${scriptUrl}:`, exception);
                                    console.log('\n');

                                    resolve();

                                });

                        },

                        //  -----  Si el script no existe, mostrar advertencia en consola  -----
                        error: function () {

                            console.log('\n');
                            console.warn(`No existe el script: ${scriptUrl}`);
                            console.log('\n');

                            resolve();

                        }

                    });

                });

            };



            /**
             * ----------------------------------------
             * -----  `loadLibsByRoute(libs)`  ---------
             * ----------------------------------------
             * @async
             * - Carga los módulos de jQuery UI declarados en `route.libs` bajo demanda.
             * - Se ejecuta después de que el DOM de la ruta está completamente renderizado.
             * - Usa `settings.libLoader` para importar cada módulo por nombre.
             * @param {RouteLib[]|null|undefined} libs - Lista de librerías a cargar para la ruta.
             * @returns {Promise<void>}
             */

            const loadLibsByRoute = async (libs) => {

                if (!libs?.length || typeof settings.libLoader !== 'function')
                    return;

                for (const lib of libs) {

                    if (!lib?.name)
                        continue;

                    try {

                        await settings.libLoader(lib.name);

                    } catch (err) {

                        console.log('\n');
                        console.error(`Error cargando lib "${lib.name}":`, err);
                        console.log('\n');
                    }
                }

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

                /** @type {RouteManifest|undefined} - `Entrada inicial del manifest` */
                const entry = findManifestEntryByPath(initialPath);

                if (entry) {

                    loadRouteModule(entry.file)
                        .then((route) => {

                            if (route)
                                return loadContent(route).then(() => route);

                            return loadNotFoundRoute('init');
                        })
                        .then((route) => {

                            if (!route) {
                                history.replaceState(
                                    { id: null, path: window.location.pathname },
                                    '',
                                    window.location.pathname
                                );
                                return;
                            }

                            const initialPathname = buildPathname(route.path || entry.path || '');

                            history.replaceState(
                                { id: route.id, path: initialPathname, routeFile: entry.file },
                                '',
                                initialPathname
                            );
                        })
                        .catch((err) => {

                            console.error('Error cargando ruta inicial', err);
                            loadNotFoundRoute('init');
                        });

                    return;
                }

                loadNotFoundRoute('init');

                history.replaceState(
                    { id: null, path: window.location.pathname },
                    '',
                    window.location.pathname
                );

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
            $(document).on('click', 'a[data-id]', async function (event) {

                event.preventDefault();

                /** @type {string} - `ID de la ruta desde el atributo data-id` */
                const dataId = $(this).data('id');

                /** @type {RouteManifest|undefined} - `Entrada del manifest correspondiente al data-id` */
                const entry = findManifestEntryById(String(dataId));


                //  -----  ocultar menus tipo navbar compact  -----
                $('.navbar__container').slideUp();

                //  -----  Cargar la ruta si existe  -----
                if (entry) {

                    try {

                        const route = await loadRouteModule(entry.file);

                        if (!route) {
                            await loadNotFoundRoute('click');
                            return;
                        }

                        await loadContent(route);

                    } catch (err) {

                        console.error('Error loadContent (click):', err);
                    }
                }

                //  -----  Si no existe la ruta, cargar la 404  -----
                else
                    await loadNotFoundRoute('click');

            });



            /*
                ---------------------------------------------------
                -----  Manejadores de navegación - popstate  -----
                -----  popstate: manejar atrás / adelante  -------
                ---------------------------------------------------
            */
            window.addEventListener('popstate', async (e) => {

                /** @type {string} - `Ruta normalizada desde el state o la URL actual; usar state.path si está presente, si no usar location.pathname` */
                const raw = e.state?.path ?? window.location.pathname;

                /** @type {RouteManifest|undefined} - `Entrada de manifest para la URL actual` */
                const entry = findManifestEntryByPath(raw);

                //  ----- cargamos la ruta sin empujar otra entrada en el historial  ---------
                //  ----- loadContent(route)  -  hace pushState solo si la ruta difiere  -----
                if (entry) {

                    try {

                        const route = await loadRouteModule(entry.file);

                        if (!route) {
                            await loadNotFoundRoute('popstate');
                            return;
                        }

                        await loadContent(route);

                    } catch (err) {

                        console.error('Error loadContent (popstate):', err);
                    }
                }

                else
                    await loadNotFoundRoute('popstate');

            });



            /*
                -----------------------------------------
                ----------  INICIO DEL PLUGIN  ----------
                -----------------------------------------
            */


            //  -----  Mensaje de plugin cargado  -----
            console.log('\n');
            console.log(
                '%c ✅ ✅ ✅ plugin  -  jquery.spa-with-method-load-from-jquery.js  -  versión 4  -  cargado!!! ✅ ✅ ✅', 
                'background:#3498db; color:gold; padding:20px; font-size:20px; font-weight:bold;'
            );
            console.log('\n');


            //  -----  Inicializar la aplicación SPA  -----
            init();


            //  -----  Retornar this para encadenamiento  -----
            return this;

        };


    })(jQuery);


};
