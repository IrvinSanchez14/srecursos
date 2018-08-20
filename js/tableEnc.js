$(document).ready(function(){

    $.ajax({
        url: "http://localhost/api-sreportes/enc_sat/tableEnc.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            
            let html = '<tbody><tr>';
            html += '<td>'+ result.records[0].nombre_alumno + '</td>';
            $('#dataTable_Enc').append(html);
        },
        error: function(xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });

});