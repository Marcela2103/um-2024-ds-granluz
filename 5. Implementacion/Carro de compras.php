<html>
    <head>
        <title>Ventas</title>
    </head>
    <body>
        <?php 
            $Precio1 = $_POST["PrecioProducto1"];
            $Precio2 = $_POST["PrecioProducto2"];
            $suma = "$Precio1 - $Precio2";
        ?>
            <h1>HOLA EL VALOR A PAGAR ES: <?php echo $suma; ?> </h1>
        

        <h1>Ventas</h1>
        <form action="">
            Precio del producto 1 <input type="date" name="PrecioProducto1" value="<?php echo $Precio1; ?>" />
            Precio del producto 2 <input type="date" name="PrecioProducto2" value="<?php echo $Precio2; ?>" /> <br/>
            <input type="submit" value="Guardar">
        </form>
    </body>
</html>