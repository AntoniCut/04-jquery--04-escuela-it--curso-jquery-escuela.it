/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /generate-markdown-shiki.js  -----------------------------------------  *
    *  -----------------------------------------------------------------------------  *
    *  Lee las rutas del SPA, deriva los archivos fuente por convención de            *
    *  nombres, y genera los bloques HTML resaltados con Shiki en                     *
    *  src/markdown-shiki/.                                                           *
    *                                                                                 *
    *  Uso: pnpm code-highlight                                                       *
    *                                                                                 *
    *  Convención de nombres:                                                         *
    *    MarkdownShikiHtml path  →  fuente                                            *
    *    .../01-markdown-shiki-ts.html   →  src/scripts/ts/.../01-markdown-shiki.ts   *
    *    .../01-markdown-shiki-js.html   →  src/scripts/js/.../01-markdown-shiki.js   *
    *    .../01-markdown-shiki-html.html →  src/pages/.../01-markdown-shiki.html      *
    *    .../01-markdown-shiki-css.html  →  src/scss/pages/.../01-markdown-shiki.scss *
    *  -----------------------------------------------------------------------------  *
*/

import { codeToHtml } from 'shiki';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MARKER     = 'markdown-shiki/';
const SHIKI_THEME = 'dark-plus';


/**
 * A partir del path URL de un archivo .html en markdown-shiki, deduce
 * el path del archivo fuente (.ts o .js) usando la convención de nombres.
 *
 * @param {string} htmlUrlPath  - p.ej. `/base/app/markdown-shiki/02-tipos-de-datos/01-booleans-ts.html`
 * @returns {{ srcPath: string, lang: string, relHtml: string } | null}
 */
function deriveSource(htmlUrlPath) {

    const idx = htmlUrlPath.indexOf(MARKER);
    if (idx === -1) return null;

    const relHtml = htmlUrlPath.slice(idx + MARKER.length);

    if (relHtml.endsWith('-ts.html')) {
        const relSrc = relHtml.replace(/-ts\.html$/, '.ts');
        return {
            srcPath: join(__dirname, 'src/scripts/ts', relSrc),
            lang: 'typescript',
            relHtml
        };
    }

    if (relHtml.endsWith('-js.html')) {
        const relSrc = relHtml.replace(/-js\.html$/, '.js');
        //  Primero busca en src/scripts/ directamente (convención jQuery project)
        const directPath = join(__dirname, 'src/scripts', relSrc);
        if (existsSync(directPath)) {
            return { srcPath: directPath, lang: 'javascript', relHtml };
        }
        //  Fallback: src/scripts/js/ (convención TypeScript project)
        return {
            srcPath: join(__dirname, 'src/scripts/js', relSrc),
            lang: 'javascript',
            relHtml
        };
    }

    if (relHtml.endsWith('-html.html')) {
        const relSrc = relHtml.replace(/-html\.html$/, '.html');
        return {
            srcPath: join(__dirname, 'src/pages', relSrc),
            lang: 'html',
            relHtml
        };
    }

    if (relHtml.endsWith('-css.html')) {
        const relSrc = relHtml.replace(/-css\.html$/, '.scss');
        return {
            srcPath: join(__dirname, 'src/scss/pages', relSrc),
            lang: 'scss',
            relHtml
        };
    }

    return null;
}


//  -----  Leer todos los archivos de ruta  -----
const routesDir  = join(__dirname, 'src/routes');
const routeFiles = readdirSync(routesDir).filter(
    f => f.startsWith('route-') && f.endsWith('.js') && f !== 'route-manifest.js'
);

//  -----  Recolectar todos los MarkdownShikiHtml únicos  -----
//  Extrae las rutas por texto (regex) para evitar importar módulos con dependencias del navegador.
const htmlPaths = new Set();

for (const file of routeFiles) {

    const content = readFileSync(join(routesDir, file), 'utf-8');

    //  Busca template literals: `${markdownShiki}/clase-xx/nombre-js.html`
    const matches = content.matchAll(/\$\{markdownShiki\}\/([^`'")\s]+\.html)/g);

    for (const m of matches) {
        //  Reconstruye el path relativo para que MARKER lo pueda procesar
        htmlPaths.add('markdown-shiki/' + m[1]);
    }
}


//  -----  Generar HTML para cada entrada  -----
let generated = 0;
let skipped   = 0;

for (const htmlPath of htmlPaths) {

    const derived = deriveSource(htmlPath);

    if (!derived) {
        console.warn(`⚠️  No se puede derivar el fuente para: ${htmlPath}`);
        skipped++;
        continue;
    }

    const { srcPath, lang, relHtml } = derived;

    if (!existsSync(srcPath)) {
        const rel = srcPath.replace(__dirname + '/', '');
        console.warn(`⚠️  Fuente no encontrado: src/markdown-shiki/${relHtml}`);
        console.warn(`     Esperado en: ${rel}`);
        console.warn(`     Comprueba que el nombre del archivo fuente coincide con el del .html`);
        skipped++;
        continue;
    }

    const code = readFileSync(srcPath, 'utf-8');
    const html = await codeToHtml(code, { lang, theme: SHIKI_THEME });

    const outPath = join(__dirname, 'src/markdown-shiki', relHtml);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf-8');

    console.log(`✅  src/markdown-shiki/${relHtml}`);
    generated++;
}

console.log(`\n🎉  Completado — generados: ${generated} | omitidos: ${skipped}`);
