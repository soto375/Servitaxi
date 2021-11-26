

let modalId = $('#modalImagen');
$(document).ready(function(){

  //Visor de imagenes
  let imagenActual, selector, contador = 0;
  const visorImagen = $("#visorImagen");
  const previ = $("#previsualizacion");
  
  //Al dar clic a los botones de imagenes
  $(".imagen").click(function(e){
    actualizarGaleria($(this));
  }); 

  console.log(previ);

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
    $('#show-previous-image, #show-next-image')
      .show();
    if (maximo === actual) {
      $('#show-next-image').hide();
    } else if (actual === 1) {
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

  actualizarImageId();

  });

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