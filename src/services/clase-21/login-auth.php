<?php

    /*
        *  ------------------------------------------------------------------------  *
        *  -----  /login-auth.php  --  /src/services/clase-21/login-auth.php  -----  *
        *  ------------------------------------------------------------------------  *
        *                                                                             *
        *  - Autentica un usuario contra la tabla login_users.                        *
        *                                                                             *
    */

    sleep(1);

    require_once __DIR__ . '/db-connect.php';

    $user = trim((string) ($_POST['user'] ?? ''));
    $pass = (string) ($_POST['pass'] ?? '');

    if ($user === '' || $pass === '') {
        clase21_json_response(false, 'Usuario y clave son obligatorios');
    }

    [$conn, $errorMysql] = clase21_obtener_conexion();

    if (!$conn) {
        clase21_json_response(false, $errorMysql !== '' ? $errorMysql : 'No se pudo conectar a la base de datos');
    }

    $sql = 'SELECT id, username, password_hash FROM login_users WHERE username = ? LIMIT 1';
    $stmt = mysqli_prepare($conn, $sql);

    if (!$stmt) {
        $error = mysqli_error($conn);
        mysqli_close($conn);
        clase21_json_response(false, 'Error al preparar la consulta: ' . $error);
    }

    mysqli_stmt_bind_param($stmt, 's', $user);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = $result ? mysqli_fetch_assoc($result) : null;

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

    //  -----  usuario no registrado: hay que registrarse  -----
    if (!$row) {
        clase21_json_response(false, 'El usuario no esta dado de alta. Debes registrarte.', [
            'codigo' => 'no_registrado',
        ]);
    }

    //  -----  usuario existe pero la clave no coincide  -----
    if (!password_verify($pass, $row['password_hash'])) {
        clase21_json_response(false, 'No se corresponde el usuario o la clave', [
            'codigo' => 'credenciales_invalidas',
        ]);
    }

    clase21_json_response(true, 'Entrando...', [
        'codigo' => 'ok',
        'username' => $row['username'],
    ]);
