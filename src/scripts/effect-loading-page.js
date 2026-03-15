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


    console.log('\n')
    console.warn('-----  effect-loading-page.js  -----');
    console.log('\n');


    document.addEventListener('DOMContentLoaded', () => {


        /** @type {HTMLElement | null} */
        const loader = document.querySelector('#loader');

        /** @type {HTMLElement | null} */
        const layout = document.querySelector('#layout');

        if (!loader || !layout) {
            console.error("Loader o layout no encontrado en el DOM");
            return;
        }

        // Mostrar layout inmediatamente para mejorar LCP
        layout.style.display = "flex";

        // Aplicar fade-in de forma asincrónica usando requestAnimationFrame
        requestAnimationFrame(() => layout.classList.add("fade-in"));

        // Loader fade-out usando solo CSS
        loader.classList.add("fade-out");

        // Eliminar loader cuando termine la transición CSS
        loader.addEventListener("transitionend", () => {
            loader.remove();
        }, { once: true });


    });

}
