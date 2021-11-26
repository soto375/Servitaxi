$(document).ready(function(){
	//$('.select2').select2();
  const btnEliminacion = $(".btn-eliminar");
  const btnConfirmacion = $("#btn-confirmar");

  btnEliminacion.on('click', function(e){
    href = $(this).data('href');
    //alert(href);
    if(btnConfirmacion!=undefined){
      btnConfirmacion.attr("href", href);
    }
  });

});