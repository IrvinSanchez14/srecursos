$(document).ready(function(){

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    watchTable();



    $("#myModal").on('hidden.bs.modal', function(){
        $("#select-fac").empty();
    });



    function watchTable() {

        $.ajax({
            url: "http://173.255.192.4/api-sreportes/alumnos/bEspecial.php",
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
                    html += '<td><button data-toggle="modal" data-target="#myModal" type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'">Modificar</button></td>';
                    html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id_alumno+'">Eliminar</button></td>';

                    $('#dataTable_bEspecial').append(html);


                });

                $('.edit').click(function(event){
                    let id_alumno = $(this).attr('id_alumno');
                    console.log(id_alumno);
                   $.ajax({
                        url: "http://173.255.192.4/api-sreportes/alumnos/editBe.php?id_alumno="+id_alumno,
                        type : "GET",
                        contentType : 'application/json',
                        success : function(result) {
                            $('#nombre_alumno').val(result.nombre_alumno);
                            $('#cif').val(result.cif);
                            $('#fecha').val(result.fecha);
                            $('#email').val(result.email);
                            $('#telefono').val(result.telefono);
                  
                            if (result.id_facultad == 1) {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="2" >Medicina</option></select>');
                                $('#id_facultad').append('<option value="3" >Odontologia</option></select>');
                                $('#id_facultad').append('<option value="4" >Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="5" >Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="6" >Ciencias Juridicas</option></select>');
                            } else if (result.id_facultad == 2) {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="1" >Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Medicina</option></select>');
                                $('#id_facultad').append('<option value="3" >Odontologia</option></select>');
                                $('#id_facultad').append('<option value="4" >Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="5" >Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="6" >Ciencias Juridicas</option></select>');
                            } else if (result.id_facultad == 3) {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="1" >Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="2" >Medicina</option></select>');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Odontologia</option></select>');
                                $('#id_facultad').append('<option value="4" >Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="5" >Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="6" >Ciencias Juridicas</option></select>');
                            } else if (result.id_facultad == 4) {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="1" >Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="2" >Medicina</option></select>');
                                $('#id_facultad').append('<option value="3" >Odontologia</option></select>');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="5" >Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="6" >Ciencias Juridicas</option></select>');
                            } else if (result.id_facultad == 5) {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="1" >Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="2" >Medicina</option></select>');
                                $('#id_facultad').append('<option value="3" >Odontologia</option></select>');
                                $('#id_facultad').append('<option value="4" >Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="6" >Ciencias Juridicas</option></select>');
                            } else {
                                $("#select-fac").append('<label for="inputCarrera">Facultad</label><select id="id_facultad" name="id_facultad" class="form-control">');
                                $('#id_facultad').append('<option value="1" >Ingeniería en Sistemas Computacionales</option></select>');
                                $('#id_facultad').append('<option value="2" >Medicina</option></select>');
                                $('#id_facultad').append('<option value="3" >Odontologia</option></select>');
                                $('#id_facultad').append('<option value="4" >Ciencias Empresariales y Economicas</option></select>');
                                $('#id_facultad').append('<option value="5" >Ciencias Sociales</option></select>');
                                $('#id_facultad').append('<option value="'+result.id_facultad+'" selected>Ciencias Juridicas</option></select>');
                            }
                            $('#facebook').val(result.facebook);
                            $('#expectativas').val(result.expectativas);
                            $('#ideas').val(result.ideas);
                            $('#asistencia').val(result.asistencia);
                            $('#nombre_iglesia').val(result.nombre_iglesia);
                            $('#anios_es').val(result.anios_es);
                            $('#create-alumn-form').attr('id_alumno', id_alumno);
                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                        
                    });
                });

                $('.delete').click(function (event) {
                    let id_alumno = $(this).attr('id');
                    event.preventDefault();
                    var data = $(this).serializeObject();
                    data.id_alumno= id_alumno;
                    var realData = JSON.stringify(data);
                    $.ajax({
                        url: "http://173.255.192.4/api-sreportes/alumnos/deleteID.php",
                        type : "POST",
                        contentType : 'application/json',
                        data : realData,
                        success : function(result) {
                            console.log('great');
                            location.reload();
                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                    });
                });

                    
                $('#create-alumn-form').submit(function(event){
                    event.preventDefault();
                    let id_alumno = $(this).attr('id_alumno');
                    var data = $(this).serializeObject();
                    data.id_alumno= id_alumno;
                    var realData = JSON.stringify(data);
                    $.ajax({
                        url: "http://173.255.192.4/api-sreportes/alumnos/update.php",
                        type : "POST",
                        contentType : 'application/json',
                        data : realData,
                        success : function(result) {
                            console.log('great');
                            $("#select-fac").empty();
                            $('#myModal').modal('toggle');
                            location.reload();
                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                    });
                    console.log(id_alumno);
                });
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });


    }




});