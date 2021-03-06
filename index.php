<?php 
  session_start();
  if (! empty($_SESSION["rol"]) && $_SESSION["rol"] === '1') { 
     $_SESSION['rol'];
  } else if(! empty($_SESSION["rol"]) && $_SESSION["rol"] === '2') { 
    header('Location: User_App/index.php');
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
  <title>Inicio - Secretaría de Asuntos Espirituales</title>
  <!-- Bootstrap core CSS-->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">
  <link rel="stylesheet" href="css/hover-index.css">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
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
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="archivos.php">
            <i class="fa fa-suitcase" aria-hidden="true"></i>
            <span class="nav-link-text">Archivos</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Reportes">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseReportes" data-parent="#exampleAccordion">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
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
              <a href="reporte-conferencia.php">Conferencia Especial</a>
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
            <i class="fa fa-fw fa-sign-out" href="logout.php"></i>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper">
    <div class="container-fluid">
<!--Inicio de formulario-->
<div class="card text-center">
  <div class="card-header">
   <h4>Secretaría de Asuntos Espirituales</h4>
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"><h5><p ALIGN="justify">Es un departamento de la Universidad Evangélica de El Salvador, cuyas funciones son dar a conocer el evangelio de Jesucristo, cuidando y fortaleciendo el área espiritual de toda la comunidad universitaria. Para poder desarrollar estas funciones cuenta con un equipo de Capellanes, que tienen la función de dar cobertura espiritual, a través de diferentes actividades en cada uno de los edificios de la universidad.</p></h5>
  </div>
</div>
                <!--hover start-->
              <div class="content-all">
                <div class="content-img">
                  <img src="img/vision.jpg">
                  <div class="content-txt">
                  <h2>Misión</h2>
                  <p align="justify">
                    “Formar profesionales con excelencia
                    académica, conscientes del servicio a
                    sus semejantes y con una ética
                    cristiana basada en las sagradas
                    escrituras para responder a las
                    necesidades y cambios de la sociedad”</p>
                  </div>
                    <!-- hover line-->
                <div class="content-1"></div>
                <div class="content-2"></div>
                <div class="content-3"></div>
                <div class="content-4"></div>
                    <!-- hover line-->
                </div>
                <div class="content-img">
                    <img src="img/mision.jpg">
                    <div class="content-txt">
                   <h2>Visión</h2>
                    <p align="justify">“Ser la institución de educación
                        superior, líder regional por su excelencia
                        académica e innovación científica y
                        tecnológica; reconocida por su
                        naturaleza y práctica Cristiana”</p>
                    </div>

                    
                    <!-- hover line-->
                <div class="content-1"></div>
                <div class="content-2"></div>
                <div class="content-3"></div>
                <div class="content-4"></div>
                    <!-- Hover line-->
                </div>
                
                
                    <!-- hover line-->
                
                    <!-- Hover line-->
                </div>

                </div>
                <!-- Hover end-->
<!--Fin de formulario-->
    </div>
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small></small>
        </div>
      </div>
    </footer>
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
            <a class="btn btn-primary" href="logout.php">Cerrar Sesión</a>
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
    <script src="js/app.js"></script>
  </div>
</body>
</html>
