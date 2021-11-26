$('#btn_new_content2').attr('disabled','disabled');
$('#btn_cerrar_slide').attr('disabled','disabled');
$('#btn_new_image2').attr('disabled','disabled');
$('#btn_cerrar_archivo').attr('disabled','disabled');
$('#btn_cerrar_colaborador').attr('disabled','disabled');
$('#btn_modificar_not').attr('disabled','disabled');
$('#btn_limpiar_not').attr('disabled','disabled');
// $('#btn_modificar_image').attr('disabled','disabled');

function resetform() {
     $("form select").each(function() { this.selectedIndex = 0 });
     $("form input[type=text] , form textarea").each(function() { this.value = '' });
     $('#descripcion').trumbowyg('html', this.value = '');

}

$('#btn_new_content').click(function() {

	

	if ($('.oculto').show('slow')) {

		resetform();

		$('#btn_new_content').attr('disabled','disabled');
		$('#btn_new_content2').removeAttr('disabled','disabled');
		$('#btn_guardar_content').removeAttr('disabled','disabled');
		$('#btn_modifcar_qs').attr('disabled','disabled');
	}	
});
$('#btn_new_content2').click(function() {
	if ($('.oculto').hide('slow')) {
		$('#btn_new_content').removeAttr('disabled','disabled');
		$('#btn_new_content2').attr('disabled','disabled');
	}
});

// para image

$('#btn_new_image').click(function() {
	
	if ($('.oculto2').show('slow')) {

		$('#nombre_imagen').focus();
		$("form input[type=text] , form textarea").each(function() { this.value = '' });
		$('html, body').animate({scrollTop: $( $( '#nombre_imagen' ) ).offset().top}, 500);
		$('#btn_guardar_image').removeAttr('disabled','disabled');
		$('#btn_modificar_image').attr('disabled','disabled');
		$('#btn_new_image').attr('disabled','disabled');
		$('#btn_new_image2').removeAttr('disabled','disabled');
	}	
});


$('#btn_new_image2').click(function() {
	
	if ($('.oculto2').hide('slow')) {
		$('#btn_new_image').removeAttr('disabled','disabled');
		$('#btn_new_image2').attr('disabled','disabled');
	}
});

// para archivo


$('#btn_new_archivo').click(function() {
	
	if ($('.oculto3').show('slow')) {

		$('#nombre_archivo').focus();
		$('html, body').animate({scrollTop: $( $( '#nombre_archivo' ) ).offset().top}, 500);
		
		$("form select").each(function() { this.selectedIndex = 0 });
    	$("form input[type=text] , form textarea").each(function() { this.value = '' });
		$('#btn_new_archivo').attr('disabled','disabled');
		$('#btn_cerrar_archivo').removeAttr('disabled','disabled');
		$('#btn_guardar_archivo').removeAttr('disabled','disabled');
		$('#btn_modificar_archivo').attr('disabled','disabled');
	}	
});


$('#btn_cerrar_archivo').click(function() {
	
	if ($('.oculto3').hide('slow')) {
		$('#btn_new_archivo').removeAttr('disabled','disabled');
		$('#btn_cerrar_archivo').attr('disabled','disabled');
	}
});

/////////////////////////////////////////////////////////////
/////////// para slide//////////////////////////////////


$('#btn_new_slide').click(function() {
	
	if ($('.oculto5').show('slow')) {

		$('#titulo_slide').focus();
		$('html, body').animate({scrollTop: $( $( '#titulo_slide' ) ).offset().top}, 500);

		
		
		$("form select").each(function() { this.selectedIndex = 0 });
	    $("form input[type=text] , form textarea").each(function() { this.value = '' });
	    //$('#descripcion_nt').trumbowyg('html', this.value = '');

	   	//$('#btn_modificar_slide').attr('disabled','disabled');
	   	$('#btn_modificar_slide').attr('disabled','disabled');
		$('#btn_guardar_slide').removeAttr('disabled','disabled');

		$('#btn_new_slide').attr('disabled','disabled');
		$('#btn_cerrar_slide').removeAttr('disabled','disabled');
	}	
});


$('#btn_cerrar_slide').click(function() {
	
	if ($('.oculto5').hide('slow')) {
		$('#btn_new_slide').removeAttr('disabled','disabled');
		$('#btn_cerrar_slide').attr('disabled','disabled');
	}
});

////////////////////// colaboradores /////////////////////////////////////

