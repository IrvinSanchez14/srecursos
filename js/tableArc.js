$(document).ready(function(){

    $.ajax({
        url: "http://localhost/api-sreportes/factura/read.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            console.log(result)
            $.each(result.records, function(k,v){
                let html = '<tbody><tr>';
                html += '<td>'+ v.nombre_alumno + '</td>';
                html += '<td>'+ v.cif + '</td>';
                html += '<td>'+ v.numero_factura + '</td>';
                html += '<td>'+ v.nombre_fac + '</td>';
                html += '<td><button data-toggle="modal type="button" class="edit btn btn-success" id_alumno="'+v.id_alumno+'" data-target=".bs-example-modal-lg">Modificar</button></td>';
                html += '<td><button type="button" class="btn btn-danger">Eliminar</button></td>';

                $('#dataTableConfec').append(html);
            });
        },
        error: function(xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });

});