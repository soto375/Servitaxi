$(document).ready(function(){

	var base_url= $('#base_url').val() + 'sitio/';
  var base_url2 = $('#base_url').val() + 'sitio';
  
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
      alert(reader);
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
        }else{
          aux[campo.name] = valor;
        }
      }
      
      if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar algún caracter");
        if(error) $(id).focus();
        error = false;
      }else if(unique && uniqueValidacion(unique, aux, relatedBy)==1 ) {
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Ya existe registro");
        if(error) $(id).focus();
        error = false;
      }else if(email && !(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("El correo ingresado es incorrecto");
        if(error) $(id).focus();
        error = false;
      }else if(number && isNaN(valor)){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Solo es permitido valores númericos");
        if(error) $(id).focus();
        error = false;
      }else if(minlength && valor.length < minlength){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar mínimo "+minlength+" caracteres");
        if(error) $(id).focus();
        error = false;
      }else if(maxlength && valor.length > maxlength){
        $(id).parent().addClass("has-error");
        $(id).next("span").show().text("Debe ingresar máximo "+maxlength+" caracteres");
        if(error) $(id).focus();
        error = false;
      }else{
        $(id).parent().removeClass("has-error");
        $(id).next("span").hide();
      }
    });
    return error;
  }

	//Remover clase disabled a los a.tab, cuando quede almacenada la información general del formato de información AS
  $('#btn-informacion').on('click', function(e){
    var id = $(this).data('form');
    var base = base_url + id;
    var datos = $('#'+id).serializeArray();
    var empresa = {}, persona = {}, asociacion = {};
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
          }else{
            if($('#'+campo.name).is('select')){
              empresa[campo.name] =  $('#'+campo.name+' option:selected').val();
            }else{
              empresa[campo.name] = campo.value;
            }
          }
        } 
      });
      
      console.log(persona);
      console.log(asociacion);
      console.log(empresa);
      var formData = new FormData($('#'+id)[0]);
      var fdata = new FormData();
      // console.log(persona);
      fdata.append('persona', JSON.stringify(persona));
      fdata.append('asociacion',JSON.stringify(asociacion));
      fdata.append('empresa', JSON.stringify(empresa));
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
            alert(respuesta.fase);
            if(respuesta.progreso!=undefined){
              cargarProgreso(respuesta.progreso);
            }
            //Asignando valor de la empresa actual
            $('[name=empresa_id]').val(respuesta.empresa_id);
            removeDisabled();
            activarTab(1);

          }else if(respuesta.error==2){
            activarTab(1);
            alert(respuesta.fase);
          }
          else if(respuesta.error == -1){
            alert(respuesta.error+". "+respuesta.fase);
          }else{
            alert(respuesta.error+". "+respuesta.fase);
          }
        }
      });
    }else{
      //alert("Por favor, diligenciar correctamente el formulario");
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
    var id = $(this).data('form');
    //var empresa_id = $("#empresa_id").val();
    base = base_url + id;
    var datos = $('#'+id).serializeArray();
    var data = {};
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
  });

  $('#btn-categoria').click(function(){
      var id = $(this).data('form');
      base = base_url + id;
      var datos = $('#'+id).serializeArray();
      var data = {};
      if(validacion("#"+id)){
        $.each(datos, function(index, ele){
          if(!$("#"+ele.name).is('.no')){
            data[ele.name]=$('#'+ele.name+' option:selected').val();
          }
        });
        $.ajax({
          type:'POST',
          url: base,
          data:{'categoria' : data},
          success:function(response){
            var respuesta = JSON.parse(response);
            if(respuesta.error==1){
              if(respuesta.progreso!=undefined){
                cargarProgreso(respuesta.progreso);
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
  });

  $('#btn-informacionEmpresa').click(function(){
  	var id = $(this).data('form');
    if(validacion("#"+id)){
      base = base_url + id;
      var i = 0;
      empresa_id = parseInt($('#empresa_id').val());
    	var datos = $('#'+id).serializeArray();
      //console.log(datos);
      etapa_empresarial = $('select#etapa_empresarial option:selected').val();
      constitucion_legal_estado = parseInt($('select#constitucion_legal_estado option:selected').val());
      operando_actualmente_estado = parseInt($('select#operando_actualmente_estado option:selected').val());
      anio_funcionamiento_registro =(constitucion_legal_estado==1)?parseInt($('#anio_funcionamiento_registro').val()):0;
      anio_funcionamiento_empresa = (constitucion_legal_estado==1)?parseInt($('#anio_funcionamiento_empresa').val()):0;
      var data = {
        'etapa_empresarial':{'etapa_empresa_id':etapa_empresarial},
        'empresa_empleado_sexo':[], 
        'caracterizacion_vinculacion_empresa': [], 
        'empresa_empleado_edad': [],
        'caracterizacion_empleado_educativo': [],
        'caracterizacion_demografia_empresa': [],
        'empresa_actividad': [],
        'caracterizacion_empresa_bien_servicio': [],
        'caracterizacion_empresa_bien_servicio_actualizar': [],
        'caracterizacion_organizacion_empresa': [{
          'constitucion_legal_estado': constitucion_legal_estado,
          'opera_actualmente_estado': operando_actualmente_estado,
          'anio_funcionamiento_empresa': anio_funcionamiento_empresa,
          'anio_funcionamiento_registro':anio_funcionamiento_registro,
        }],
        };
        
    	$.each(datos, function(index, ele){
        codigo = '#'+ele.name;
        elemento = $(codigo);
        var aux = {};
        if(!$(codigo).is('.no'))
        {
          if($(codigo+'.empleado_sexo').is('.empleado_sexo')){ //empresa_empleado_sexo
            aux = {
              'empresa_id':empresa_id,
              'socio_empleado_id':parseInt(elemento.data('cod')),
              'sexo_id':parseInt(elemento.data('sex')),
              'cantidad': ele.value
            };
            data['empresa_empleado_sexo'].push(aux);
          }else if($(codigo+'.vinculacion').is('.vinculacion')){ //caracterizacion_vinculacion_empresa
            aux = {
              'empresa_id':empresa_id,
              'vinculacion_id':parseInt(elemento.data('cod')),
              'cantidad': ele.value
            };
            data['caracterizacion_vinculacion_empresa'].push(aux);
          }else if($(codigo+'.rango_edad').is('.rango_edad')){ //empresa_empleado_edad
            aux = {
              'empresa_id':empresa_id,
              'rango_edad_id':parseInt(elemento.data('cod')),
              'cantidad': ele.value
            };
            data['empresa_empleado_edad'].push(aux);
          }else if($(codigo+'.educacion').is('.educacion')){ //caracterizacion_empleado_educativo
            aux = {
              'empresa_id':empresa_id,
              'nivel_id':parseInt(elemento.data('cod')),
              'cantidad': ele.value
            };
            data['caracterizacion_empleado_educativo'].push(aux);
          }else if($('select'+codigo+'.situacion').is('.situacion')){ //caracterizacion_demografia_empresa
            estado = $('select'+codigo+' option:selected').val(); 
            estado = (estado=="")?0:parseInt(estado);
            demografia_id = $('select'+codigo+'.situacion').data('cod');
            cantidad = (estado==0)?0:parseInt($("#cantidad"+demografia_id).val());
            aux = {
              'empresa_id':empresa_id,
              'estado': estado,
              'demografia_id':demografia_id,
              'cantidad': cantidad,
            };
            data['caracterizacion_demografia_empresa'].push(aux);
          }else if($('input'+codigo+'.actividad').is('.actividad')){ //empresa_actividad
            aux = {
              'empresa_id':empresa_id,
              'actividad_id': parseInt(ele.value),
              'confirmacion': 1
            };
            data['empresa_actividad'].push(aux);
          }else if($('input'+codigo+'.bien').is('.bien')){ //caracterizacion_empresa_bien_servicio
            estado = (ele.name=='bien_lider') ? 1:0;
            nombre = ele.value;
            id = parseInt($("#"+ele.name).data('cod'));
            estadoAccion = parseInt($("#"+ele.name).data('estado'));
            aux = {
              'empresa_id':empresa_id,
              'nombre': ele.value,
              'lider_estado': estado
            };
            if(estadoAccion==0 && $.trim(nombre)!=""){
               data['caracterizacion_empresa_bien_servicio'].push(aux);
            }else if(estadoAccion == 1){
              aux['id'] = id;
              data['caracterizacion_empresa_bien_servicio_actualizar'].push(aux);
            }else{
              //alert('Ninguno de las dos opciones de guardar y/o actualizar'+nombre);
            }            
          }
          //console.log(aux);
        }
        
    	});

      //console.log(data);
      $.ajax({
        type:'POST',
        url: base,
        data: data,
        success:function(response){
          respuesta = JSON.parse(response);
          if(respuesta.error==1){
            if(respuesta.progreso!=undefined){
              cargarProgreso(respuesta.progreso);
            }
            activarTab(4);
            alert("Se han guardado correctamente la información1");
          }else{
            alert("No se pudo guardar la información");
          }
        }
      });
    }else{
      return false;
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
    if(validacion("#"+id)){
      base = base_url + id;
      var datos = $('#'+id).serializeArray();
      var data = {};
      $.each(datos, function(index, ele){
        codigo = '#'+ele.name;
        if($(codigo+'.empresario').is('.empresario')){
          data[ele.name] = ele.value;
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
            activarTab(5);
            alert('Se pudo almacenar correctamente la información en la base de datos');
          }else{
            alert(respuesta.error);
          }
        }
      });
    }else{
      return false;
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
    //alert("Porgreso: "+progreso);
    style = "width: "+progreso+"%";
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
    //elementos.removeClass('active');
    //$(id).addClass('active');
  }

  function removeDisabled(){
    $('.nav-tabs-custom .nav-tabs li.disabled').removeClass('disabled');
  }

});