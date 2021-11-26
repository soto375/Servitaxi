$(document).ready(function(){

  

  $("#tipo_contenido").on("change", function(e){
   valor = $("#tipo_contenido option:selected").val();
   alert(valor);
  });
  

});