$(document).ready(function(){

    watchTable();

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
                    html += '<td><button type="button" class="btn btn-success">Modificar</button></td>';
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