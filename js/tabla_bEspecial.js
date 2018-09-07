$(document).ready(function(){

    watchTable();

    function modal (result) {

        let modal = '';
                            modal += '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> ';
                            modal += '<div class="modal-dialog modal-lg">';
                            modal += '  <div class="modal-content">';
                            modal += '    <div class="modal-header">';
                            modal += '      <h5 class="modal-title" id="exampleModalCenterTitle">Modificar campos</h5>';
                            modal += '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">';
                            modal += '        <span aria-hidden="true">&times;</span>';
                            modal += '      </button>';
                            modal += '    </div>';
                            modal += '    <div class="modal-body">';        
                            modal += '      <form onsubmit="hola(this)" id="create-alumn-form" action="#" method="POST">  ';
                            modal += '          <div class="form-row">';
                            modal += '          <div class="form-group col-md-4">';
                            modal += '            <label for="inputNombre1">Nombre del estudiante</label>';
                            modal += '            <input type="text"  maxlength="50" class="form-control" id="inputNombre1" name="nombre_alumno" value="'+result.nombre_alumno+'">';
                            modal += '          </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '                <label for="inputcarnet1">CIF</label>';
                            modal += '                <input type="text"  maxlength="10" class="form-control" id="inputcarnet1" value="'+result.cif+'">';
                            modal += '              </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '                <label for="inputaño1">Año en que se realiza la actividad</label>';
                            modal += '                <input type="text"  maxlength="10" class="form-control" id="inputaño1" value="'+result.fecha+'">';
                            modal += '            </div>';
                            modal += '          </div> ';
                            modal += '            <div class="form-row">';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <label for="inputEmail4">Correo Electrónico</label>';
                            modal += '              <input type="email" maxlength="50" class="form-control" id="inputEmail4" value="'+result.email+'">';
                            modal += '            </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <label for="inputTel4">Teléfono</label>';
                            modal += '              <input type="text"  maxlength="8" class="form-control" id="inputTel4" value="'+result.telefono+'">';
                            modal += '            </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <label for="inputCarrera">Facultad</label>';
                            modal += '              <select id="inputCarrera" class="form-control">';
                            modal += '                <option>Seleccione una Facultad</option>';
                            modal += '                <option selected>Ingeniería en Sistemas Computacionales</option>';
                            modal += '                <option>Medicina</option>';
                            modal += '                <option>Odontología</option>';
                            modal += '                <option>Ciencias Empresariales y Económicas</option>';
                            modal += '                <option>Ciencias Sociales</option>';
                            modal += '                <option>Ciencias Jurídicas</option>';
                            modal += '              </select>';
                            modal += '              </div>';
                            modal += '            </div>';
                            modal += '              <div class="form-row">';
                            modal += '              <div class="form-group col-md-4">';
                            modal += '                <label for="inputFacebook">Facebook</label>';
                            modal += '                <input type="text"  maxlength="50" class="form-control" id="inputFacebook" value="'+result.facebook+'">';
                            modal += '              </div>';
                            modal += '              <div class="form-group col-md-4">';
                            modal += '                <label for="inputExpectativa">Expectativas sobre futuras actividades de SAE</label>';
                            modal += '                <input type="text"  maxlength="250" class="form-control" id="inputExpectativa" value="'+result.expectativas+'">';
                            modal += '              </div>';
                            modal += '              <div class="form-group col-md-4">';
                            modal += '                <label for="inputIdeas">Ideas aportadas por el estudiante</label>';
                            modal += '                <input type="text"  maxlength="250" class="form-control" id="inputIdeas" value="'+result.ideas+'">';
                            modal += '              </div>';
                            modal += '              </div>';
                            modal += '        <div class="form-row">';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <fieldset class="form-group">';
                            modal += '            <div class="row">';
                            modal += '              <legend class="col-form-label col-md-8 ">¿El estudiante asiste a una iglesia?</legend>';
                            modal += '              <div class="col-sm-10">';
                            modal += '                <div class="form-check">';
                            modal += '                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>';
                            modal += '                  <label class="form-check-label" for="gridRadios1">';
                            modal += '                    Si asiste';
                            modal += '                  </label>';
                            modal += '                </div>';
                            modal += '                <div class="form-check">';
                            modal += '                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">';
                            modal += '                  <label class="form-check-label" for="gridRadios2">';
                            modal += '                    No asiste';
                            modal += '                  </label>';
                            modal += '                </div>';
                            modal += '              </div>';
                            modal += '            </div>';
                            modal += '          </fieldset>';
                            modal += '            </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <label for="inputNombre1">Nombre de la iglesia</label>';
                            modal += '            <input type="text" class="form-control" id="inputNombre1" value="'+result.nombre_iglesia+'">';
                            modal += '            </div>';
                            modal += '            <div class="form-group col-md-4">';
                            modal += '              <label for="inputAno">Años asistidos</label>';
                            modal += '              <input type="text"  maxlength="2" class="form-control" id="inputAnos" value="'+result.anios_es+'">';
                            modal += '            </div>';
                            modal += '          </div>';
                            modal += '    </div>';
                            modal += '    <div class="modal-footer">';
                            modal += '      <button onclick="cerrar();" type="button" class="btn btn-secondary" >Cancelar</button>';
                            modal += '      <input onclick="hola();"  type="submit" id="save" class="save btn btn-primary">Guardar</button>';
                            modal += '      </form>';
                            modal += '    </div>';
                            modal += '  </div>';
                            modal += ' </div>';
                            modal += ' </div>';
                            return modal;

    }

    function button () {

    }


    function watchTable() {

        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/bEspecial.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {
                console.log(result)
                $.each(result.records, function(k,v){
                    let html = '<tbody><tr>';
                    
                    html += '<td>'+ v.nombre_alumno+'</td>';
                    html += '<td>'+ v.cif + '</td>';
                    html += '<td>' + v.fecha + '</td>';
                    html += '<td>' + v.email + '</td>';
                    html += '<td>' + v.telefono + '</td>';
                    html += '<td>' + v.facebook + '</td>';
                    html += '<td>' + v.expectativas + '</td>';
                    html += '<td>' + v.ideas + '</td>';
                    html += '<td>' + v.asistencia + '</td>';
                    html += '<td>' + v.nombre_iglesia + '</td>';
                    html += '<td>' + v.anios_es + '</td>';
                    html += '<td><button data-toggle="modal type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'" data-target=".bs-example-modal-lg">Modificar</button></td>';
                    html += '<td><button type="button" class="btn btn-danger">Eliminar</button></td>';

                    $('#dataTable_bEspecial').append(html);


                });

                $('.edit').click(function(event){
                    let id_alumno = $(this).attr('id_alumno');
                    console.log(id_alumno);
                    $.ajax({
                        url: "http://localhost/api-sreportes/alumnos/editBe.php?id_alumno="+id_alumno,
                        type : "GET",
                        contentType : 'application/json',
                        success : function(result) {
                            var i = modal(result);
                            
                            var o = $(i).modal('show');
                            console.log(o.length);
                            if(o.length != 0) {


                            }

                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                        
                    });
                });



            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });


    }




});