/*
    *  -------------------------------------------------------------------  *
    *  -----  stop-dev-server.js  --  /server/stop-dev-server.js  -----  *
    *  -------------------------------------------------------------------  *
*/


import 'dotenv/config';

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';



/** - Ejecuta comandos del sistema y retorna su salida estándar. */
const execFileAsync = promisify(execFile);

/** - Puerto público configurado para BrowserSync. */
const DEV_SERVER_PORT = Number(process.env.DEV_SERVER_PORT || 3000);

/** - Puertos probables usados por BrowserSync y su socket. */
const DEV_SERVER_PORTS = [DEV_SERVER_PORT, DEV_SERVER_PORT + 1];



/**
 * ---------------------------------------------------
 * -----  `runCommand(command, args)`  -----
 * ---------------------------------------------------
 * - Ejecuta un comando del sistema y devuelve stdout.
 * @param {string} command
 * @param {string[]} args
 * @returns {Promise<string>}
 */

const runCommand = async (command, args) => {

    try {
        const { stdout } = await execFileAsync(command, args, { encoding: 'utf8' });
        return stdout;
    } catch (error) {

        if (typeof error?.stdout === 'string' && error.code === 1)
            return error.stdout;

        throw error;
    }
};



/**
 * ---------------------------------------------------------------
 * -----  `getProcessIdsListeningOnPorts(ports)`  -----
 * ---------------------------------------------------------------
 * - Devuelve los PID que están escuchando en los puertos indicados.
 * @param {number[]} ports
 * @returns {Promise<number[]>}
 */

const getProcessIdsListeningOnPorts = async (ports) => {

    const ssOutput = await runCommand('ss', ['-ltnp']);

    /** - Regex para detectar líneas de puertos candidatos */
    const portMatchers = ports.map((port) => new RegExp(`:${port}\\b`));

    /** - Set para evitar PIDs duplicados entre varios puertos */
    const processIds = new Set();


    for (const line of ssOutput.split('\n')) {

        if (!portMatchers.some((matcher) => matcher.test(line)))
            continue;

        for (const match of line.matchAll(/pid=(\d+)/g))
            processIds.add(Number(match[1]));
    }


    return [...processIds];
};



/**
 * -------------------------------------------------
 * -----  `getProcessCommand(processId)`  -----
 * -------------------------------------------------
 * - Lee el comando completo asociado a un PID.
 * @param {number} processId
 * @returns {Promise<string>}
 */

const getProcessCommand = async (processId) => {
    const processOutput = await runCommand('ps', ['-p', String(processId), '-o', 'args=']);
    return processOutput.trim();
};



/**
 * ------------------------------------------------------
 * -----  `waitForProcessIdsToLeavePorts(...)`  -----
 * ------------------------------------------------------
 * - Espera a que los PID indicados dejen de escuchar en los puertos candidatos.
 * @param {number[]} ports
 * @param {number[]} processIds
 * @param {number} timeoutMs
 * @returns {Promise<boolean>}
 */

const waitForProcessIdsToLeavePorts = async (ports, processIds, timeoutMs = 3000) => {

    const startedAt = Date.now();


    while (Date.now() - startedAt < timeoutMs) {

        const activeProcessIds = await getProcessIdsListeningOnPorts(ports);

        if (!activeProcessIds.some((processId) => processIds.includes(processId)))
            return true;

        await new Promise((resolve) => setTimeout(resolve, 150));
    }


    return false;
};



/**
 * --------------------
 * -----  main()  -----
 * --------------------
 * - Detiene la instancia activa de server/dev-server.js asociada al entorno local.
 */

const main = async () => {

    const processIds = await getProcessIdsListeningOnPorts(DEV_SERVER_PORTS);

    if (processIds.length === 0) {
        console.log(`No hay ninguna instancia activa de server/dev-server.js escuchando en los puertos ${DEV_SERVER_PORTS.join(' o ')}.`);
        return;
    }

    /** - PIDs de la instancia real del servidor de desarrollo */
    const devServerProcessIds = [];

    /** - Procesos ajenos ocupando alguno de los puertos candidatos */
    const foreignProcesses = [];


    for (const processId of processIds) {

        const command = await getProcessCommand(processId);

        if (command.includes('server/dev-server.js')) {
            devServerProcessIds.push(processId);
            continue;
        }

        foreignProcesses.push({ processId, command });
    }


    if (devServerProcessIds.length === 0) {
        console.error('No se encontró ninguna instancia de server/dev-server.js para detener.');

        if (foreignProcesses.length > 0) {
            console.error('Los puertos inspeccionados están ocupados por otros procesos:');

            for (const foreignProcess of foreignProcesses)
                console.error(`- PID ${foreignProcess.processId}: ${foreignProcess.command}`);
        }

        process.exit(1);
    }


    for (const processId of devServerProcessIds)
        process.kill(processId, 'SIGTERM');


    const stoppedSuccessfully = await waitForProcessIdsToLeavePorts(DEV_SERVER_PORTS, devServerProcessIds);

    if (!stoppedSuccessfully) {
        console.error('No se pudo detener la instancia de desarrollo tras enviar SIGTERM.');
        process.exit(1);
    }

    console.log(`Instancia de desarrollo detenida. PID: ${devServerProcessIds.join(', ')}.`);
};



main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});