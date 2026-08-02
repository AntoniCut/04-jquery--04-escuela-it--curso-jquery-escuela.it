<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  load-env.php  --  /src/services/load-env.php  -----  *
        *  ---------------------------------------------------------------  *
        *                                                                   *
        *  - Carga un archivo .env desde el directorio del proyecto         *
        *    (subiendo carpetas desde $startDir).                           *
        *  - No sobrescribe variables ya definidas (dev/preview con Node).  *
        *                                                                   *
    */

    /**
     * @param string $startDir Directorio desde el que empezar a buscar .env
     */
    function load_dotenv(string $startDir): void
    {
        $dir = $startDir;

        for ($i = 0; $i < 6; $i++) {
            $envFile = $dir . DIRECTORY_SEPARATOR . '.env';

            if (is_file($envFile) && is_readable($envFile)) {
                $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];

                foreach ($lines as $line) {
                    $line = trim($line);

                    if ($line === '' || str_starts_with($line, '#')) {
                        continue;
                    }

                    if (!str_contains($line, '=')) {
                        continue;
                    }

                    [$name, $value] = explode('=', $line, 2);
                    $name = trim($name);
                    $value = trim($value);

                    if ($name === '') {
                        continue;
                    }

                    if (
                        (str_starts_with($value, '"') && str_ends_with($value, '"'))
                        || (str_starts_with($value, "'") && str_ends_with($value, "'"))
                    ) {
                        $value = substr($value, 1, -1);
                    }

                    if (getenv($name) === false) {
                        putenv("{$name}={$value}");
                        $_ENV[$name] = $value;
                    }
                }

                return;
            }

            $parent = dirname($dir);

            if ($parent === $dir) {
                break;
            }

            $dir = $parent;
        }
    }
