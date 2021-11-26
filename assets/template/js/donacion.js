$(document).ready(function(){

  // $('.select2').select2({
  //   placeholder:'Selecciona una opción',
  // });
  
  base_url = $("#base_url").val();

  function obtenerOptions(tabla, condicion, elemento){
      console.log(condicion);
  	$.ajax({
    	type: "POST",
    	url : base_url + 'cargarCombo',
    	headers: {'Access-Control-Allow-Origin': base_url + 'cargarCOmbo'},
      beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Negotiate");
        },
    	crossOrigin: true,
        crossDomain: true,
    	data: {tabla: tabla, where:condicion},
    	success:function(response){
    		$(elemento).empty();
    		$(elemento).append(response);
    		//console.log(response);
    	}
    });
  }

  $("#pais_id").change(function(e){

  	id = $(this).children('option:selected').val();
  	//alert(id);
		condicion = {'pais_id':  parseInt(id)};
		tabla = 'departamento';
		elemento = '#departamento_id';
    obtenerOptions(tabla,condicion,elemento);
      	
  });

  $("#departamento_id").change(function(e){
  	id = $(this).children('option:selected').val();
  	condicion = {'departamento_id': parseInt(id)};
  	tabla = 'municipio';
  	elemento = '#municipio_id';
  	obtenerOptions(tabla,condicion,elemento);
  });

  

});