$(document).ready(function() {
	const base = $("#base_url").val();
	console.log(base+"cargarSubsectores");
	const reportes = $(".reportes");
	const tipo_reporte = $(".t_reporte");
	const municipio = $(".municipio");
	const sector = $(".sector");
	const subsector = $(".subsector");
	//-------------------------Reporte----------------------------------------
	reportes.on("change", ".t_reporte", function(){
		ocultarSelect();
		id = parseInt($(this).find('option:selected').val());
		$('select#municipio_id, select#subsector_id, input#sector_id').removeAttr('required');
		if(id==2){
			municipio.show();
			$('#municipio_id').prop('required','required');
		}else if(id==3){
			sector.show();
			$('#sector_id').prop('required','required');
		}else if(id==4){
			sector.show();
			subsector.show();
			$('#sector_id, #subsector_id').prop('required','required');
		}else{
			ocultarSelect();
		}
	});

	reportes.on("change", "#sector_id", function(){
		valor = parseInt($(this).find('option:selected').val());
		$.ajax({
			url: base +'cargarSubsectores',
			type: 'POST',
			data: {sector_id: valor},
			success:function(response){
				let respuesta = JSON.parse(response);
				$("#subsector_id").empty();
				$("#subsector_id").append(respuesta.opciones);
			}
		});
	});

	function ocultarSelect(){
		subsector.hide();
		sector.hide();
		municipio.hide();
		$("select").removeProp('required');
	}

	ocultarSelect();


});


