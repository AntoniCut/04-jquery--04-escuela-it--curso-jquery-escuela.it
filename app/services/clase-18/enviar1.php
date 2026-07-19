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
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                font-family: inherit;
                text-align: left;
            }
            .respuesta-formulario__titulo {
                flex-shrink: 0;
                font-size: 1.6rem;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0;
                padding-bottom: 1rem;
                border-bottom: 2px solid #e1e4eb;
                text-align: center;
            }
            .respuesta-formulario__datos {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
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
            
            <div class="respuesta-formulario__datos">
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
        </div>
    ';

    echo $respuesta;

?> 
