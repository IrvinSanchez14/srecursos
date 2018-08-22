$(document).ready(function(){ 

    menuA();
    /*$(".act_ss").click(function(){
        alert("hola");
    });*/
    //Elaboracion menu dinamico
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

    function lastId () {
        var id = null;
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/readLast.php",
            type : "POST",
            contentType : 'application/json',
            async: false,
            success : function(result) {
                id = result.records[0].id_alumno;
                
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        return id;
    }


    function menuA () {
        $.ajax({
            url: "http://localhost/api-sreportes/actividades/read.php",
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

    $('#create-alumno-form').submit(function(event){
        event.preventDefault();
        var data = $(this).serializeObject();
        var res = lastId();
        let sum = parseInt(res) + parseInt(1);
        data.id_alumno= sum;
        var realData = JSON.stringify(data);
        console.log(data);
        //add alumno
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //add alumn_extra
        $.ajax({
            url: "http://localhost/api-sreportes/alum_extra/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        $.ajax({
            url: "http://localhost/api-sreportes/coment_act/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        $.ajax({
            url: "http://localhost/api-sreportes/iglesia_est/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

    });

    $('#create-arace-form').submit(function(event){
        event.preventDefault();
        var data = $(this).serializeObject();
        var res = lastId();
        let sum = parseInt(res) + parseInt(1);
        data.id_alumno= sum;

        var realData = JSON.stringify(data);
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        
        console.log('data',realData)
            $.ajax({
                url: "http://localhost/api-sreportes/enc_sat/create.php",
                type : "POST",
                contentType : 'application/json',
                data : realData,
                success : function(result) {
                    console.log('great');
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });
    });

    $('#create-celula-form').submit(function(event){
        event.preventDefault();
        var data = $(this).serializeObject();
        var res = lastId();
        let sum = parseInt(res) + parseInt(1);
        data.id_alumno= sum;

        var realData = JSON.stringify(data);
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    });

    $('#create-conferencia-form').submit(function(event){
        event.preventDefault();
        var data = $(this).serializeObject();
        var res = lastId();
        let sum = parseInt(res) + parseInt(1);
        data.id_alumno= sum;

        var realData = JSON.stringify(data);
        $.ajax({
            url: "http://localhost/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //alumno extra
        $.ajax({
            url: "http://localhost/api-sreportes/alum_extra/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //add iglesia
        $.ajax({
            url: "http://localhost/api-sreportes/iglesia_est/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //add ciclo
        $.ajax({
            url: "http://localhost/api-sreportes/ciclo/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
        //add conferencia
        $.ajax({
            url: "http://localhost/api-sreportes/conf_arg/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

    });


    
});