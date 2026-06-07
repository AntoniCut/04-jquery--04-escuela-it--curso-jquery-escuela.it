<?php

    /*
        *  -----------------------------------------------------------------  *
        *  -----  enviar2.php  --  /src/services/clase-18/enviar2.php  -----  *
        *  -----------------------------------------------------------------  *
    */

    //  -----  espera de 4 segundos  -----
    sleep(4);

    //  -----  array para almacenar los errores  -----
    $errores = array();

    //  -----  validación del nombre  -----
    if(strlen(trim($_POST["nombre"])) < 3) {
        $errores["nombre"] = "El nombre debe tener al menos 3 caracteres";
    }

    //  -----  validación del email  -----
    if(strlen(trim($_POST["email"])) < 5) {
        $errores["email"] = "El email no es válido";
    }

    //  -----  si hay errores de validación  -----
    if(!empty($errores)) {
        
        //  -----  respuesta con errores por campo  -----
        $respuesta = array(
            "valido" => false, 
            "mensaje" => "Error de validación", 
            "errores" => $errores
        );
    } 
    
    //  -----  si todo es válido  -----
    else {
        
        //  -----  datos del formulario  -----
        $nombre = htmlspecialchars($_POST["nombre"]);
        $email = htmlspecialchars($_POST["email"]);
        $sexo = ($_POST["sexo"] === "H") ? "Hombre" : "Mujer";
        
        //  -----  construir mensaje HTML estilizado  -----
        $mensajeHtml = '
            <div style="text-align: center;">
                <p style="font-size: 1.8rem; font-weight: 700; color: #1a1a2e; margin: 0 0 1rem;">
                    ¡Formulario enviado correctamente!
                </p>
                <p style="font-size: 1.5rem; color: #3d4152; margin: 0;">
                    El amigo <strong style="color: #764ba2;">' . $nombre . '</strong>
                </p>
                <p style="font-size: 1.4rem; color: #666; margin: 0.5rem 0;">
                    Email: ' . $email . ' | Sexo: ' . $sexo . '
                </p>
            </div>
        ';
        
        //  -----  respuesta exitosa  -----
        $respuesta = array(
            "valido" => true, 
            "mensaje" => $mensajeHtml
        );
    }

    //  -----  enviar la respuesta como JSON  -----
    header('Content-Type: application/json');
    echo json_encode($respuesta);

?> 
