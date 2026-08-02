<?php

    /*
        *  ---------------------------------------------------------------  *
        *  -----  buscar.php  --  /src/services/clase-20/buscar.php  -----  *
        *  ---------------------------------------------------------------  *
        *                                                                   *
        *  - Busca productos en jquery_escuelait_classicmodels.products (mysqli)
        *    o en products.json como fallback si mysqli no esta disponible.
        *                                                                   *
    */

    sleep(1);

    $producto = $_POST["producto"] ?? '';
    $descripcion = $_POST["descripcion"] ?? '';

    $filas = [];
    $consultaMysqlOk = false;
    $fuenteDatos = 'ninguna';


    //  -----  Intentar consulta MySQL (jquery_escuelait_classicmodels)  -----
    //  Nota: usar 127.0.0.1 (TCP) y no "localhost".
    //  Con "localhost", el PHP del sistema busca /var/run/mysqld/mysqld.sock
    //  y falla si MySQL corre en XAMPP (/opt/lampp/var/mysql/mysql.sock).
    
    if (function_exists('mysqli_connect')) {
        mysqli_report(MYSQLI_REPORT_OFF);

        $host = getenv('DB_HOST') ?: '127.0.0.1';
        $user = getenv('DB_USER') ?: 'root';
        $pass = getenv('DB_PASS') !== false ? getenv('DB_PASS') : '';
        $db   = getenv('DB_NAME') ?: 'jquery_escuelait_classicmodels';
        $port = (int) (getenv('DB_PORT') ?: 3306);

        $conn = mysqli_connect($host, $user, $pass, $db, $port);

        if ($conn) {
            $productoEsc = mysqli_real_escape_string($conn, $producto);
            $descripcionEsc = mysqli_real_escape_string($conn, $descripcion);

            $sql = "SELECT productName, productDescription
                    FROM products
                    WHERE productName LIKE '%{$productoEsc}%'
                      AND productDescription LIKE '%{$descripcionEsc}%'";

            $result = mysqli_query($conn, $sql);

            if ($result) {
                $consultaMysqlOk = true;
                $fuenteDatos = 'mysql';

                while ($row = mysqli_fetch_assoc($result)) {
                    $filas[] = $row;
                }

                mysqli_free_result($result);
            }

            mysqli_close($conn);
        }
    }


    //  -----  Fallback local con products.json  -----
    if (!$consultaMysqlOk) {
        $jsonPath = __DIR__ . '/products.json';

        if (is_file($jsonPath)) {
            $productos = json_decode(file_get_contents($jsonPath), true) ?: [];
            $productoLower = strtolower($producto);
            $descripcionLower = strtolower($descripcion);
            $fuenteDatos = 'json';

            foreach ($productos as $item) {
                $name = strtolower($item['productName'] ?? '');
                $desc = strtolower($item['productDescription'] ?? '');

                $matchNombre = $productoLower === '' || str_contains($name, $productoLower);
                $matchDesc = $descripcionLower === '' || str_contains($desc, $descripcionLower);

                if ($matchNombre && $matchDesc) {
                    $filas[] = $item;
                }
            }
        }
    }

    //  -----  Mensaje de origen de datos  -----
    if ($fuenteDatos === 'mysql') {
        $mensajeFuente = 'Datos obtenidos de MySQL: jquery_escuelait_classicmodels.products';
        $claseFuente = 'ajax-low__source ajax-low__source--mysql';
    } elseif ($fuenteDatos === 'json') {
        $mensajeFuente = 'Datos obtenidos del fallback local: products.json';
        $claseFuente = 'ajax-low__source ajax-low__source--json';
    } else {
        $mensajeFuente = 'No se pudo consultar MySQL ni products.json';
        $claseFuente = 'ajax-low__source ajax-low__source--error';
    }

?>


<p class="<?php echo $claseFuente; ?>">
    <?php echo htmlspecialchars($mensajeFuente); ?>
</p>


<table class="ajax-low__table" align="center" border="1" cellspacing="0">
    <tr>
        <th width="30%">Producto</th>
        <th width="70%">Descripción</th>
    </tr>
    <?php if (empty($filas)): ?>
        <tr>
            <td colspan="2">No se encontraron productos para esa busqueda.</td>
        </tr>
    <?php else: ?>
        <?php foreach ($filas as $row): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['productName']); ?></td>
                <td><?php echo htmlspecialchars($row['productDescription']); ?></td>
            </tr>
        <?php endforeach; ?>
    <?php endif; ?>
</table>
