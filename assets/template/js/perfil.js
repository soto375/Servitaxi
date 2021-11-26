$(document).ready(function(){
  $('.select2').select2();
	var base_url= $('#base_url').val() + 'negocioVerde/';
  var base_url2 = $('#base_url').val() + 'negocioVerde';
  
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