let modalId = $('#modalImagen');
$(document).ready(function(){
	
  tinymce.init({
    selector: 'textarea#descripcion',height: 200,
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

  const form = document.querySelector("#form");
  const errorNombre = document.querySelector("span#errorNombre");
  
  

  form.addEventListener('submit', function(event){
    var error = true;
    var tamanhoNombre = document.querySelector("#nombre").value.trim();
    if(!(tamanhoNombre.length)){
      $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Título de slider es requerido.";
      validado = false;
    }else if((tamanhoNombre.length<3)){
      alert(tamanhoNombre.length);
       $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Título de slider debe contener mínimo 3 carácteres.";
      validado = false;
    }else if((tamanhoNombre.length>30)){
       $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Título de slider debe contener como móximo una longitud de 30 carácteres.";
      validado = false;
    }else{
      $(".nombre").removeClass("has-error");
      errorNombre.textContent = "";
    }
    //&& !(imagen.files[0].size/1048576 < 5)
    if(!(imagen.files.length)){
      $(".imagenFile").addClass("has-error");
      errorImagen.textContent = "El campo debes seleccionar por lo menos 1 imagen para la galeria.";
      error = false;
    }else if(imagen.files.length>10){
      $(".imagenFile").addClass("has-error");
      errorImagen.textContent = "El campo solo admite 10 imágenes.";
      error = false;
    }else{
      $(".imagenFile").removeClass("has-error");
      errorImagen.textContent = "";
    }

    if(!(error)){
      event.preventDefault();
    }
  });


  //Visor de imagenes
  const base = $("#base_url").val();
  const imagen = document.querySelector("#imagen");
  const previsualizacion = document.querySelector("#galeria");
  const previImagen = $("#previsualizacion");  
  let imagenes = new DataTransfer();
  let imagenActual, selector, contador = 0;
  const visorImagen = $("#visorImagen");

  //Se oculta elemento input imagen para crear propio estilo
  imagen.style.opacity = 0;
  //se activa el evento para escuchar cambios en la selección de la imagen
  imagen.addEventListener('change', actualizarVistaGaleria);

  function actualizarVistaGaleria(e){
    const archivos = imagen.files
    
    if(archivos.length == 0 && imagenes.length == 0){
      const mensaje = document.createElement('p');
      mensaje.setAttribute("id","mensaje");
      mensaje.textContent = "Actualmente no has seleccionado ninguna imagen para subir.";
      previsualizacion.appendChild(mensaje); 
    }else{
      if($("p#mensaje").length != 0) $("p#mensaje").remove();
      for (const archivo of archivos) {
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
        img.className = "card-img-top img-fluid img-thumbnail";
        img.src = URL.createObjectURL(archivo);
        //Agregar la imagen dentro del enlace
        enlace.appendChild(img);
        //Agregar el enlace dentro del contenedor
        contenedor.appendChild(enlace);
        //Boton de borrar
        contenedorBoton = document.createElement("div");
        contenedorBoton.className ="d-flex";
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
      }
    }
    imagen.files = imagenes.files;
    contador=0;
    actualizarImageId();
    actualizarPosicionImage();
  }

  previImagen.on("click", ".btn-remove", function(){
    opcion = confirm("¿Desea eliminar/deseleccionar esta imagen?");
    if(opcion){
      if($(this).data('id')!=undefined){
        imagenId = parseInt($(this).data('id'));
        $.ajax({
          url: base+'/borrarImagen',
          type: 'post',
          data: {imagen_id: imagenId},
          success: function(response){
            //console.log(response);
            respuesta = JSON.parse(response);
            if(respuesta.respuesta){
              alert("Se pudo eliminar la imagen del sistema.")
            }else{
              alert("No se pudo eliminar la imagen correctamente del sistema");
            }
          },
        });
      }else{
        posicion = parseInt($(this).data('posicion'));
        actualizarFileImagen(posicion);
        elementos = $(this).parent().nextAll('.card').find('.btn-remove.btn-nuevo');
        elementos.each(function(){
          $(this).attr("data-posicion", posicion);
          posicion++;
        });
      }
      //Remueve la previsualización de la imagen    
      $(this).parent().parent().remove();
    }
    contador=0;
    actualizarImageId();
    actualizarPosicionImage();
  });

  function actualizarFileImagen(posicion){
    cantidad = imagenes.files.length;
    aux = new DataTransfer();
    for(i = 0; i<cantidad; i++){
      if(i != posicion) aux.items.add(imagenes.files[i]);
    }
    imagenes= aux;
    imagen.files = imagenes.files;
  }


  //Al dar clic a los botones de imagenes
  previImagen.on("click", ".imagen", function(e){
    actualizarGaleria($(this));
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
    $('#show-previous-image, #show-next-image').show();
    if(maximo === actual) {
      $('#show-next-image').hide();
      if(actual === 1){
        $('#show-previous-image').hide();
      }
    }else if(actual === 1) {
      $('#show-previous-image').hide();
    }
  }

  //Actualizar la data-image-id
  function actualizarImageId(){
    $('[data-image-id]').each(function () {
      contador++;
      $(this).attr('data-image-id', contador);
    });
  }

  function actualizarPosicionImage(){
    let i = 0;
    $('[data-posicion]').each(function () {
      i++;
      $(this).attr('data-posicion', i);
    });
  }


  actualizarImageId();

  //Fin visor de imagenes
  

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
      return numero + ' bytes';
    } else if(numero >= 1024 && numero < 1048576) {
      return (numero/1024).toFixed(1) + ' KB';
    } else if(numero >= 1048576) {
      return (numero/1048576).toFixed(1) + ' MB';
    }
  }
});

//Configuración para pasar imagenes por teclado 
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