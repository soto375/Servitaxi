let modalId = $('#modalImagen');
$(document).ready(function(){
   let modalMaxSize = new bootstrap.Modal(document.getElementById("modalMaxSize"), {
  keyboard: false
  });
  $('select.select2').select2({
  placeholder: 'Selecciona una opción'
  });
	
  tinymce.init({
    selector: 'textarea.descripcion',height: 200,
    language:'es_ES',
    plugins: [
      "advlist autolink lists link charmap print preview ",
      "searchreplace table visualblocks code",
      "insertdatetime paste wordcount"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tiny.cloud/css/codepen.min.css'
    ]
  });
  const informacion_imagen = $('#informacion-imagen');
  const subida_imagen = document.querySelector("ul#subida-imagen");
  let imagen = document.querySelector("#imagen");
  const base = $("#base_url").val();
  const previsualizacion = document.querySelector("#galeria");
  const previ = $("#previsualizacion");
  let imagenes = new DataTransfer();
  //Se oculta elemento input imagen para crear propio estilo
  imagen.style.opacity = 0;
  //se activa el evento para escuchar cambios en la selección de la imagen
  imagen.addEventListener('change', actualizarVistaImagen);

  function actualizarVistaImagen(e){
    const archivos = imagen.files
    
    if(archivos.length == 0 && imagenes.length == 0){
      const mensaje = document.createElement('p');
      mensaje.setAttribute("id","mensaje");
      mensaje.textContent = "Actualmente no has seleccionado ninguna imagen para subir.";
      previsualizacion.appendChild(mensaje); 
    }else{
      $('ul#subida-imagen').empty();
      if($("p#mensaje").length != 0) $("p#mensaje").remove();
      for (const archivo of archivos) {
        mensaje_imagen = document.createElement('li');
        if(verificarTamanho(archivo.size)){
          mensaje_imagen.textContent = "Nombre del archivo: "+archivo.name+" - Tamaño del archivo: "+tamanhoArchivo(archivo.size)+" (Subida correctamente).";
          //Agregar nueva imagen al DataTransfer Imagenenes
          imagenes.items.add(archivo);
          //Contenedor
          contenedor = document.createElement("div");
          contenedor.className = "card";
          //enlace
          enlace = document.createElement("a");
          enlace.className = "imagen";
          enlace.setAttribute("data-toggle","modal");
          enlace.setAttribute("data-image-id","");
          enlace.setAttribute("data-target","#modalImagen");
          //Imagen
          img = document.createElement("img");
          img.className = "card-img-top shadow mb-2 bg-success rounded-top";
          img.src = URL.createObjectURL(archivo);
          //Agregar la imagen dentro del enlace
          enlace.appendChild(img);
          //Agregar el enlace dentro del contenedor
          contenedor.appendChild(enlace);
          //Boton de borrar
          //Boton de borrar
          contenedorBoton = document.createElement("div");
          contenedorBoton.className ="d-flex my-1";
          borrar = document.createElement("button");
          borrar.setAttribute("type","button");
          borrar.className = "mx-auto btn-outline-danger btn-remove btn-nuevo";
          borrar.setAttribute("data-posicion","");
          //borrar.textContent = "Borrar ";
          icon = document.createElement("i");
          icon.className = "fas fa-trash";
          borrar.appendChild(icon);
          contenedorBoton.appendChild(borrar);
          //Agregar el boton dentro del contenedor
          contenedor.appendChild(contenedorBoton);  

          //Agregar el nuevo elemento dentro de la previsualizacion
          previsualizacion.appendChild(contenedor);
          const ele = document.createElement('p');
        }else{
           mensaje_imagen.textContent = "Nombre del archivo: "+archivo.name+" - Tamaño del archivo: "+tamanhoArchivo(archivo.size)+" (No fue cargada por exceso de tamaño).";
        }
        subida_imagen.appendChild(mensaje_imagen);
      }
      informacion_imagen.removeClass('d-none');
    }
    imagen.files = imagenes.files;
    contador=0;
    actualizarPosicionImage();
    actualizarImageId();
  }

  previ.on("click", ".btn-remove", function(){
    eliminacion = 0;
    opcion = confirm("¿Desea eliminar/deseleccionar esta imagen?");
    if(opcion){
      if($(this).data('id')!=undefined){
        imagenId = parseInt($(this).data('id'));
        $.ajax({
          url: base+'borrarImagen',
          type: 'post',
          data: {imagen_id: imagenId},
          success: function(response){
            respuesta = JSON.parse(response);
            if(respuesta.respuesta){
              eliminacion = 1;
              alert("Se pudo eliminar la imagen del sistema.")
            }else{
              alert("No se pudo eliminar la imagen correctamente del sistema");
            }
          },
        });
      }else{
        posicion = parseInt($(this).data('posicion'));
        actualizarFile(posicion);
        /*elementos = $(this).parent().nextAll('.card').find('.btn-remove.btn-nuevo');
        for(i=0; i<elementos.length; i++){
          elementos[i].setAttribute("posicion", posicion);
          posicion++;
        }
        elementos.each(function(){
          $(this).attr("data-posicion", posicion);
          posicion++;
        });*/
      }
      //Remueve la previsualización de la imagen  
      $(this).parent().parent().remove();
      
    }
    contador=0;
    actualizarPosicionImage();
    actualizarImageId();
  });

  function actualizarFile(posicion){
    cantidad = imagenes.files.length;
    aux = new DataTransfer();
    for(i = 0; i<cantidad; i++){
      if(i != posicion){
        aux.items.add(imagenes.files[i]);
      }
    }
    imagenes = aux;
    imagen.files = imagenes.files;
  }

  const tiposArchivo = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
  ];

  function validarTipoArchivo(archivo){
    return tiposArchivo.includes(archivo.type);
  }

  function tamanhoArchivo(numero) {
    if(numero < 1024) {
      return numero + 'bytes';
    } else if(numero >= 1024 && numero < 1048576) {
      return (numero/1024).toFixed(1) + 'KB';
    } else if(numero >= 1048576) {
      return (numero/1048576).toFixed(1) + 'MB';
    }
  }

  function verificarTamanho(numero){
    tamanhoMaximo = 2*1048576; //2 MB
    if(numero <= tamanhoMaximo){
      return true;
    }else{
      return false;
    }
  }

  //Visor de imagenes
  let imagenActual, selector, contador = 0;
  const visorImagen = $("#visorImagen");
  
  //Al dar clic a los botones de imagenes
  previ.on("click", ".imagen", function(e){
    actualizarGaleria($(this));
    /*url = $(this).find('img').attr("src");
    visorImagen.attr("src", url);*/
  }); 

  //Controlar las imagenes al dar clic al boton imagen anterior y posterior
  $('#show-next-image, #show-previous-image').click(function () {
    if($(this).attr('id') === 'show-previous-image'){
      imagenActual--;
    }else{
      imagenActual++;
    }
    selector = $('[data-image-id="' + imagenActual + '"]');
    actualizarGaleria(selector);
  });

  //Actualizar Imagen
  function actualizarGaleria(selector) {
    let $sel = selector;
    imagenActual = $sel.data('image-id');
    visorImagen.attr('src', $sel.find('img').attr('src'));
    visibilidadBoton(contador, $sel.data('image-id'));
  }

  //Función para desactivar los botones cuando sea necesario
  function visibilidadBoton(maximo, actual) {
    $('#show-previous-image, #show-next-image')
      .show();
    if (maximo === actual) {
      $('#show-next-image').hide();
    } else if (actual === 1) {
      $('#show-previous-image').hide();
    }
  }

  //Actualizar la data-posicion
  function actualizarPosicionImage(){
    let i = 0;
    $('[data-posicion]').each(function () {
      $(this).attr('data-posicion', i);
      i++;
    });
  }

  //Actualizar la data-image-id
  function actualizarImageId(){
    $('[data-image-id]').each(function () {
      contador++;
      $(this).attr('data-image-id', contador);
    });
  }

  actualizarImageId();

});

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
        $('#show-previous-image').click();
      }
      break;

    case 39: // right
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
        $('#show-next-image').click();
      }
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});