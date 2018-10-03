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
        });

    $('#add_alumno').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        var isFormValid = true;
    
        $("#add_alumno input").each(function(){
            if ($.trim($(this).val()).length == 0){
                $(this).css("border", "1px solid red");
                isFormValid = false;
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
            }
            else{
                $(this).css("border", "1px solid #ced4da");  
            }
        });

        console.log($("#inputCarrera").val())

        if ( $("#inputCarrera").val() === '0' )
        {
            $("#inputCarrera").css("border", "1px solid red");
            isFormValid = false;
            $("#spinner_add").removeClass('fa fa-spinner fa-spin');
            $("#add_btn").prop("disabled",false);
        }
        else {
            $("#inputCarrera").css("border", "1px solid #ced4da");  
        }
    
        if (!isFormValid) alert("Favor llenar los campos requeridos");

        if (isFormValid) {
        let id_alumno = $(this).attr('id_alumno');
        var data = $(this).serializeObject();
        data.id_alumno= id_alumno;
        var realData = JSON.stringify(data);
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/factura/update.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
                $("#select-fac").empty();
                $('#myModal').modal('toggle');
                $('#tableN').empty();
                table();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        console.log(id_alumno);
    }
    });

    function table() {
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/factura/read.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) { console.log(result)
            $("#tableN").append('<table id="tablaNice" class="table table-bordered table-striped">');
            $("#tablaNice").append('<thead><tr><th>ID</th><th>Nombre</th><th>CIF</th><th># numero factura</th><th>Facultad</th><th>Editar</th><th>Eliminar</th></tr></thead><tbody>');
            var num;            
            $.each(result.records, function(k,v){
                let html = '<tr>';
                html += '<td>'+v.id_alumno+'</td>';
                html += '<td>'+ v.nombre_alumno + '</td>';
                html += '<td>'+ v.cif + '</td>';
                html += '<td>'+ v.numero_factura + '</td>';
                html += '<td>'+ v.nombre_fac + '</td>';
                html += '<td><button data-toggle="modal" data-target="#myModal" type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'">Modificar</button></td>';
                html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id_alumno+'">Eliminar <i id="spinner_add_'+v.id_alumno+'" ></i>  </button></td>';
                html += '</tr>';
                $("#tablaNice").append(html);


                $('.edit').click(function(event){
                    num = $(this).attr('id_alumno');
                    console.log('num',num);
                    if(num == v.id_alumno)
                    {
                        $.ajax({
                                url: "http://173.255.192.4/api-sreportes/factura/readID.php?id_alumno="+num,
                                type : "GET",
                                contentType : 'application/json',
                                success : function(result) {
                                    $('#nombre_alumno').val(result.nombre_alumno);
                                    $('#cif').val(result.cif);
                                    $('#numero_factura').val(result.numero_factura);
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
                                    $('#add_alumno').attr('id_alumno', num);
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
                    console.log('num',num);
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
                                    url: "http://173.255.192.4/api-sreportes/facultad/delete.php",
                                    type : "POST",
                                    contentType : 'application/json',
                                    data : realData,
                                    success : function(result) {
                                        console.log('great');
                                        $("#spinner_add_"+num).removeClass('fa fa-spinner fa-spin');
                                        $(".delete").prop("disabled",false);
                                        $('#tableN').empty();
                                        table();
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
            $("#tablaNice").append('</tbody><tfoot><tr><th>ID</th><th>Nombre</th><th>CIF</th><th># numero factrua</th><th>facultad</th><th>Editar</th><th>Eliminar</th></tr></tfoot>');
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