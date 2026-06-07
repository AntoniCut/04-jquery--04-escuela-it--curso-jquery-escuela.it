<?php

    /*
        *  -----------------------------------------------------------------  *
        *  -----  enviar3.php  --  /src/services/clase-18/enviar3.php  -----  *
        *  -----------------------------------------------------------------  *
    */


    //  -----  espera de 4 segundos  -----
    sleep(4);


    //  -----  respuesta con errores de validación  -----
    $respuesta = array(
        "valido" => false, 
        "mensaje" => "Error de validación", 
        "errores" => array(
            "nombre" => "Nombre invalido",
            "email" => "Email invalido"
        )
    );

    //  -----  enviar la respuesta como JSON  -----
    echo json_encode($respuesta);
  
    
?> 
