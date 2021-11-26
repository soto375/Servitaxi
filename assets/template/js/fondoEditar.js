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

  const imagen = document.querySelector("#imagen");
  const form = document.querySelector("#form");
  const errorNombre = document.querySelector("span#errorNombre");
  const errorDescripcion = document.querySelector("span#errorDescripcion");
  const errorImagen = document.querySelector("span#errorImagen");
  const previsualizacion = document.querySelector("#previsualizacion");
  

  //Se oculta elemento input imagen para crear propio estilo
  imagen.style.opacity = 0;
  
  //se activa el evento para escuchar cambios en la selección de la imagen
  imagen.addEventListener('change', actualizarVistaImagen);

  form.addEventListener('submit', function(event){
    var error = true;
    var tamanhoNombre = document.querySelector("#nombre").value.trim();
    var tamanhoDescripcion = document.querySelector("#descripcion").value.trim();
    if(!(tamanhoNombre.length)){
      alert(tamanhoNombre.length+"--Nombre");
      $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Nombre es requerido.";
      validado = false;
    }else if((tamanhoNombre.length<3)){
      alert(tamanhoNombre.length);
       $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Nombre debe contener mínimo 3 carácteres.";
      validado = false;
    }else if((tamanhoNombre.length>30)){
       $(".nombre").addClass("has-error");
      errorNombre.textContent = "El campo Nombre debe contener como máximo una longitud de 30 carácteres.";
      validado = false;
    }else{
      $(".nombre").removeClass("has-error");
      errorNombre.textContent = "";
    }
    // alert("validado Nombre--"+error);
    if(!(tamanhoDescripcion.length)){
      $(".descripcion").addClass("has-error");
      errorDescripcion.textContent = "El campo Descripción es requerido.";
      validado = false;
    }else if((tamanhoDescripcion.length<3)){
       $(".descripcion").addClass("has-error");
      errorDescripcion.textContent = "El campo Descripción debe contener mínimo 3 carácteres.";
      validado = false;
    }else{
      $(".descripcion").removeClass("has-error");
      errorDescripcion.textContent = "";
    }

    if((imagen.files.length) && !(imagen.files[0].size/1048576 < 5)){
      $(".imagenFile").addClass("has-error");
      errorImagen.textContent = "El campo Logo supera el tamaño máximo permitido de 5 MB.";
      error = false;
    }else{
      $(".imagenFile").removeClass("has-error");
      errorImagen.textContent = "";
    }

    if(!(error)){
      event.preventDefault();
    }
  });

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
});