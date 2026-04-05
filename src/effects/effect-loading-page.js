/*
    *  ------------------------------------------------------------------------------  *
    *  -----  /effect-loading-page.js  --  /src/scripts/effect-loading-page.js  -----  *
    *  ------------------------------------------------------------------------------  *
*/

/**
 * -----------------------------------
 * -----  `effectLoadingPage()`  -----
 * -----------------------------------
 * 
 * - Implementa un efecto de carga para la página web.
 * - Muestra un loader mientras se carga el contenido principal.
 * - Aplica transiciones suaves entre el loader y el contenido principal.
 * 
 */

export const effectLoadingPage = () => {

    /** @type {Window & { __spaFirstRouteLoaded?: boolean }} */
    const browserWindow = window;


    console.log('\n')
    console.warn('-----  effect-loading-page.js  -----');
    console.log('\n');


    const whenDocumentReady = () => {
        if (document.readyState !== 'loading') {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            document.addEventListener('DOMContentLoaded', resolve, { once: true });
        });
    };


    const waitForFirstSpaRouteLoaded = () => {
        if (browserWindow.__spaFirstRouteLoaded) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            document.addEventListener('spa:first-route-loaded', resolve, { once: true });
        });
    };


    /** @param {number} ms */
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    const runLoadingEffect = async () => {

        await whenDocumentReady();

        /** @type {HTMLElement | null} */
        const loader = document.querySelector('#loader');

        /** @type {HTMLElement | null} */
        const layout = document.querySelector('#layout');

        if (!loader || !layout) {
            console.error('Loader o layout no encontrado en el DOM');
            return;
        }

        // Espera la primera carga completa de componentes SPA.
        await waitForFirstSpaRouteLoaded();

        // Mantiene el loader 400ms adicionales antes de mostrar la web.
        await delay(100);

        //layout.style.display = 'flex';

        requestAnimationFrame(() => layout.classList.add('fade-in'));

        loader.classList.add('fade-out');

        loader.addEventListener('transitionend', () => {
            loader.remove();
        }, { once: true });

    };

    runLoadingEffect().catch((error) => {
        console.error('Error en runLoadingEffect:', error);
    });

}
