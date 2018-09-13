<?php

    $con = mysqli_connect("173.255.192.4", "root", "", "login");

    if (!empty($_POST)) {
        $usuario = $_POST['username'];
        $contra = $_POST['password'];
        $rs = mysqli_query($con, "SELECT * FROM usuarios WHERE usuario = '$usuario' AND password = MD5('$contra')");

        if($rs->num_rows>0){
            while ($row = mysqli_fetch_array($rs)){
               header("Location: bienvenida/bienvenida-encuesta.html");
            }
        }else{
            print("Usuario o contrasena no son validos");
        }
    }else{
        echo "Ingrese usuario y contrasena";
    }
?>