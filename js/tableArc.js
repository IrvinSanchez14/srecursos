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
            $(this).css("border", "none"); 
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
        let id_alumno = $(this).attr('id_alumno');
        var data = $(this).serializeObject();
        data.id_alumno= id_alumno;
        var realData = JSON.stringify(data);
        $.ajax({
            url: "http://localhost/api-sreportes/factura/update.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
                $("#select-fac").empty();
                $('#myModal').modal('toggle');
                $('#dataTableConfec').empty();
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
        let html = '<thead><tr><th>Nombre</th><th>CIF</th><th># numero factura</th><th>Facultad</th><th>Modificar</th><th>Eliminar</th></tr></thead>';
        html += '<tfoot><tr><th>Nombre</th><th>CIF</th><th># numero factura</th><th>Facultad</th><th>Modificar</th><th>Eliminar</th></tr></tfoot>';
        
    $.ajax({
        url: "http://localhost/api-sreportes/factura/read.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            console.log(result)

            $.each(result.records, function(k,v){
                html += '<tbody><tr>';
                html += '<td>'+ v.nombre_alumno + '</td>';
                html += '<td>'+ v.cif + '</td>';
                html += '<td>'+ v.numero_factura + '</td>';
                html += '<td>'+ v.nombre_fac + '</td>';
                html += '<td><button data-toggle="modal" data-target="#myModal" type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'">Modificar</button></td>';
                html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id_alumno+'">Eliminar <i id="spinner_add_'+v.id_alumno+'" ></i>  </button></td>';


            });
            $('#dataTableConfec').append(html);

            $('.edit').click(function(event){
                let id_alumno = $(this).attr('id_alumno');
                console.log(id_alumno);
               $.ajax({
                    url: "http://localhost/api-sreportes/factura/readID.php?id_alumno="+id_alumno,
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
                        $('#add_alumno').attr('id_alumno', id_alumno);
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
                                url: "http://localhost/api-sreportes/facultad/delete.php",
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