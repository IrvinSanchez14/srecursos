$(document).ready(function(){

    $.ajax({
        url: "http://173.255.192.4/api-sreportes/enc_sat/tableEnc.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $("#tableN").append('<table id="tablaNice" class="table table-bordered table-striped">');
            $("#tablaNice").append('<thead><tr><th>ID</th><th>Instalaciones</th><th>Dinamicas</th><th>Conferencia</th><th>Alimentacion</th><th>Talleres</th><th>Atencion del lugar</th><th>Transporte</th></tr></thead><tbody>');
            $.each(result.records, function(k,v){
                console.log(v)
                let html = '<tr>';
                html += '<td>'+v.id_encu+'</td>';
                html += '<td>'+ v.num_res1 + '</td>';
                html += '<td>'+ v.num_res2 + '</td>';
                html += '<td>'+ v.num_res3 + '</td>';
                html += '<td>'+ v.num_res4 + '</td>';
                html += '<td>'+ v.num_res5 + '</td>';
                html += '<td>'+ v.num_res6 + '</td>';
                html += '<td>'+ v.num_res7 + '</td>';
                html += '</tr>';

                $("#tablaNice").append(html);
            });
            $("#tablaNice").append('</tbody><tfoot><tr><th>ID</th><th>Instalaciones</th><th>Dinamicas</th><th>Conferencia</th><th>Alimentacion</th><th>Talleres</th><th>Atencion del lugar</th><th>Transporte</th></tr></tfoot>');
            $("#tableN").append('</table>');
            $("#tablaNice").DataTable();
        },
        error: function(xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });

});