/*
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
    *  -----  /jquery.spa-with-method-load-from-jquery.js  --  /src/plugins/spa-with-method-load-from-jquery/v4/jquery.spa-with-method-load-from-jquery.js  -----  *
    *  ----------------------------------------------------------------------------------------------------------------------------------------------------------  *
*/


//*  -----  Referencias de tipos  -----

/// <reference path="../../../../types/config-options-spa.d.js" />
/// <reference path="../../../../types/route-manifest.d.js" />
/// <reference path="../../../../types/route-components.d.js" />
/// <reference path="../../../../types/route-script.d.js" />
/// <reference path="../../../../types/route-style.d.js" />
/// <reference path="../../../../types/route-lib.d.js" />
/// <reference path="../../../../types/route.d.js" />



/**
 *  ----------------------------------------------------
 *  -----  `spaWithMethodLoadFromJQueryPlugins()`  -----
 *  ----------------------------------------------------
 * 
 * @version `5.0.0`
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
 *     - Notificación de carga de ruta mediante eventos personalizados (`spa:route-loaded`, `spa:first-route-loaded`, `spa:route-load-error`).
 *     - Manejo de errores en la carga de componentes y rutas.
 *     - Soporte para scripts clásicos y módulos ES6 (type="module").
 *     - Reescritura de URLs en HTML inyectado para evitar roturas en la SPA.
 *     - Funciones auxiliares para manejo de rutas, módulos y metadatos.
 */

