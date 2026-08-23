# Curso jQuery — EscuelaIT

Proyecto de prácticas del curso **jQuery** impartido por Miguel Ángel Alvarez en [EscuelaIT](https://escuela.it).  
Implementado como una **SPA** (Single Page Application) con enrutamiento propio, servidor de desarrollo con live reload y pipeline de build con Gulp.

---

## Índice

1. [Tecnologías](#1-tecnologías)
2. [Requisitos previos](#2-requisitos-previos)
3. [Instalación](#3-instalación)
4. [Comandos](#4-comandos)
5. [URL base](#5-url-base)
6. [Estructura del proyecto](#6-estructura-del-proyecto)
7. [Base de datos (clase 20 — buscador)](#7-base-de-datos-clase-20--buscador)
8. [Base de datos (clase 21 — login)](#8-base-de-datos-clase-21--login)
9. [Contenido del curso](#9-contenido-del-curso)
10. [Imágenes responsive](#10-imágenes-responsive)
11. [Despliegue (producción — Nginx)](#11-despliegue-producción--nginx)
12. [Despliegue al VPS con deploy.sh](#12-despliegue-al-vps-con-deploysh)
13. [Autor](#13-autor)

---

## 1. Tecnologías

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

## 2. Requisitos previos

- **Node.js** ≥ 18
- **pnpm** ≥ 9 — `npm install -g pnpm`
- **php-cgi** (desarrollo con Express) — `sudo apt install php8.3-cgi php8.3-mysql`
- **MySQL / MariaDB** (XAMPP o servidor) con extensión `mysqli`
- **rsync** y **ssh** (despliegue al VPS con `deploy.sh`)

---

## 3. Instalación

```bash
pnpm install
cp .env.example .env   # ajustar puertos y credenciales MySQL locales
```

---

## 4. Comandos

| Comando | Descripción |
|---|---|
| `pnpm run dev` | Gulp (watch + compilación) + servidor de desarrollo con live reload |
| `pnpm run build` | Build de producción en `dist/` |
| `pnpm run preview` | Sirve `dist/` (puerto de `.env`, por defecto 4173) |
| `pnpm run stop:dev` | Detiene el servidor de desarrollo |
| `pnpm run code-highlight` | Regenera los bloques Shiki en `src/markdown-shiki/` |
| `./deploy.sh` | Build + subida de `dist/` al VPS por rsync/SSH |

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

## 5. URL base

```
/escuelait/curso-jquery-escuelait/
```

Desarrollo (puerto según `.env`):  
[http://localhost:9876/escuelait/curso-jquery-escuelait/](http://localhost:9876/escuelait/curso-jquery-escuelait/)  
(o el `DEV_SERVER_PORT` que tengas configurado)

Producción:  
[https://jquery.antonydev.tech/escuelait/curso-jquery-escuelait/](https://jquery.antonydev.tech/escuelait/curso-jquery-escuelait/)

---

## 6. Estructura del proyecto

```
curso-jquery-escuelait/
│
├── src/                              # Código fuente (origen de verdad)
│   ├── main.js                       # Entrada de la SPA
│   ├── pages/                        # Página de cada ruta (layout principal)
│   │   ├── 00-home.html
│   │   ├── clase-01/ … clase-23/
│   │   └── 404/
│   ├── pages-components/             # Fragmentos de página (demo + description)
│   │   └── clase-01/ … clase-23/
│   ├── markdown-shiki/               # HTML resaltado con Shiki (generado)
│   │   └── clase-01/ … clase-23/
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
├── deploy.sh                         # Deploy automatizado al VPS
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

## 7. Base de datos (clase 20 — buscador)

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

## 8. Base de datos (clase 21 — login)

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

## 9. Contenido del curso

Clases implementadas en la SPA (menú lateral `layout-aside-left.html`):

| Clase | Tema |
|---|---|
| 01 | Qué es jQuery |
| 02 | Usar jQuery en la Actualidad |
| 03 | Práctica primeros pasos |
| 04 | Cómo se organiza el curso |
| 05 | Introducción a jQuery |
| 06 | Primeros Pasos con jQuery |
| 07 | Manipulación Básica |
| 08 | Selectores y Traversing |
| 09 | Dudas y Conceptos 1 |
| 10 | Manipulación avanzada |
| 11 | Eventos en jQuery |
| 12 | Eventos Teclado y Ratón |
| 13 | Efectos y Animaciones |
| 14 | Cola de Efectos |
| 15 | JSON |
| 16 | AJAX Alto Nivel |
| 17 | Dudas y Conceptos 2 |
| 18 | Formularios Ajax |
| 19 | Eventos Avanzados |
| 20 | Ajax Low Level |
| 21 | Práctica 1 Formulario Login |
| 22 | Deferred y Promesas |
| 23 | Dudas y conceptos 3 |

Clases previstas en el temario (aún no implementadas en la SPA):

| Clase | Tema |
|---|---|
| 24 | Template system |
| 25 | jQuery plugins |
| 26 | Variables gestión de opciones en plugins |
| 27 | Técnicas para desarrollos de plugins complejos |
| 28 | Librerías de componentes: jQuery UI |
| 29 | Usando jQuery UI |
| 30 | Práctica 2 |

Cada demo suele repartirse así:

```
src/pages/clase-XX/…html              → página / slots
src/pages-components/clase-XX/…       → description + demo
src/components/layout/pages/clase-XX/ → aside de ejercicios (layout-aside-clase-XX.html)
src/scripts/clase-XX/…js              → lógica jQuery
src/scss/pages/clase-XX/…             → estilos
src/services/clase-XX/…               → PHP/JSON si aplica
src/routes/route-claseXX-….js         → ruta SPA + MarkdownShikiHtml
src/markdown-shiki/clase-XX/…         → código resaltado (generado)
```

---

## 10. Imágenes responsive

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

## 11. Despliegue (producción — Nginx)

El sitio se sirve desde el VPS con **Nginx + PHP-FPM**. La carpeta pública en el servidor es:

```
/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/
```

Contenido esperado tras el build:

```
index.html
app/
assets/
.env          ← no va en git; subir manualmente desde .env.production
```

En el VPS el `.env` debe estar junto al `index.html` desplegado:

```
/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/.env
```

Subir `.env` de producción (solo cuando cambien credenciales):

```bash
scp .env.production root@TU_IP:/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/.env
```

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

## 12. Despliegue al VPS con deploy.sh

Script en la raíz del proyecto que automatiza **build + rsync** al VPS. Sustituye el arrastre manual con FileZilla.

### Configuración (`deploy.sh`)

Edita las variables al inicio del archivo:

```bash
VPS_USER="root"                    # usuario SSH del VPS
VPS_HOST="TU_IP_O_DOMINIO"         # IP pública o dominio del VPS
VPS_PORT="22"                      # puerto SSH (22 por defecto)
REMOTE_PATH="/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait"
LOCAL_BUILD_DIR="dist"
```

| Variable | Descripción |
|---|---|
| `VPS_USER` | Usuario Linux con el que entras por SSH |
| `VPS_HOST` | IP del VPS (p. ej. la de Hostinger) o dominio |
| `VPS_PORT` | Puerto SSH (22 si no lo cambiaste) |
| `REMOTE_PATH` | Carpeta destino en el VPS (debe coincidir con Nginx) |
| `LOCAL_BUILD_DIR` | Carpeta generada por `pnpm run build` |

### Requisitos

- Acceso SSH al VPS desde tu PC: `ssh root@TU_IP`
- `pnpm`, `rsync` y `ssh` instalados en local
- Carpeta remota creada en el VPS (ver sección 11)
- `.env` ya subido al VPS (el script **no** lo incluye)

### Flujo de despliegue

Desde tu **máquina local** (no desde la terminal SSH del VPS):

```bash
# 1. Ir al proyecto
cd /home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/escuelait/curso-jquery-escuelait

# 2. Ejecutar deploy (solo la primera vez: chmod +x deploy.sh)
./deploy.sh
```

El script:

1. Ejecuta `pnpm run build` → genera `dist/`
2. Sincroniza `dist/` al VPS con `rsync --delete`
3. Pide la contraseña SSH de `root` (si no tienes clave configurada)

### Qué sube y qué no

| Sube | No sube |
|---|---|
| Contenido de `dist/` (`index.html`, `app/`, `assets/`) | `src/`, `node_modules/`, `.git` |
| Archivos minificados de producción | `.env` (subir con `scp` aparte) |

### Verificar el despliegue

**Navegador:**

```
https://jquery.antonydev.tech/escuelait/curso-jquery-escuelait/
```

**SSH en el VPS:**

```bash
ssh root@TU_IP
cd /var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait
ls -la
```

Las fechas de `index.html`, `app/` y `assets/` deben ser recientes.

### Local vs VPS — no confundir rutas

| Entorno | Ruta |
|---|---|
| **Tu PC** (donde ejecutas `./deploy.sh`) | `/home/antonydev/.../curso-jquery-escuelait` |
| **VPS** (destino del deploy) | `/var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait` |

La terminal SSH del panel de Hostinger sirve para **administrar el servidor** (ver archivos, Nginx, `.env`). El deploy habitual se hace **desde local** con `./deploy.sh`.

### FileZilla vs deploy.sh

| | FileZilla | `./deploy.sh` |
|---|---|---|
| Build | Manual (`pnpm run build`) | Automático |
| Origen | Lo que elijas | Siempre `dist/` |
| Destino | Misma carpeta remota | Misma carpeta remota |
| Uso recomendado | Revisar archivos, editar `.env` | Despliegues habituales del curso |

---

## 13. Autor

**Antonio Francisco Cutillas García** — [AntonyDev](https://antonydev.tech)  
Licencia: ISC
