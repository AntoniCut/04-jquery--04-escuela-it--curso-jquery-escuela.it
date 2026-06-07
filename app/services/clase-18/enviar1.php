<?php

    /*
        *  -----------------------------------------------------------------  *
        *  -----  enviar1.php  --  /src/services/clase-18/enviar1.php  -----  *
        *  -----------------------------------------------------------------  *
    */

    //  -----  espera de 4 segundos  -----
    sleep(4);

    //  -----  estilos para la respuesta  -----
    $estilos = '
        
        <style>
            .respuesta-formulario {
                padding: 2rem;
                background: linear-gradient(145deg, #f8f9fc 0%, #eef0f7 100%);
                border-radius: 12px;
                border-left: 4px solid #667eea;
                font-family: inherit;
            }
            .respuesta-formulario__titulo {
                font-size: 1.6rem;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0 0 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #e1e4eb;
            }
            .respuesta-formulario__dato {
                display: flex;
                align-items: baseline;
                gap: 1rem;
                padding: 0.8rem 0;
                font-size: 1.4rem;
                border-bottom: 1px solid #eef0f7;
            }
            .respuesta-formulario__dato:last-child {
                border-bottom: none;
            }
            .respuesta-formulario__label {
                font-weight: 600;
                color: #667eea;
                min-width: 10rem;
            }
            .respuesta-formulario__valor {
                color: #3d4152;
            }
            .respuesta-formulario__valor--destacado {
                font-weight: 600;
                color: #764ba2;
            }
        </style>
    ';

    //  -----  datos del formulario  -----
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $sexo = htmlspecialchars($_POST["sexo"]);
    $intereses = htmlspecialchars($_POST["intereses"]);

    //  -----  construir la respuesta HTML  -----
    $respuesta = $estilos . '
        <div class="respuesta-formulario">
            <h3 class="respuesta-formulario__titulo">Datos Recibidos</h3>
            
            <div class="respuesta-formulario__dato">
                <span class="respuesta-formulario__label">Nombre:</span>
                <span class="respuesta-formulario__valor respuesta-formulario__valor--destacado">' . $nombre . '</span>
            </div>
            
            <div class="respuesta-formulario__dato">
                <span class="respuesta-formulario__label">Email:</span>
                <span class="respuesta-formulario__valor">' . $email . '</span>
            </div>
            
            <div class="respuesta-formulario__dato">
                <span class="respuesta-formulario__label">Sexo:</span>
                <span class="respuesta-formulario__valor">' . $sexo . '</span>
            </div>
            
            <div class="respuesta-formulario__dato">
                <span class="respuesta-formulario__label">Intereses:</span>
                <span class="respuesta-formulario__valor">' . $intereses . '</span>
            </div>
        </div>
    ';

    echo $respuesta;

?> 
