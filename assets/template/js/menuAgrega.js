$(document).ready(function(){
	$('.select2').select2();
  const base_url = $("#base_url").val();
  const menu_padre = $("#menu_padre");
  const menu_id = $("#id").val();
  const posicion = $("select#posicion");

  var option = $("#cms_publicacion_id option");
  const orden_menu = $("#orden_menu_principal, #orden_menu_secundaria");
  const tipo_menu = $("#tipo_menu");
  const ubicar = $('.ubicar');
  const principal = $('.principal');
  const secundario = $('.secundario');
  const ubicacion = $("[name='ubicacion']");

  const tipo_publicacion = $("#cms_tipo_publicacion_id");
  const desplegable = $(".desplegable");
  const desplegableMenu = $(".desplegableMenu");
  const contenido = $(".contenido");
  const enlace = $(".enlace");
  const controlador = $(".controlador");
  const menu_contenido = $("#menu_contenido").find("tbody");

  function getValorMenuPadre(){
    return parseInt(menu_padre.children('option:selected').val());
  }

  function getValorMenu(){
    return parseInt(tipo_menu.find("option:selected").val());
  }


  function visualizacionMenu(){
   const opcion = getValorMenu(); 
   if(opcion==1 || opcion==2){
      desplegableMenu.hide();
      ubicar.show();
      if(opcion == 1){
        principal.show();
      }else{
        secundario.show();
      }
    }else{
      desplegableMenu.hide();
    }
  }

  

  function getValorOption(){
    return parseInt(tipo_publicacion.find("option:selected").val());
  }

  function visualizacionOpciones(){
   const opcion = getValorOption(); 
   if(opcion==4 || opcion==6 || opcion == 5){
      desplegable.hide();
      if(opcion == 4){
        contenido.show();
      }else if(opcion == 5){
        controlador.show();
      }else{
        enlace.show();
      }
      
    }else{
      desplegable.hide();
    }
  }

  function loadPosicion(condicion){
    tabla='cms_menu';
    $.ajax({
      type: "POST",
      url : base_url + 'cargarCombo',
      data: {tabla: tabla, where:condicion},
      success:function(response){
        respuesta = JSON.parse(response);
        posicion.empty();
        posicion.append(respuesta.opciones);
        if(menu_id!=undefined){
          cantidad = posicion.find("option[value="+menu_id+"]").length;
          if(cantidad)
          {
            posicion.val(menu_id).trigger('change');
          }else{
            posicion.val("").trigger('change');
          }
        }
        if(!respuesta.numero){
          ubicacion.removeAttr('checked');
          $("[name='ubicacion']#inlineRadio3").prop('checked',true);
          ubicacion.attr('disabled',true);
          posicion.attr('disabled',true).attr("required",false);
        }else{
          ubicar.show();
          principal.show();
          ubicacion.attr('disabled',false);
          posicion.attr('disabled',false).attr("required",true);
        }
      }
    });
  }

  function loadTipoMenu(){
    tabla='cms_tipo_menu';
    condicion = {estado: 1};
    $.ajax({
      type: "POST",
      url : base_url + 'cargarCombo',
      data: {tabla: tabla, where:condicion},
      success:function(response){
        respuesta = JSON.parse(response);
        tipo_menu.empty();
        tipo_menu.append(respuesta.opciones);
      }
    });
  }

  menu_padre.on("change", function(e){
    let dato = $(this).children('option:selected').val();
    
    if($.trim(dato) == ""){
      tipo_menu.attr("disabled",true);
      tipo_menu.attr("required",false);
      tipo_menu.val("").trigger('change');
    }else{
      let valor = parseInt(dato);
      if(valor){
        tipo_menu.empty();
        tipo_menu.attr("disabled",true);
        tipo_menu.attr("required",false);
        condicion = {'menuPadre':  valor};
        loadPosicion(condicion);
      }else{
        loadTipoMenu();
        tipo_menu.attr("disabled",false);
        tipo_menu.attr("required",true);
      }   
    }
  });

  tipo_menu.on("change", function(e){
    let valor = parseInt($(this).children('option:selected').val());
    if(valor){
      condicion = {'menuPadre':  getValorMenuPadre(),'tipomenu':  valor};
      loadPosicion(condicion);
    }else{
      posicion.empty();
    }
  });

  ubicacion.on('change', (e)=>{
    let valor = $("[name=ubicacion]:checked").val();
    if(valor == 3){
      posicion.attr("disabled",true);
      posicion.attr("required",false);
    }else{
      posicion.attr("disabled",false);
      posicion.attr("required",true);
    }
  });

  option.on('click', function(e){
    if($(this).is(':selected')){
      trAux = document.createElement('tr');
      tdContenido = document.createElement('td');
      inputAux = document.createElement('input');
      inputAux.setAttribute('type','hidden');
      inputAux.setAttribute('name','menu_contenidos[]');
      inputAux.setAttribute('value',$(this).val()); 
      p = document.createElement('p');
      /*p.setAttribute("id", "prueba");
      p.style.backgroundColor="red";
      p.style.border="3px black solid";*/
      p.innerText = $(this).html();
      tdContenido.appendChild(inputAux);
      tdContenido.appendChild(p);
      trAux.appendChild(tdContenido);

      tdAcciones = document.createElement('td');
      tdAcciones.className = "d-flex";
      divGroup = document.createElement('div');
      divGroup.className = "btn-group mx-auto";
      spanBajar = document.createElement('span');
      spanBajar.className="btn btn-primary btn-sm bajar";
      //spanBajar.style.marginRight="5px";
      iconBajar = document.createElement('i');
      iconBajar.className = "fas fa-sort-numeric-down";
      spanBajar.appendChild(iconBajar);
      
      spanSubir = document.createElement('span');
      spanSubir.className="btn btn-danger btn-sm subir";
      //spanSubir.style.marginRight="5px";
      iconSubir = document.createElement('i');
      iconSubir.className = "fas fa-sort-numeric-up";
      spanSubir.appendChild(iconSubir);

      spanCerrar = document.createElement('span');
      spanCerrar.className="btn btn-info btn-sm cerrar";
      iconCerrar = document.createElement('i');
      iconCerrar.className = "fas fa-minus-circle";
      spanCerrar.appendChild(iconCerrar);

      divGroup.appendChild(spanBajar);
      divGroup.appendChild(spanSubir);
      divGroup.appendChild(spanCerrar);
      tdAcciones.appendChild(divGroup);
      trAux.appendChild(tdAcciones);

      menu_contenido.append(trAux);
      $(this).hide();
    }
  });

  menu_contenido.on("click","span.cerrar", function(e){
    id = $(this).parent('div').parent('td').siblings('td').find('input').val();
    $('#cms_publicacion_id option[value='+id+']').show();
    $(this).parent('div').parent('td').parent('tr').remove();
  });

  menu_contenido.on("click","span.subir", function(e){
    $(this).parent('div').parent('td').parent('tr').prev().before($(this).parent('div').parent('td').parent('tr'));
  });

  menu_contenido.on("click","span.bajar", function(e){
    $(this).parent('div').parent('td').parent('tr').next().after($(this).parent('div').parent('td').parent('tr'));
  }); 

  tipo_publicacion.change(visualizacionOpciones);
  tipo_menu.change(visualizacionMenu);

  //visualizacionOpciones();
  //visualizacionMenu();
  visualizacionPosicion();
  
  function visualizacionPosicion(){

    let dato = menu_padre.children('option:selected').val();
    if($.trim(dato) == ""){
      tipo_menu.attr("disabled",true);
      tipo_menu.attr("required",false);
      tipo_menu.val("").trigger('change');
    }else{
      let valor = parseInt(dato);
      if(valor){
        tipo_menu.empty();
        tipo_menu.attr("disabled",true);
        tipo_menu.attr("required",false);
        condicion = {'menuPadre':  valor};
        loadPosicion(condicion);
      }else{
        vtipomenu = parseInt(tipo_menu.children('option:selected').val());
        tipo_menu.attr("disabled",false);
        tipo_menu.attr("required",true);
        condicion = {'menuPadre':  valor, 'tipomenu':vtipomenu};
        loadPosicion(condicion);
      }   
    }

    visualizacionOpciones();
    visualizacionMenu();
  }

});