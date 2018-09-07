$(document).ready(function(){ 
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
});

var data;

$('#create-alumn-form').submit(function(event){
    console.log('ahhhh')
})

function hola () {
    let nombre = $("#inputNombre1").val();
    data = $(this).serializeObject();
    setTimeout(cerrar, 2000);
    console.log(data);
    /*
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
    */
  }

  function cerrar () {
    data = null;
    console.log(data);
    }

