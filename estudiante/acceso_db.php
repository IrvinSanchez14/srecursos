 <?php
    $host_db = "173.255.192.4"; // Host de la BD
    $usuario_db = "root"; // Usuario de la BD
    $clave_db = ""; // Contraseña de la BD
    $nombre_db = "login"; // Nombre de la BD
    
    //conectamos y seleccionamos db
    mysqli_connect($host_db, $usuario_db, $clave_db);
    mysqli_select_db($nombre_db);
?> 