$('#btn_new_colaborador').click(function() {
	
	if ($('.oculto6').show('slow')) {

		$('#nombre_partner').focus();	
		$('#btn_guardar_partner').removeAttr('disabled','disabled');
		$('#btn_modificar_partner').attr('disabled','disabled');
		$('#btn_new_colaborador').attr('disabled','disabled');
		$('#btn_cerrar_colaborador').removeAttr('disabled','disabled');
	}	
});


$('#btn_cerrar_colaborador').click(function() {
	
	if ($('.oculto6').hide('slow')) {
		$('#btn_new_colaborador').removeAttr('disabled','disabled');
		$('#btn_cerrar_colaborador').attr('disabled','disabled');
	}
});

////////////////////////////////////////////////////


function limpiar_nt() {
	
	$("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
    $('#descripcion_nt').trumbowyg('html', this.value = '');

     $('#btn_guardar_not').removeAttr('disabled','disabled');
     $('#btn_modificar_not').attr('disabled','disabled');

}

function limpiar_img() {
	
	//$("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
    //$('#descripcion_nt').trumbowyg('html', this.value = '');

   	$('#btn_guardar_image').removeAttr('disabled','disabled');
	$('#btn_modificar_image').attr('disabled','disabled');

}


function limpiar_file() {
	
	$("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
    //$('#descripcion_nt').trumbowyg('html', this.value = '');

   	$('#btn_guardar_archivo').removeAttr('disabled','disabled');
	$('#btn_modificar_archivo').attr('disabled','disabled');

}

function limpiar_slide() {
	
	$("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
    //$('#descripcion_nt').trumbowyg('html', this.value = '');

   	$('#btn_modificar_slide').attr('disabled','disabled');
	$('#btn_guardar_slide').removeAttr('disabled','disabled');

}

function limpiar_partner() {
	
//$("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
    //$('#descripcion_nt').trumbowyg('html', this.value = '');

   	$('#btn_guardar_partner').removeAttr('disabled','disabled');
	$('#btn_modificar_partner').attr('disabled','disabled');

}

/////////////////////////////////////////////////////////////////

// guardar content 
$('#btn_guardar_content').click(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'content_admin/content_save/guardar.php',
    type: 'POST',
    data: $('#content_form').serialize(),
    beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
           text: "Datos Guardados Exitosamente!",
           button: {
            visible: false   
          }
      });
          window.setTimeout('location.reload()', 1000);
    }
  })
});


function cargar_datos_qs(id){
	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			var content = $.parseJSON(result);
					
					$('.oculto').show('slow');

					$('#btn_new_content').attr('disabled','disabled');
					$('#btn_new_content2').removeAttr('disabled','disabled');
					$('#btn_guardar_content').attr('disabled','disabled');

 					$('#id').val(content["id"]);
   					$('#titulo').val(content["titulo"]);
	   				$('#alias  option[value='+content['alias_id']+']').attr('selected',true);
	   				$('#alias').material_select();
	   				$('#alias').attr("disabled");
					$('#descripcion').trumbowyg('html',content["descripcion"] );
					$('#imagen').val(content["id_img_page"]);
					$('#imagen').material_select();

					//desabilitar boton guardar
				
			} 
		}			
	});
}


function editar_qs(){

	var datos = {
		"id":$('#id').val(),
		"titulo":$('#titulo').val(),
		"descripcion":$('#descripcion').val(),
		"imagen":$('#imagen').val()
	}

	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar.php",
	data: datos,
	cache: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			});
			
			window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_qs(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success"
			       },
			    );
			      window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}


/////////////////////////////////////////////// Noticias //////////////////////////////////////////////

$('#btn_guardar_not').click(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'content_admin/content_save/guardar_nt.php',
    type: 'POST',
    data: $('#content_form_nt').serialize(),
    beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
          text: "Datos Guardados Exitosamente!",
          button: {
           visible: false
          },
          });
 		window.setTimeout('location.reload()', 1000);
    }
  })
});


function cargar_datos_nt(id){
	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_nt.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('#btn_modificar_not').removeAttr('disabled','disabled');
					$('#btn_limpiar_not').removeAttr('disabled','disabled');
					$('#btn_guardar_not').attr('disabled','disabled');

					// $('.oculto').show('slow')
 					$('#id_nt').val(content["id"]);
   					$('#titulo_nt').val(content["titulo"]);
	   				$('#autor_nt').val(content["fuente_autor"]);
					$('#descripcion_nt').trumbowyg('html',content["descripcion"] );
					$('#imagen_nt').val(content["id_img_page"]);
					$('#imagen_nt').material_select();
				
			} 
		}			
	});
}


