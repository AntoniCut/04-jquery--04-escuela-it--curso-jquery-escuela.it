<?php

    /*
        *  --------------------------------------------------------------  *
        *  -----  /login.php  --  /src/services/clase-21/login.php  -----  *
        *  --------------------------------------------------------------  *
    */

    sleep(3);

    header('Content-Type: application/json; charset=utf-8');

    $user = $_REQUEST['user'] ?? '';

    if ($user != '') {
        echo json_encode([
            'valido' => true,
            'mensaje' => 'Entrando...',
        ]);
    } else {
        echo json_encode([
            'valido' => false,
            'mensaje' => 'No se corresponde el usuario o la clave',
        ]);
    }
