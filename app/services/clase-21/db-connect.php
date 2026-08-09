<?php

    /*
        *  ------------------------------------------------------------------------  *
        *  -----  /db-connect.php  --  /src/services/clase-21/db-connect.php  -----  *
        *  ------------------------------------------------------------------------  *
    */

    
    /*
        - Conexion mysqli a jquery_escuelait_classicmodels.      
        - Reutilizable por login-auth.php y register-auth.php.
    */

    require_once dirname(__DIR__) . '/load-env.php';
    load_dotenv(__DIR__);


    /**
     * -------------------------------------------
     * -----  `clase21_obtener_conexion()`  -----
     * -------------------------------------------
     * - Abre una conexion mysqli usando variables de entorno / .env.
     * @return array{0: mysqli|null, 1: string} [conexion, mensajeError]
     */
    function clase21_obtener_conexion(): array
    {
        if (!function_exists('mysqli_connect')) {
            return [null, 'Extension mysqli no disponible en PHP del servidor'];
        }

        mysqli_report(MYSQLI_REPORT_OFF);

        $host = getenv('DB_HOST') ?: '127.0.0.1';
        $user = getenv('DB_USER') ?: 'root';
        $pass = getenv('DB_PASS') !== false ? getenv('DB_PASS') : '';
        $db   = getenv('DB_NAME') ?: 'jquery_escuelait_classicmodels';
        $port = (int) (getenv('DB_PORT') ?: 3306);

        $conn = mysqli_connect($host, $user, $pass, $db, $port);

        if (!$conn) {
            return [null, 'Conexion MySQL fallida: ' . mysqli_connect_error()];
        }

        mysqli_set_charset($conn, 'utf8mb4');

        return [$conn, ''];
    }


    /**
     * --------------------------------------
     * -----  `clase21_json_response()`  -----
     * --------------------------------------
     * - Envia una respuesta JSON y termina el script.
     * @param bool $valido
     * @param string $mensaje
     * @param array<string, mixed> $extra
     * @return never
     */
    function clase21_json_response(bool $valido, string $mensaje, array $extra = []): void
    {
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode(array_merge([
            'valido' => $valido,
            'mensaje' => $mensaje,
        ], $extra), JSON_UNESCAPED_UNICODE);

        exit;
    }
