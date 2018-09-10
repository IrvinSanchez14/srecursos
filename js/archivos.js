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

    $('#exampleFormControlFile1').bind('change', function() {
        $('#messageErr').empty();
        let data = (this.files[0].size > 26214400) ? 'Error' : 'Cool';
        $('#messageErr').append(data);
        console.log(this.files[0])
    });

    $('#uploadimage').submit(function(event){
        event.preventDefault();
        var file_data = $('#exampleFormControlFile1').prop('files')[0];   
        var form_data = new FormData();                  
        form_data.append('file', file_data);
        var data = '{"nombre" : "'+file_data.name+'", "size" : "'+file_data.size+'", "tipo": "'+file_data.type+'"}';
        console.log(data);
        //add db
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/file/create.php",
            type : "POST",
            contentType : 'application/json',
            data : data,
            success : function(result) {
                console.log('great');
                $("#dataTable_bEspecial tbody").empty();
                tableData();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //move file
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
                console.log(data)
            }
        });
    
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
                    html += '<td>'+ v.tamano+'</td>';
                    html += '<td>'+ v.fecha+'</td>';
                    html += '<td><a class="btn btn-success" class="fa fa-download" download href="http://localhost/api-sreportes/file/upload/'+ v.nombre+'">Download</a></td>';
                    html += '<td><button type="button" class="btn btn-danger">Eliminar</button></td>';

                    $('#dataTable_bEspecial').append(html);
                });
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    }
});