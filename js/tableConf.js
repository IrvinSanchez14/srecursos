$(document).ready(function(){

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
                let html = '<tbody><tr>';
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
                html += '<td><button type="button" class="btn btn-success">Modificar</button></td>';
                html += '<td><button type="button" class="btn btn-danger">Eliminar</button></td>';

                $('#dataTableConf').append(html);
            });
        },
        error: function(xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });

});