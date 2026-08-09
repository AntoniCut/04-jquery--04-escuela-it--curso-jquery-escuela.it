<?php

    /*
        *  ------------------------------------------------------------------------------  *
        *  -----  /register-auth.php  --  /src/services/clase-21/register-auth.php  -----  *
        *  ------------------------------------------------------------------------------  *
        *                                                                                  *
        *  - Da de alta un usuario nuevo en la tabla login_users.                          *
        *                                                                                  *
    */

    sleep(1);

    require_once __DIR__ . '/db-connect.php';

    $user = trim((string) ($_POST['user'] ?? ''));
    $pass = (string) ($_POST['pass'] ?? '');

    if ($user === '' || $pass === '') {
        clase21_json_response(false, 'Usuario y clave son obligatorios');
    }

    if (strlen($user) < 3) {
        clase21_json_response(false, 'El usuario debe tener al menos 3 caracteres');
    }

    if (strlen($pass) < 4) {
        clase21_json_response(false, 'La clave debe tener al menos 4 caracteres');
    }

    [$conn, $errorMysql] = clase21_obtener_conexion();

    if (!$conn) {
        clase21_json_response(false, $errorMysql !== '' ? $errorMysql : 'No se pudo conectar a la base de datos');
    }

    //  -----  comprobar si ya existe  -----
    $sqlCheck = 'SELECT id FROM login_users WHERE username = ? LIMIT 1';
    $stmtCheck = mysqli_prepare($conn, $sqlCheck);

    if (!$stmtCheck) {
        $error = mysqli_error($conn);
        mysqli_close($conn);
        clase21_json_response(false, 'Error al preparar la consulta: ' . $error);
    }

    mysqli_stmt_bind_param($stmtCheck, 's', $user);
    mysqli_stmt_execute($stmtCheck);
    $resultCheck = mysqli_stmt_get_result($stmtCheck);
    $existe = $resultCheck ? mysqli_fetch_assoc($resultCheck) : null;
    mysqli_stmt_close($stmtCheck);

    if ($existe) {
        mysqli_close($conn);
        clase21_json_response(false, 'Ese usuario ya esta registrado. Inicia sesion.', [
            'codigo' => 'ya_existe',
        ]);
    }

    $passwordHash = password_hash($pass, PASSWORD_DEFAULT);

    $sqlInsert = 'INSERT INTO login_users (username, password_hash) VALUES (?, ?)';
    $stmtInsert = mysqli_prepare($conn, $sqlInsert);

    if (!$stmtInsert) {
        $error = mysqli_error($conn);
        mysqli_close($conn);
        clase21_json_response(false, 'Error al preparar el alta: ' . $error);
    }

    mysqli_stmt_bind_param($stmtInsert, 'ss', $user, $passwordHash);
    $ok = mysqli_stmt_execute($stmtInsert);

    if (!$ok) {
        $error = mysqli_stmt_error($stmtInsert);
        mysqli_stmt_close($stmtInsert);
        mysqli_close($conn);
        clase21_json_response(false, 'No se pudo registrar el usuario: ' . $error);
    }

    mysqli_stmt_close($stmtInsert);
    mysqli_close($conn);

    clase21_json_response(true, 'Registro correcto. Ya puedes iniciar sesion.', [
        'codigo' => 'registrado',
        'username' => $user,
    ]);