function editar_nt(){

	var datos = {
		"id":$('#id_nt').val(),
		"titulo":$('#titulo_nt').val(),
		"descripcion":$('#descripcion_nt').val(),
		"autor":$('#autor_nt').val(),
		"imagen":$('#imagen_nt').val()
	}

	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_nt.php",
	data: datos,
	cache: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false });
			window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_nt(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_nt.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success"
			       },
			      );
				window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}

///////////////////////////////////////////////////////////////////////////////////////////77
/////////////////////////////////////////////////////////////////////////////////////////////
/////        para archivos       ///////////////////////////////



$('#btn_guardar_archivo').click(function() {

	var formData = new FormData($("#archivo_form")[0]);
	    var ruta = "content_admin/content_save/guardar_file.php";
	    $.ajax({
	        url: ruta,
	        type: "POST",
	        data: formData,
	        contentType: false,
	        processData: false,
	            beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
          text: "Archivo Guardados Exitosamente!",
          button: {
           visible: false
          },
         });
   //window.setTimeout('location.reload()', 1000);
    }
	   
	 });
});


function cargar_datos_archivo(id){
	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_file.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('.oculto3').show('slow');

					$('#btn_new_archivo').attr('disabled','disabled');
					$('#btn_cerrar_archivo').removeAttr('disabled','disabled');
					$('#btn_guardar_archivo').attr('disabled','disabled');
					$('#btn_modificar_archivo').removeAttr('disabled','disabled');


 					$('#id_file').val(content["id"]);
   					$('#nombre_archivo').val(content["nombre"]);
	   				$('#nombre_file').val(content["ruta"]);
					$('#alias_archivo').val(content["alias_id"]);
					$('#alias_archivo').material_select();
				
			} 
		}			
	});
}


function editar_file(){

		var id_file = $('#id_file').val();
		var formData = new FormData($("#archivo_form")[0]);

	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_file.php?id_file=" + id_file,
	data: formData,
	cache: false,
    contentType: false,
	processData: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			   });
			window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_file(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_file.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success",
			       });
			 window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// para image ////////////////////////////////////////////7777777 

$('#btn_guardar_image').click(function() {

	var formData = new FormData($("#image_form")[0]);
	    var ruta = "content_admin/content_save/guardar_imagenes.php";
	    $.ajax({
	        url: ruta,
	        type: "POST",
	        data: formData,
	        contentType: false,
	        processData: false,
	   		    beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
          text: "Archivo Guardados Exitosamente!",
          button: {
           visible: false
          },
      }); window.setTimeout('location.reload()', 1000);
    }
	 });
});



function cargar_datos_img(id){

	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_img.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('.oculto2').show('slow');


					$('#btn_guardar_image').attr('disabled','disabled');
					$('#btn_modificar_image').removeAttr('disabled','disabled');

					$('#btn_new_image').attr('disabled','disabled');
					$('#btn_new_image2').removeAttr('disabled','disabled');
					// if ($('.oculto2').show('slow')) {
					// 	$('#btn_guardar_image').attr('disabled','disabled');
					// 	$('#btn_modifcar_image').removeAttr('disabled','disabled');
					// }

					
 					$('#id_img').val(content["id"]);
   					$('#nombre_imagen').val(content["nombre"]);
	   				//$('#file').val(content["ruta"]);
					//$('#nombre_img').val(content["ruta"]);	
			} 
		}			
	});
}


function editar_img(){

var id_img = $('#id_img').val();

	// "nombre_imagen":$('#nombre_imagen').val()
	var formData = new FormData($("#image_form")[0]);

	// }
	
	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_img.php?id_img="+id_img,
    data: formData,
	cache: false,
    contentType: false,
	processData: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			});window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_img(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_img.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success",
			       });
			   window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////7777
//////////////////////////////////////// para usuarios ///////////////////////////////////////////////7


function cargar_datos_usuario(id){
	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_usuario.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('.oculto4').show('slow');
 					$('#id').val(content["id"]);
   					$('#usuario').val(content["usuario"]);
	   				$('#clave').val(content["clave"]);
					$('#empleado').val(content["persona_id"]);
					$('#empleado').material_select();
				
			} 
		}			
	});
}


function editar_usuario(){

	var datos = {
		"id":$('#id').val(),
		"usuario":$('#usuario').val(),
		"clave":$('#clave').val(),
		"persona_id":$('#empleado').val()
	
	}

	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_usuario.php",
	data: datos,
	cache: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			});window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_usuario(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_usuario.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success",
			       });
			   window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}

