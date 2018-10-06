$(document).ready(function(){

    menuA();
    tableData();

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
    
    function menuA () {
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/actividades/read.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {

                $(".act_ss").append('<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion"><i class="fa fa-fw fa-sitemap"></i><span class="nav-link-text">Actividades</span></a>');
                $(".act_ss").append('<ul class="sidenav-second-level collapse act_si" id="collapseComponents">');
                $.each(result.records, function(k,v) {
                    $(".act_si").append('<li><a href="'+v.link+'">'+v.nombre_actividad+'</a></li>');
                });
                $(".act_ss").append('</ul>');
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    } 

    var size,type;

    $('#exampleFormControlFile1').bind('change', function() {
        $('#messageErr').empty();
         size = this.files[0].size;
         type = this.files[0].type;
        if (size <= 26214400 && type === 'application/pdf' ||  type === 'image/png' || type === 'image/jpeg' || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'   ) {
            $('#messageErr').append('Archivo en óptimas condiciones');
            $("#uploadButton").prop("disabled",false);
            $('#uploadimage').submit(function(event){
               event.preventDefault();

                $("#uploadButton").prop("disabled",true);
                var file_data = $('#exampleFormControlFile1').prop('files')[0];   
                var form_data = new FormData();                  
                form_data.append('file', file_data);
                var data = '{"nombre" : "'+file_data.name+'", "size" : "'+file_data.size+'", "tipo": "'+file_data.type+'"}';
                console.log('FormData',form_data);
                console.log('file_datafile_data',file_data);
                //add db
                $.ajax({
                    url: "http://173.255.192.4/api-sreportes/file/create.php",
                    type : "POST",
                    contentType : 'application/json',
                    data : data,
                    success : function(result) {
                        console.log('great');

                            $.ajax({
                                type: "POST",
                                url: 'http://173.255.192.4/api-sreportes/file/move.php',
                                type: 'POST',
                                data: form_data,
                                contentType: false,       // The content type used when sending data to the server.
                                cache: false,             // To unable request pages to be cached
                                processData:false,
                                success: function (data) {
                                    //show content
                                    console.log('FILE',data)
                                    $("#dataTable_bEspecial tbody").empty();
                                    tableData();
                                    $('#modalArchivos').modal('toggle');
                                }
                            });
                            setTimeout(function(){
                                $("#dataTable_bEspecial tbody").empty();
                                tableData();
                                location.reload();
                                $('#modalArchivos').modal('toggle');
                                $("#uploadButton").prop("disabled",false);
                            }, 500);
                    },
                    error: function(xhr, resp, text) {
                        // show error to console
                        console.log(xhr, resp, text);
                    }
                });
                //move file

            
            });
        }  else {
            console.log('bad');
            $('#messageErr').append('Error: problemas en el archivo');
            $("#uploadButton").prop("disabled",true);
            $('#uploadimage').submit(function(event){
                event.preventDefault();
                
                //return;
            });
        }
        console.log(this.files[0])
    });

    $("#modalArchivos").on('hidden.bs.modal', function(){
        console.log('a');
        size = null;
        type = null;
        location.reload();
        $("#exampleFormControlFile1").val('');
        $("#messageErr").text('');
    });


    function tableData() {
        
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/file/read.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {
                console.log(result)
                $.each(result.records, function(k,v){
                    let html = '<tbody><tr>';
                    
                    html += '<td>'+ v.id+'</td>';
                    html += '<td>'+ v.nombre+'</td>';
                    html += '<td>'+ v.size+'MB</td>';
                    html += '<td>'+ v.fecha+'</td>';
                    html += '<td><a class="btn btn-success" class="fa fa-download" download href="http://173.255.192.4/api-sreportes/file/upload/'+ v.nombre+'">Download</a></td>';
                    html += '<td><button type="button" class="delete btn btn-danger" id="'+v.id+'">Eliminar <i id="spinner_add_'+v.id+'" ></i></button></td>';

                    $('#dataTable_bEspecial').append(html);
                });

                
                $('.delete').click(function (event) {
                    let id_archivo = $(this).attr('id');
                    event.preventDefault();
                    $(".delete").prop("disabled",true);
                    $("#spinner_add_"+id_archivo).addClass('fa fa-spinner fa-spin');
                    $.confirm({
                        title: 'Confirmacion',
                        content: 'Esta seguro de eliminar este registro?',
                        buttons: {
                            confirm: function () {
                                var data = $(this).serializeObject();
                                data.id_archivo= id_archivo;
                                var realData = JSON.stringify(data);
                                $.ajax({
                                    url: "http://173.255.192.4/api-sreportes/file/delete.php",
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
                            },
                            cancel: function () {
                                $("#spinner_add_"+id_archivo).removeClass('fa fa-spinner fa-spin');
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