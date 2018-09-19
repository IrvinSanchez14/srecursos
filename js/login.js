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


    $('#login-enter').submit(function(event){
        event.preventDefault();
        let data = $(this).serializeObject();
        let realData = JSON.stringify(data);
        console.log(data.username)
        $.ajax({
            url: "http://localhost/api-sreportes/login/search.php?username="+data.username+"&pass="+data.pass,
            type : "GET",
            contentType : 'application/json',
            success : function(result) {
                console.log(result);
                if (result != null) {
                    location.href = "index.php";
                } else {
                    alert("Usuario o contrasena incorrecta, volver a intentar");
                    $("#username").val('');
                    $("#pass").val('');
                }

            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    });
});