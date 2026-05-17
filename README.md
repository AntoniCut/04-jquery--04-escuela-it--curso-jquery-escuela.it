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
| php-cgi | 8.3 | Ejecución de servicios PHP |
| sharp | 0.34.x | Conversión/optimización de imágenes |
| pnpm | 9.x | Gestor de paquetes |
| Node.js | ESM | Runtime |

---

## Requisitos previos

- **Node.js** ≥ 18
- **pnpm** ≥ 9 — `npm install -g pnpm`
- **php-cgi** (para los ejercicios AJAX con PHP) — `sudo apt install php8.3-cgi`

---

## Instalación

```bash
pnpm install
```

---

## Comandos

| Comando | Descripción |
|---|---|
| `pnpm run dev` | Inicia Gulp (watch + compilación) y el servidor de desarrollo con live reload |
| `pnpm run build` | Genera el build de producción en `dist/` |
| `pnpm run preview` | Sirve el build de producción en `http://localhost:4173` |
| `pnpm run stop:dev` | Detiene el servidor de desarrollo de forma limpia |

### Variables de entorno opcionales (`.env`)

```dotenv
DEV_SERVER_PORT=3000        # Puerto público del servidor dev (BrowserSync)
PREVIEW_SERVER_PORT=4173    # Puerto del servidor preview
CHOKIDAR_USEPOLLING=false   # true en entornos WSL/Docker con problemas de watch
CHOKIDAR_INTERVAL=250       # Intervalo de polling en ms
```

---

## URL base

El proyecto se sirve bajo el prefijo:

```
/escuelait/curso-jquery-escuelait/
```

Acceso en desarrollo: [http://localhost:3000/escuelait/curso-jquery-escuelait/](http://localhost:3000/escuelait/curso-jquery-escuelait/)

---

## Estructura del proyecto

```
curso-jquery-escuelait/
│
├── src/                        # Código fuente (origen de verdad)
│   ├── main.js                 # Punto de entrada de la SPA
│   ├── pages/                  # Fragmentos HTML por clase
│   │   ├── 00-home.html
│   │   ├── clase-01/ … clase-16/
│   │   └── 404/
│   ├── scripts/                # Scripts JS por clase
│   │   ├── clase-03/ … clase-16/
│   │   ├── register-service-worker.js
│   │   └── tooltips.js
│   ├── scss/                   # Estilos SCSS
│   ├── components/             # Componentes HTML reutilizables
│   ├── routes/                 # Definición de rutas SPA
│   ├── spa/                    # Motor de la SPA (método load)
│   ├── services/               # Servicios PHP (AJAX)
│   │   ├── contenido-load.php
│   │   ├── contenido-get-ajax.php
│   │   └── contenido-get-ajax-dato.php
│   ├── effects/                # Efectos de carga/transición
│   ├── libs/                   # Librerías locales (jQuery, jQuery UI)
│   └── plugins/                # Plugins jQuery (easing, animate-colors…)
│
├── app/                        # Build intermedio (dev, generado por Gulp)
├── dist/                       # Build de producción (generado por Gulp)
│
├── assets/
│   ├── img/                    # Imágenes optimizadas (PNG + AVIF responsive)
│   ├── fonts/                  # Fuentes locales
│   └── favicon/
│
├── server/
│   ├── dev-server.js           # Express + BrowserSync + php-cgi (desarrollo)
│   ├── preview-server.js       # Express + php-cgi (previsualización del build)
│   └── stop-dev-server.js      # Script para parar el servidor de desarrollo
│
├── types/                      # Tipos JSDoc del proyecto
├── gulpfile.js                 # Tareas Gulp (sass, minify, copy, watch…)
├── jsconfig.json               # Configuración TypeScript/JSDoc
├── package.json
└── pnpm-lock.yaml
```

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
| 10 | Inserción DOM — `.append()`, `.prepend()`, `.after()`, `.before()` |
| 11 | Formularios y validación |
| 12 | Animaciones avanzadas |
| 13 | jQuery UI — Draggable, Tooltip |
| 14 | Plugins personalizados |
| 15 | SPA con `.load()` |
| 16 | AJAX — Interfaz de alto nivel (`$.get`, `$.ajax`, PHP) |

---

## Imágenes responsive

Las imágenes ilustrativas usan `<picture>` + `srcset` con formato AVIF para optimizar el rendimiento:

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

Los AVIF se generan con **sharp**. El PNG actúa de fallback para navegadores sin soporte AVIF.

---

## Despliegue (producción — Nginx)

```bash
pnpm run build
# Copiar dist/ a /var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/
```

Bloque Nginx requerido para el soporte PHP con `alias`:

```nginx
location ^~ /escuelait/curso-jquery-escuelait/ {
    alias /var/www/jquery.antonydev.tech/escuelait/curso-jquery-escuelait/;
    try_files $uri $uri/ /escuelait/curso-jquery-escuelait/index.html;

    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $request_filename;
        fastcgi_param QUERY_STRING    $query_string;
    }
}
```

---

## Autor

**Antonio Francisco Cutillas García** — [AntonyDev](https://antonydev.tech)  
Licencia: ISC
