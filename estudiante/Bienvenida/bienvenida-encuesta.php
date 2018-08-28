<?php session_start();
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){

}else{
  echo "Esta Pagina solo es para usuarios registrados.<br>";
  echo "<br><a href='login.php'>Login</a>";

  exit;
}

$now = time();

if($now > $_SESSION['expire']){
  session_destroy();

  echo "Su sesion a terminado, <a href='login.php'> Necesita volver a iniciar sesion</a>";
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Hoja de datos Bienvenida</title>
	<link rel="stylesheet"  href="../css/sb-admin">
	<link rel="stylesheet" href="../css/sb-admin.min">
	<link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/header-img.css">
</head>
<body style="background-color:#E8F8F5;">

	<header>
	<a href="#"><img src="../img/alpine.jpg"></a>
	</header>
  <div class="container">
<div class="card" style="background-color:#F0F3F4;">
<!--Inicio del formulario-->
  <center><h5 class="card-header">Secretaria de Asuntos Espirituales</h5></center>
  <div class="card-body">
    <h5 class="card-title">Bienvenida Especial</h5>
    <p class="card-text">Apreciamos tu opinion y por ello te pedimos que completes la siguiente encuesta</p>
    <form>
   <div class="form-group">
    <label for="inputFacebook">Nombre con el que se identifica en Facebook</label>
    <input type="text"  maxlength="50" class="form-control" id="inputFacebook" placeholder="Ejemplo Juan Martinez">
  </div>
  <div class="form-group ">
    <label for="inputExpectativa">¿Cual es tu expectativas de las actividades que realizara SAE?</label>
    <input type="text"  maxlength="250" class="form-control" id="inputExpectativa" placeholder="Escriba la expectativa">
  </div>
  <div class="form-group ">
    <label for="inputIdeas">¿Que nueva idea nos sugieres?</label>
    <input type="text"  maxlength="250" class="form-control" id="inputIdeas" placeholder="Escriba una idea">
  </div>
<div class="form-group ">
      <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-md-8 ">¿Asistes a una iglesia?</legend>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Si asisto
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            No asisto
          </label>
        </div>
      </div>
    </div>
  </fieldset>
    </div>
<div class="form-group">
    <label for="formGroupExampleInput">Nombre de la iglesia a la que asistes</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">¿Cuantos años tienes de asister a tu iglesia?</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="">
  </div>
  <center>  <button type="submit" class="btn btn-primary center">Enviar</button>  </center>
</form>
  </div>
  </div>
  <!--Fin del formulario-->
</div>

</body>
</html>