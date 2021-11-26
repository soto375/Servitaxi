$(document).ready(function() {
	var formulario = $('#login');
	var usuario = $('#username');
	var contrasena = $('#password');
	$('#btn_login').click(function(event) {
		event.preventDefault();
		//Validación de datos antes de ser enviados por ajax
		//alert(usuario);
		if (usuario.val()==""){
			 Materialize.toast('Diligenciar campo usuario !!', 3000);

		}else if(contrasena.val()==""){
			 Materialize.toast('Diligenciar campo contraseña !!', 3000);
		}else{
			//JSON con los datos a enviar por ajax
			var datos = {
				usuario:usuario.val(),
				contrasena:contrasena.val()
			}
			console.log(datos);
			/*$.ajax({
				url: '../access/login.php',
				type: 'POST',
				//dataType:'HTML',
				data:datos,
				beforeSend:""
			})
			.done(function(data) {
				console.log(data);
				// if (data == true) {
					if (data == '1') {
						swal({
						  icon: "success",
						  text:"Redireccionando",
						  button: false,
						});
						setInterval(function(){
							window.location.replace("../index3.php", 50000);
						},1000)
					}else if (data == '2') {
						swal({
						  icon: "success",
						  text:"Redireccionando",
						  button: false,
						});
						setInterval(function(){
							// window.setTimeout('../index2.php',5000);
							window.location.replace("../index2.php", 50000);
						},1000)
					}
					else if (data == '3') {
						swal({
						  icon: "success",
						  text:"Redireccionando",
						  button: false,
						});
						setInterval(function(){
							window.location.replace("../index4.php", 50000);
						},1000)
					}else if (!data) {
						swal({
						  icon: "error",
						  text:"Datos incorrectos, intentalo nuevamente.",
						  button: true,
						});
					}
				// }
				// else{
				// 	Materialize.toast('Usuario o contraeña invalidos !!', 3000);
				// }
			})
			.fail(function(data) {
				//Se ejecutará si haya algún error de conexión
				console.log(data)
			});*/			
		}
	});
});

//////////////////////7777

// var mediaquery = window.matchMedia("(max-width: 600px)");
// if (mediaquery.matches) {
//    // mediaquery es 600
// } else {
//   // mediaquery no es 600
// }