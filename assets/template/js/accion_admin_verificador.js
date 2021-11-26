
$(document).ready(function() {
  $('#verificador').select2();
   $('#emprendimiento').select2();
 
    $('.modal').modal();
});
$('#form_admin_verificador').submit(function(event) {
	event.preventDefault();
	$.ajax({
		url: 'asignar_verificador/persona/insertar.php',
		type: 'POST',
		data: $("#form_admin_verificador").serialize(),
		beforeSend: function() {
	  	$('#registrar_veri').attr('disabled', 'disabled');
   	// console.log('cargando')
   	swal ({
  				// icon: "success",
  				 text: "Procesando información!",
  				 button: {
    				visible: false
  				},
			});
    },success: function(respuesta) {
    	console.log(respuesta)
    	swal ({
  				icon: "success",
  				 text: "Datos INSERTADOS exitosamente!",
  				 button: {
    				visible: false
  				},
			});
    	window.setTimeout('location.reload()',1500);
    }
	})
});

/// Asigna verificador
$('#form_asignar_verifi').submit(function(event) {
  event.preventDefault();
  if (! $('#verificador').val()) {
    Materialize.toast('Debe seleccionar un verificador de la lista desplegable!', 2000)
  }
  else if (! $('#emprendimiento').val()) {
    Materialize.toast('Debe seleccionar un emprendimiento de la lista desplegable!', 2000)
  }
  else{
    $.ajax({
    url: 'asignar_verificador/inicio/insertar.php',
    type: 'POST',
    data: $("#form_asignar_verifi").serialize(),
    beforeSend: function() {
      // $('#registrar_veri').attr('disabled', 'disabled');
    // console.log('cargando')
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      console.log(respuesta)
      swal ({
          icon: "success",
           text: "Datos INSERTADOS exitosamente!",
           button: {
            visible: false
          },
      });
      window.setTimeout('location.reload()',1500);
    }
  })

  }
});

/// cargar los datos en el modal
function cargar_datos(id){


  $.ajax({
    url: 'asignar_verificador/inicio/cargar.php',
    type: 'POST',
    // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    data: {id: id},
  })
  .done(function(respuesta) {
    // console.log(respuesta)
    $('#centenido').html(respuesta)
  })
}

/// Editar los datos
$('#modificar').click(function(event) {
  event.preventDefault();
  var empresa = $('#emprendimiento2').val()
  var verificador = $('#verificador2').val()
  var id_tabla = $('#id_tabla').val()
  $.ajax({
    url: 'asignar_verificador/inicio/editar.php',
    type: 'POST',
    data:{empresa_id:empresa,verificador_id:verificador,id_tabla:id_tabla},
    beforeSend: function() {
    swal ({
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      swal ({
          icon: "success",
           text: "Datos Modificados exitosamente!",
           button: {
            visible: false
          },
      });
      // console.log(respuesta)
 window.setTimeout('location.reload()', 1500);    }
  })
});

// Eliminar los datos
function borrar_datos(id){
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
    url: "asignar_verificador/inicio/borrar.php",
    data: {id:id},
    cache: false,
      success: function(result){
        swal("¡El registro ha sido eliminado!", {
            icon: "success",
          });
        window.setTimeout('location.reload()',1500); 
      }
    });
    } else {
      swal("¡Tu registro está seguro!");
    }
  });
}