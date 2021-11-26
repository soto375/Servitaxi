$(document).ready(function(){
  const base = $("#base_url").val();
  const url = document.querySelector("#url");
  const previsualizacion = document.querySelector("#previsualizacion");
  const previ = $("#previsualizacion");

  url.addEventListener("change", actualizarVistaFile);

  function vistaNula(){
    const mensaje = document.createElement('h4');
    mensaje.textContent = "Actualmente no has seleccionado ningun documento.";
    previsualizacion.appendChild(mensaje);
  }

  function actualizarVistaFile(){
    while(previsualizacion.firstChild){
      previsualizacion.removeChild(previsualizacion.firstChild);
    }
    const archivo = url.files;
    
    if(archivo.length == 0){
      vistaNula(); 
    }else{
      //Creando el enlace para ver documento
      enlace = document.createElement('a');
      enlace.href = URL.createObjectURL(archivo[0]);
      enlace.className = "btn btn-info btn-bg";
      enlace.target = "__blank";
      
      //Crear icono pdf
      icono = document.createElement('i');
      icono.className = "fas fa-file-pdf";
      icono.textContent = "  Ver Documento";
      //Incluir el icono en el enlace
      enlace.appendChild(icono);

      //Crear boton de borrar
      boton = document.createElement('button');
      boton.className = "btn btn-danger btn-bg";
      boton.type = "button";
      boton.id = "btn-remove";

      //Crear icono pdf
      iconoBoton = document.createElement('i');
      iconoBoton.className = "fas fa-trash";
      //Incluir el icono en el boton
      boton.appendChild(iconoBoton);
      //Crear Div contenedor
      contenedor = document.createElement('div');
      contenedor.className = "col col-sm-12";

      contenedor.appendChild(enlace);
      contenedor.appendChild(boton);
      //Agregar el enlace dentro de la previsualizacion
      previsualizacion.appendChild(contenedor);
    }
  }

  previ.on("click", "#btn-remove", function(){
    opcion = confirm("¿Esta seguro que desea borrar el documento actualmente?");
    if(opcion){
      if($("#documento_id").val()!=undefined){
        borrarFile();
      }
      $("#url").val('');
      previ.empty();
      vistaNula();
    }
  });

  function borrarFile(){
    if($("#documento_id").val()!=undefined){
      $.ajax({
        url: base+'borrarDocumento',
        type: 'post',
        data: {documento_id: $('#documento_id').val()},
        success: function(response){
          respuesta = JSON.parse(response);
          if(respuesta.respuesta){
            $("#url").prop("required", true);
          }
        },
      });      
    }
  }

});