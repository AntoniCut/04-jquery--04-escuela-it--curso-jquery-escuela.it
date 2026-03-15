/*
    *  --------------------------------------------------------------------------------------  *
    *  -----  /register-service-worker.js  --  /src/scripts/register-service-worker.js  -----  *
    *  --------------------------------------------------------------------------------------  *
*/

/**
 * ---------------------------------------
 * -----  `registerServiceWorker()`  -----
 * ---------------------------------------
 * 
 * - Registra el Service Worker (SW) para la aplicación web.
 * - Mejora el rendimiento y permite funcionalidades offline.
 * 
 */

export const registerServiceWorker = () => {


    console.log('\n')
    console.warn('-----  register-service-worker.js  -----');
    console.log('\n');

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker
            .register('/sw.js')
            .then(reg => console.warn('Registro de SW exitoso', reg))
            .catch(err => console.error('Error al tratar de registrar el sw', err))
    }

}