////////////////////// slide //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('#btn_guardar_slide').click(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'content_admin/content_save/guardar_slide.php',
    type: 'POST',
    data: $('#slide_form').serialize(),
    beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
           text: "Datos Guardados Exitosamente!",
           button: {
            visible: false
          },
      });window.setTimeout('location.reload()', 1000);
    }
  })
});




function cargar_datos_slide(id){
	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_slide.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('.oculto5').show('slow');

					$('#btn_modificar_slide').removeAttr('disabled','disabled');
					$('#btn_guardar_slide').attr('disabled','disabled');
					$('#btn_new_slide').attr('disabled','disabled');
					$('#btn_cerrar_slide').removeAttr('disabled','disabled');
					

 					$('#id_slide').val(content["id"]);
   					$('#titulo_slide').val(content["titulo"]);
   					$('#descripcion_slide').focus();
	   				$('#descripcion_slide').val(content["descripcion"]);
					$('#img_slide').val(content["id_img_page"]);
					$('#img_slide').material_select();
				
			} 
		}			
	});
}


function editar_slide(){

	var datos = {
		"id_slide":$('#id_slide').val(),
		"titulo_slide":$('#titulo_slide').val(),
		"descripcion_slide":$('#descripcion_slide').val(),
		"img_slide":$('#img_slide').val()
	
	}

	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_slide.php",
	data: datos,
	cache: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			});
		window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_slide(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_slide.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success",
			    });
		window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}

////////////////////////////////////////////////////////7777
///////////////////7 para partner /////////////////////////
/////////////////////////////////////////////////////////////

$('#btn_guardar_partner').click(function() {

	var formData = new FormData($("#partner_form")[0]);
	    var ruta = "content_admin/content_save/guardar_parters.php";
	    $.ajax({
	        url: ruta,
	        type: "POST",
	        data: formData,
	        contentType: false,
	        processData: false,
	   		    beforeSend: function() {
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
          text: "Archivo Guardados Exitosamente!",
          button: {
           visible: false
          },
      });

       window.setTimeout('location.reload()', 1000);
    }
	 });
});



function cargar_datos_partner(id){

	$.ajax({
	type: "POST",
	url: "content_admin/content_load/cargar_partner.php",
	data: {id:id},
	cache: false,
		success: function(result){

			if (result != false) {

			console.log(result);
			var content = $.parseJSON(result);

					$('.oculto6').show('slow');


					$('#btn_guardar_partner').attr('disabled','disabled');
					$('#btn_modificar_partner').removeAttr('disabled','disabled');

					$('#btn_new_colaborador').attr('disabled','disabled');
					$('#btn_cerrar_colaborador').removeAttr('disabled','disabled');
					// if ($('.oculto2').show('slow')) {
					// 	$('#btn_guardar_image').attr('disabled','disabled');
					// 	$('#btn_modifcar_image').removeAttr('disabled','disabled');
					// }

					$('#partner_form').focus();
 					$('#id_partner').val(content["id"]);
   					$('#nombre_partner').val(content["nombre"]);
	   				//$('#file').val(content["ruta"]);
					//$('#nombre_img').val(content["ruta"]);

					
					
				
			} 
		}			
	});
}


function editar_partner(){

var id_partner = $('#id_partner').val();

	// "nombre_imagen":$('#nombre_imagen').val()
	var formData = new FormData($("#partner_form")[0]);

	// }
	
	$.ajax({
	type: "POST",
	url: "content_admin/content_edit/editar_partner.php?id_partner="+id_partner,
    data: formData,
	cache: false,
    contentType: false,
	processData: false,
		success: function(result){
			swal({
			  title: "Muy Bien!",
			  text: "Registro actualizado satisfactoriamente!",
			  icon: "success",
			  button: false
			});
			
			window.setTimeout('location.reload()', 1000);
		}
	});
}

function borrar_datos_partner(id){
	swal({
	  title: "Estás seguro?",
	  text: "Una vez eliminado, no podrá recuperar este registro!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
	    $.ajax({
		type: "POST",
		url: "content_admin/content_delete/borrar_partner.php",
		data: {id:id},
		cache: false,
			success: function(result){
				swal("¡El registro ha sido eliminado!", {
			      icon: "success"
			  });
			      window.setTimeout('location.reload()',900); 
			}
		});
	  } else {
	    swal("¡Tu registro está seguro!");
	  }
	});
}