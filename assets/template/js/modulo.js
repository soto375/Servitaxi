$(document).ready(function(){
	$('.select2').select2();
  const base_url = $("#base_url").val();
  const modulo_padre = $("#modulo_padre");
  const ubicar = $('.ubicar');
  const principal = $('.principal');
  const posicion = $("#posicion");
  const ubicacion = $("[name='ubicacion']");
  const modulo_id = $("#id").val(); 
  const etiqueta_modulo = $("#etiqueta_modulo_id");
  

  function setSelectedPosicion(){
    if(modulo_id!=undefined){
        $("#posicion option[value="+modulo_id+"]").attr("selected",true);
        //posicion.children('option[value='+modulo_id+']').attr("selected",true);
      }
  }

  function loadInitPosicion(){
    let valor = modulo_padre.children('option:selected').val();
    let etiqueta = etiqueta_modulo.children('option:selected').val();
    if(valor!=""){
      valor = parseInt(valor);
      etiqueta = parseInt(etiqueta);
      condicion = {'modulo_padre':  valor, 'etiqueta_modulo_id':etiqueta};
      $.when(loadPosicion(condicion)).then(setSelectedPosicion()).then(function(){
        $('.select2').select2();
      }).then(function(){
        if(modulo_id!=undefined){
          posicion.val(modulo_id).trigger('change');
        }
      });
    }else{
      $('.select2').select2();
    }
    //.then(()=>{});
  }

  loadInitPosicion();

  function loadPosicion(condicion){
    tabla='modulo';
    data = {tabla: tabla, where:condicion, noAplica:0, where_not_in: 'NULL'};
    if(modulo_id!=undefined) data.where_not_in = {'id':modulo_id};
    $.ajax({
      type: "POST",
      url : base_url + 'cargarCombo',
      data: data,
      success:function(response){
        respuesta = JSON.parse(response);
        posicion.empty();
        posicion.append(respuesta.opciones);
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

  etiqueta_modulo.on("change", function(e){
    let tabla = 'modulo';
    let valor = $(this).children('option:selected').val();
    let modulo = modulo_padre.children('option:selected').val();
    if(valor!=""){
      valor = parseInt(valor);
      modulo = parseInt(modulo);
      condicion = {'modulo_padre':  modulo, 'etiqueta_modulo_id':valor};
      loadPosicion(condicion);
      where_not_in = (modulo_id!=undefined)?{'id':modulo_id}:'NULL';
      $.ajax({
        type: "POST",
        url: base_url + 'cargarCombo',
        data: {tabla: tabla, where:{'etiqueta_modulo_id':valor},noAplica:1, where_not_in:where_not_in},
        success:function(response){
          respuesta = JSON.parse(response);
          modulo_padre.empty();
          modulo_padre.append(respuesta.opciones);
        }
      })
    }

  });

  modulo_padre.on("change", function(e){
    let valor = $(this).children('option:selected').val();
    let etiqueta = etiqueta_modulo.children('option:selected').val();
    valor = parseInt(valor);
    etiqueta = parseInt(etiqueta);
    condicion = {'modulo_padre':  valor, 'etiqueta_modulo_id':etiqueta};
    loadPosicion(condicion);
    if(valor!="" && valor!=0){
      $.ajax({
        type: "POST",
        url : base_url + 'getEtiquetaModulo',
        data: {modulo_padre_id: valor},
        success:function(response){
          respuesta = JSON.parse(response);
          if(respuesta.etiqueta!=null){
            etiqueta_modulo.attr({
              disabled: true,
              required: false,
            });
          }else{
            console.log("Error al intentar recuperar la etiqueta del modulo");
          }
        }
      });
    }else{
      etiqueta_modulo.attr({disabled: false, required: true,});
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

});