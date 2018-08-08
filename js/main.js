jQuery(document).on('submit','#formlg', function(event)){
	event.preventDefault();

	jQuery.ajax({
		url:'main_app/login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('.botonlg').val('Validando...')

		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if (!respuesta.error){
			if(respuesta.tipo == 'Admin'){
				location = 'main_app/Admin/index.html';
			} else if(respuesta.tipo == 'Usuario'){
				location = 'main_app/Usuario/index.html';
			}
			}else {
				$('.error').slideDown('slow');
				setTimeout(function(){
					$('.error').slideUp('slow');
				}, 3000);
				$('.botonlg').val('Iniciar Sesion')
		}
	})
	.fail(function(resp){
		console.log(resp.responseText);
	})
	.always(function() {
		console.log("complete");
	});
});