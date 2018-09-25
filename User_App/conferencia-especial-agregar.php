<?php 
  session_start();
  if (! empty($_SESSION["rol"]) && $_SESSION["rol"] === '2') { 
     $_SESSION['rol'];
  } else if(! empty($_SESSION["rol"]) && $_SESSION["rol"] === '1') { 
    header('Location: ../index.php');
    } else {
      header('Location: login.html');
    } 
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Conferencias Especiales - Secretaria de Asuntos Espirituales</title>
  <!-- Bootstrap core CSS-->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="../vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="../css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top" oncopy="return false" onpaste="return false">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.php">Inicio</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-sitemap"></i>
            <span class="nav-link-text">Actividades</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents">
            <li>
              <a href="bienvenida-especial-agregar.php">Bienvenida Especial</a>
            </li>
            <li>
              <a href="amazing-race-agregar.php">Retiros Amazing Race</a>
            </li>
            <li>
              <a href="celulas-nice-agregar.php">Células NICE</a>
            </li>
            <li>
            <li class="active">
              <a href="conferencia-especial-agregar.php">Conferencias Especiales</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="conferencia-especial.php">Registros de Conferencia Especial</a>
        </li>
      </ol>
        <!--Inicio de los formularios -->
<form>
            <div class="container">
<div class="form-group">
    <label for="inputNombre1">Nombre del estudiante</label>
    <input type="text"  maxlength="50" class="form-control" id="inputNombre1" placeholder="Ejemplo Juan Perez">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
        <label for="inputcarnet1">CIF</label>
        <input type="number"  maxlength="10" class="form-control" id="inputcarnet1" placeholder="11223-44556">
      </div>
    <div class="form-group col-md-6">
      <label for="inputCarrera">Ciclo Actual</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione un Ciclo</option>
        <option>Ciclo 1</option>
        <option>Ciclo 2</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Correo Electronico</label>
      <input type="email" maxlength="50" class="form-control" id="inputEmail4" placeholder="Ejemplo@hotmail.com">
    </div>
    <div class="form-group col-md-6">
      <label for="inputTel4">Telefono</label>
      <input type="number"  maxlength="8" class="form-control" id="inputTel4" placeholder="1122-3344">
    </div>
  </div>

    <div class="form-group">
      <label for="inputCarrera">Facultad</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una Facultad</option>
        <option>Ingenieria en sistemas</option>
        <option>Medicina</option>
        <option>Odontologia</option>
        <option>Ciencias Empresariales y Economicas</option>
        <option>Ciencias Sociales</option>
        <option>Ciencias Juridicas</option>
      </select>
    </div>

  <div class="form-group">
    <label for="inputFacebook">Nombre con el que se identifica en Facebook</label>
    <input type="text"  maxlength="50" class="form-control" id="inputFacebook" placeholder="Ejemplo Juan Martinez">
  </div>
  <div class="form-group">
    <label for="inputExpectativa">Beneficio adquirido de la conferencia</label>
    <input type="text"  maxlength="250" class="form-control" id="inputExpectativa" placeholder="Escriba le beneficio que obtuvo el estudiante">
  </div>

<div class="form-row">
    <div class="form-group col-md-4">
      <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-md-8 ">El estudiante asiste a un iglesia</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Si asiste
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            No asiste
          </label>
        </div>
      </div>
    </div>
  </fieldset>
    </div>

    <div class="form-group col-md-6">
      <label for="inputNombre1">Nombre de la iglesia</label>
    <input type="text" class="form-control" id="inputNombre1" placeholder="Iglesia Jesus viene pronto">
    </div>
  </div>

<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Opiniones sobre la conferencia</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Seleccione una opcion</option>
    <option value="1">Regular</option>
    <option value="2">Bueno</option>
    <option value="3">Muy Bueno</option>
    <option value="4">Excelente</option>
  </select>
 <br>

 <form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Decisión tomada por el estudiante</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Seleccione una opcion</option>
    <option value="1">Se entrego</option>
    <option value="2">Ya lo habia hecho</option>
  </select>
            <br>
             </div>
            <center>  <button type="submit" class="btn btn-primary center">Guardar Registro</button>  </center> 
</form>
        <!--Fin de los formularios -->
<br>
    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small></small>
        </div>
      </div>
    </footer>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Desea Cerrar Sesión?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
            <a class="btn btn-primary" href="login.html">Cerrar Sesion</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="../vendor/chart.js/Chart.min.js"></script>
    <script src="../vendor/datatables/jquery.dataTables.js"></script>
    <script src="../vendor/datatables/dataTables.bootstrap4.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="../js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="../js/sb-admin-datatables.min.js"></script>
    <script src="../js/sb-admin-charts.min.js"></script>
  </div>
</body>

</html>
