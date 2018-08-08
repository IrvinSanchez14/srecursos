$(document).ready(function(){ 

    menuA();
    /*$(".act_ss").click(function(){
        alert("hola");
    });*/
    //Elaboracion menu dinamico
    function menuA () {
        $.ajax({
            url: "http://localhost/api-sreportes/actividades/read.php",
            type : "POST",
            contentType : 'application/json',
            success : function(result) {

                $(".act_ss").append('<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion"><i class="fa fa-fw fa-sitemap"></i><span class="nav-link-text">Actividades</span></a>');
                $(".act_ss").append('<ul class="sidenav-second-level collapse act_si" id="collapseComponents">');
                $.each(result.records, function(k,v) {
                    console.log(v);
                    $(".act_si").append('<li><a href="'+v.link+'">'+v.nombre_actividad+'</a></li>');
                });
                $(".act_ss").append('</ul>');
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    }

    $('#create-alumno-form').submit(function(e){
        var form_data = JSON.stringify($(this).serializeArray());
        var data = JSON.parse(JSON.stringify($(this).serializeArray()));
        console.log('data',form_data);
        console.log(data)
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : data,
            success : function(result) {
                // product was created, go back to products list
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
         
        return false;

    });

});