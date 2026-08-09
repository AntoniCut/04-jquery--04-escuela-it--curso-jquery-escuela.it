# Curso jQuery — EscuelaIT

Proyecto de prácticas del curso **jQuery** impartido por Miguel Ángel Alvarez en [EscuelaIT](https://escuela.it).  
Implementado como una **SPA** (Single Page Application) con enrutamiento propio, servidor de desarrollo con live reload y pipeline de build con Gulp.

---

## Tecnologías

| Herramienta | Versión | Rol |
|---|---|---|
| jQuery | 4.x | Biblioteca principal |
| jQuery UI | 1.14.x | Widgets e interacciones |
| Sass (Dart) | 1.x | Preprocesador CSS |
| Gulp 5 | 5.x | Pipeline de build |
| Express 5 | 5.x | Servidor dev y preview |
| BrowserSync | 3.x | Live reload |
| php-cgi / PHP-FPM | 8.x | Servicios PHP (AJAX) |
| MySQL / MariaDB | — | Buscador clase 20 (`buscar.php`) y login clase 21 (`login_users`) |
| Shiki | 4.x | Resaltado de código en demos |
| sharp | 0.34.x | Conversión/optimización de imágenes |
| pnpm | 9.x | Gestor de paquetes |
| Node.js | ESM | Runtime |

---

## Requisitos previos

- **Node.js** ≥ 18
- **pnpm** ≥ 9 — `npm install -g pnpm`
- **php-cgi** (desarrollo con Express) — `sudo apt install php8.3-cgi php8.3-mysql`
- **MySQL / MariaDB** (XAMPP o servidor) con extensión `mysqli`

---

## Instalación

```bash
pnpm install
cp .env.example .env   # ajustar puertos y credenciales MySQL locales
```

---

## Comandos

| Comando | Descripción |
|---|---|
| `pnpm run dev` | Gulp (watch + compilación) + servidor de desarrollo con live reload |
| `pnpm run build` | Build de producción en `dist/` |
| `pnpm run preview` | Sirve `dist/` (puerto de `.env`, por defecto 4173) |
| `pnpm run stop:dev` | Detiene el servidor de desarrollo |
| `pnpm run code-highlight` | Regenera los bloques Shiki en `src/markdown-shiki/` |

### Variables de entorno

| Archivo | Uso | ¿Va a git? |
|---|---|---|
| `.env.example` | Plantilla sin secretos | Sí |
| `.env` | Desarrollo local (XAMPP/Express) | No |
| `.env.production` | Credenciales de producción (copiar al VPS como `.env`) | No |

```dotenv
DEV_SERVER_PORT=3000
PREVIEW_SERVER_PORT=4173
CHOKIDAR_USEPOLLING=false
CHOKIDAR_INTERVAL=250

DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root                 # local XAMPP suele ser root sin password
DB_PASS=
DB_NAME=jquery_escuelait_classicmodels
```

- **Desarrollo / preview:** Node carga `dotenv` y pasa las vars a `php-cgi`.
- **Producción (Nginx/PHP-FPM):** el `.env` del despliegue lo lee `app/services/load-env.php` (p. ej. desde `buscar.php` o los PHP de clase 21).

---

## URL base

```
/escuelait/curso-jquery-escuelait/
```

Desarrollo (puerto según `.env`):  
[http://localhost:9876/escuelait/curso-jquery-escuelait/](http://localhost:9876/escuelait/curso-jquery-escuelait/)  
(o el `DEV_SERVER_PORT` que tengas configurado)

---

## Estructura del proyecto

```
curso-jquery-escuelait/
│
├── src/                              # Código fuente (origen de verdad)
│   ├── main.js                       # Entrada de la SPA
│   ├── pages/                        # Página de cada ruta (layout principal)
│   │   ├── 00-home.html
│   │   ├── clase-01/ … clase-21/
│   │   └── 404/
│   ├── pages-components/             # Fragmentos de página (demo + description)
│   │   └── clase-01/ … clase-21/
│   ├── markdown-shiki/               # HTML resaltado con Shiki (generado)
│   │   └── clase-01/ … clase-21/
│   ├── scripts/                      # JS por clase
│   ├── scss/                         # Estilos SCSS → app/css/
│   ├── components/                   # Layout reutilizable (header, navbar, footer…)
│   ├── routes/                       # Definición de rutas SPA
│   ├── spa/                          # Motor SPA (.load)
│   ├── services/                     # PHP / JSON / SQL (AJAX)
│   │   ├── load-env.php              # Carga .env (producción / fallback)
│   │   ├── clase-16/
│   │   ├── clase-18/
│   │   ├── clase-20/                 # buscar.php, products.json, SQL…
│   │   └── clase-21/                 # login.php, login-auth, register-auth, SQL…
│   ├── effects/
│   ├── libs/                         # jQuery, jQuery UI
│   ├── plugins/
│   └── pdfs/
│
├── app/                              # Build intermedio (dev, Gulp)
├── dist/                             # Build de producción (Gulp)
│
├── assets/                           # img, fonts, favicon
├── server/                           # dev-server, preview-server, stop-dev
├── types/
│
├── generate-markdown-shiki.js        # Genera src/markdown-shiki/
├── gulpfile.js
├── .env.example
├── .env                              # local (gitignored)
├── .env.production                   # prod local (gitignored)
└── package.json
```

### `pages` vs `pages-components`

| Carpeta | Rol |
|---|---|
| `src/pages/` | HTML de la ruta: título, estructura y *slots* (`data-component-page`, `data-shiki`) |
| `src/pages-components/` | Piezas inyectadas en esos slots: normalmente `*-description.html` y `*-demo.html` |

En la ruta (`src/routes/route-….js`) se declara así:

```js
pagesComponents: [
  { url: `${pagesComponents}/clase-20/03-buscador-description.html`, target: '[data-component-page="buscadorDescription"]' },
  { url: `${pagesComponents}/clase-20/03-buscador-demo.html`, target: '[data-component-page="buscadorDemo"]' },
],
```

### `markdown-shiki` (código resaltado)

1. En la ruta se define `MarkdownShikiHtml` (fuente HTML/CSS/JS/PHP → archivo generado + selector `data-shiki`).
2. Se genera con:

```bash
pnpm run code-highlight
```

3. Sale en `src/markdown-shiki/<clase>/…` y Gulp lo copia a `app/markdown-shiki/`.
4. La SPA carga esos HTML en los paneles de código de cada demo.

Tras cambiar un demo (HTML/JS/CSS/PHP), vuelve a ejecutar `pnpm run code-highlight` (o deja que el watch de Gulp lo regenere si está activo).

---

## Base de datos (clase 20 — buscador)

El buscador usa MySQL (`mysqli`) sobre la tabla `products`. Si falla la conexión, hace fallback a `products.json`.

### 1. Crear la base e importar datos

En local (XAMPP / MariaDB), crea la BD con el nombre que usa el proyecto:

```sql
CREATE DATABASE IF NOT EXISTS jquery_escuelait_classicmodels
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

Importa el esquema y datos desde:

```
src/services/clase-20/classicmodels.sql
src/services/clase-20/classicmodels-export.sql
```

Si el SQL crea/usa la BD `classicmodels`, cámbiala o importa dentro de `jquery_escuelait_classicmodels`:

```bash
# Ejemplo con cliente mysql (ajusta usuario/socket de XAMPP)
mysql -u root jquery_escuelait_classicmodels < src/services/clase-20/classicmodels-export.sql
```

Comprueba:

```sql
USE jquery_escuelait_classicmodels;
SHOW TABLES;                 -- debe existir products
SELECT COUNT(*) FROM products;
```

### 2. Usuario MySQL

- **Local (XAMPP):** suele bastar `DB_USER=root` y `DB_PASS=` vacío en `.env`.
- **Producción:** crea un usuario limitado, p. ej. `jquery_user`, y ponlo en `.env.production`.

```sql
CREATE USER IF NOT EXISTS 'jquery_user'@'localhost' IDENTIFIED BY 'tu_password';
CREATE USER IF NOT EXISTS 'jquery_user'@'127.0.0.1' IDENTIFIED BY 'tu_password';
GRANT SELECT ON jquery_escuelait_classicmodels.* TO 'jquery_user'@'localhost';
GRANT SELECT ON jquery_escuelait_classicmodels.* TO 'jquery_user'@'127.0.0.1';
-- Clase 21 (registro de usuarios en login_users):
GRANT SELECT, INSERT ON jquery_escuelait_classicmodels.login_users TO 'jquery_user'@'localhost';
GRANT SELECT, INSERT ON jquery_escuelait_classicmodels.login_users TO 'jquery_user'@'127.0.0.1';
FLUSH PRIVILEGES;
```

### 3. Configurar `.env`

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=jquery_escuelait_classicmodels
```

Usa `127.0.0.1` (TCP), no `localhost`, para evitar el socket de sistema cuando MySQL corre en XAMPP (`/opt/lampp/...`).

Reinicia `pnpm run dev` si cambias el `.env` (Node solo lo carga al arrancar).

### 4. Archivos relacionados

| Archivo | Rol |
|---|---|
| `src/services/clase-20/buscar.php` | Endpoint AJAX del buscador |
| `src/services/load-env.php` | Lee `.env` subiendo carpetas desde el PHP |
| `src/services/clase-20/products.json` | Fallback si MySQL no está disponible |
| `.env` / `.env.production` | Credenciales local / producción |

Si ves *Datos obtenidos del fallback…*, mira el **Motivo MySQL:** en la página (usuario, password, BD inexistente, etc.).

---

## Base de datos (clase 21 — login con autenticación)

La práctica 02 usa la misma BD `jquery_escuelait_classicmodels` y la tabla `login_users` (registro + login con hash).

### 1. Crear la tabla

Con la BD ya creada (ver sección clase 20):

```bash
mysql -u root jquery_escuelait_classicmodels < src/services/clase-21/login-users.sql
```

Comprueba:

```sql
USE jquery_escuelait_classicmodels;
SHOW TABLES;                 -- debe existir login_users
DESCRIBE login_users;
```

### 2. Privilegios MySQL

- **Local (XAMPP):** `root` suele bastar.
- **Producción:** el usuario necesita `SELECT` + `INSERT` sobre `login_users` (ver `GRANT` en la sección clase 20).

### 3. Archivos relacionados

| Archivo | Rol |
|---|---|
| `src/services/clase-21/login.php` | Login simulado (JSON fijo; demo 01) |
| `src/services/clase-21/login-auth.php` | Login real con MySQL + `password_verify` |
| `src/services/clase-21/register-auth.php` | Registro con `password_hash` + INSERT |
| `src/services/clase-21/db-connect.php` | Conexión mysqli y respuesta JSON |
| `src/services/clase-21/login-users.sql` | Esquema de `login_users` |
| `.env` / `.env.production` | Mismas credenciales que el buscador |

Rutas SPA:

| Ruta | Demo |
|---|---|
| `/clase21-practica-1-formulario-login` | Índice de la práctica |
| `…/01-formulario-login` | Modal + Ajax/JSON simulado |
| `…/02-formulario-login-autenticacion` | Registro / login contra MySQL |

---

## Contenido del curso

| Clase | Tema |
|---|---|
| 01 | Introducción a jQuery |
| 02 | Selectores básicos |
| 03 | Eventos |
| 04 | DOM — Manipulación |
| 05 | Efectos y animaciones |
| 06 | Ejemplos combinados |
| 07 | Atributos, propiedades, `.html()`, `.text()`, `.data()`, `.each()` |
| 08 | Contexto, selectores de jerarquía, traversing |
| 09 | Ejercicios prácticos (`this`, fecha, eventos) |
| 10 | Inserción DOM — `.append()`, `.prepend()`, `.after()`, `.before()`, envolturas, dimensiones |
| 11 | Eventos de formularios — `.on()`, `.off()`, `preventDefault`, `stopPropagation` |
| 12 | Menú contextual, movimiento del ratón, textarea |
| 13 | Animaciones avanzadas / jQuery UI (Animate, Draggable, Tooltip…) |
| 14 | Plugins personalizados |
| 15 | SPA con `.load()` |
| 16 | AJAX — Interfaz de alto nivel (`$.get`, `$.ajax`, PHP) |
| 17 | Dudas y conceptos (parte 2) — ejercicios prácticos |
| 18 | Formularios AJAX — POST, validación cliente/servidor |
| 19 | Eventos avanzados — delegación, disparar eventos, eventos personalizados |
| 20 | AJAX low-level — `$.post`/PHP, `.load` scripts, buscador MySQL, selects + JSONP |
| 21 | Práctica 1 — Login modal (Ajax/JSON) y autenticación MySQL (`login_users`) |

Cada demo suele repartirse así:

```
src/pages/clase-XX/…html              → página / slots
src/pages-components/clase-XX/…       → description + demo
src/scripts/clase-XX/…js              → lógica jQuery
src/scss/pages/clase-XX/…             → estilos
src/services/clase-XX/…               → PHP/JSON si aplica
src/routes/route-claseXX-….js         → ruta SPA + MarkdownShikiHtml
src/markdown-shiki/clase-XX/…         → código resaltado (generado)
```

---

## Imágenes responsive

Las imágenes ilustrativas usan `<picture>` + `srcset` con AVIF:

```html
<picture>
  <source
    type="image/avif"
    srcset="imagen-280x200.avif 280w, imagen-560x400.avif 560w"
    sizes="(max-width: 600px) 280px, 560px"
  >
  <img src="imagen-original.png" alt="…" width="640" height="480" loading="lazy" decoding="async">
</picture>
```

Los AVIF se generan con **sharp**. El PNG actúa de fallback.

---

## Despliegue (producción — Nginx)

```bash
pnpm run build
# Copiar dist/ a /var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/
# Copiar .env.production al servidor como .env:
#   scp .env.production user@host:/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/.env
```

En el VPS el `.env` debe estar junto al `index.html` desplegado:

`/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/.env`

Bloque Nginx (con `root`) y bloqueo de `.env`:

```nginx
location ^~ /escuelait/curso-jquery-escuelait/ {
    root /var/www/jquery.antonydev.tech;
    try_files $uri $uri/ /escuelait/curso-jquery-escuelait/index.html;

    location ~ /\.env {
        deny all;
        return 404;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param QUERY_STRING    $query_string;
    }
}
```

---

## Autor

**Antonio Francisco Cutillas García** — [AntonyDev](https://antonydev.tech)  
Licencia: ISC
