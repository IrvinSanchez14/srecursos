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

    table();

    $("input[name='nombre_alumno']").keypress(function(event) {
        var inputValue = event.which;
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

      $("input[name='cif']").keyup(function(e) {
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='numero_factura']").keyup(function(e) {
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

    $("#myModal").on('hidden.bs.modal', function(){
        $("#select-fac").empty();
        $("#select-opn_con").empty();
        $("#select-desc_est").empty();
    });

    $('#create-conferencia-form').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        let id_alumno = $(this).attr('id_alumno');
        var data = $(this).serializeObject();
        data.id_alumno= id_alumno;
        var realData = JSON.stringify(data);
        console.log(data);
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/conf_arg/update.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
                $("#select-fac").empty();
                $("#select-opn_con").empty();
                $("#select-desc_est").empty();
                $('#myModal').modal('toggle');
                $('#dataTableConf').empty();
                table();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        console.log(id_alumno);
    });

    function table() {

        let html = '              <thead><tr><th>Nombre</th><th>CIF</th><th>Ciclo Actual</th><th>Email</th><th>Telefono</th><th>Facultad</th><th>Facebook</th><th>Beneficio Adquirido</th><th>Asistencia Religiosa</th><th>Nombre de Iglesia</th><th>Opinion</th><th>Desición Tomada</th><th>Modificar</th><th>Eliminar</th></tr></thead>';
        html += '<tfoot><tr><th>Nombre</th><th>CIF</th><th>Ciclo Actual</th><th>Email</th><th>Telefono</th><th>Facultad</th><th>Facebook</th><th>Beneficio Adquirido</th><th>Asistencia Religiosa</th><th>Nombre de Iglesia</th><th>Opinion</th><th>Desición Tomada</th><th>Modificar</th><th>Eliminar</th></tr></tfoot>';
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/conf_arg/table_conf.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {
                console.log(result)
                $.each(result.records, function(k,v){
                    let ciclo, asistencia, opinion, desicion;
                    ciclo = (v.valor == 0) ? 'Ciclo 1' : 'Ciclo 2';
                    asistencia = (v.asistencia == 1) ? 'SI' : 'NO'; 
                    if (v.opn_con == 1) {opinion = 'Regular'; } else if (v.opn_con == 2) { opinion = 'Bueno'; } else if (v.opn_con == 3) { opinion = 'Muy Bueno'; } else { opinion = 'Excelente'; }; 
                    if ( v.desc_est == 1) {desicion = 'Se Entrego'; } else if (v.desc_est == 2) { desicion = 'Ya lo habia hecho'; } else { desicion = 'No se entrego'; };
                    html += '<tbody><tr>';
                    html += '<td>'+ v.nombre_alumno + '</td>';
                    html += '<td>'+ v.cif + '</td>';
                    html += '<td>'+ ciclo + '</td>';
                    html += '<td>'+ v.email + '</td>';
                    html += '<td>'+ v.telefono + '</td>';
                    html += '<td>'+ v.nombre_fac + '</td>';
                    html += '<td>'+ v.facebook + '</td>';
                    html += '<td>'+ v.benf_adq + '</td>';
                    html += '<td>'+ asistencia + '</td>';
                    html += '<td>'+ v.nombre_iglesia + '</td>';
                    html += '<td>'+ opinion + '</td>';
                    html += '<td>'+ desicion + '</td>';
                    html += '<td><button data-toggle="modal" data-target="#myModal" type="button" class="edit btn btn-success" id_alumno="'+v.id+'">Modificar</button></td>';
                    html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id+'">Eliminar <i id="spinner_add_'+v.id+'" ></i> </button></td>';
                });
                
                $('#dataTableConf').append(html);

                $('.edit').click(function(event){
                    let id_alumno = $(this).attr('id_alumno');
                    console.log(id_alumno);
                   $.ajax({
                        url: "http://173.255.192.4/api-sreportes/coment_act/readId.php?id_alumno="+id_alumno,
                        type : "GET",
                        contentType : 'application/json',
                        success : function(result) {
                            console.log('HH',result)
                            $('#nombre_alumno').val(result.nombre_alumno);
                            $('#cif').val(result.cif);
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
                            $('#asistencia').val(result.asistencia);
                            $('#nombre_iglesia').val(result.nombre_iglesia);
                            $('#benf_adq').val(result.benf_adq);
                            $('#opn_con').val(result.opn_con);
                            $('#desc_est').val(result.desc_est);
                            if (result.opn_con == 1) {
                                $("#select-opn_con").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Opiniones sobre la conferencia</label><select class="custom-select my-1 mr-sm-2" id="opn_con" name="opn_con">');
                                $("#opn_con").append('<option value="'+result.opn_con+'" selected>Regular</option>');
                                $("#opn_con").append('<option value="2">Bueno</option>');
                                $("#opn_con").append('<option value="3">Muy Bueno</option>');
                                $("#opn_con").append('<option value="4">Excelente</option></select>');
                            } 
                            else if (result.opn_con == 2) {
                                $("#select-opn_con").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Opiniones sobre la conferencia</label><select class="custom-select my-1 mr-sm-2" id="opn_con" name="opn_con">');
                                $("#opn_con").append('<option value="1">Regular</option>');
                                $("#opn_con").append('<option value="'+result.opn_con+'" selected>Bueno</option>');
                                $("#opn_con").append('<option value="3">Muy Bueno</option>');
                                $("#opn_con").append('<option value="4">Excelente</option></select>');
                            } 
                            else if (result.opn_con == 3) {
                                $("#select-opn_con").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Opiniones sobre la conferencia</label><select class="custom-select my-1 mr-sm-2" id="opn_con" name="opn_con">');
                                $("#opn_con").append('<option value="1">Regular</option>');
                                $("#opn_con").append('<option value="2">Bueno</option>');
                                $("#opn_con").append('<option value="'+result.opn_con+'" selected>Muy Bueno</option>');
                                $("#opn_con").append('<option value="4">Excelente</option></select>');
                            } else {
                                $("#select-opn_con").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Opiniones sobre la conferencia</label><select class="custom-select my-1 mr-sm-2" id="opn_con" name="opn_con">');
                                $("#opn_con").append('<option value="1">Regular</option>');
                                $("#opn_con").append('<option value="2">Bueno</option>');
                                $("#opn_con").append('<option value="3">Muy Bueno</option>');
                                $("#opn_con").append('<option value="'+result.opn_con+'" selected>Excelente</option>');
                                $("#opn_con").append('</select>');
                            }

                            console.log('DATO', result.desc_est);

                            if (result.desc_est == 1) {
                                $("#select-desc_est").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Decisión tomada por el estudiante</label><select class="custom-select my-1 mr-sm-2" id="desc_est" name="desc_est">');
                                $("#desc_est").append('<option value="'+result.desc_est+'" selected>Se entregó</option>');
                                $("#desc_est").append('<option value="2">Ya lo habia hecho</option>');
                                $("#desc_est").append('<option value="3">No se entregó</option></select> ');
                            }
                            else if (result.desc_est == 2) {
                                $("#select-desc_est").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Decisión tomada por el estudiante</label><select class="custom-select my-1 mr-sm-2" id="desc_est" name="desc_est">');
                                $("#desc_est").append('<option value="1">Se entregó</option>');
                                $("#desc_est").append('<option value="'+result.desc_est+'" selected>Ya lo habia hecho</option>');
                                $("#desc_est").append('<option value="3">No se entregó</option></select> ');
                            }                        
                            else if (result.desc_est == 3) {
                                $("#select-desc_est").append('<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Decisión tomada por el estudiante</label><select class="custom-select my-1 mr-sm-2" id="desc_est" name="desc_est">');
                                $("#desc_est").append('<option value="1">Se entregó</option>');
                                $("#desc_est").append('<option value="2">Ya lo habia hecho</option>');
                                $("#desc_est").append('<option value="3" selected>No se entregó</option>');
                                $("#select-desc_est").append('</select>')
                            }

                            $('#create-conferencia-form').attr('id_alumno', id_alumno);
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
                    $(".delete").prop("disabled",true);
                    $("#spinner_add_"+id_alumno).addClass('fa fa-spinner fa-spin');
                    $.confirm({
                        title: 'Confirmacion',
                        content: 'Esta seguro de eliminar este registro?',
                        buttons: {
                            confirm: function () {
                                var data = $(this).serializeObject();
                                data.id_alumno= id_alumno;
                                var realData = JSON.stringify(data);
                                $.ajax({
                                    url: "http://173.255.192.4/api-sreportes/conf_arg/delete.php",
                                    type : "POST",
                                    contentType : 'application/json',
                                    data : realData,
                                    success : function(result) {
                                        console.log('great');
                                        $("#spinner_add_"+id_alumno).removeClass('fa fa-spinner fa-spin');
                                        $(".delete").prop("disabled",false);
                                        location.reload();
                                    },
                                    error: function(xhr, resp, text) {
                                        // show error to console
                                        console.log(xhr, resp, text);
                                    }
                                });
                            },
                            cancel: function () {
                                $("#spinner_add_"+id_alumno).removeClass('fa fa-spinner fa-spin');
                                $(".delete").prop("disabled",false);
                                return;
                            }
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