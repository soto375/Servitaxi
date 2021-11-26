$(document).ready(function(){
	
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

  const imagen = document.querySelector("#imagen");
  const previsualizacion = document.querySelector("#previsualizacion");
  //Se oculta elemento input imagen para crear propio estilo
  imagen.style.opacity = 0;
  //se activa el evento para escuchar cambios en la selección de la imagen
  imagen.addEventListener('change', actualizarVistaImagen);

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
        lista.className ="col-md-6";
        previsualizacion.appendChild(lista);
        const ele = document.createElement('p');
        if(validarTipoArchivo(archivo)) {
          ele.textContent = `Nombre de archivo ${archivo.name}, tamaño de imagen ${tamanhoArchivo(archivo.size)}.`;
          const img = document.createElement('img');
          img.src = URL.createObjectURL(archivo);
          img.className="img-fluid img-thumbnail img-responsive mx-auto";
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

});