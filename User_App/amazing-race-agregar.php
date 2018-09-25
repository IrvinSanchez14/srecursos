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
  <title>Amazing Race - Secretaria de Asuntos Espirituales</title>
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
            <li class="active">
              <a href="amazing-race-agregar.php">Retiros Amazing Race</a>
            </li>
            <li>
              <a href="celulas-nice-agregar.php">Células NICE</a>
            </li>
            <li>
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
          <a href="amazing-race.php">Registros de Amazing Race</a>
        </li>
      </ol>
        <!--Inicio de los formularios -->
<form>
            <div class="container">

  <div class="form-row">
    <div class="form-group col-md-6">
              <label for="inputNombre1">Nombre del estudiante</label>
              <input type="text"  maxlength="50" class="form-control" id="inputNombre1" placeholder="Juan Perez">
      </div>
    <div class="form-group col-md-6">
        <label for="inputcarnet1">CIF</label>
        <input type="number"  maxlength="10" class="form-control" id="inputcarnet1" placeholder="11223-44556">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-md-8 ">El estudiante acepto a Jesús en su vida</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Si acepto
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            No acepto
          </label>
        </div>
      </div>
    </div>
  </fieldset>
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

    <label><h5>Encuestas de satisfacción</h5></label>

        <div class="form-row">
            <div class="col">
              <label for="inputCarrera">Instalaciones</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>

            <div class="col">
              <label for="inputCarrera">Dinámicas</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>
          </div>

                  <div class="form-row">
            <div class="col">
              <label for="inputCarrera">Conferencia</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>

            <div class="col">
              <label for="inputCarrera">Alimentación</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>
          </div>

                  <div class="form-row">
            <div class="col">
              <label for="inputCarrera">Talleres</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>

            <div class="col">
              <label for="inputCarrera">Atención del lugar</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
            </div>
          </div>

              <div class="form-group">
      <label for="inputCarrera">Transporte</label>
      <select id="inputCarrera" class="form-control">
        <option selected>Seleccione una opción</option>
        <option>Necesita mejorar</option>
        <option>Regular</option>
        <option>Bueno</option>
        <option>Muy Bueno</option>
        <option>Excelente</option>
      </select>
    </div>

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
