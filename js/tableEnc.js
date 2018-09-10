$(document).ready(function(){

    $.ajax({
        url: "http://173.255.192.4/api-sreportes/enc_sat/tableEnc.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            console.log(result)
            $.each(result.records, function(k,v){
                let html = '<tbody><tr>';
                html += '<td>'+ v.num_res1 + '</td>';
                html += '<td>'+ v.num_res2 + '</td>';
                html += '<td>'+ v.num_res3 + '</td>';
                html += '<td>'+ v.num_res4 + '</td>';
                html += '<td>'+ v.num_res5 + '</td>';
                html += '<td>'+ v.num_res6 + '</td>';
                html += '<td>'+ v.num_res7 + '</td>';
                html += '<td><button type="button" class="btn btn-success">Modificar</button></td>';
                html += '<td><button type="button" class="btn btn-danger">Eliminar</button></td>';

                $('#dataTable_Enc').append(html);
            });
        },
        error: function(xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });

});