export const spaWithMethodLoadFromJQueryPlugins = () => {


    /*
        *  ---------------------------------------------------------------------------
        *  -----  Función Anónima Autoejecutable que Encapsula el plugin jQuery  -----
        *  ---------------------------------------------------------------------------
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


            /** @type {Set<string>} - `Registro de módulos de ruta cuyo import() falló, para evitar reintentos repetidos sobre rutas rotas` */
            const brokenRouteModules = new Set();


            /**
             * - `Clave de cache-busting ESTABLE durante toda la sesión (se evalúa una sola vez al cargar el plugin).`
             * - `Con una clave fija por sesión, el navegador reutiliza la caché al revisitar rutas; una recarga`
             * - `completa (F5 o live-reload en desarrollo) genera una nueva sesión y, por tanto, recursos frescos.`
             */
            const _sessionAssetKey = Date.now();


            /**
             * - `Contador incremental de importaciones de módulos ESM (clave de re-evaluación por navegación).`
             * - `Los módulos ESM se cachean en el "module registry" del navegador por URL: importar la MISMA URL`
             * - `NO vuelve a ejecutar su código de nivel superior. Con una clave única por importación`
             * - `forzamos la re-evaluación (re-render) en cada navegación para módulos sin exportFunctionName.`
             */
            let _moduleReloadSeq = 0;


            /**
             * - `Indica si hay una carga de ruta en curso (para el guard de navegaciones concurrentes).`
             * - `jQuery.load()/.ajax() no exponen un AbortController como fetch(), así que en vez de abortar`
             * - `la petición en curso usamos un "token" incremental: la navegación cuyo token deja de ser el`
             * - `más reciente se descarta al terminar su precarga (FASE 1), sin llegar a mutar el DOM.`
             */
            let isNavigating = false;


            /** @type {number} - `Token incremental de la navegación en curso, usado para descartar respuestas obsoletas` */
            let navigationToken = 0;


            /*
                -------------------------------------------------------------------
                ----------  Normalización de rutas, pathnames y slashes  ----------
                -------------------------------------------------------------------
            */


            /**
             * ---------------------------------------------------
             * -----  `collapsePathnameSlashes(pathname = '')`  -----
             * ---------------------------------------------------
             * - Colapsa barras duplicadas en un pathname del navegador.
             * - Evita valores como `//mis-plugins-spa/...` que history API
             *   interpreta como URL protocol-relative (origen distinto → SecurityError).
             * @param {string} pathname - Pathname crudo
             * @returns {string} - Pathname con una sola barra inicial
             */
            const collapsePathnameSlashes = (pathname = '') => {

                let p = String(pathname || '');

                if (!p)
                    return '/';

                p = p.replace(/\/+/g, '/');

                if (!p.startsWith('/'))
                    p = `/${p}`;

                return p;

            };


            /**
             * ---------------------------------------------------
             * -----  `safeHistoryPathname(pathname = '')`  -----
             * ---------------------------------------------------
             * - Pathname seguro para history.pushState/replaceState (misma origin).
             * @param {string} pathname - Pathname crudo o relativo
             * @returns {string} - Pathname absoluto normalizado
             */
            const safeHistoryPathname = (pathname = '') => {

                try {

                    return new URL(collapsePathnameSlashes(pathname), location.origin).pathname;

                } catch (e) {

                    return collapsePathnameSlashes(pathname);

                }

            };


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

                //  -----  colapsar slashes duplicados en pathnames absolutos del navegador  -----
                if (s.startsWith('/'))
                    s = collapsePathnameSlashes(s);

                //  -----  quitar base si está presente (también con base/path colapsados)  -----
                if (base) {

                    const normalizedBase = collapsePathnameSlashes(base).replace(/\/$/, '');

                    if (normalizedBase && s.startsWith(normalizedBase))
                        s = s.slice(normalizedBase.length);
                    else if (s.startsWith(base))
                        s = s.slice(base.length);

                }

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
                const absoluteBase = base.startsWith('/') ? base : `/${base}`;

                try {

                    return safeHistoryPathname(new URL(absoluteBase + trimmed, location.origin).pathname);

                } catch (e) {

                    //  -----  fallback básico  -----
                    return safeHistoryPathname(absoluteBase + trimmed);

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

                //  -----  Si el módulo ya falló anteriormente, no reintentar el import() para evitar ciclos de error repetidos  -----
                if (brokenRouteModules.has(file)) {
                    console.warn(`⚠️ Módulo de ruta previamente roto, se omite reimport: ${file}`);
                    return undefined;
                }

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

                    //  -----  Registrar el módulo como roto para no reintentar import() en futuras navegaciones  -----
                    brokenRouteModules.add(file);

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
                    normalize(entry?.path) === '404-not-found' ||
                    /404/i.test(String(entry?.id || ''))
                );

            };


            /**
             * ----------------------------------------------------------
             * -----  `notifyRouteLoadError(route, error, source)`  -----
             * ----------------------------------------------------------
             * - Notifica un error durante la carga de ruta.
             * - Emite `spa:route-load-error` con detalles del fallo.
             * - Si ocurre en la carga inicial, desbloquea el loader con fallback seguro.
             * @param {Route|undefined} route
             * @param {unknown} error
             * @param {string} source
             */
            const notifyRouteLoadError = (route, error, source) => {

                console.error('Error cargando ruta SPA:', error);

                document.dispatchEvent(
                    new CustomEvent('spa:route-load-error', {
                        detail: {
                            id: route?.id || null,
                            path: route?.path || window.location.pathname,
                            source,
                            message: error instanceof Error ? error.message : String(error || 'Error desconocido')
                        }
                    })
                );

                if (!window.__spaFirstRouteLoaded) {
                    window.__spaFirstRouteLoaded = true;
                    document.dispatchEvent(new CustomEvent('spa:first-route-loaded'));
                }

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
                    notifyRouteLoadError(undefined, new Error('No existe ruta 404 configurada.'), source);
                    return undefined;
                }

                /** @type {Route|undefined} - `Ruta 404 importada dinámicamente` */
                const route404 = await loadRouteModule(entry404.file);

                if (!route404) {
                    console.error(`No se pudo importar la ruta 404 (source: ${source}).`);
                    notifyRouteLoadError(undefined, new Error('No se pudo importar la ruta 404.'), source);
                    return undefined;
                }

                try {

                    await loadContent(route404, source);
                    return route404;

                } catch (err) {

                    console.error(`Error loadContent 404 (${source}):`, err);
                    notifyRouteLoadError(route404, err, source);
                    return undefined;
                }

            };


            /*
                *  ---------------------------------------------------------------  *
                *  -----  Carga de contenido dinámico, Componentes del DOM   -----  *
                *  -----  y Metadatos de la Ruta (título, favicon, CSS, JS)  -----  *
                *  ---------------------------------------------------------------  *
            */


            /**
             * ----------------------------------------
             * -----  `notifyRouteLoaded(route)`  -----
             * ----------------------------------------
             * - Notifica que una ruta SPA terminó de renderizarse.
             * - Emite `spa:route-loaded` en cada navegación.
             * - Emite `spa:first-route-loaded` una sola vez al arrancar.
             * @param {Route} route - Ruta que acaba de cargarse.
             */

            const notifyRouteLoaded = (route) => {

                document.dispatchEvent(
                    new CustomEvent('spa:route-loaded', {
                        detail: {
                            id: route?.id || null,
                            path: route?.path || window.location.pathname
                        }
                    })
                );

                if (!window.__spaFirstRouteLoaded) {
                    window.__spaFirstRouteLoaded = true;
                    document.dispatchEvent(new CustomEvent('spa:first-route-loaded'));
                }

            };


            /**
             * ----------------------------------
             * -----  `loadContent(route)`  -----
             * ----------------------------------
             *
             * Estrategia en 3 fases para soportar View Transitions sin TimeoutError:
             *   1) Precargar TODO el HTML con el método `.load()` de jQuery FUERA de la transición (async).
             *   2) Mutar el DOM DENTRO de `document.startViewTransition` con un callback
             *      SÍNCRONO, de modo que Chrome no aborta la animación por timeout.
             *   3) Cargar los scripts dinámicos DESPUÉS de la transición
             *      (necesitan el DOM ya mutado).
             * Si el navegador no soporta View Transitions, la mutación se aplica directamente.
             *
             * `Guard de navegación`: jQuery no expone un AbortController como fetch(), así que en vez de
             * abortar la petición en curso (FASE 1) usamos un "token" incremental (`navigationToken`):
             * si durante la precarga se inicia una navegación más reciente, la respuesta de la anterior
             * se descarta sin llegar a mutar el DOM (evita "parpadeos" ante clics rápidos/atrás-adelante).
             *
             * @async
             * @param {Route} route - `Ruta a cargar`
             * @param {'init'|'click'|'popstate'} [source='click'] - `Origen de la navegación`
             * @returns {Promise<void>}
             */

            const loadContent = async (route, source = 'click') => {

                if (!route) {
                    console.warn('loadContent: ruta inválida');
                    return;
                }

                //  -----  Token de esta navegación: si cambia antes de terminar FASE 1, la descartamos  -----
                const myNavigationToken = ++navigationToken;
                isNavigating = true;

                try {

                    //  ========================================================================================
                    //  FASE 1 — Precargar TODO el HTML con el método `.load()` de jQuery FUERA de la View Transition
                    //  ========================================================================================
                    const payload = await preloadRouteContent(route);

                    //  -----  Si mientras precargábamos se disparó una navegación más reciente, descartar  -----
                    if (myNavigationToken !== navigationToken) {
                        console.info(`⏭️ Navegación descartada (obsoleta): ${route?.id || '(sin id)'}`);
                        return;
                    }

                    //  ========================================================================================
                    //  FASE 2 — Mutar el DOM DENTRO de startViewTransition con callback SÍNCRONO
                    //  ========================================================================================

                    /** Vuelca el payload precargado al DOM de forma síncrona */
                    const mutate = () => applyPreloadedContent(payload, route, source);

                    if (document.startViewTransition) {

                        const viewTransition = document.startViewTransition(() => mutate());

                        //  -----  Esperar solo a que el DOM quede mutado, NO a que termine la animación  -----
                        await viewTransition.updateCallbackDone.catch(() => { });

                        //  -----  La animación finaliza en segundo plano sin bloquear FASE 3  -----
                        viewTransition.finished.catch(() => { });

                    } else {

                        mutate();

                    }

                    //  ========================================================================================
                    //  FASE 3 — Cargar scripts dinámicos con el DOM ya mutado
                    //  ========================================================================================
                    await applyRouteMetaAsync(route);

                    notifyRouteLoaded(route);

                } catch (err) {

                    notifyRouteLoadError(route, err, source);
                    throw err;

                } finally {

                    //  -----  Solo liberar el flag si esta sigue siendo la navegación más reciente  -----
                    if (myNavigationToken === navigationToken)
                        isNavigating = false;
                }

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
             * --------------------------------------------------------
             * -----  `rewriteInjectedHtmlUrls(html, sourceUrl)`  -----
             * --------------------------------------------------------
             * - Reescribe URLs de recursos (src, href, poster, srcset) en un STRING de HTML
             *   ANTES de insertarlo en el DOM real, usando `<template>` como "parser" inerte:
             *   el contenido de `<template>` (`.content`) NO tiene "browsing context", así que
             *   el navegador NO intenta descargar imágenes mientras lo parseamos aquí.
             * - `Por qué hace falta`: si se insertara el HTML SIN corregir (con rutas relativas
             *   tipo `../../../assets/...`) en un elemento "vivo" —aunque esté desconectado del
             *   DOM—, el navegador SÍ intenta resolverlas y descargarlas de inmediato contra la
             *   URL de la página (ruta incorrecta), y al corregirlas después se dispara una
             *   SEGUNDA petición con la ruta correcta: de ahí las peticiones de `.svg` "duplicadas"
             *   (una con 404/ruta mala + otra correcta) que se veían en la consola del navegador.
             *   Reescribiendo el string primero, solo se dispara UNA petición (ya con la URL buena)
             *   cuando el HTML se inyecta en el contenedor real durante la FASE 2.
             * @param {string} html - HTML crudo devuelto por `.load()`.
             * @param {string} sourceUrl - URL del archivo HTML origen (usada para resolver rutas relativas).
             * @returns {string} - HTML con las URLs ya corregidas, listo para insertar en el DOM real.
             */
            const rewriteInjectedHtmlUrls = (html, sourceUrl) => {

                /** @type {HTMLTemplateElement} - `.content` es un DocumentFragment inerte (sin browsing context)` */
                const template = document.createElement('template');

                template.innerHTML = html;

                template.content.querySelectorAll('[src],[href],[poster],[srcset]').forEach((node) => {

                    if (node.hasAttribute('src')) {
                        const src = node.getAttribute('src');
                        if (src)
                            node.setAttribute('src', resolveInjectedAssetUrl(src, sourceUrl));
                    }

                    if (node.hasAttribute('href')) {
                        const href = node.getAttribute('href');
                        if (href)
                            node.setAttribute('href', resolveInjectedAssetUrl(href, sourceUrl));
                    }

                    if (node.hasAttribute('poster')) {
                        const poster = node.getAttribute('poster');
                        if (poster)
                            node.setAttribute('poster', resolveInjectedAssetUrl(poster, sourceUrl));
                    }

                    if (node.hasAttribute('srcset')) {

                        const srcset = node.getAttribute('srcset');

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

                            node.setAttribute('srcset', normalized);
                        }
                    }

                });

                return template.innerHTML;

            };


            /**
             * -------------------------------------
             * -----  `fetchHtmlContent(url)`  -----
             * -------------------------------------
             * - `FASE 1` — Descarga HTML como string usando el método `.load()` de jQuery
             *   (filosofía del plugin), pero SIN provocar efectos secundarios en el DOM real:
             *   `.load()` se invoca sobre un `<div>` creado en un DOCUMENTO INERTE (vía
             *   `document.implementation.createHTMLDocument()`, sin "browsing context"), así el
             *   volcado interno que hace jQuery (`self.html(responseText)`) NO dispara peticiones
             *   de red por imágenes con rutas relativas todavía sin corregir.
             * - Tras la descarga, reescribe las URLs del HTML (`rewriteInjectedHtmlUrls`) para que,
             *   al insertarse en FASE 2 en el contenedor real, solo se dispare UNA petición por
             *   recurso (ya con la ruta correcta) — evita los `.svg` "duplicados"/erróneos en consola.
             * - En caso de error, devuelve un HTML de fallback (mismo criterio que v4)
             *   en vez de rechazar la promesa, para no abortar el resto de la precarga.
             * @param {string} url - URL del archivo HTML a descargar.
             * @returns {Promise<string>} - HTML (con URLs ya corregidas) como string, listo para `.html()`.
             */

            const fetchHtmlContent = (url) => {

                return new Promise((resolve) => {

                    
                    /** @type {JQuery<HTMLDivElement>} - `Buffer inerte: .load() fetch + parsea aquí, sin tocar la página real ni disparar fetches erróneos` */
                    const $buffer = $(document.implementation.createHTMLDocument('').createElement('div'));

                    
                    /*
                        *  -------------------------------  *
                        *  -----  .load() de jQuery  -----  *
                        *  -------------------------------  *
                    */

                    $buffer.load(url, function (responseText, textStatus, xhr) {

                        if (textStatus === 'error') {

                            console.error(`❌ fetchHtmlContent: ${xhr?.status || ''} ${xhr?.statusText || ''} → ${url}`);

                            resolve(`<p>Error ${xhr?.status || ''} al cargar: ${url}</p>`);
                            return;

                        }

                        resolve(rewriteInjectedHtmlUrls(String(responseText ?? ''), url));

                    });

                });

            };


            /**
             * -----------------------------------
             * -----  `RoutePreloadPayload`  -----
             * -----------------------------------
             * @typedef {Object} RoutePreloadPayload - Contenido HTML precargado por `preloadRouteContent` (FASE 1),
             *   listo para inyectar de forma síncrona en `applyPreloadedContent` (FASE 2).
             * @property {Array<{selector: string, hide: true} | {selector: string, url: string, html: string, hide?: false}>} components
             * @property {Array<{target: string, url: string, html: string}>} pagesComponents
             * @property {Array<{target: string, url: string, html: string}>} markdownShikiHtml
             */

            /**
             * -----------------------------------------------------
             * -----  `preloadRouteContent(route)`  -----
             * -----------------------------------------------------
             * FASE 1 — Descarga en paralelo TODO el HTML de la ruta
             * (components, pagesComponents, MarkdownShikiHtml) vía `.load()`
             * de jQuery, FUERA de cualquier View Transition para evitar TimeoutError.
             *
             * - `route.components` es un objeto `{ "#selector": url }`.
             * - `route.pagesComponents` es un array `{ url, target }[]`.
             * - `route.MarkdownShikiHtml` es un array `{ fileName, urlOutput, target }[]`
             *   (la URL final se construye como `${urlOutput}/${fileName}`).
             *
             * @async
             * @param {Route} route - Ruta a precargar.
             * @returns {Promise<RoutePreloadPayload>} payload con el HTML listo para inyectar.
             */

            const preloadRouteContent = async (route) => {

                /** @type {RoutePreloadPayload} */
                const payload = {
                    components: [],
                    pagesComponents: [],
                    markdownShikiHtml: []
                };

                //  -----  (1) Componentes del layout: objeto { "#selector": url }  -----
                const preloadComponents = async () => {

                    if (!route.components || typeof route.components !== 'object') return;

                    await Promise.all(
                        Object.entries(route.components).map(async ([selector, url]) => {

                            if (!url) {
                                payload.components.push({ selector, hide: true });
                                return;
                            }

                            const html = await fetchHtmlContent(url);
                            payload.components.push({ selector, url, html });

                        })
                    );

                };

                //  -----  (2) pagesComponents: array de { url, target } — viven DENTRO del HTML de (1)  -----
                const preloadPageComponents = async () => {

                    if (!Array.isArray(route.pagesComponents)) return;

                    await Promise.all(
                        route.pagesComponents.map(async (entry) => {

                            const url = entry?.url;
                            const target = entry?.target;

                            if (!url || !target) {
                                console.warn('⚠️ Entrada pagesComponents incompleta (falta url o target). Se omite.');
                                return;
                            }

                            const html = await fetchHtmlContent(url);
                            payload.pagesComponents.push({ target, url, html });

                        })
                    );

                };

                //  -----  (3) MarkdownShikiHtml: array de { fileName, urlOutput, target } — viven DENTRO de (2)  -----
                const preloadMarkdownShiki = async () => {

                    if (!Array.isArray(route.MarkdownShikiHtml)) return;

                    await Promise.all(
                        route.MarkdownShikiHtml.map(async (entry) => {

                            const fileName = entry?.fileName;
                            const urlOutput = entry?.urlOutput;
                            const target = entry?.target;

                            if (!fileName || !urlOutput || !target) {
                                console.warn('⚠️ Entrada MarkdownShikiHtml incompleta (falta fileName, urlOutput o target). Se omite.');
                                return;
                            }

                            /** @type {string} - URL final del archivo Shiki a cargar */
                            const url = `${urlOutput}/${fileName}`;

                            const html = await fetchHtmlContent(url);
                            payload.markdownShikiHtml.push({ target, url, html });

                        })
                    );

                };

                //  -----  Descargar los tres niveles en paralelo entre sí (no hay dependencia en la descarga)  -----
                await Promise.all([
                    preloadComponents(),
                    preloadPageComponents(),
                    preloadMarkdownShiki()
                ]);

                return payload;

            };


            /**
             * ---------------------------------------------------
             * -----  `applyPreloadedContent(payload, route, source)`  -----
             * ---------------------------------------------------
             * FASE 2 — Muta el DOM de forma SÍNCRONA con el HTML
             * ya precargado (solo `.html()`/`.show()`/`.hide()`, sin fetch ni await).
             * Debe ejecutarse dentro del callback de `document.startViewTransition`
             * para que Chrome NO aborte la animación por timeout.
             *
             * Inyecta en ORDEN DE DEPENDENCIA para que los contenedores anidados
             * existan antes de usarse:
             *   1) components (layoutHeader/layoutNavbar/layoutMain/layoutFooter...) → ya están en el DOM.
             *   2) pagesComponents → viven DENTRO del HTML de (1), se resuelven tras inyectar (1).
             *   3) MarkdownShikiHtml → viven DENTRO del HTML de (2), se resuelven tras inyectar (2).
             *
             * @param {RoutePreloadPayload} payload - HTML precargado por `preloadRouteContent`.
             * @param {Route} route - Ruta actual.
             * @param {'init'|'click'|'popstate'} source - Origen de la navegación.
             */

            const applyPreloadedContent = (payload, route, source) => {

                //  -----  Caso especial: ruta sin componentes  -----
                if (!route.components || Object.keys(route.components).length === 0) {

                    console.warn(`applyPreloadedContent: la ruta ${route.id} no tiene 'components'`);
                    applyRouteMetaSync(route, source);
                    return;

                }

                //  -----  (1) Inyectar components (síncrono) — el HTML ya trae las URLs corregidas (FASE 1)  -----
                for (const item of payload.components) {

                    const $container = $(item.selector);

                    if (item.hide) {
                        $container.hide().empty();
                        continue;
                    }

                    $container.show().html(item.html);

                }

                //  -----  Inicializar acciones del navbar (protegido si no existe en la vista)  -----
                try {
                    actionsNavbar();
                } catch (err) {
                    console.warn('actionsNavbar falló (probablemente falta .navbar__container en la vista):', err);
                }

                //  -----  (2) Inyectar pagesComponents (síncrono) — sus contenedores ya existen tras (1)  -----
                for (const { target, html } of payload.pagesComponents) {

                    const $container = $(target);

                    if (!$container.length) {
                        console.warn(`⚠️ Contenedor no encontrado para pageComponent: ${target} — se omite.`);
                        continue;
                    }

                    $container.show().html(html);

                }

                //  -----  (3) Inyectar MarkdownShikiHtml (síncrono) — sus contenedores ya existen tras (2)  -----
                for (const { target, html } of payload.markdownShikiHtml) {

                    const $container = $(target);

                    if (!$container.length) {
                        console.warn(`⚠️ Contenedor no encontrado para Markdown Shiki: ${target} — se omite.`);
                        continue;
                    }

                    $container.html(html);

                }

                //  -----  Aplicar metadatos síncronos (título, favicon, pushState, CSS)  -----
                applyRouteMetaSync(route, source);

            };



            /**
             * ------------------------------------------
             * -----  `applyRouteMetaSync(route, source)`  -----
             * ------------------------------------------
             * - Aplica metadatos SÍNCRONOS de la ruta dentro de Phase 2.
             * - Seguro para ejecutarse dentro del callback de startViewTransition.
             * @param {Route} route - Ruta actual.
             * @param {'init'|'click'|'popstate'} [source='click'] - Origen de navegación.
             */

            const applyRouteMetaSync = (route, source = 'click') => {

                //  -----  Título del Header y Footer  -----
                if (route.headerTitle)
                    addTitleHeaderFooter(route.headerTitle);

                //  -----  Título de la pestaña  -----
                if (route.pageTitle)
                    document.title = route.pageTitle;

                //  -----  Favicon  -----
                if (route.favicon)
                    updateFavicon(route.favicon);

                //  -----  CSS (crear <link> es síncrono)  -----
                if (route.styles)
                    loadStylesheetByPage(route.styles);


                /*
                    --------------------------------------------
                    -----  pushState seguro (normalizado)  -----
                    --------------------------------------------
                */

                /** @type {string} - `Nueva pathname para la ruta` */
                const newPathname = buildPathname(route.path || '');

                /**
                 * - Compara dos pathnames ignorando el trailing slash final.
                 * @param {string} p
                 * @returns {string}
                 */
                const stripTrailingSlash = (p) => {
                    const s = String(p || '').replace(/\/$/, '');
                    return s === '' ? '/' : s;
                };

                //  -----  Solo 'click' empuja historial; 'init' y 'popstate' no  -----
                if (source === 'click'
                    && stripTrailingSlash(safeHistoryPathname(window.location.pathname)) !== stripTrailingSlash(newPathname)) {

                    /** @type {RouteManifest|undefined} */
                    const manifestEntry = findManifestEntryById(route.id);

                    history.pushState(
                        {
                            id: route.id,
                            path: newPathname,
                            routeFile: manifestEntry?.file || null,
                            favicon: route.favicon || null
                        },
                        '',
                        newPathname
                    );

                    console.log('\n');
                    console.warn('navigate ==>', route.id, newPathname);
                    console.log('\n');

                }

            };


            /**
             * -----------------------------------------
             * -----  `applyRouteMetaAsync(route)`  -----
             * -----------------------------------------
             * FASE 3 — Carga scripts y libs DESPUÉS de que el DOM
             * ya está mutado y la View Transition ha terminado.
             * @async
             * @param {Route} route - Ruta actual.
             * @returns {Promise<void>}
             */

            const applyRouteMetaAsync = async (route) => {

                //  -----  Cargar libs de jQuery UI bajo demanda (incluye widget tooltip)  -----
                await loadLibsByRoute(route.libs);

                //  -----  Cambio de themes jQuery UI (requiere tooltip de jQuery UI ya cargado)  -----
                try {
                    changeThemesJQueryUI();
                } catch (err) {
                    console.warn('changeThemesJQueryUI falló:', err);
                }

                //  -----  Habilitar elementos draggables tras cargar las libs  -----
                enableDraggables();

                //  -----  Cargar scripts dinámicos de la ruta  -----
                if (route.scripts)
                    await loadScriptsByPage(route.scripts);

            };



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
                *  --------------------------------------------------------------------------------  *
                *  -----  Elementos Draggables, Acciones del Navbar, Actualizar Favicon  ----------  *
                *  --------------------------------------------------------------------------------  *
            */


            /**
             *  -----------------------------------
             *  -----  `enableDraggables()`   -----
             *  -----------------------------------
             * - Habilita la funcionalidad de elementos arrastrables.
             * - Busca cualquier elemento con la clase `.draggable` y aplica .draggable() (jQuery UI).
             * - Esto evita depender de selectores rígidos.
             */

            const enableDraggables = () => {

                try {

                    //  -----  Iterar sobre cada elemento con clase .draggable y aplicar jQuery UI draggable.  -----
                    $('.draggable').each(function () {

                        const $drag = $(this);

                        //  -----  Si el método draggable está disponible, aplicarlo al elemento actual  -----
                        if (!$drag.draggable) {
                            return;
                        }

                        //  -----  Handle: solo el título arrastra, el resto del menú permite scroll táctil  -----
                        const handle = $drag.data('drag-handle') || '.navbar__title, .navbar-themes-jquery-ui__title';

                        $drag.draggable({
                            scroll: false,
                            handle: handle
                        });

                        //  -----  Asegura scroll vertical nativo en táctil dentro del contenedor  -----
                        $drag.css('touch-action', 'pan-y');
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

                /** @type {number} - `Duración de apertura/cierre del menú (ms)` */
                const menuAnimDuration = 250;


                /**
                 * ------------------------------------
                 * -----  `getNavbarFullHeight()`  -----
                 * ------------------------------------
                 * - Devuelve la altura visible del viewport para el menú principal.
                 * @return {number} - Altura en píxeles.
                 */
                const getNavbarFullHeight = () => {
                    return window.innerHeight;
                };


                /**
                 * --------------------------------
                 * -----  `getHeaderHeight()`  -----
                 * --------------------------------
                 * - Devuelve la altura real de `.header__container`.
                 * @return {number} - Altura en píxeles.
                 */
                const getHeaderHeight = () => {
                    return $('.header__container').outerHeight() || 0;
                };


                /**
                 * --------------------------------------
                 * -----  `isThemesFullViewport()`  -----
                 * --------------------------------------
                 * - Indica si el menú themes debe ocupar el 100% del viewport.
                 * @return {boolean} - True en pantallas menores de 480px.
                 */
                const isThemesFullViewport = () => {
                    return window.matchMedia('(max-width: 479px)').matches;
                };


                /**
                 * --------------------------------------
                 * -----  `getThemesMenuHeight()`  -----
                 * --------------------------------------
                 * - Altura del menú themes: viewport completo bajo 480px, si no la del header.
                 * @return {number} - Altura en píxeles.
                 */
                const getThemesMenuHeight = () => {
                    if (isThemesFullViewport()) {
                        return getNavbarFullHeight();
                    }

                    return getHeaderHeight();
                };


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

                    //  -----  el menú principal ocupa el 100% de la altura del viewport  -----
                    if (menu === menuMain) {

                        const fullHeight = getNavbarFullHeight();

                        menu.container
                            .stop(true, true)
                            .css({
                                display: 'flex',
                                height: 0,
                                minHeight: 0,
                                maxHeight: 'none',
                                overflowX: 'hidden',
                                overflowY: 'hidden'
                            })
                            .animate(
                                { height: fullHeight },
                                menuAnimDuration,
                                function () {
                                    const $menu = $(this);

                                    $menu.css({
                                        display: 'flex',
                                        height: fullHeight,
                                        maxHeight: fullHeight,
                                        overflowX: 'hidden',
                                        overflowY: 'auto'
                                    });

                                    //  -----  jQuery.animate restaura overflow:hidden después del complete  -----
                                    window.setTimeout(() => {
                                        $menu.css({
                                            overflowX: 'hidden',
                                            overflowY: 'auto'
                                        });
                                    }, 0);
                                }
                            );

                    } else {

                        //  -----  < 480px: 100% del viewport · desde 480px: altura del header  -----
                        const themesHeight = getThemesMenuHeight();

                        menu.container
                            .stop(true, true)
                            .css({
                                display: 'flex',
                                width: '100%',
                                height: 0,
                                minHeight: 0,
                                maxHeight: 'none',
                                overflowX: 'hidden',
                                overflowY: 'hidden'
                            })
                            .animate(
                                { height: themesHeight },
                                menuAnimDuration,
                                function () {
                                    const $menu = $(this);

                                    $menu.css({
                                        display: 'flex',
                                        width: '100%',
                                        height: themesHeight,
                                        maxHeight: themesHeight,
                                        overflow: 'hidden'
                                    });
                                }
                            );

                    }

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

                    //  -----  el menú principal anima de 100dvh a 0  -----
                    if (menu === menuMain) {

                        menu.container
                            .stop(true, true)
                            .css({ overflow: 'hidden', minHeight: 0 })
                            .animate(
                                { height: 0 },
                                menuAnimDuration,
                                function () {
                                    $(this)
                                        .hide()
                                        .css({
                                            height: '',
                                            maxHeight: '',
                                            minHeight: '',
                                            overflow: ''
                                        });
                                }
                            );

                    } else {

                        //  -----  el menú themes anima desde la altura del header a 0  -----
                        menu.container
                            .stop(true, true)
                            .css({ overflow: 'hidden', minHeight: 0 })
                            .animate(
                                { height: 0 },
                                menuAnimDuration,
                                function () {
                                    $(this)
                                        .hide()
                                        .css({
                                            height: '',
                                            maxHeight: '',
                                            minHeight: '',
                                            overflow: '',
                                            width: ''
                                        });
                                }
                            );

                    }

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
                //  -----  Evitar handlers duplicados al recargar o navegar entre rutas  -----
                $(document).off('.spaNavbar');
                $(window).off('.spaNavbar');

                //  -----  si un menú está abierto y cambia el viewport, reajustar su altura  -----
                $(window).on('resize.spaNavbar', function () {

                    //  -----  menú principal: 100% de la altura del viewport  -----
                    if (menuMain.container.is(':visible')) {

                        const fullHeight = getNavbarFullHeight();

                        menuMain.container
                            .stop(true, true)
                            .css({
                                height: fullHeight,
                                maxHeight: fullHeight,
                                overflowX: 'hidden',
                                overflowY: 'auto'
                            });

                    }

                    //  -----  menú themes: 100% viewport < 480px, si no altura del header  -----
                    if (menuThemes.container.is(':visible')) {

                        const themesHeight = getThemesMenuHeight();

                        menuThemes.container
                            .stop(true, true)
                            .css({
                                width: '100%',
                                height: themesHeight,
                                maxHeight: themesHeight,
                                overflow: 'hidden'
                            });

                    }

                });

                //  -----  Abrir menú principal  -----
                $(document).on("click.spaNavbar", ".navbar__btn-open", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  abrir menú principal  -----
                    openMenu(menuMain);

                    //  -----  cerrar menú themes UI  -----
                    closeMenu(menuThemes);

                });


                //  -----  Cerrar menú principal  -----
                $(document).on("click.spaNavbar", ".navbar__btn-close", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  cerrar menú principal  -----
                    closeMenu(menuMain);

                });


                //  -----  Abrir menú themes UI  -----
                $(document).on("click.spaNavbar", ".navbar-ui__btn-open", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  abrir menú themes UI  -----
                    openMenu(menuThemes);

                    //  -----  cerrar menú principal  -----
                    closeMenu(menuMain);

                });


                //  -----  Cerrar menú themes UI  -----
                $(document).on("click.spaNavbar", ".navbar-ui__btn-close", function (e) {

                    //  -----  prevenir propagación del click  -----
                    e.stopPropagation();

                    //  -----  cerrar menú themes UI  -----
                    closeMenu(menuThemes);

                });


                // -----  Click Fuera de los Menús  -----
                $(document).on("click.spaNavbar", function (e) {


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

                if (!$linksThemesContainer.length || !$theme.length)
                    return;

                /** @type {string} - `Path de las themes de jQuery UI` */
                const pathThemes = `${settings.base}/app/libs/jquery/ui/themes`;

                console.log('\n');
                console.warn(`-----  jQuery UI Themes Path: ${pathThemes}  -----`);
                console.log('\n');


                //  -----  Evitar handlers duplicados al recargar o navegar entre rutas  -----
                $linksThemesContainer.off('click.spaThemeChange', 'a');


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
                $linksThemesContainer.on("click.spaThemeChange", "a", function (e) {


                    //  -----  prevenir acción por defecto del link  -----
                    e.preventDefault();


                    /** @type {string|null|undefined} - `Nombre del theme seleccionado` */
                    const themeName = $(this).data("theme");

                    if (!themeName)
                        return;

                    //  -----  prevenir propagación antes de mutar DOM (evita cierre del menú / tooltips)  -----
                    e.stopPropagation();

                    //  -----  Cambiar href del link del theme  -----
                    $theme.attr("href", `${pathThemes}/${themeName}/jquery-ui.min.css`);

                    console.log('\n');
                    console.warn(`-----  Theme changed to: ${themeName}  -----`);
                    console.log('\n');

                    //  -----  desactivar clase active de todos los links  -----
                    disabledActive();

                    //  -----  marcar link como activo  -----
                    $(this).addClass("active");

                });

            }

            


            /**
             * --------------------------------------
             * -----  `updateFavicon(favicon)`  -----
             * --------------------------------------
             *
             * - Actualiza el favicon del documento.
             * - Solo modifica el `href` cuando el favicon cambia realmente;
             *   esto evita el parpadeo (y la recarga innecesaria) producido
             *   al inyectar un `?t=Date.now()` distinto en cada navegación,
             *   incluso en popstate/atrás. El navegador ya cachea por URL:
             *   cambiar de `html-icon.svg` a `css-icon.svg` refresca el icono,
             *   pero repetir la misma URL no vuelca a descargar.
             *
             * @param {string} favicon - URL del nuevo favicon a cargar
             */

            const updateFavicon = (favicon) => {


                //  -----  URL absoluta del nuevo favicon, resuelta contra baseURI: permite comparar de forma fiable ruta relativa (index.html) vs absoluta (ruta) cuando apuntan al mismo archivo  -----
                /** @type {string} - `URL absoluta del nuevo favicon` */
                const newAbsolute = new URL(favicon, document.baseURI).href;

                /** @type {JQuery<HTMLLinkElement>} - `Elemento link del favicon` */
                let $favicon = $('link[rel~="icon"]');

                //  -----  Si no existe el favicon, lo creamos  -----
                if ($favicon.length === 0) {


                    /** @type {HTMLLinkElement} - `Crear un nuevo elemento link para el favicon si no existe` */
                    const link = document.createElement('link');

                    //  -----  Configurar el nuevo elemento link para el favicon  -----
                    link.rel = "icon";

                    //  -----  Añadir el nuevo elemento link al head del documento  -----
                    document.head.appendChild(link);

                    //  -----  Asignar el nuevo elemento link a $favicon para futuras actualizaciones  -----
                    $favicon = $(link);
                }

                //  -----  Comparar la URL ABSOLUTA YA RESUELTA (prop('href'), no attr) sin query string contra la nueva  -----
                /** @type {string} - `href absoluto actual sin query (?...)` */
                const currentAbsolute = String($favicon.prop('href') || '').split('?')[0];

                //  -----  Actualizar el href solo si el archivo cambia realmente: evita reasignar el atributo (relativo -> absoluto del mismo archivo), que provoca re-descarga y parpadeo  -----
                if (currentAbsolute !== newAbsolute)
                    $favicon.attr('href', favicon);

            };


            /*
                *  -------------------------  *
                *  -----  STYLESHEETS  -----  *
                *  -------------------------  *
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
                *  ---------------------  *
                *  -----  SCRIPTS  -----  *
                *  ---------------------  *
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
                    return Promise.resolve();


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

                return scriptQueue;
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
                const scriptType = (scriptOptions?.type === 'module') ? 'module' : 'classic';

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
             * -------------------------------------
             * -----  `loadLibsByRoute(libs)`  -----
             * -------------------------------------
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


                /** @type {string} - `Pathname actual del navegador, normalizado para history API` */
                const initialPath = safeHistoryPathname(window.location.pathname);

                /** @type {RouteManifest|undefined} - `Entrada inicial del manifest` */
                const entry = findManifestEntryByPath(initialPath);

                if (entry) {

                    loadRouteModule(entry.file)
                        .then((route) => {

                            if (route)
                                return loadContent(route, 'init').then(() => route);

                            return loadNotFoundRoute('init');
                        })
                        .then((route) => {

                            if (!route) {
                                history.replaceState(
                                    { id: null, path: initialPath },
                                    '',
                                    initialPath
                                );
                                return;
                            }

                            const initialPathname = buildPathname(route.path || entry.path || '');

                            history.replaceState(
                                { id: route.id, path: initialPathname, routeFile: entry.file, favicon: route.favicon || null },
                                '',
                                initialPathname
                            );
                        })
                        .catch((err) => {

                            console.error('Error cargando ruta inicial', err);
                            notifyRouteLoadError(undefined, err, 'init');
                            loadNotFoundRoute('init');
                        });

                    return;
                }

                loadNotFoundRoute('init');

                history.replaceState(
                    { id: null, path: initialPath },
                    '',
                    initialPath
                );

            };


            /*
                *  ---------------------  *
                *  -----  EVENTOS  -----  *
                *  ---------------------  *
            */


            /*
                -------------------------------------------------------------------
                -----  Manejadores de navegación  -  clicks  ----------------------
                -----  Enlaces: a[data-id] o a[data-route]  -----------------------
                -------------------------------------------------------------------
            */
            $(document).on('click', 'a[data-id], a[data-route]', async function (event) {

                event.preventDefault();

                /** @type {string|undefined} - `Nombre del archivo de ruta desde data-route` */
                const routeFile = $(this).data('route');

                /** @type {string|undefined} - `ID de la ruta desde el atributo data-id` */
                const dataId = $(this).data('id');

                /** @type {RouteManifest|undefined} - `Entrada del manifest correspondiente al data-id` */
                const entry = dataId ? findManifestEntryById(String(dataId)) : undefined;


                //  -----  ocultar menú principal a altura 0 y restaurar el botón hamburguesa  -----
                $('.navbar__container')
                    .stop(true, true)
                    .css({ overflow: 'hidden', minHeight: 0 })
                    .animate(
                        { height: 0 },
                        250,
                        function () {
                            $(this)
                                .hide()
                                .css({
                                    height: '',
                                    maxHeight: '',
                                    minHeight: '',
                                    overflow: ''
                                });
                        }
                    );
                $('.navbar__btn-open').show();
                $('.navbar__btn-close').hide();

                //  -----  Carga directa por data-route (import dinámico por nombre de archivo)  -----
                if (routeFile) {

                    try {

                        const route = await loadRouteModule(String(routeFile));

                        if (!route) {
                            await loadNotFoundRoute('click');
                            return;
                        }

                        await loadContent(route, 'click');

                    } catch (err) {

                        console.error('Error loadContent (click, data-route):', err);
                        notifyRouteLoadError(undefined, err, 'click');
                        await loadNotFoundRoute('click');
                    }

                    return;
                }

                //  -----  Cargar la ruta por data-id si existe en el manifest  -----
                if (entry) {

                    try {

                        const route = await loadRouteModule(entry.file);

                        if (!route) {
                            await loadNotFoundRoute('click');
                            return;
                        }

                        await loadContent(route, 'click');

                    } catch (err) {

                        console.error('Error loadContent (click):', err);
                        notifyRouteLoadError(undefined, err, 'click');
                        await loadNotFoundRoute('click');
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

                //  -----  Actualizar el favicon inmediatamente (síncronamente) desde el state para evitar parpadeo durante la carga asíncrona (lazy) del módulo de ruta  -----
                if (e.state?.favicon)
                    updateFavicon(e.state.favicon);

                /** @type {string|undefined} - `Nombre del archivo de ruta guardado en el historial` */
                const routeFile = e.state?.routeFile;

                /** @type {string} - `Ruta normalizada desde el state o la URL actual` */
                const raw = e.state?.path ?? window.location.pathname;

                /** @type {RouteManifest|undefined} - `Entrada de manifest para la URL actual` */
                const entry = findManifestEntryByPath(raw);

                //  -----  Importar directamente por routeFile si está en el state (más rápido, usa caché)  -----
                if (routeFile) {

                    try {

                        const route = await loadRouteModule(String(routeFile));

                        if (!route) {
                            await loadNotFoundRoute('popstate');
                            return;
                        }

                        await loadContent(route, 'popstate');

                    } catch (err) {

                        console.error('Error loadContent (popstate, routeFile):', err);
                        notifyRouteLoadError(undefined, err, 'popstate');
                        await loadNotFoundRoute('popstate');
                    }

                    return;
                }

                //  ----- cargamos la ruta SIN empujar otra entrada en el historial  ---------
                //  ----- el navegador ya actualizó la URL y el state al navegar atrás/adelante  -----
                //  ----- pasamos source='popstate' a loadContent para que applyRouteMeta NO haga pushState  -----
                if (entry) {

                    try {

                        const route = await loadRouteModule(entry.file);

                        if (!route) {
                            await loadNotFoundRoute('popstate');
                            return;
                        }

                        await loadContent(route, 'popstate');

                    } catch (err) {

                        console.error('Error loadContent (popstate):', err);
                        notifyRouteLoadError(undefined, err, 'popstate');
                        await loadNotFoundRoute('popstate');
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
                '%c ✅ ✅ ✅ plugin  -  jquery.spa-with-method-load-from-jquery.js  -  versión 5  -  cargado!!! ✅ ✅ ✅', 
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
