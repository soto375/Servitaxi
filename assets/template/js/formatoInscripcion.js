$(document).ready(function(){

  $('.multiple').select2({
    placeholder:'Selecciona una opción',
  });
  
  const vistaModal = document.querySelector("#modal_vista");
  const documento = document.querySelector("#documento_consentimiento_id");
  const previsualizacionDocumento = document.querySelector("#previsualizacionDocumento");
  var contenedorDocumento = $("embed#vistaDocumento");
  const btnDocumento = $("#verDocumento");
  const despliegue = $(".despliegue");
  const desplegables_si = $("select.sino");
  const desplegables_aplica = $("select.sinoaplica");
  const tipo_personeria = $("select#tipo_personeria");
  const no_aplica = $("select.no_aplica");
  const tipo_servicio = $("select.tipo_servicio");
  const impacto_ambiental = $("select.impacto_ambiental");
  const practica_conservacion = $("select.practica_conservacion");
  const respuesta = $("[name='respuesta']");
  let srcDocumento = "";

  respuesta.change(function(e){

    valor = $("[name='respuesta']:checked").val();
    representante_legal_id = $("#representante_legal_id").val();
    if(valor==1){
      $(".empresario").attr("readonly","readonly");
      $.ajax({
        type:"POST",
        url:base_url+"obtenerRepresentante",
        data:{representante_id:representante_legal_id},
        success:function(response){
          response = JSON.parse(response);
          if(response){
            var nombre = response.nombre1+" "+response.nombre2+" "+response.apellido1+" "+response.apellido2;
            $("#nombre.empresario").val(nombre);
            $("#empresario_identificacion.empresario").val(response.identificacion);
            $("#cargo.empresario").val("Representante legal");
            $("#celular.empresario").val(response.celular);
            $("#empresario_correo.empresario").val(response.correo);
          }
        }
      });
    }else{
      $(".empresario").removeAttr("readonly");
    }
  });

  function empresario(){
    valor = $("[name='respuesta']:checked").val();
    
    if(valor==1){
      $(".empresario").attr("readonly","readonly");
      $.ajax({
        type: "POST",
        url: base_url+"unique",
        data: {tabla: tabla, where:validar, id:relatedBy},
        success:function(response){
            estado = response;
          }
    });
    }else{
      $(".empresario").removeAttr("readonly");
    }
  }

  empresario();

  tipo_servicio.change(function(e){
    valor = $(this).val();
    if(valor==""){
      $(this).parent().next().find("input").removeAttr("required");
    }else{
       $(this).parent().next().find("input").attr("required","required");
    }
  });

  tipo_personeria.change(function(e){
    texto = $(this).find("option:selected").text().trim();
    campo = $(this).data("otra");
    campo = $("."+campo);
    if(texto == "Otra"){
      campo.show();
    }else{
      campo.hide();
    }
  });

  no_aplica.change(function(e){
    texto = $(this).find("option:selected").text().trim();
    campo = $(this).data("noaplica");
    campo = $("."+campo);
    if(texto == "No aplica"){
      campo.hide();
    }else{
      campo.show();
    }
  });

  function ocultar_visibleAPlica(){
    tamanio = no_aplica.length;
    if(tamanio > 0){
      for(i = 0; i<tamanio; i++){
        id = no_aplica[i].id;
        texto = $("#"+id).find("option:selected").text().trim();
        campo = $("#"+id).data("noaplica");
        campo = $("."+campo);
        if(texto == "No aplica"){
          campo.hide();
        }else{
          campo.show();
        }
      }
    }
    
  }
  ocultar_visibleAPlica();

  function ocultar_visible(){
    texto = tipo_personeria.find("option:selected").text().trim();
    campo = tipo_personeria.data("otra");
    campo = $("."+campo);
    if(texto == "Otra"){
      campo.show();
    }else{
      campo.hide();
    }
  }

  ocultar_visible();

  if($("#empresa_id").val()==""){
    btnDocumento.hide();
  }

  documento.addEventListener('change', actualizarVistaDocumento);

  despliegue.click(function(e){
    //Verificar que tiene clase plus
    validar = $(this).children("span").is(".fa-plus-square");
    if(validar){
      $(this).children("span").removeClass("fa-plus-square").addClass("fa-minus-square");
    }else{
       $(this).children("span").removeClass("fa-minus-square").addClass("fa-plus-square");
    }
    data = $(this).data('despliegue');

    elemento = $("#"+data);
    elemento.toggle('slow');
  });

  desplegables_si.change(function(e){
    valor = $(this).find("option:selected").val();
    elementoAsociado = $(this).data('sino');
    if(valor == 1){
      $("."+elementoAsociado).show();
    }else{
      $("."+elementoAsociado).hide();
    }
  });

  desplegables_aplica.change(function(e){
    valor = $(this).find("option:selected").val();
    elementoAsociado = $(this).data('sinoaplica');
    if(valor == 1){
      $("."+elementoAsociado).show();
    }else{
      $("."+elementoAsociado).hide();
    }
  });

  function desplegable_si(){
    items = desplegables_si.length;
    if(items > 0){
     for(i=0; i<items; i++){
      id = desplegables_si[i].id;
      valor = $("#"+id).find("option:selected").val();
      elementoAsociado = $("#"+id).data('sino');
      if(valor == 1){
        $("."+elementoAsociado).show('slow');
      }else{
        $("."+elementoAsociado).hide('slow');
      }
     } 
    }
    
  }

  function desplegable_sinoaplica(){
    items = desplegables_aplica.length;
    if(items > 0){
     for(i=0; i<items; i++){
      id = desplegables_aplica[i].id;
      valor = $("#"+id).find("option:selected").val();
      elementoAsociado = $("#"+id).data('sinoaplica');
      if(valor == 1){
        $("."+elementoAsociado).show('slow');
      }else{
        $("."+elementoAsociado).hide('slow');
      }
     } 
    }
    
  }

  desplegable_si();
  desplegable_sinoaplica();

  function actualizarVistaDocumento(){
    while(previsualizacionDocumento.firstChild){
      previsualizacionDocumento.removeChild(previsualizacionDocumento.firstChild);
    }
    //contenedorDocumento = $("#vistaDocumento");
    const archivos = documento.files;
    const mensaje = document.createElement('p');
    contenedorDocumento.remove();
    contenedorDocumento.src = "";
    if(archivos.length == 0){
      mensaje.textContent = "Actualmente no has seleccionado ninguna documento.";
      btnDocumento.hide();
    }else{
      btnDocumento.show();
      contenedor = document.createElement('embed');
      contenedor.id = "vistaDocumento";
      contenedor.src = URL.createObjectURL(archivos[0]);
      contenedor.type = archivos[0].type;
      contenedor.style.width = "100%";
      contenedor.style.height = "500px";
      vistaModal.appendChild(contenedor);
      mensaje.textContent = `Nombre de archivo ${archivos[0].name}.`;
    }
    contenedorDocumento = $("embed#vistaDocumento");
    previsualizacionDocumento.appendChild(mensaje); 
  }

	var base_url= $('#base_url').val() + '/';
  var base_url2 = $('#base_url').val();
  
  $("#archivo_id").on('change', cargar);

  function cargar(ev){
    var info = $("#list");
    var mensaje = '<b>Nombre del archivo:</b>'+ev.target.files[0].name+'<br>'+'<b>Tamaño del archivo:</b>'+ev.target.files[0].size+'<br>'+'<b>Tipo MIME:</b>'+ev.target.files[0].type;
    info.html(mensaje);
    var arch = new FileReader();
    arch.addEventListener('load',leer,false);    
    arch.readAsDataURL(ev.target.files[0]);
  }

  function leer(ev){
    $("#previsualizar").attr("src",ev.target.result);
    $("#visualizacion").show();
  }
  
	//Desactivar la acción de los a.tab que esten disabled
	$('a[data-toggle="tab"]').on('click', function(e){
        if($(this).parent('li').hasClass('disabled')){
        	alert('No puede acceder a esta pestaña');
         return false;
        }
  });
  
  $("#archivo_id").change(handleFileSelect, false);

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      //alert(reader);
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  function uniqueValidacion(tabla, validar, relatedBy){
    //alert(tabla);
    var estado;
    $.ajax({
      type: "POST",
      url: base_url+"unique",
      async:false,
      data: {tabla: tabla, where:validar, id:relatedBy},
      success:function(response){
          estado = response;
        }
    });
    return estado;
  }

  function validacion(form){
    //console.log(form);
    campos = $(form+" [required]");
    error = true;
    focus = true;
    $.each(campos, function(index, campo){
      id = "#"+campo.name;
      minlength = $(id).attr("minlength");
      maxlength = $(id).attr("maxlength");
      email = $(id).is("[type=email]");
      number = ($(id).is("[type=number]") || $(id).is("[type=tel]"))?true:false;
      unique = $(id).attr("unique");
      //if(relatedBy)alert(relatedBy);
      if($(id).is("input") || $(id).is("textarea")){
        valor = campo.value; 
        mensaje = "Debe ingresar algún carácter";
      }else if($(id).is("select")){
        valor = $(id+" option:selected").val();
        mensaje = "Debe seleccionar una opción válida";
      }
      if(unique){
        relatedBy = $(id).attr("relatedBy");
        //alert(campo.name+":"+valor+" relatedBy: "+relatedBy);
        relatedBy = (relatedBy)? $("#"+relatedBy).val():relatedBy;
        aux = {};
        if(unique=="persona" && campo.name=="persona_identificacion"){
          aux["identificacion"] = valor;
        }else if(unique=="empresario" && campo.name=="empresario_identificacion"){
          aux["identificacion"] = valor;
        }else{
          aux[campo.name] = valor;
        }
      }
      
      if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar algún caracter");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else if(unique && uniqueValidacion(unique, aux, relatedBy)==1 ) {
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Ya existe registro");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else if(email && !(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("El correo ingresado es incorrecto");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else if(number && isNaN(valor)){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Solo es permitido valores númericos");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else if(minlength && valor.length < minlength){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar mínimo "+minlength+" caracteres");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else if(maxlength && valor.length > maxlength){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar máximo "+maxlength+" caracteres");
        if(error) $(id).focus();
        //alert(campo.name);
        error = false;
      }else{
        $(id).parent().removeClass("has-error");
        $(id).next("span").hide();
      }
    });
    //alert(error);
    return error;
  }

	//Remover clase disabled a los a.tab, cuando quede almacenada la información general del formato de información AS
  $('#btn-informacion').on('click', function(e){
    var btnID = $(this);
    var id = $(this).data('form');
    var base = base_url + id;
    var datos = $('#'+id).serializeArray();
    var empresa = {}, persona = {}, asociacion = {}, anio_verificado = {};
    //console.log(datos);
    //Ocultar todos los span.help-block
    $("#"+id+" span.help-block").hide();  
    if(validacion("#"+id)){
      $.each(datos, function(index, campo){
        //conso
        if(!$('#'+campo.name).is('.no')){
          if($('#'+campo.name+'.persona').is('.persona')){
            if(campo.name=="persona_identificacion"){
              persona['identificacion'] = campo.value;
            }else{
              if($('#'+campo.name).is('select')){
                persona[campo.name] =  $('#'+campo.name+' option:selected').val();
              }else{
                persona[campo.name] = campo.value;
              }
            }
              
          }else if($('#'+campo.name+'.asociacion').is('.asociacion')){
            
            if($('#'+campo.name).is('select')){
              asociacion[campo.name] =  $('#'+campo.name+' option:selected').val();
            }else{
              asociacion[campo.name] = campo.value;
            }
          }else if($("#"+campo.name+".anios_verificado_empresa").is('.anios_verificado_empresa')){
             anio_verificado =  $('#'+campo.name).val();
          }else{
            if($('#'+campo.name).is('select')){
              empresa[campo.name] =  $('#'+campo.name+' option:selected').val();
            }else{
              empresa[campo.name] = campo.value;
            }
          }
        } 
      });
    
      var formData = new FormData($('#'+id)[0]);
      var fdata = new FormData();
      // console.log(persona);
      fdata.append('persona', JSON.stringify(persona));
      fdata.append('asociacion',JSON.stringify(asociacion));
      fdata.append('anio_verificado',JSON.stringify(anio_verificado));
      fdata.append('empresa', JSON.stringify(empresa));
      fdata.append('documento', formData.get('documento_consentimiento_id'));
      fdata.append('archivo', formData.get('archivo_id'));
      //console.log(fdata.get('persona'));    
      $.ajax({
        type: "POST",
        contentType: false,
        processData:false,
        url : base,
        data: fdata,
        success:function(response){
          //console.log(response);
          var respuesta = JSON.parse(response);
          if(respuesta.error == 1){
            
            if(respuesta.soloRegistro!=undefined && respuesta.soloRegistro){
              window.location = base_url;
            }

            if(btnID.hasClass('btn-primary')){
              btnID.removeClass("btn-primary").addClass("btn-success").html("Actualizar y continuar <i class='fa fa-arrow-right' aria-hidden='true'></i> ");
            }
            if(respuesta.progreso!=undefined){
              cargarProgreso(respuesta.progreso);
            }

            //Asignando valor de la empresa actual
            $('[name=empresa_id]').val(respuesta.empresa_id);
            $("#razon_social, #identificacion").attr("relatedby","empresa_id");
            $("#persona_identificacion").attr("relatedby","representante_legal_id");
            $("#persona_identificacion").attr("readonly","readonly");
            $("#identificacion").attr("readonly","readonly");
            $('#representante_legal_id').val(respuesta.representante_legal_id);
            $('#empresa_empresario').val($("#razon_social").val());
            alert(respuesta.fase);
            removeDisabled();
            activarTab(1);
            

          }else if(respuesta.error==2){
            if(respuesta.representante_legal_id!=undefined){
              $("#persona_identificacion").attr("relatedby","representante_legal_id");
              $("#persona_identificacion").attr("readonly","readonly");
              $('#representante_legal_id').val(respuesta.representante_legal_id);
            }
            alert(respuesta.fase);
            activarTab(1);
          }
          else if(respuesta.error == -1){
            alert(respuesta.error+". "+respuesta.fase);
          }else{
            alert(respuesta.error+". "+respuesta.fase);
          }
        }
      });
    }else{
      alert("Por favor, diligenciar correctamente el formulario");
      return false;
    }

  });

  function obtenerOptions(tabla, condicion, elemento){
  	$.ajax({
    	type: "POST",
    	url : base_url + 'cargarCombo',
    	data: {tabla: tabla, where:condicion},
    	success:function(response){
    		$(elemento).empty();
    		$(elemento).append(response);
    	}
    });
  }

  $("#region").change(function(e){

  	id = $(this).children('option:selected').val();
		condicion = {'region_id':  parseInt(id)};
		tabla = 'autoridad_ambiental';
		elemento = '#autoridad_ambiental_id';
		obtenerOptions(tabla,condicion,elemento);
		tabla = 'departamento';
		elemento = '#departamento';
		obtenerOptions(tabla,condicion,elemento);
  	
  });

  $("#departamento").change(function(e){
  	id = $(this).children('option:selected').val();
  	condicion = {'departamento_id': parseInt(id)};
  	tabla = 'municipio';
  	elemento = '#municipio_id';
  	obtenerOptions(tabla,condicion,elemento);
  });

  $("#categoria_id").change(function(e){
  	id = $(this).children('option:selected').val();
  	condicion = {'categoria_id': parseInt(id)};
  	tabla = 'sector';
  	elemento = '#sector_id';
  	obtenerOptions(tabla,condicion,elemento);
  });

  $("#sector_id").change(function(e){
  	id = $(this).children('option:selected').val();
  	condicion = {'sector_id': parseInt(id)};
  	tabla = 'subsector';
  	elemento = '#subsector_id';
  	obtenerOptions(tabla,condicion,elemento);
  });

  $("#socio_masculino, #socio_femenino").keyup(function(){
  	masculino = parseInt($("#socio_masculino").val());
  	femenino = parseInt($("#socio_femenino").val());
  	var total = masculino + femenino;
  	$("#socio_total").attr("value", total);
  });

  $("#vinculado_masculino, #vinculado_femenino").keyup(function(){
  	masculino = parseInt($("#vinculado_masculino").val());
  	femenino = parseInt($("#vinculado_femenino").val());
  	var total = masculino + femenino;
  	$("#vinculado_total").attr("value", total);
  });

  $("#empleado_masculino, #empleado_femenino").keyup(function(){
  	masculino = parseInt($("#empleado_masculino").val());
  	femenino = parseInt($("#empleado_femenino").val());
  	var total = masculino + femenino;
  	$("#empleado_total").attr("value", total);
  });

  $("#educacion1, #educacion2, #educacion3, #educacion4, #educacion5").keyup(function(){
  	p = parseInt($("#educacion1").val());
  	b = parseInt($("#educacion2").val());
  	t = parseInt($("#educacion3").val());
  	u = parseInt($("#educacion4").val());
  	o = parseInt($("#educacion5").val());
  	var total = p + b + t + u + o;
  	$("#nivel_educativo_total").attr("value", total);
  });

  $('select.situacion').change(function(){
  	id = $(this).val();
  	input = $(this).data('asociado');
  	if(id == 1){
  		$('#'+input).removeAttr("disabled");
  	}else{
  		$('#'+input).attr("disabled", "disabled");
  	}
  });
  
  
  $('#btn-descripcion').click(function(e){
    var btnID = $(this);
    var id = $(this).data('form');
    var empresa_id = $("#empresa_id").val();
    base = base_url + id;
    var datos = $('#'+id).serializeArray();
    var data = {};
    if(empresa_id!=""){
      if(validacion("#"+id)){
        $.each(datos, function(index, ele){
          data[ele.name] = ele.value;
        });
        $.ajax({
          type: 'POST',
          url: base,
          data:{'descripcion': data},
          success:function(response){
            var respuesta = JSON.parse(response);
            if(respuesta.error==1){
              if(respuesta.progreso!=undefined){
                cargarProgreso(respuesta.progreso)
              }
              
              if(btnID.hasClass('btn-primary')){
                btnID.removeClass("btn-primary").addClass("btn-success").html("Actualizar y continuar <i class='fa fa-arrow-right' aria-hidden='true'></i> ");
              }
              activarTab(2);
              alert(respuesta.fase);
            }else{
              alert("Error. "+respuesta.fase);
            }
          }
        });
      }else{
        return false;
      }
    }else{
      alert("Es necesario primero guardar un negocio verde.");
    }
  });

  $('#btn-categoria').click(function(){
      var btnID = $(this);
      var id = $(this).data('form');
      var empresa_id = $("#empresa_id").val();
      base = base_url + id;
      var datos = $('#'+id).serializeArray();
      var categoria = {};
      var servicios = [];
      var serviciosActualizar = [];
      var actividades = [];
      if(empresa_id!=""){
        if(validacion("#"+id)){
          $.each(datos, function(index, ele){
            if(!$("#"+ele.name).is('.no')){
              if($('#'+ele.name+'.tipo_servicio').is('.tipo_servicio')){
                bien_id = $("#"+ele.name).data('servicio');
                valor = $("#"+ele.name+" option:selected").val();
                if(valor!="" && bien_id==""){
                  nombre = $("#"+ele.name).parent().next().find("input").val();
                  aux = {
                    opciones_bienes_servicios_id:valor,
                    lider_estado: 0,
                    empresa_id:empresa_id,
                    nombre:nombre
                  };
                  servicios.push(aux);
                }else if(bien_id!=""){
                  nombre = $("#"+ele.name).parent().next().find("input").val();
                  aux ={ 
                      id:bien_id, 
                      opciones_bienes_servicios_id:valor,
                      nombre:nombre
                  };
                  serviciosActualizar.push(aux);
                }
               
              }else if($('#'+ele.name+'.servicio_lider').is('.servicio_lider')){
                bien_id = $("#"+ele.name+'.servicio_lider').data('servicio');
                valor = $("#"+ele.name+" option:selected").val();
                nombre = $("#"+ele.name).parent().next().find("input").val();
                if(bien_id==""){
                  aux = {
                    opciones_bienes_servicios_id:valor,
                    lider_estado: 1,
                    empresa_id:empresa_id,
                    nombre:nombre
                  };
                  servicios.push(aux);
                }else{
                  aux ={ 
                      id:bien_id, 
                      opciones_bienes_servicios_id:valor,
                      nombre:nombre
                  };
                  serviciosActualizar.push(aux);
                }
                  
              }else if($('#'+ele.name+'.tipo_actividad').is('.tipo_actividad')){
                valor = $("#"+ele.name+" option:selected").val();
                actividad_id = $("#"+ele.name).data("actividad");
                if(valor!=""){
                  confirmacion = valor;
                  direccion = $("#direccion_actividad_"+actividad_id).val();
                  municipio_id = $("#municipio_actividad_"+actividad_id+" option:selected").val();
                  departamento_id = $("#departamento_actividad_"+actividad_id+" option:selected").val();
                  tipo_tenencia_id = $("#tt_actividad_"+actividad_id+" option:selected").val();
                  area_predio = $("#area_actividad_"+actividad_id).val();
                  cumple_pot_sino = $("#pot_actividad_"+actividad_id+" option:selected").val();
                  normatividad_ambiental_sino = $("#normatividad_actividad_"+actividad_id+" option:selected").val();
                  observacion = $("#observacion_actividad_"+actividad_id).val();
                  aux = {
                    actividad_id:actividad_id,
                    confirmacion: confirmacion,
                    empresa_id:empresa_id,
                    municipio_id:municipio_id,
                    departamento_id:departamento_id,
                    tipo_tenencia_id:tipo_tenencia_id,
                    area_predio:area_predio,
                    cumple_pot_sino:cumple_pot_sino,
                    normatividad_ambiental_sino:normatividad_ambiental_sino,
                    observacion: observacion,
                  };
                  actividades.push(aux);
                }
               
              }else if($('#'+ele.name+'.empresa').is('.empresa')){
                if($('#'+ele.name).is('select')){
                  categoria[ele.name] =  $('#'+ele.name+' option:selected').val();
                }else{
                  categoria[ele.name] = ele.value;
                }
              }
                
            }
          });
          
          $.ajax({
            type:'POST',
            url: base,
            data:{'categoria' : categoria, 'servicios': servicios, 'serviciosActualizar': serviciosActualizar, 'actividades': actividades},
            success:function(response){
              var respuesta = JSON.parse(response);
             
              
              if(respuesta.error==1){
                if(respuesta.progreso!=undefined){
                  cargarProgreso(respuesta.progreso);
                }
                if(btnID.hasClass('btn-primary')){
                  btnID.removeClass("btn-primary").addClass("btn-success").html("Actualizar y continuar <i class='fa fa-arrow-right' aria-hidden='true'></i> ");
                }
                activarTab(4);
                limpiarBienes();
                if(respuesta.bienLider.id!=""){
                  $("#tipo_bien_lider").data("servicio",respuesta.bienLider.id);
                  $("#tipo_bien_lider option[value="+respuesta.bienLider.opciones_bienes_servicios_id+"]").attr("selected", true);
                  $("#bien_lider").val(respuesta.bienLider.nombre);
                }

                if(respuesta.empresaBienes.length>0){
                  for (var i = 0; i < respuesta.empresaBienes.length; i++) {
                    $("#tipo_bien_"+i).data("servicio",respuesta.empresaBienes[i].id);
                    $("#tipo_bien_"+i+" option[value="+respuesta.empresaBienes[i].opciones_bienes_servicios_id+"]").attr("selected", true);
                    $("#bien_"+i).val(respuesta.empresaBienes[i].nombre);
                  }
                }
                alert(respuesta.fase);
              }else{  
                alert("Error. "+respuesta.fase);
              }
            }
          });
        }else{
          return false;
        }
      }else{
        alert("Es necesario primero guardar un negocio verde.");
      }
  });

  function limpiarBienes(){
    $("#tipo_bien_lider option").attr("selected", false);
    $("#bien_lider").val("");
    $("select.tipo_servicio option").attr("selected", false);
    $("input.bien").val("");
  }

  $('#btn-informacionEmpresa').click(function(){
    var btnID = $(this);
  	var id = $(this).data('form');
    empresa_id = $('#empresa_id').val();
    base = base_url + id;
    var data = [];
    var impacto_ambiental = [];
    var conservacion = [];
    var datos = $('#'+id).serializeArray();
    if(empresa_id!=""){
      if(validacion("#"+id)){
        $.each(datos, function(index, ele){
          id = "#"+ele.name;
          if(!$(id).is('.no')){
            if($(id).is('.impacto_ambiental')){
              valor = $(id+" option:selected").val();
              if(valor!=""){
                  impacto_id = parseInt($(id).next("input").val());
                  descripcion = $("#descripcion_"+impacto_id).val();
                  escala = parseInt($("#impacto_"+impacto_id+":checked").val());  
                if(valor==1){
                  aux = {
                    impacto_id: impacto_id,
                    empresa_id: empresa_id,
                    descripcion: descripcion,
                    escala: escala,
                    aplica_no_aplica: parseInt(valor)
                  };
                }else{
                  aux = {
                    impacto_id: impacto_id,
                    empresa_id: empresa_id,
                    escala:"",
                    descripcion:"",
                    aplica_no_aplica: parseInt(valor)
                  };
                }
                impacto_ambiental.push(aux);
              }
            }else if($(id).is('.practica_conservacion')){
              valor = $(id+" option:selected").val();
              if(valor!=""){
                opciones_id = parseInt($(id).next("input").val());
                aux = {
                  empresa_id: empresa_id,
                  opciones_id: opciones_id,
                  confirmacion: parseInt(valor)
                };
                conservacion.push(aux);
              }
            }
          }
          
        });
        $.ajax({
          type: 'POST',
          url: base,
          data:{'conservacion': conservacion, 'impacto_ambiental':impacto_ambiental},
          success:function(response){
            var respuesta = JSON.parse(response);
            if(respuesta.error==1){
              if(respuesta.progreso!=undefined){
                cargarProgreso(respuesta.progreso)
              }

              if(btnID.hasClass('btn-primary')){
                btnID.removeClass("btn-primary").addClass("btn-success").html("Actualizar y continuar <i class='fa fa-arrow-right' aria-hidden='true'></i> ");
              }
              activarTab(3);
              alert(respuesta.fase);
            }else{
              alert("Error. "+respuesta.fase);
            }
          }
        });
      }else{
        return false;
      }
    }else{
      alert("Es necesario primero guardar un negocio verde.");
    }
  });

  $('#constitucion_legal_estado').change(function(e){
    if($(this).children('option:selected').val()=='1'){
      $("#anio_funcionamiento_registro, #anio_funcionamiento_empresa").removeAttr('disabled');
    }else{
      $("#anio_funcionamiento_registro, #anio_funcionamiento_empresa").attr('disabled','disabled');
    }
  });
  
  //eventos de los botones que almacenan información a la BD
  $('#btn-verificadorEmpresario').click(function(){
    var id = $(this).data('form');
    var empresa_id = $('#empresa_id').val();
    if(empresa_id!=""){
      if(validacion("#"+id)){
        base = base_url + id;
        var datos = $('#'+id).serializeArray();
        var data = {};
        $.each(datos, function(index, ele){
          codigo = '#'+ele.name;
          if($(codigo+'.empresario').is('.empresario')){
            if(ele.name=="empresario_identificacion"){
              data['identificacion'] = ele.value;
            }else if(ele.name=="empresario_correo"){
              data['correo'] = ele.value;
            }else{
              data[ele.name] = ele.value;
            }
          }
        });
        $.ajax({
          type: 'POST',
          url: base,
          data: {'empresario':data},
          success:function(response){
            var respuesta = JSON.parse(response);
            if(respuesta.error==1){
              if(respuesta.progreso!=undefined){
                cargarProgreso(respuesta.progreso);
              }
              alert('Se pudo almacenar correctamente la información.');
              window.location = base_url2;
            }else{
              alert(respuesta.error);
            }
          }
        });
      }else{
        return false;
      }
    }else{
      alert("Es necesario primero guardar un negocio verde.");
    }
  });

  $('#btn-observacion').click(function(){
    var id = $(this).data('form');
    if(validacion("#"+id)){
      base = base_url + id;
      var datos = $('#'+id).serializeArray();
      var data = {};
      $.each(datos, function(index, ele){
        data[ele.name] = ele.value;
      });
      $.ajax({
        type: 'POST',
        url: base,
        data: {'observacion':data},
        success:function(response){
          var respuesta = JSON.parse(response);
          if(respuesta.error==1){
            alert('Se pudo almacenar correctamente la información en la base de datos');
            window.location = base_url2;
          }else{
            alert(respuesta.error);
          }
        }
      });
    }else{
      return false;
    }
  });

  function cargarProgreso(progreso){
    progreso = parseFloat(progreso).toFixed(2);
    style = "width: "+progreso+"%";
    $("#progresoInscripcion").text(progreso+" %");
    $("#progresoInscripcion").attr("aria-valuenow", progreso);
    $("#progresoInscripcion").attr("style", style);

  }

  function activarTab(id){
    var elementos = $('.nav-tabs li');
    elementos.removeClass('active');
    elementos.eq(id).addClass('active');
    var tabs = $('.tab-pane');
    tabs.removeClass('active');
    tabs.eq(id).addClass('active');
  }

  function removeDisabled(){
    $('.nav-tabs-custom .nav-tabs li.disabled, .pos-rel .nav-pills li.disabled').removeClass('disabled');
  }

});