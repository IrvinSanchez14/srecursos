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
            url: "http://173.255.192.4/api-sreportes/alumnos/readLast.php",
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

    $("input[name='nombre_alumno']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        console.log(inputValue)
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault();
            $(this).css("border", "1px solid red"); 
        }
        else
        {
            $(this).css("border", "none"); 
        }
      });

      $("input[name='nombre_iglesia']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='facebook']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='expectativas']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='ideas']").keypress(function(event) {
        console.log("a");
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
        }
      });

      $("input[name='cif']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='numero_factura']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='fecha']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='telefono']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

      $("input[name='anios_es']").keyup(function(e) {
        console.log("a");
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') );
        //var regex = /^[a-zA-Z0-9@]+$/;
      });

    $('#add_alumno').submit(function(event){
        event.preventDefault();
        if ($.trim($("input[name='nombre_alumno']").val()) === "" ) {

        } else {
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        var data = $(this).serializeObject();

        //let sum = parseInt(res) + parseInt(1);
        
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
                setTimeout(function(){
                    var res = lastId();
                    data.id_alumno= res;
                    var data2 = JSON.stringify(data);
                    console.log(data2)
                    $.ajax({
                        url: "http://localhost/api-sreportes/factura/create.php",
                        type : "POST",
                        contentType : 'application/json',
                        data : data2,
                        success : function(result) {
                            console.log('great');
                            $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                            $("#add_btn").prop("disabled",false);
                            $.alert({
                                title: 'Alert!',
                                content: 'Registro guardado con exito.',
                            });
                            $("input[name='numero_factura']").val('');
                            $("input[name='cif']").val('');
                            $("input[name='nombre_alumno']").val('');
                            $("#inputCarrera").val(0);
                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                    });
                  }, 500);
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    }

    });

    $('#create-alumno-form input').blur(function()
        {
            if( !this.value ) {
                $(this).css("border", "1px solid red");
                console.log('eer');
            }
            else {
                $(this).css("border", "");
            }
    });

    $('#add_alumno input').blur(function()
        {
            if( !this.value ) {
                $(this).css("border", "1px solid red");
                console.log('eer');
            }
            else {
                $(this).css("border", "");
            }
    });
    
    

    $('#create-alumno-form').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        var data = $(this).serializeObject();
        var realData = JSON.stringify(data);
        console.log(data);
        //add alumno
        if ($.trim($("input[name='nombre_alumno']").val()) === "" || $.trim($("input[name='cif']").val()) === "" || $.trim($("input[name='fecha']").val()) === "" || $.trim($("input[name='email']").val()) === "" || $.trim($("input[name='telefono']").val()) === "" || $.trim($("input[name='facebook']").val()) === "" || $.trim($("input[name='expectativas']").val()) === "" || $.trim($("input[name='ideas']").val()) === "" || $.trim($("input[name='nombre_iglesia']").val()) === "" || $.trim($("input[name='anios_es']").val()) === "" ) {
            alert("ERROR: No se puede guardar los datos con campos vacios");
            $("#spinner_add").removeClass('fa fa-spinner fa-spin');
            $("#add_btn").prop("disabled",false);
        }  else {
            $.ajax({
                url: "http://173.255.192.4/api-sreportes/alumnos/create.php",
                type : "POST",
                contentType : 'application/json',
                data : realData,
                success : function(result) {
                    console.log('great');
                    setTimeout(function(){
                    var res = lastId();
                    data.id_alumno= res;
                    var data2 = JSON.stringify(data);
                    console.log(data2)
                    //add alumn_extra
                    $.ajax({
                        url: "http://173.255.192.4/api-sreportes/alum_extra/create.php",
                        type : "POST",
                        contentType : 'application/json',
                        data : data2,
                        success : function(result) {
                            console.log('great');
                            setTimeout(function(){
                                var res = lastId();
                                data.id_alumno= res;
                                var data3 = JSON.stringify(data);
                                console.log(data3)
                            $.ajax({
                                url: "http://173.255.192.4/api-sreportes/coment_act/create.php",
                                type : "POST",
                                contentType : 'application/json',
                                data : data3,
                                success : function(result) {
                                    console.log('great');
                                    setTimeout(function(){
                                    var res = lastId();
                                    data.id_alumno= res;
                                    var data4 = JSON.stringify(data);
                                    console.log(data4)
                                    $.ajax({
                                        url: "http://173.255.192.4/api-sreportes/iglesia_est/create.php",
                                        type : "POST",
                                        contentType : 'application/json',
                                        data : data4,
                                        success : function(result) {
                                            console.log('great');
                                            $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                                            $("#add_btn").prop("disabled",false);
                                            $.alert({
                                                title: 'Alert!',
                                                content: 'Registro guardado con exito.',
                                            });
                                        },
                                        error: function(xhr, resp, text) {
                                            // show error to console
                                            console.log(xhr, resp, text);
                                        }
                                    });
                                },500);
                                    
                                },
                                error: function(xhr, resp, text) {
                                    // show error to console
                                    console.log(xhr, resp, text);
                                }
                            });
                        }, 500);
                        },
                        error: function(xhr, resp, text) {
                            // show error to console
                            console.log(xhr, resp, text);
                        }
                    });/*

*/
                },500);
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });

        }

    });

    $('#add_encuesta').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        var data = $(this).serializeObject();
        var res = lastId();
        let sum = parseInt(res) + parseInt(1);
        data.id_alumno= sum;

        var realData = JSON.stringify(data);
        
        console.log('data',realData)
            $.ajax({
                url: "http://173.255.192.4/api-sreportes/enc_sat/create.php",
                type : "POST",
                contentType : 'application/json',
                data : realData,
                success : function(result) {
                    console.log('great');
                    $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                    $("#add_btn").prop("disabled",false);
                    $.alert({
                        title: 'Alert!',
                        content: 'Registro guardado con exito.',
                    });

                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });
    });

    $('#create-celula-form').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
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
                $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                $("#add_btn").prop("disabled",false);
                $.alert({
                    title: 'Alert!',
                    content: 'Registro guardado con exito.',
                });
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    });

    $('#create-conferencia-form').submit(function(event){
        event.preventDefault();
        $("#add_btn").prop("disabled",true);
        $("#spinner_add").addClass('fa fa-spinner fa-spin');
        var data = $(this).serializeObject();
        var realData = JSON.stringify(data);
        console.log(data);
        $.ajax({
            url: "http://173.255.192.4/api-sreportes/alumnos/create.php",
            type : "POST",
            contentType : 'application/json',
            data : realData,
            success : function(result) {
                console.log('great');
                setTimeout(function(){
                var res = lastId();
                data.id_alumno= res;
                var data2 = JSON.stringify(data);
                console.log(data2)
                //add alumn_extra
                //alumno extra
                $.ajax({
                    url: "http://173.255.192.4/api-sreportes/alum_extra/create.php",
                    type : "POST",
                    contentType : 'application/json',
                    data : data2,
                    success : function(result) {
                        console.log('great');
                        setTimeout(function(){
                            var res = lastId();
                            data.id_alumno= res;
                            var data3 = JSON.stringify(data);
                            console.log(data3)
                            //add iglesia
                            $.ajax({
                                url: "http://173.255.192.4/api-sreportes/iglesia_est/create.php",
                                type : "POST",
                                contentType : 'application/json',
                                data : data3,
                                success : function(result) {
                                    console.log('great');
                                    setTimeout(function(){
                                        var res = lastId();
                                        data.id_alumno= res;
                                        var data4 = JSON.stringify(data);
                                        console.log(data4)
                                    //add ciclo
                                    $.ajax({
                                        url: "http://173.255.192.4/api-sreportes/ciclo/create.php",
                                        type : "POST",
                                        contentType : 'application/json',
                                        data : data4,
                                        success : function(result) {
                                            console.log('great');
                                            setTimeout(function(){
                                                var res = lastId();
                                                data.id_alumno= res;
                                                var data5 = JSON.stringify(data);
                                                console.log(data5)
                                            //add conferencia
                                            $.ajax({
                                                url: "http://173.255.192.4/api-sreportes/conf_arg/create.php",
                                                type : "POST",
                                                contentType : 'application/json',
                                                data : data5,
                                                success : function(result) {
                                                    console.log('great');
                                                    $("#spinner_add").removeClass('fa fa-spinner fa-spin');
                                                    $("#add_btn").prop("disabled",false);
                                                    $.alert({
                                                        title: 'Alert!',
                                                        content: 'Registro guardado con exito.',
                                                    });
                                                },
                                                error: function(xhr, resp, text) {
                                                    // show error to console
                                                    console.log(xhr, resp, text);
                                                }
                                            });
                                        },500);

                                        },
                                        error: function(xhr, resp, text) {
                                            // show error to console
                                        console.log(xhr, resp, text);
                                        }
                                    });
                                },500);
                                },
                                error: function(xhr, resp, text) {
                                    // show error to console
                                    console.log(xhr, resp, text);
                                }
                            });
                        },500);
                    },
                    error: function(xhr, resp, text) {
                        // show error to console
                        console.log(xhr, resp, text);
                    }
                });
            },500);

            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

    });



    
});