$(document).ready(function(){
  
  $("#imagen").on('change', cargar);
  $("span#editarImagen").click(function(){
    $("#imagen").click();
  });

  function cargar(ev){
    var info = $("#infoImagen");
    var mensaje = '<b>Nombre del archivo: </b>'+ev.target.files[0].name;
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