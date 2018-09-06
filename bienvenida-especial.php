<?php 
  session_start();
  if (! empty($_SESSION["rol"]) && $_SESSION["rol"] === '1') { 
    echo "Estas logueado y por eso ves esto"; 
    echo $_SESSION['rol'];
  } else { 
    echo "hola";
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
  <title>Bienvenida Especial Registros - Secretaria de Asuntos Espirituales</title>
  <!-- Bootstrap core CSS-->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
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
            <li class="active">
              <a href="bienvenida-especial-agregar.php">Bienvenida Especial</a>
            </li>
            <li>
              <a href="amazing-race-agregar.php">Retiros Amazing Race</a>
            </li>
            <li>
              <a href="celulas-nice-agregar.php">Células NICE</a>
            </li>
            <li>
              <a href="conferencia-especial-agregar.php">Conferencia Especial</a>
            </li>
          </ul>
        </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="archivos.php">
            <i class="fa fa-suitcase" aria-hidden="true"></i>
            <span class="nav-link-text">Archivos</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Reportes">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseReportes" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Reportes</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseReportes">
            <li>
              <a href="reporte-bienvenida.php">Bienvenida Especial</a>
            </li>
            <li>
              <a href="reporte-amazing.php">Retiros Amazing Race</a>
            </li>
            <li>
              <a href="reporte-nice.php">Células NICE</a>
            </li>
            <li>
              <a href="reporte-conferencia.php">Conferencias Especiales</a>
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
        <a href="bienvenida-especial-agregar.php">Agregar Nuevo Registro</a>
        </li>
      </ol>
        <!-- Inicio de la tabla de datos -->
              <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> Registros agregados de Bienvenida Especial</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable_bEspecial" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>CIF</th>
                  <th>Año Actual</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Facebook</th>
                  <th>Expectativa</th>
                  <th>Nuevas Ideas</th>
                  <th>Asistencia Religiosa</th>
                  <th>Nombre de Iglesia</th>
                  <th>Años Asistidos</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Nombre</th>
                  <th>CIF</th>
                  <th>Año Actual</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Facebook</th>
                  <th>Expectativa</th>
                  <th>Nuevas Ideas</th>
                  <th>Asistencia Religiosa</th>
                  <th>Nombre de Iglesia</th>
                  <th>Años Asistidos</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
        <!-- Final de la tabla de datos-->
    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright © Your Website 2018</small>
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

  </div>
</div>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="vendor/chart.js/Chart.min.js"></script>
    <script src="vendor/datatables/jquery.dataTables.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="js/sb-admin-datatables.min.js"></script>
    <script src="js/sb-admin-charts.min.js"></script>
    <script src="js/tabla_bEspecial.js"></script>
  </div>
</body>

</html>
