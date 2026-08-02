<?php

    /*
        *  -----------------------------------------------------------------  *
        *  -----  destino.php  --  /src/services/clase-20/destino.php  -----  *
        *  -----------------------------------------------------------------  *
    */

    $dato = htmlspecialchars($_POST["dato"] ?? '');

    $estilos = '
        <style>
            .respuesta-ajax {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
                font-family: inherit;
                text-align: left;
            }
            .respuesta-ajax__titulo {
                font-size: 1.6rem;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0;
                padding-bottom: 1rem;
                border-bottom: 2px solid #e1e4eb;
                text-align: center;
            }
            .respuesta-ajax__dato {
                padding: 1.2rem 1.6rem;
                background: linear-gradient(145deg, #ffffff 0%, #f8f9fc 100%);
                border-left: 4px solid #0f766e;
                border-radius: 8px;
                font-size: 1.5rem;
                color: #3d4152;
            }
        </style>
    ';

    echo $estilos . '
        <div class="respuesta-ajax">
            <h3 class="respuesta-ajax__titulo">Respuesta Ajax POST</h3>
            <div class="respuesta-ajax__dato">esto es Ajax ' . $dato . '</div>
        </div>
    ';

?>
