$(document).ready(function () {
	var base_url = $("#base_url").val();
	var btn_collapse_permiso = $(".btn-collapse");
	//Permisos
	$("#rol_id.permisos").change(function(e){
		id = $(this).find("option:selected").val();
		cargarElemento('#modulos', id);
		if(id!=""){
			$("#modulos").show(1500);
		}else{
			$("#modulos").hide(1500);
		}
	});
	//console.log(btn_collapse_permiso);
	
	function cargarElemento(ele, id){
		var base = base_url+"cargarModulo";
		$.ajax({
			type: 'POST',
			url: base,
			data:{'rol_id':id},
			success:function(response){
				$(ele).empty();
				$(ele).append(response);
				$("a.btn-collapse").on("click",function(e){
					icono = $(this).children('i');
					if(icono.is('.fa-minus')){
						icono.removeClass('fa-minus').addClass('fa-bars');
					}else{
						icono.removeClass('fa-bars').addClass('fa-minus');
					}
				});
			}
		})
	}

	$("#btn-guardarModuloRol").click(function(e){
		rol_id = $("#rol_id.permisos option:selected").val();
		var datos = $('.form-check-input.modulo').serializeArray();
		var data = {'modulo_rol':[]};
		if(rol_id!=""){
			data['rol_id'] = rol_id;
			if(datos.length>0){
				$.each(datos, function(i, e){
					aux = {
						'rol_id': rol_id,
						'modulo_id': e.value,
						//'fecha_registro': Date(Date.now()),
					};
					data['modulo_rol'].push(aux);
				});
				$.ajax({
					type: 'POST',
					url: base_url+'permiso/almacenar',
					data:data,
					success:function(response){
						window.location = base_url+response;
					}
				});
			}else{
				alert("Por favor, seleccionar los modulos que quiere permitir al rol seleccionado");
			}
		}else{
			alert("Por favor, seleccione un rol");
		}
	});
});