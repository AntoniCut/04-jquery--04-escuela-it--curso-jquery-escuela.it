/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-markdown-shiki.js  -----------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    *                                                                                 *
    *  Lee las entradas MarkdownShikiHtml de cada ruta y genera los bloques HTML       *
    *  resaltados con Shiki en src/markdown-shiki/ (gulp copia luego el resultado     *
    *  a app/markdown-shiki/).                                                          *
    *                                                                                   *
    *  Cada entrada del contrato MarkdownShikiEntry indica:                            *
    *    - fileName:      nombre del .html a generar.                                   *
    *    - fileExtension: tipo/lenguaje a resaltar ('html' | 'css' | 'scss' | 'js').    *
    *    - urlInput:      URL (con base) del archivo fuente a renderizar (debe existir). *
    *    - urlOutput:     URL (con base) de la CARPETA donde se guarda el .html generado.*
    *    - target:        selector CSS destino (informativo).                           *
    *                                                                                   *
    *  El bloque se guarda en: src/markdown-shiki/<relOutput>/<fileName>                *
    *  donde <relOutput> se deriva de urlOutput (lo posterior a 'markdown-shiki/').     *
    *                                                                                   *
    *  Uso: pnpm code-highlight                                                          *
    *                                                                                   *
    *  -----------------------------------------------------------------------------  *
*/


import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


/** @type {string} - `Base del proyecto (debe coincidir con src/main.js)` */
const base = '/mis-plugins-spa/jquery-spa-with-method-load-from-jquery-v5';


/** @typedef {import('./types/index.js').Route} Route */
/** @typedef {import('./types/index.js').MarkdownShikiEntry} MarkdownShikiEntry */
/** @typedef {Record<string, Route>} RouteModule */


/**
 * @typedef {Object} ShikiGenResult
 * @property {'generated' | 'skipped'} status
 * @property {string} message
 */


const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const MARKER = 'markdown-shiki/';
const SHIKI_THEME = 'dark-plus';
const STRIP_HEADER_BANNER = true;
const BANNER_PATTERN = /-----/;


/**
 * Mapea `fileExtension` al identificador de lenguaje que espera Shiki.
 * @param {string} fileExtension
 * @returns {string | null}
 */
const mapLang = (fileExtension) => {
    const ext = String(fileExtension).toLowerCase();
    if (ext === 'html') return 'html';
    if (ext === 'css') return 'css';
    if (ext === 'scss') return 'scss';
    if (ext === 'js' || ext === 'javascript') return 'javascript';
    return null;
};


/**
 * Convierte una URL (con base) a una ruta absoluta en disco.
 * @param {string} url
 * @returns {string}
 */
const urlToDisk = (url) => {
    const rel = url.startsWith(base) ? url.slice(base.length) : url;
    return join(__dirname, rel);
};


/**
 * A partir de `urlOutput` (carpeta con base) devuelve la ruta relativa de
 * salida dentro de src/markdown-shiki/ (lo posterior a 'markdown-shiki/').
 * @param {string} urlOutput
 * @returns {string | null}
 */
const deriveOutputDir = (urlOutput) => {
    const idx = urlOutput.indexOf(MARKER);
    if (idx === -1) return null;
    return urlOutput.slice(idx + MARKER.length).replace(/\/$/, '');
};


/**
 * Elimina bloques de comentario tipo banner al inicio del código fuente.
 * @param {string} code
 * @returns {string}
 */
const stripHeaderBanner = (code) => {
    code = code.replace(/^(?:\/\/\s*@ts-nocheck\s*\n|"\s*use strict\s*"\s*;\s*\n)+/, '');

    const ANY_COMMENT_RE = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n/g;

    let firstIdx = -1;
    let firstEnd = -1;

    for (const m of code.matchAll(ANY_COMMENT_RE)) {
        if (BANNER_PATTERN.test(m[0])) {
            firstIdx = m.index;
            firstEnd = m.index + m[0].length;
            break;
        }
    }

    if (firstIdx === -1) return code;

    let endIdx = firstEnd;
    const COMMENT_AFTER_BANNER_RE = /^\s*(?:\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|\/\/[^\n]*\n)/;

    while (true) {
        const rest = code.slice(endIdx);
        const match = rest.match(COMMENT_AFTER_BANNER_RE);
        if (!match) break;
        if (!BANNER_PATTERN.test(match[0])) break;
        endIdx += match[0].length;
    }

    const before = code.slice(0, firstIdx);
    const after = code.slice(endIdx).replace(/^\s*\n/, '');

    return (before + after).replace(/^\s*\n/, '');
};


/**
 * Genera bloques HTML resaltados con Shiki en src/markdown-shiki/.
 * @returns {Promise<{ generated: number, skipped: number }>}
 */
export const generateMarkdownShiki = async () => {
    const routesDir = join(__dirname, 'src/routes');
    const routeFiles = readdirSync(routesDir).filter(
        (f) => f.startsWith('route-') && f.endsWith('.js') && f !== 'route-manifest.js'
    );

    /** @type {MarkdownShikiEntry[]} */
    const entries = [];

    for (const file of routeFiles) {
        /** @type {RouteModule} */
        const mod = await import(`./src/routes/${file}`);

        /** @type {Route | undefined} */
        const route = Object.values(mod).find(
            (v) => v && typeof v === 'object' && Array.isArray(v.MarkdownShikiHtml)
        );

        if (route?.MarkdownShikiHtml) {
            for (const entry of route.MarkdownShikiHtml) {
                entries.push(entry);
            }
        }
    }

    /** @type {ShikiGenResult[]} */
    const results = await Promise.all(
        entries.map(async (entry) => {
            const { fileName, fileExtension, urlInput, urlOutput, target } = entry;

            const lang = mapLang(fileExtension);
            const outDir = deriveOutputDir(urlOutput ?? '');

            if (!fileName || !lang || !urlInput || !outDir) {
                return {
                    status: 'skipped',
                    message: `⚠️  Entrada incompleta (fileName/fileExtension/urlInput/urlOutput): ${fileName ?? '(sin fileName)'}`,
                };
            }

            const srcPath = urlToDisk(urlInput);
            const outPath = join(__dirname, 'src/markdown-shiki', outDir, fileName);

            if (!existsSync(srcPath)) {
                const rel = srcPath.replace(__dirname + '/', '');
                return {
                    status: 'skipped',
                    message: `⚠️  Fuente no encontrado: ${fileName}\n     urlInput no existe en disco: ${rel}`,
                };
            }

            const rawCode = readFileSync(srcPath, 'utf-8');
            const code = STRIP_HEADER_BANNER ? stripHeaderBanner(rawCode) : rawCode;
            const html = await codeToHtml(code, { lang, theme: SHIKI_THEME });

            mkdirSync(dirname(outPath), { recursive: true });
            writeFileSync(outPath, html, 'utf-8');

            const relOut = outPath.replace(__dirname + '/', '');
            const relSrc = srcPath.replace(__dirname + '/', '');

            return {
                status: 'generated',
                message: `✅  ${relOut}  ←  ${relSrc}`,
            };
        })
    );

    for (const r of results) console.log(r.message);

    const generated = results.filter((r) => r.status === 'generated').length;
    const skipped = results.filter((r) => r.status === 'skipped').length;

    console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);

    return { generated, skipped };
};


if (process.argv[1] === __filename) {
    await generateMarkdownShiki();
}
