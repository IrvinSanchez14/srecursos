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

    function LoginEnter(datos) {
        let username,pass;
        console.log(datos);
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
    }

    $('#login-enter').submit(function(event){
        event.preventDefault();
        var data = $(this).serializeObject();
        var realData = JSON.stringify(data);
        LoginEnter(realData);
    });
});