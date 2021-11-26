$(document).ready(function(){
  $('.select2').select2();
  var base_url = $("#base_url").val();
  var usuario_id = $("#usuario_id").val();
  var habilidades = $("#habilidades_id");
  var tipo_referente = $("select#tipo_perfil_id");
  var rol = $("select#rol_id");
  let clave_actual = $("input#clave_actual");
  let nueva_clave = $("input#nueva_clave");
  let confirmar_clave = $("input#confirma_clave");
  let regexClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;
  let errorActualClave = $("span#errorClaveActual");
  let errorClave = $("span#errorNuevaClave");
  let errorConfirmar = $("span#errorConfirmarClave");
  let claseError = "text-danger";
  let claseCorrecta = "text-success";
  let formCredencial = $("form#modificarCredencial");
  var mensaje = "";
  let validar = false, confirmar = false, coincidir = false;

  //Validación clave actual
  clave_actual.on("focusout", function(e){
    console.log(usuario_id);
    console.log(base_url+"validarClave");
    let valor = $(this).val();
    $.ajax({
      url: base_url+'/validarClave',
      type: 'POST',
      data: {clave_actual: valor, usuario_id:usuario_id},
      success: function(response){
        errorActualClave.removeClass('d-none');
        respuesta = JSON.parse(response);
        if(respuesta.valido){
          coincidir = true;
          errorActualClave.removeClass(claseError).addClass(claseCorrecta).text("Validación correcta.");
        }else{
          coincidir = false;
          errorActualClave.removeClass(claseCorrecta).addClass(claseError).text("Por favor, ingresar la contraseña actual.");
        }
      }
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
  });

  //Validación de nueva clave
  nueva_clave.on("keyup", function(e){
    validar = regexClave.test($(this).val());
    errorClave.removeClass('d-none');
    if(validar){
      mensaje = "Contraseña válida!!!";
      errorClave.removeClass(claseError).addClass(claseCorrecta);
    }else{
      mensaje = "Contraseña no válida";
      errorClave.removeClass(claseCorrecta).addClass(claseError);
    }
    errorClave.text(mensaje);
  });

  confirmar_clave.on("keyup", function(e){
    confirmar = ($(this).val()===nueva_clave.val());
    errorConfirmar.removeClass("d-none");
    if(confirmar){
      mensaje = "Coincide con la contraseña creada";
      errorConfirmar.removeClass(claseError).addClass(claseCorrecta);
    }else{
      mensaje = "No coincide con la contraseña creada";
      errorConfirmar.removeClass(claseCorrecta).addClass(claseError);
    }
    errorConfirmar.text(mensaje);
  });


  formCredencial.submit(function(event) {
    /* Act on the event */
    if(validar && confirmar && coincidir){
      return true;
    }else{
      alert("Por favor, corregir los errores antes de ejecutar la acción de cambio de contraseña");
      return false;
    }
  });
  /*tipo_referente.on("change", activacionRol);

  function activacionRol(){
    acceso = tipo_referente.children('option:selected').data('acceso');
    if(acceso == 1){
      rol.prop('disabled', false);
    }else{
      rol.val(0).trigger('change');
      rol.prop('disabled', true);
    }
  }

  activacionRol();*/

  $('#habilidades_id.select2').select2({
    placeholder: 'Seleccionar habilidades del referente',
    allowClear: true,
    language: "es",
    minimumInputLength: 3,
    language: {
      // You can find all of the options in the language files provided in the
      // build. They all must be functions that return the string that should be
      // displayed.
      inputTooShort: function () {
        return "Por favor digitar mínimo 3 letras";
      }
    },
    tags: true,
    createTag: function (params) {
      return {
        id: params.term,
        text: params.term,
        newTag: true
      }
    },
    insertTag: function (data, tag) {
      // Insert the tag at the end of the results
      data.push(tag);
    }
  });

  function onSelecting(event)
  {
      data = event.params.args.data;
      seleccionados = habilidades.val();
      if(!data.newTag){
        //alert("No es un elemento nuevo");
        habilidades.val(null).trigger('change');
        seleccionados.push(data.id);
        habilidades.val(seleccionados).trigger('change');
      }else { 
        $.ajax({
            type: 'POST',
            url: base_url+'agregarHabilidad',
            data: {
              habilidad: event.params.args.data.id
            },
            success: function(event, response) {
                respuesta = JSON.parse(response);
                console.log(respuesta);
                if (respuesta.error === false) {

                    // // get select2 instance
                    // var Select2 = $jQUery.data('select2');

                    // remove prevented flag
                    delete event.params.args.prevented;

                    if(respuesta.duplicado === true){
                      //alert("Elemento duplicado");
                      habilidades.val(null).trigger('change');
                      habilidades.val(seleccionados).trigger('change');
                    }else{
                      //alert("Elemento nuevo");
                      var newOption = new Option(respuesta.text, respuesta.id, true, true);
                      // // Append it to the select
                      habilidades.append(newOption).trigger('change');
                    }
                    // // Call trigger on the observer with select2 instance as context
                    // Select2.constructor.__super__.trigger.call(Select2, 'select', event.params.args);
                    // Create a DOM Option and pre-select by default
                    

                } else {
                    // failed to assign category
                    // so i want now to prevent from adding to select2
                    console.log('No se pudo agregar la nueva habilidad');
                }
            }.bind(null, event),
            error: function() {
                alert('Fallo en la asignación de la habilidad!');
            }
        });
      }
      event.preventDefault();
      return false;
  }

  // habilidades.on('select2:selecting', function(event){
  //   data = event.params.args.data;
  //   seleccionados = habilidades.val();
  //   seleccionados.push(data.id);
  //   $(this).val(null).trigger('change');
  //   $(this).val(seleccionados).trigger('change');
  // });

  habilidades.on('select2:selecting',onSelecting);
  
  $("#imagen").on('change', cargar);
  $("span#editarImagen, img#previsualizar").click(function(){
    $("#imagen").click();
  });

  function cargar(ev){
    var info = $("#infoImagen");
    var mensaje = '<b>Nombre del archivo:</b>'+ev.target.files[0].name;
    //info.html(mensaje);
    var arch = new FileReader();
    arch.addEventListener('load',leer,false);    
    arch.readAsDataURL(ev.target.files[0]);
  }

  function leer(ev){
    $("#previsualizar").attr("src",ev.target.result);
    //$("#visualizacion").show();
  }

});