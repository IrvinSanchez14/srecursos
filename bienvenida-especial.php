<?php 
  session_start();
  if (! empty($_SESSION["rol"]) && $_SESSION["rol"] === '1') { 
     $_SESSION['rol'];
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
  <title>Bienvenida Especial Registros - Secretaria de Asuntos Espirituales</title>
  <!-- Bootstrap core CSS-->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <link rel="stylesheet" href="css/jquery-confirm.min.css">
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
        <div class="table-responsive" id= "tableN">
          </div> 
        </div>

      </div>
        <!-- Final de la tabla de datos-->
    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">

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

  <div id="myModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> 
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">  
          <h5 class="modal-title" id="exampleModalCenterTitle">Modificar campos</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="create-alumn-form" action="#" method="POST">  
            <div class="form-row">  
              <div class="form-group col-md-4">  
                <label for="inputNombre1">Nombre del estudiante</label>  
                <input type="text"  maxlength="50" class="form-control" id="nombre_alumno" name="nombre_alumno" >  
              </div>  
              <div class="form-group col-md-4">  
                <label for="inputcarnet1">CIF</label>  
                <input type="text"  maxlength="10" class="form-control" id="cif" name="cif" >  
              </div>  
              <div class="form-group col-md-4">  
               <label for="inputaño1">Año en que se realiza la actividad</label>  
               <input type="text"  maxlength="4" class="form-control" id="fecha" name="fecha" >  
              </div>  
            </div>   
            <div class="form-row">  
              <div class="form-group col-md-4">  
                <label for="inputEmail4">Correo Electrónico</label>  
                <input type="email" maxlength="50" class="form-control" id="email" name="email" >  
              </div>  
              <div class="form-group col-md-4">  
                <label for="inputTel4">Teléfono</label>  
                <input type="text"  maxlength="8" class="form-control" id="telefono" name="telefono" >  
               </div>  
                <div class="form-group col-md-4" id="select-fac">  
                </div>  
              </div>  
              <div class="form-row">  
                <div class="form-group col-md-4">  
                                             <label for="inputFacebook">Facebook</label>  
                                             <input type="text"  maxlength="50" class="form-control" id="facebook" name="facebook" >  
                                           </div>  
                                           <div class="form-group col-md-4">  
                                             <label for="inputExpectativa">Expectativas sobre futuras actividades de SAE</label>  
                                             <input type="text"  maxlength="250" class="form-control" id="expectativas" name="expectativas" >  
                                           </div>  
                                           <div class="form-group col-md-4">  
                                             <label for="inputIdeas">Ideas aportadas por el estudiante</label>  
                                             <input type="text"  maxlength="250" class="form-control" id="ideas" name="ideas" >  
                                           </div>  
                                           </div>  
                                     <div class="form-row">  
                                         <div class="form-group col-md-4">  
                                           <fieldset class="form-group">  
                                         <div class="row">  
                                           <legend class="col-form-label col-md-8 ">¿El estudiante asiste a una iglesia?</legend>  
                                           <div class="col-sm-10">  
                                             <div class="form-check">  
                                               <input class="form-check-input pr" type="radio" name="asistencia" id="asistenciaS" value="1">  
                                               <label class="form-check-label" for="gridRadios1">  
                                                 Si asiste  
                                               </label>  
                                             </div>   
                                             <div class="form-check">  
                                               <input class="form-check-input" type="radio" name="asistencia" id="asistenciaN" value="2">  
                                               <label class="form-check-label" for="gridRadios2">  
                                                 No asiste  
                                               </label>  
                                             </div>  
                                           </div>  
                                         </div>  
                                       </fieldset>  
                                         </div>  
                                         <div class="form-group col-md-4" id="div-iglesia">  
                                           <label for="inputNombre1">Nombre de la iglesia</label>  
                                         <input type="text" class="form-control" id="nombre_iglesia" name="nombre_iglesia" >  
                                         </div>  
                                         <div class="form-group col-md-4" id="div-anios">  
                                           <label for="inputAno">Años asistidos</label>  
                                           <input type="text"  maxlength="2" class="form-control" id="anios_es" name="anios_es" >  
                                         </div>  
                                       </div>  
                                 </div>  
                                 <div class="modal-footer">  
                                   <button onclick="" type="button" class="btn btn-secondary" data-dismiss="modal" >Cancelar</button>  
                                   <button id="add_btn" type="submit" id="save" class="save btn btn-primary">Guardar <i id="spinner_add" ></i>  </button>  
                                   </form>  
                                 </div>  
                               </div>  
                              </div>  
  </div>  
<script>

                                  </script>
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
    <script src="js/jquery-confirm.min.js"></script>
    <script src="js/tabla_bEspecial.js"></script>
  </div>
</body>

</html>
