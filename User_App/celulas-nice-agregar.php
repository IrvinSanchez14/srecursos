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
  <title>Células NICE - Secretaría de Asuntos Espirituales</title>
  <!-- Bootstrap core CSS-->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> 
  <!-- Custom fonts for this template-->
  <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"> 
  <!-- Page level plugin CSS-->
  <link href="../vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/jquery-confirm.min.css">
  <!-- Custom styles for this template-->
  <link href="../css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top" >
  <!-- Barra de Navegacion-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.php">Inicio</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item act_ss" data-toggle="tooltip" data-placement="right" title="Actividades">
        </li>
       <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
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
          <a href="celulas-nice.php">Ver registros actuales de Células NICE</a>
        </li>
      </ol>
    <form id='create-celula-form' action='#' method='POST' >
              <input name="id_actividad" value="3" type="hidden">
                <!-- Inicio de formulario -->
                <div class="form-group">
                  <label for="inputNombre1">Nombre del estudiante</label>
                  <input type="text"  maxlength="50" class="form-control" id="inputNombre1" placeholder="Ejemplo Juan Pérez" name="nombre_alumno">
                </div>

                <div class="form-group">
                  <label for="inputcarnet1">CIF</label>
                  <input type="text"  maxlength="10" class="form-control" id="inputcarnet1" placeholder="2015020004" name="cif">
                </div>
        <div class="form-group">
          <label for="inputCarrera">Facultad</label>
          <select id="inputCarrera" name='id_facultad' class="form-control">
            <option value="0"selected>Seleccione una Facultad</option>
            <option value="1">Ingeniería en Sistemas Computacionales</option>
            <option value="2">Medicina</option>
            <option value="3">Odontología</option>
            <option value="4">Ciencias Empresariales y Económicas</option>
            <option value="5">Ciencias Sociales</option>
            <option value="6">Ciencias Jurídicas</option>
          </select>
        </div>
             </div>
            <center>  <button type="submit" id="add_btn" class="btn btn-primary center">Guardar Registro <i id="spinner_add" ></i> </button>  </center> 
                 <!-- Fin del formulario -->
         </div>
  </form>
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
            <a class="btn btn-primary" href="login.html">Cerrar Sesión</a>
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
    <script src="../js/jquery-confirm.min.js"></script>
    <script src="../js/app.js"></script>
  </div>
</body>

</html>
