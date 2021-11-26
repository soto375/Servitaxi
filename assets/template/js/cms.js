$(document).ready(function(){
  redireccionar = $("#redireccionar");
  slug = $("#contentSlug");
  redireccionar = $("#contentRedireccionar");
  modulo = $("#cms_modulo_id :selected").val();

  if(modulo){
    redireccionar.hide();
    $("#redireccionar").prop('disabled', true);
  }
  
  if(!redireccionar.is(':checked')){
    slug.hide();
    slug.children().prop('disabled', true);
  }

  $("#redireccionar").change(function(){
    estado = $(this).is(':checked');
    slug = $("#contentSlug");
    if(estado){
      slug.show(1000);
      slug.children().prop('disabled', false);
    }else{
      slug.hide(1000);
      slug.children().prop('disabled', true);
    }
  });

  $("#cms_modulo_id").change(function(){
    estado = $("#cms_modulo_id :selected").val();
    if(estado){
      redireccionar.hide(1000);
      $("#redireccionar").prop('disabled', true);
      slug.hide(1000);
      slug.children().prop('disabled', true);
    }else{
      redireccionar.show(1000);
      $("#redireccionar").prop('disabled', false);
      
      checkedRed = $("#redireccionar").is(':checked');
      if(checkedRed){
        slug.show(1000);
      }else{
        slug.hide(1000);
      }
      
    }
  });
	
});