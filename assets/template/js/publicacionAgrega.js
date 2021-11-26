let modalId = $('#modalImagen');

$(document).ready(function(){
  let modalMaxSize = new bootstrap.Modal(document.getElementById("modalMaxSize"), {
  keyboard: false
  });
  
	$('select.select2').select2({
  placeholder: 'Selecciona una opción'
  });
  tinymce.init({
    selector: 'textarea#descripcion',
    theme: 'modern',
    height: 200,
    language: 'es_ES',
    plugins: [
      "advlist autolink lists link image lists charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking code",
      "table paste contextmenu directionality emoticons textcolor responsivefilemanager"
    ],
    toolbar1: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
    toolbar2: "link unlink anchor | image media | forecolor backcolor  | print preview code | caption",
    image_caption: true,
    image_advtab: true ,
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tiny.cloud/css/codepen.min.css'
    ],
    external_filemanager_path:"/resources/tinymce/filemanager2/",
    filemanager_title:"Responsive Filemanager" ,
    external_plugins: { "filemanager" : "filemanager2/plugin.min.js"},
    visualblocks_default_state: true ,

    style_formats_autohide: true,
    style_formats_merge: true,
  });

  const tipo_publicacion = $("#cms_tipo_publicacion_id");
  const enlaces_youtube = $("#enlaces-youtube");
  const desplegable = $(".desplegable");
  const base = $("#base_url").val();
  const elemento_nuevo = "";
  var numero_elemento;
  
  function getNumeroUrl(){
    numero_elemento = $(".item-youtube").length;
  }

  function agregarUrl(){
    enlaces_youtube.append("\
      <div class='item-youtube row adicional'>\
        <div class='input-group mb-3 col-sm-9'>\
          <div class='input-group-prepend'>\
            <span class='input-group-text fab fa-youtube' id='basic-addon"+numero_elemento+"'></span>\
          </div>\
          <input type='url' class='form-control' placeholder='Enlace de youtube' aria-label='Enlace' aria-describedby='basic-addon1' name='video[]'>\
        </div>\
        <div class='col botones'>\
          <a class='btn btn-url btn-danger btn-eliminar-url' >\
            <i class='fas fa-minus'></i>\
          </a>\
        </div>\
      </div>");
    numero_elemento++;
  }

  function verificarBotonAgregar(){
    if($('.item-youtube .botones').length>0){
      if($('.item-youtube .botones').last().children('.btn-agregar-url').length <= 0){ 
        $('.item-youtube .botones .btn-agregar-url').remove();
        $('.item-youtube .botones').last().append("<a class='btn btn-url btn-primary btn-agregar-url'>\
              <i class='fas fa-plus'></i></a>");
      }
    }
  }

  $("#enlaces-youtube").on("click", ".btn-url", function(){
    if($(this).is('.btn-principal')){
      agregarUrl();
    }else if($(this).is('.btn-agregar-url')){
      $(this).remove();
      agregarUrl();
    }else if($(this).is('.btn-eliminar-url')){
      $(this).parent().parent('.item-youtube').remove();
    }
    verificarBotonAgregar();
    
  });

  function getValorOption(){
    return parseInt(tipo_publicacion.find("option:selected").val());
  }
  
  function visualizacionOpciones(){
   clase = tipo_publicacion.find("option:selected").data("tipo");
   desplegable.hide();
   //desplegable.find("input").val("");
   $("."+clase).show();
  }

  function visualizacionOpciones2(){
    let opciones = [];
    opciones[1] = ".convocatoria";
    opciones[2] = ".evento";
    opciones[3] = ".noticia";
    opciones[4] = ".contenido";
    opciones[5] = ".linea-tiempo";

    const opcion = getValorOption();
    const desplegable = $(".desplegable");
    index = opciones.indexOf(opciones[opcion]);
  
    if(index==-1){
      desplegable.hide();
    }else{
      visible = $(opciones[opcion]);
      claseOcultar = opciones.splice(index,1);
      claseOcultar = opciones.splice(0,1);
      clases = opciones.join(", ");
      const ocultar = $(clases);
      ocultar.hide();
      visible.show();
    }
    
   /* if(opcion==1 || opcion==2){
      desplegable.show();
    }else{
      desplegable.hide();
    }*/
  }

  tipo_publicacion.change(visualizacionOpciones);
  let documentos = new DataTransfer();
  const documento = document.querySelector("#documento");
  let listaDocumento = document.querySelector("#listaDocumentos");
  const previsualizacionDocumento = document.querySelector("#previsualizacionDocumento");
  const previ = $("#previsualizacionDocumento");
  //Se oculta elemento input imagen para crear propio estilo
  documento.style.opacity = 0;
  //se activa el evento para escuchar cambios en la selección de la imagen
  documento.addEventListener('change', actualizarVistaDocumentos);


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

  function vistaNula(){
    const mensaje = document.createElement('h4');
    mensaje.textContent = "Actualmente no has seleccionado ningun documento.";
    previsualizacionDocumento.appendChild(mensaje);
  }

  function actualizarVistaDocumentos(e){
    const archivos = documento.files;
    if(archivos.length == 0 && documentos.length == 0){
      const mensaje = document.createElement('p');
      mensaje.setAttribute("id","mensajeDocumento");
      mensaje.textContent = "Actualmente no has seleccionado ningun documento para subir.";
      previsualizacionDocumento.appendChild(mensaje); 
    }else{
      if($("p#mensajeDocumento").length != 0) $("p#mensajeDocumento").remove();
      for (const archivo of archivos) {
        //Agregar nueva imagen al DataTransfer Imagenenes
        documentos.items.add(archivo);
        //Item documento
        item = document.createElement("li");
        //icono portada
        spanPrincipal = document.createElement("span");
        spanPrincipal.className = "mailbox-attachment-icon";
        iconoPrincipal = document.createElement("i");
        iconoPrincipal.className ="far fa-file-pdf";
        spanPrincipal.appendChild(iconoPrincipal);
        //Contenedor informacion
        divInfo = document.createElement("div");
        divInfo.className = "mailbox-attachment-info";
        enlace = document.createElement("a");
        enlace.className = "mailbox-attachment-name";
        enlace.setAttribute("target","__blank");
        enlace.href = URL.createObjectURL(archivo);
        let nombre = archivo.name;
        enlace.textContent = (nombre.length > 20 )?nombre.substring(0, 14)+" ...":nombre;
        //enlace.textContent = archivo.name;
        //Span acciones
        spanAcciones = document.createElement("span");
        spanAcciones.className = "mailbox-attachment-size clearfix mt-1";
        tamanho = document.createElement("span");
        tamanho.textContent = tamanhoArchivo(archivo.size);
        botonEliminar = document.createElement("button");
        botonEliminar.setAttribute("type", "button");
        botonEliminar.setAttribute("data-posicion-documento", "");
        botonEliminar.className="btn btn-default btn-sm float-right btn-remove btn-documento-nuevo";
        iconoEliminar = document.createElement("i");
        iconoEliminar.className = "fas fa-trash";
        botonEliminar.appendChild(iconoEliminar);
        botonVer = document.createElement("a");
        botonVer.setAttribute("target", "__blank");
        botonVer.style = "margin-right:5px";
        botonVer.className="btn btn-default btn-sm float-right";
        botonVer.href = URL.createObjectURL(archivo);
        iconoVer = document.createElement("i");
        iconoVer.className = "far fa-file-pdf";
        botonVer.appendChild(iconoVer);
        spanAcciones.appendChild(tamanho);
        spanAcciones.appendChild(botonEliminar);
        spanAcciones.appendChild(botonVer);
        //Span Informacion
        divInfo.appendChild(enlace);
        divInfo.appendChild(spanAcciones);
        //Agregar al item
        item.appendChild(spanPrincipal);
        item.appendChild(divInfo);
        //Agregamos el item a la lista
        listaDocumento.appendChild(item);
      }
    }
    documento.files = documentos.files;
    actualizarPosicionDocumento();
  }

  function actualizarPosicionDocumento(){
    let i = 0;
    $(".boton-documento-nuevo").each(function(index, el) {
      $(this).data("posicion-documento", i);
       i++;
    });
  }

  previ.on("click", ".btn-remove", function(){
    opcion = confirm("¿Desea eliminar/deseleccionar este documento?");
    if(opcion){
      if($(this).data('id')!=undefined){
        recursoId = parseInt($(this).data('id'));
        $.ajax({
          url: base+'borrarRecurso',
          type: 'post',
          data: {id: recursoId},
          success: function(response){
            respuesta = JSON.parse(response);
            if(respuesta.respuesta){
              alert("Se pudo eliminar la imagen del sistema.")
            }else{
              alert("No se pudo eliminar la imagen correctamente del sistema");
            }
          },
        });
      }else{
        posicion = parseInt($(this).data('posicion-documento'));
        actualizarFileDocumento(posicion);
      }
      //Remueve la previsualización del documento    
      $(this).parent().parent().parent().remove();
    }
    //Actualizar posicion de los documentos
    actualizarPosicionDocumento();
    
  });

  function actualizarFileDocumento(posicion){
    cantidad = documentos.files.length;
    aux = new DataTransfer();
    for(i = 0; i<cantidad; i++){
      if(i != posicion) aux.items.add(documentos.files[i]);
    }
    documentos.files = aux.files;
    documento.files = documentos.files;
  }

  /*function borrarFile(){
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
  }*/

  //Visor de imagenes
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
    let errorMaxSizeFile = 0;
    if(archivos.length == 0 && imagenes.length == 0){
      const mensaje = document.createElement('p');
      mensaje.setAttribute("id","mensaje");
      mensaje.textContent = "Actualmente no has seleccionado ninguna imagen para subir.";
      previsualizacion.appendChild(mensaje); 
    }else{
       
      for (const archivo of archivos) {
        if((archivo.size / 1024 / 1024) <= 1){        
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
      }else{
        errorMaxSizeFile++;
      }
      }
    }
    if(errorMaxSizeFile > 0 ){
      modalMaxSize.show();
    }
    if(imagenes.files.length > 0){
      $("p#mensaje").remove();
    }
    console.log(imagenes)
    imagen.files = imagenes.files;
    
    contador=0;
    actualizarImageId();
    actualizarPosicionImage();
  }

  previImagen.on("click", ".btn-remove", function(){
    opcion = confirm("¿Desea eliminar/deseleccionar esta imagen?");
    if(opcion){
      if($(this).data('id')!=undefined){
        recursoId = parseInt($(this).data('id'));
        $.ajax({
          url: base+'borrarRecurso',
          type: 'post',
          data: {id: recursoId},
          success: function(response){
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
    imagenes.files = aux.files;
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
  
  visualizacionOpciones();
  getNumeroUrl();

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