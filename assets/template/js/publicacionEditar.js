$(document).ready(function(){
	
  const tipo_publicacion = $("#cms_tipo_publicacion_id");
  let opciones = [];
  opciones[1] = ".convocatoria";
  opciones[2] = ".evento";
  opciones[3] = ".noticia";
  opciones[4] = ".contenido";

  function getValorOption(){
    return parseInt(tipo_publicacion.find("option:selected").val());
  }

  /*function visualizacionOpciones(){
    const opcion = getValorOption();
    const desplegable = $(".desplegable");
    if(opcion==1 || opcion==2){
      desplegable.show();
    }else{
      desplegable.hide();
    }
  }*/

  function visualizacionOpciones(){
    let opciones = [];
    opciones[1] = ".convocatoria";
    opciones[2] = ".evento";
    opciones[3] = ".noticia";
    opciones[4] = ".contenido";
    const opcion = getValorOption();
    const desplegable = $(".desplegable");
    index = opciones.indexOf(opciones[opcion]);
    console.log(opciones);
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

  }

  tipo_publicacion.change(visualizacionOpciones);

  tinymce.init({
    selector: 'textarea#descripcion',
    theme: 'modern',
    height: 400,
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
    external_filemanager_path:"/jch/resources/tinymce/filemanager2/",
    filemanager_title:"Responsive Filemanager" ,
    external_plugins: { "filemanager" : "filemanager2/plugin.min.js"},
    visualblocks_default_state: true ,

    style_formats_autohide: true,
    style_formats_merge: true,
  });

  const imagen = document.querySelector("#imagen");
  const documento = document.querySelector("#documento");
  const previsualizacion = document.querySelector("#previsualizacion");
  const previsualizacionDocumento = document.querySelector("#previsualizacionDocumento");

  //Se oculta elemento input imagen para crear propio estilo
  imagen.style.opacity = 0;
  documento.style.opacity = 0;
  //se activa el evento para escuchar cambios en la selección de la imagen
  imagen.addEventListener('change', actualizarVistaImagen);
  documento.addEventListener('change', actualizarVistaDocumento);


  function actualizarVistaImagen(){
    while(previsualizacion.firstChild){
      previsualizacion.removeChild(previsualizacion.firstChild);
    }

    const archivos = imagen.files;

    if(archivos.length == 0){
      const mensaje = document.createElement('p');
      mensaje.textContent = "Actualmente no has seleccionado ninguna imagen para subir.";
      previsualizacion.appendChild(mensaje); 
    }else{
      for (const archivo of archivos) {
        const lista = document.createElement("div");
        lista.className ="col-sm-4";
        previsualizacion.appendChild(lista);
        const ele = document.createElement('p');
        if(validarTipoArchivo(archivo)) {
          ele.textContent = `Nombre de archivo ${archivo.name}, tamaño de imagen ${tamanhoArchivo(archivo.size)}.`;
          const img = document.createElement('img');
          img.src = URL.createObjectURL(archivo);
          img.className="img-fluid img-thumbnail img-responsive";
          lista.appendChild(ele);
          lista.appendChild(img);
        } else {
          ele.textContent = `El archivo con nombre ${archivo.name}: No posee un tipo de archivo válido.`;
          lista.appendChild(ele);
        }
      }
    }
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

  function actualizarVistaDocumento(){
    while(previsualizacionDocumento.firstChild){
      previsualizacionDocumento.removeChild(previsualizacionDocumento.firstChild);
    }
    const archivos = documento.files;
    if(archivos.length == 0){
      const mensaje = document.createElement('p');
      mensaje.textContent = "Actualmente no has seleccionado ninguna documento.";
      previsualizacionDocumento.appendChild(mensaje); 

    }else{
      const lista = document.createElement("ul");
      for (const archivo of archivos) {
        const ele = document.createElement('li');
        ele.textContent = `Nombre de archivo ${archivo.name}, tamaño de imagen ${tamanhoArchivo(archivo.size)}.`;
        lista.appendChild(ele);    
      }
      previsualizacionDocumento.appendChild(lista);
    }
  }
  
  visualizacionOpciones();
  
});