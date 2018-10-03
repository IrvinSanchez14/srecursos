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

    $( "input[name='asistencia']" ).on( "click", function() {
        console.log($( "input:checked" ).val());
        if ($( "input:checked" ).val() ==  2) {
            $("input[name='nombre_iglesia']").val('Introduzca el nombre de la iglesia');
            $("#div-iglesia").toggle(false);
            $("input[name='anios_es']").val('0');
            $("#div-anios").toggle(false);
        } else {
            $("input[name='nombre_iglesia']").val('');
            $("#div-iglesia").toggle(true);
            $("input[name='anios_es']").val('');
            $("#div-anios").toggle(true);
        }
      });

    $("input[name='nombre_alumno']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        console.log(inputValue)
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault();
            $(this).css("border", "1px solid red"); 
        }
        else
        {
            $(this).css("border", "1px solid #ced4da"); 
        }
      });

      $("input[name='nombre_iglesia']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='facebook']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='expectativas']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='ideas']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='cif']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='numero_factura']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='fecha']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='telefono']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='anios_es']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

    $("#myModal").on('hidden.bs.modal', function(){
        $("#select-fac").empty();
    });

    $('#create-alumn-form').submit(function(event){
        event.preventDefault();
        console.log("iglesia", $("input[name='asistencia']").val())
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        let id_alumno = $(this).attr('id_alumno');
        var data = $(this).serializeObject();
        data.id_alumno= id_alumno;
        var realData = JSON.stringify(data);
        console.log(realData)
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/alumnos/update.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
                $("#select-fac").empty();
                $('#myModal').modal('toggle');
                $('#tableN').empty();
                watchTable();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    });

    function watchTable() {
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/alumnos/bEspecial.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {
                console.log(result)
                $("#tableN").append('<table id="tablaNice" class="table table-bordered table-striped">');
                $("#tablaNice").append('<thead><tr><th>ID</th><th>Nombre</th><th>CIF</th><th>Año Actual</th><th>Email</th><th>Facultad</th><th>Telefono</th><th>Facebook</th><th>Expectativa</th><th>Nuevas Ideas</th><th>Asistencia Religiosa</th><th>Nombre de Iglesia</th><th>Años Asistidos</th><th>Modificar</th><th>Eliminar</th></tr></thead><tbody>');
                var num;
                $.each(result.records, function(k,v){
                    let html = '<tr>';
                    html += '<td>'+ v.id_alumno + '</td>';
                    html += '<td>'+ v.nombre_alumno+'</td>';
                    html += '<td>'+ v.cif + '</td>';
                    html += '<td>' + v.fecha + '</td>';
                    html += '<td>' + v.email + '</td>';
                    html += '<td>' + v.nombre_fac + '</td>';
                    html += '<td>' + v.telefono + '</td>';
                    html += '<td>' + v.facebook + '</td>';
                    html += '<td>' + v.expectativas + '</td>';
                    html += '<td>' + v.ideas + '</td>';
                    if (v.asistencia == 1) {
                        html += '<td>SI</td>';
                    } else {
                        html += '<td>NO</td>';
                    }
                    html += '<td>' + v.nombre_iglesia + '</td>';
                    html += '<td>' + v.anios_es + '</td>';
                    html += '<td><button data-toggle="modal" data-target="#myModal" type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'">Modificar</button></td>';
                    html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id_alumno+'">Eliminar <i id="spinner_add_'+v.id_alumno+'" ></i> </button></td>';
                    html += '</tr>';
                    $("#tablaNice").append(html);

                    $('.edit').click(function(event){
                        num = $(this).attr('id_alumno');
                        if(num == v.id_alumno)
                        {
                            $.ajax({
                                    url: "http://173.255.192.4/api-sreportes/alumnos/editBe.php?id_alumno="+num,
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
                                        //$('#asistencia').val(result.asistencia);
                                        $('#nombre_iglesia').val(result.nombre_iglesia);
                                        $('#anios_es').val(result.anios_es);
            
                                        if (result.asistencia == 1) {
                                            $("#asistenciaS").prop("checked", true);
                                        } else {
                                            $("#asistenciaN").prop("checked", true);
                                            $("input[name='nombre_iglesia']").val('Introduzca el nombre de la iglesia');
                                            $("#div-iglesia").toggle(false);
                                            $("input[name='anios_es']").val('0');
                                            $("#div-anios").toggle(false);
                                        }
                                        $('#create-alumn-form').attr('id_alumno', num);
                                        console.log(result);
                                        $( "input[name='asistencia']" ).on( "click", function() {
                                            console.log($( "input:checked" ).val());
                                            if ($( "input:checked" ).val() ==  2) {
                                                $("input[name='nombre_iglesia']").val('Introduzca el nombre de la iglesia');
                                                $("#div-iglesia").toggle(false);
                                                $("input[name='anios_es']").val('0');
                                                $("#div-anios").toggle(false);
                                            } else {
                                                $('#nombre_iglesia').val(result.nombre_iglesia);
                                                $('#anios_es').val(result.anios_es);
                                            }
                                        });
            
            
                                    },
                                    error: function(xhr, resp, text) {
                                        // show error to console
                                        console.log(xhr, resp, text);
                                    }
                                    
                                });
                        }
                    });

                    $('.delete').click(function (event) {
                        num = $(this).attr('id');
                        if(num == v.id_alumno)
                        {
                        event.preventDefault();
                        $(".delete").prop("disabled",true);
                        $("#spinner_add_"+num).addClass('fa fa-spinner fa-spin');
                        $.confirm({
                            title: 'Confirmacion',
                            content: 'Esta seguro de eliminar este registro?',
                            buttons: {
                                confirm: function () {
                                    var data = $(this).serializeObject();
                                    data.id_alumno= num;
                                    var realData = JSON.stringify(data);
                                    $.ajax({
                                        url: "http://173.255.192.4/api-sreportes/alumnos/deleteID.php",
                                        type : "POST",
                                        contentType : 'application/json',
                                        data : realData,
                                        success : function(result) {
                                            $("#spinner_add_"+num).removeClass('fa fa-spinner fa-spin');
                                            $(".delete").prop("disabled",false);
                                            $('#tableN').empty();
                                            watchTable();
                                        },
                                        error: function(xhr, resp, text) {
                                            // show error to console
                                            console.log(xhr, resp, text);
                                        }
                                    });
                                },
                                cancel: function () {
                                    $("#spinner_add_"+num).removeClass('fa fa-spinner fa-spin');
                                    $(".delete").prop("disabled",false);
                                    return;
                                }
                            }
                        });
                    }
                    }); 
                });

                $("#tablaNice").append('</tbody><tfoot><tr><th>ID</th><th>Nombre</th><th>CIF</th><th>Año Actual</th><th>Email</th><th>Facultad</th><th>Telefono</th><th>Facebook</th><th>Expectativa</th><th>Nuevas Ideas</th><th>Asistencia Religiosa</th><th>Nombre de Iglesia</th><th>Años Asistidos</th><th>Modificar</th><th>Eliminar</th></tr></tfoot>');
                $("#tableN").append('</table>');
                $("#tablaNice").DataTable();


            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });


    }




});