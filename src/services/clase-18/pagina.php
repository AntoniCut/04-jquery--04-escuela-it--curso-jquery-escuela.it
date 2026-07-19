<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  pagina.php  --  /src/services/clase-18/pagina.php  -----  *
        *  ---------------------------------------------------------------  *
    */

    //  -----  datos recibidos por POST  -----
    $dato1 = htmlspecialchars($_POST["dato1"] ?? '');
    $dato2 = htmlspecialchars($_POST["dato2"] ?? '');

    //  -----  estilos para la respuesta  -----
    $estilos = '
        <style>
            .respuesta-post {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 1.6rem;
                font-family: inherit;
                text-align: left;
            }
            .respuesta-post__titulo {
                font-size: 1.6rem;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0;
                padding-bottom: 1rem;
                border-bottom: 2px solid #e1e4eb;
                text-align: center;
            }
            .respuesta-post__dato {
                display: flex;
                flex-direction: column;
                gap: 0.6rem;
                padding: 1.2rem 1.6rem;
                background: linear-gradient(145deg, #ffffff 0%, #f8f9fc 100%);
                border-left: 4px solid #667eea;
                border-radius: 8px;
            }
            .respuesta-post__label {
                font-size: 1.3rem;
                font-weight: 600;
                color: #667eea;
                letter-spacing: 0.02em;
            }
            .respuesta-post__valor {
                font-size: 1.5rem;
                font-weight: 500;
                color: #3d4152;
                line-height: 1.5;
            }
        </style>
    ';

    //  -----  construir la respuesta HTML vertical  -----
    $respuesta = $estilos . '
        <div class="respuesta-post">
            <h3 class="respuesta-post__titulo">Datos recibidos por POST</h3>
            
            <div class="respuesta-post__dato">
                <span class="respuesta-post__label">dato1:</span>
                <span class="respuesta-post__valor">' . $dato1 . '</span>
            </div>
            
            <div class="respuesta-post__dato">
                <span class="respuesta-post__label">dato2:</span>
                <span class="respuesta-post__valor">' . $dato2 . '</span>
            </div>
        </div>
    ';

    echo $respuesta;

?> 
