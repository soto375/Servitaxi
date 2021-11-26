$(document).ready(function() {
// añadir input type text de tenencia tierra
var i = 1
$('#añadir_input_tierra').click(function(event) {
  i++
  $('#tabla_tierra').append('<tr id="row'+i+'"><td><div class="input-field col s12 m12 l12"><p><input type="text" id="otro_tierra_nom"  name="otro_tierra_nom[]"/><label for="">Otro. ¿Cual?</label></p></div></td><td><div class="input-field col s12 m12 l12"><input type="text" name="otro_tierra_desc[]" id="otro_tierra_desc" /><label for="">Descripcion</label></div></td><td><a class="btn-floating btn-large waves-effect waves-light red btn_remove_tierra" name="remove" id="'+i+'"><i class="material-icons">remove</i></a></td></tr>')
$('.btn_remove_tierra').click(function(event) {
    var boton_id = $(this).attr('id')
    $('#row'+boton_id+'').remove()
  });
});

// añadir input type text de tenencia tierra
var i = 1


$('#empresa').select2();
$('#empresa_m').select2();

$('[name="tierra[]"]#tt12').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t12').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t12').attr('disabled','disabled');
    }
});

$('[name="tierra[]"]#tt13').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t13').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t13').attr('disabled','disabled');
    }
});



$('[name="tierra[]"]#tt14').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t14').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t14').attr('disabled','disabled');
    }
});

$('[name="tierra[]"]#tt15').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t15').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t15').attr('disabled','disabled');
    }
});

$('[name="tierra[]"]#tt16').click(function() {

    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t16').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t16').attr('disabled','disabled');
    }
});


$('[name="tierra[]"]#tt17').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t[]"]#desc_t17').removeAttr('disabled');

    } else {
      $('[name="desc_t[]"]#desc_t17').attr('disabled','disabled');
    }
})
// lkñaslkfdjalksdfasdf
//certificacion habilitar al seleccionar el check
 $('[name="certificacion[]"]#ce1').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa1').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa1').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia1').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs1').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa1').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa1').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia1').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs1').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce2').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa2').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa2').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia2').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs2').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa2').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa2').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia2').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs2').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce3').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa3').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa3').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia3').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs3').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa3').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa3').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia3').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs3').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce4').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa4').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa4').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia4').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs4').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa4').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa4').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia4').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs4').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce5').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa5').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa5').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia5').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs5').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa5').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa5').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia5').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs5').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce6').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa6').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa6').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia6').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs6').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa6').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa6').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia6').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs6').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion[]"]#ce7').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa[]"]#cert_etapa7').removeAttr('disabled');
       $('[name="cert_etapa[]"]#cert_etapa7').material_select();
       $('[name="cert_vigencia[]"]#cert_vigencia7').removeAttr('disabled');
        $('[name="cert_obs[]"]#cert_obs7').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa[]"]#cert_etapa7').attr('disabled','disabled');
         $('[name="cert_etapa[]"]#cert_etapa7').material_select();
        $('[name="cert_vigencia[]"]#cert_vigencia7').attr('disabled','disabled');
        $('[name="cert_obs[]"]#cert_obs7').attr('disabled','disabled');
     }
 })
 
 // Practicas de conservacion habilitar al seleccionar el check
 $('[name="conservacion[]"]#conser1').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area1').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc1').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area1').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc1').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser2').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area2').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc2').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area2').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc2').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser3').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area3').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc3').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area3').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc3').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser4').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area4').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc4').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area4').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc4').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser5').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area5').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc5').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area5').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc5').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser6').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area6').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc6').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area6').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc6').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser7').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area7').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc7').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area7').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc7').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser8').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area8').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc8').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area8').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc8').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser9').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area9').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc9').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area9').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc9').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser10').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area10').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc10').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area10').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc10').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser11').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area11').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc11').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area11').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc11').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion[]"]#conser12').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area12').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc12').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area12').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc12').attr('disabled','disabled');
     }
 })
 $('[name="conservacion[]"]#conser13').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area[]"]#conser_area13').removeAttr('disabled');
        $('[name="conser_desc[]"]#conser_desc13').removeAttr('disabled');
 
     } else {
        $('[name="conser_area[]"]#conser_area13').attr('disabled','disabled');
        $('[name="conser_desc[]"]#conser_desc13').attr('disabled','disabled');
     }
 })
 
 // Plan de manejo habilitar al seleccionar el check
 $('[name="plan[]"]#plan1').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na[]"]#plan_a_na1').removeAttr('disabled');
       $('[name="plan_a_na[]"]#plan_a_na1').material_select();
       $('[name="plan_c_nc[]"]#plan_c_nc1').removeAttr('disabled');
       $('[name="plan_c_nc[]"]#plan_c_nc1').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia1').removeAttr('disabled');
        $('[name="plan_desc[]"]#plan_desc1').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na[]"]#plan_a_na1').attr('disabled','disabled');
         $('[name="plan_a_na[]"]#plan_a_na1').material_select();
        $('[name="plan_c_nc[]"]#plan_c_nc1').attr('disabled','disabled');
        $('[name="plan_c_nc[]"]#plan_c_nc1').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia1').attr('disabled','disabled');
        $('[name="plan_desc[]"]#plan_desc1').attr('disabled','disabled');
     }
 })
 $('[name="plan[]"]#plan2').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na[]"]#plan_a_na2').removeAttr('disabled');
       $('[name="plan_a_na[]"]#plan_a_na2').material_select();
       $('[name="plan_c_nc[]"]#plan_c_nc2').removeAttr('disabled');
       $('[name="plan_c_nc[]"]#plan_c_nc2').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia2').removeAttr('disabled');
        $('[name="plan_desc[]"]#plan_desc2').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na[]"]#plan_a_na2').attr('disabled','disabled');
         $('[name="plan_a_na[]"]#plan_a_na2').material_select();
        $('[name="plan_c_nc[]"]#plan_c_nc2').attr('disabled','disabled');
        $('[name="plan_c_nc[]"]#plan_c_nc2').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia2').attr('disabled','disabled');
        $('[name="plan_desc[]"]#plan_desc2').attr('disabled','disabled');
     }
 })
 $('[name="plan[]"]#plan3').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na[]"]#plan_a_na3').removeAttr('disabled');
       $('[name="plan_a_na[]"]#plan_a_na3').material_select();
       $('[name="plan_c_nc[]"]#plan_c_nc3').removeAttr('disabled');
       $('[name="plan_c_nc[]"]#plan_c_nc3').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia3').removeAttr('disabled');
        $('[name="plan_desc[]"]#plan_desc3').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na[]"]#plan_a_na3').attr('disabled','disabled');
         $('[name="plan_a_na[]"]#plan_a_na3').material_select();
        $('[name="plan_c_nc[]"]#plan_c_nc3').attr('disabled','disabled');
        $('[name="plan_c_nc[]"]#plan_c_nc3').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia3').attr('disabled','disabled');
        $('[name="plan_desc[]"]#plan_desc3').attr('disabled','disabled');
     }
 })
 $('[name="plan[]"]#plan4').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na[]"]#plan_a_na4').removeAttr('disabled');
       $('[name="plan_a_na[]"]#plan_a_na4').material_select();
       $('[name="plan_c_nc[]"]#plan_c_nc4').removeAttr('disabled');
       $('[name="plan_c_nc[]"]#plan_c_nc4').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia4').removeAttr('disabled');
        $('[name="plan_desc[]"]#plan_desc4').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na[]"]#plan_a_na4').attr('disabled','disabled');
         $('[name="plan_a_na[]"]#plan_a_na4').material_select();
        $('[name="plan_c_nc[]"]#plan_c_nc4').attr('disabled','disabled');
        $('[name="plan_c_nc[]"]#plan_c_nc4').material_select();
        $('[name="plan_vigencia[]"]#plan_vigencia4').attr('disabled','disabled');
        $('[name="plan_desc[]"]#plan_desc4').attr('disabled','disabled');
     }
 })
 
 //Area de ecosistema habilitar al seleccionar el check
 $('[name="ecosistemas[]"]#ecosistemas1').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area1').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area1').attr('disabled','disabled');
     }
 })
 
 $('[name="ecosistemas[]"]#ecosistemas2').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area2').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area2').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas[]"]#ecosistemas3').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area3').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area3').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas[]"]#ecosistemas4').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area4').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area4').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas[]"]#ecosistemas5').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area5').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area5').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas[]"]#ecosistemas6').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area6').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area6').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas[]"]#ecosistemas7').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area[]"]#ecosistemas_area7').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area[]"]#ecosistemas_area7').attr('disabled','disabled');
     }
 })
 
 //actividades habilitar al seleccionar el check
 $('[name="actividad[]"]#actividad1').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="actividad_desc[]"]#actividad_desc1').removeAttr('disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso1').removeAttr('disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso1').material_select();
       
 
     } else {
      $('[name="actividad_desc[]"]#actividad_desc1').attr('disabled','disabled');
        $('[name="actividad_recurso[]"]#actividad_recurso1').attr('disabled','disabled');
        $('[name="actividad_recurso[]"]#actividad_recurso1').material_select();
        
     }
 })
 $('[name="actividad[]"]#actividad2').click(function() {
     if($(this).is(':checked')) {

      $('[name="actividad_desc[]"]#actividad_desc2').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso2').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso2').material_select();
      

    } else {
     $('[name="actividad_desc[]"]#actividad_desc2').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso2').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso2').material_select();
       
    }
})
$('[name="actividad[]"]#actividad3').click(function() {
    if($(this).is(':checked')) {

      $('[name="actividad_desc[]"]#actividad_desc3').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso3').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso3').material_select();
      

    } else {
     $('[name="actividad_desc[]"]#actividad_desc3').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso3').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso3').material_select();
       
    }
})
$('[name="actividad[]"]#actividad4').click(function() {
    if($(this).is(':checked')) {

      $('[name="actividad_desc[]"]#actividad_desc4').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso4').removeAttr('disabled');
      $('[name="actividad_recurso[]"]#actividad_recurso4').material_select();
      

    } else {
     $('[name="actividad_desc[]"]#actividad_desc4').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso4').attr('disabled','disabled');
       $('[name="actividad_recurso[]"]#actividad_recurso4').material_select();
       
    }
})

//Programas habilitar al seleccionar el check
$('[name="programa[]"]#programa1').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc[]"]#programa_desc1').removeAttr('disabled');      
    } else {
     $('[name="programa_desc[]"]#programa_desc1').attr('disabled','disabled');
    }
})
$('[name="programa[]"]#programa2').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc[]"]#programa_desc2').removeAttr('disabled');      
    } else {
     $('[name="programa_desc[]"]#programa_desc2').attr('disabled','disabled');
    }
})
$('[name="programa[]"]#programa3').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc[]"]#programa_desc3').removeAttr('disabled');      
    } else {
     $('[name="programa_desc[]"]#programa_desc3').attr('disabled','disabled');
    }
})
$('[name="programa[]"]#programa4').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc[]"]#programa_desc4').removeAttr('disabled');      
    } else {
     $('[name="programa_desc[]"]#programa_desc4').attr('disabled','disabled');
    }
})

//verificar si selecciona si en el div de institucion
$('#insti').hide()
$('#valida_institucion').change(function(event) {
  if ($('#valida_institucion').val() == 1) {
      $('#insti').hide()
  }else{
     $('#insti').show()
  }
});
//verificar si selecciona si en el div de trabajadores
$('#trabaja').hide()
$('#valida_trabajadores').change(function(event) {
  if ($('#valida_trabajadores').val() == 1) {
      $('#trabaja').hide()
  }else{
     $('#trabaja').show()
  }
});
//verificar si selecciona si en el div de actividades
$('#div_activi').hide()
$('#valida_actividades').change(function(event) {
  if ($('#valida_actividades').val() == 1) {
      $('#div_activi').hide()
  }else{
     $('#div_activi').show()
  }
});
//verificar si selecciona si en el div de involucra
$('#div_involucra').hide()
$('#valida_involucra').change(function(event) {
  if ($('#valida_involucra').val() == 1) {
      $('#div_involucra').hide()
  }else{
     $('#div_involucra').show()
  }
});
//verificar si selecciona si en el div de certificacion
$('#div_certificacion').hide()
$('#valida_certificacion').change(function(event) {
  if ($('#valida_certificacion').val() == 1) {
    $('#div_certificacion').hide()
  }else{
     $('#div_certificacion').find('[name="certificacion[]"]').prop('disabled', false);
     $('#div_certificacion').show()
  }
});

});

//cargar bienes y servicios
$('#empresa').change(function(event) { 
var empresa_id = $('#empresa').val()

$.ajax({
  url: 'evaluacion/formato_informacion_as/bien_servicio.php',
   type: 'POST',
   data: {empresa_id: empresa_id},
 })
 .done(function(respuesta) {
  $('#bien_servi').html(respuesta)
  $('[name="unidad_medida[]"]').material_select();
  $('[name="ingresos_sup_costo[]"]').material_select();
 })
});
 

$('#registrar_informacion').click(function(event) {
  event.preventDefault();

//valiadacion combo emrpesa
if ($('#empresa').val() == null) {
	$('#empresa').selected = true;
	var $toastContent = $('<span>Debe escoger un emprendimiento</span>');
	Materialize.toast($toastContent, 1800);
}
else {
var empresa = $('#empresa').val() 
	$.ajax({
		url: 'evaluacion/formato_informacion_as/insertar.php?empresa='+empresa,
		type: 'POST',
		data: $('#form_informacion').serialize(),
    beforeSend: function() {
      $('#registrar_informacion').attr('disabled', 'disabled');
    // console.log('cargando')
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      // console.log(respuesta)
      swal ({
          icon: "success",
           text: "Datos INSERTADOS exitosamente!",
           button: {
            visible: false
          },
      });
      setTimeout("document.location=document.location",1500);
    }
	})
	
	}
});


//-------------Cargar formulario-----------
$('#empresa_m').change(function(event) {
  event.preventDefault();
  var empresa_m = $('#empresa_m').val()
  $.ajax({
    url: 'evaluacion/formato_informacion_as/modificar/llenar_formulario.php',
    type: 'POST',
    data: {empresa_m: empresa_m},
    beforeSend: function() {
      $('#form_modificar_informacion').hide()
      $('#preload').addClass('progress')

    
    },
    success: function(respuesta) {
      $('#form_modificar_informacion').show()
      $('#preload').removeClass('progress')
      $('#cargar_info').html(respuesta)
    }
  })
  // .done(function(respuesta) {
  //   // console.log(respuesta)
  //   $('#cargar_info').html(respuesta)
  // })

});

//----------validaciones para modificar-------------------------
//validaciones de sostenibilidad economica 
$('.aut_m').keyup(function(event) {
  var unidades_vendidas = []
  for (var i = 0; i <= $('[name="unidad_v_anual_m[]"]').length; i++) {
      unidades_vendidas.push($('#unidad_v_anual_m'+i).val())
  }
 
  var costo_pro_unidad = []
  for (var i = 0; i <= $('[name="costo_pro_unidad_m[]"]').length; i++) {
      costo_pro_unidad.push($('#costo_pro_unidad_m'+i).val())
  }

  var precio_v_unitario = []
  for (var i = 0; i <= $('[name="precio_v_unitario_m[]"]').length; i++) {
      precio_v_unitario.push($('#precio_v_unitario_m'+i).val())
  }

  var ganancias = []
  var ventas = []
  var total_ventas = 0

  for (var i = 0; i<unidades_vendidas.length; i++) {
    ganancias.push(precio_v_unitario[i]-costo_pro_unidad[i])
    $('#ganancia_unidad_m'+i).val(ganancias[i])
    ventas.push(unidades_vendidas[i]*precio_v_unitario[i])
    $('#venta_anual_m'+i).val(ventas[i])
  }

  for (var i = 0;i<ventas.length; i++) {
    if(isNaN(ventas[i])){
                continue;
                 }
    total_ventas += Number(ventas[i]) 
    console.log(ventas[i])

  }
  console.log(total_ventas)
  $('#venta_valor').val(total_ventas)
});
///tenencia tierra
$('[name="tierra_m[]"]#tt_m12').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m12').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m12').attr('disabled','disabled');
    }
});



$('[name="tierra_m[]"]#tt_m13').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m13').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m13').attr('disabled','disabled');
    }
});



$('[name="tierra_m[]"]#tt_m14').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m14').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m14').attr('disabled','disabled');
    }
});

$('[name="tierra_m[]"]#tt_m15').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m15').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m15').attr('disabled','disabled');
    }
});

$('[name="tierra_m[]"]#tt_m16').click(function() {

    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m16').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m16').attr('disabled','disabled');
    }
});

$('[name="tierra_m[]"]#tt_m17').click(function() {
    if($(this).is(':checked')) {
      $('[name="desc_t_m[]"]#desc_t_m17').removeAttr('disabled');

    } else {
      $('[name="desc_t_m[]"]#desc_t_m17').attr('disabled','disabled');
    }
})

//verificar si selecciona si en el div de certificacion
$('#div_certificacion_m').hide()
$('#valida_certificacion_m').change(function(event) {
  if ($('#valida_certificacion_m').val() == 1) {
    $('#div_certificacion_m').hide()
  }else{
     $('#div_certificacion_m').find('[name="certificacion[]"]').prop('disabled', false);
     $('#div_certificacion_m').show()
  }
});
//certificacion habilitar al seleccionar el check
 $('[name="certificacion_m[]"]#ce_m1').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m1').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m1').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m1').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m1').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m1').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m1').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m1').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m1').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m2').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m2').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m2').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m2').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m2').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m2').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m2').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m2').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m2').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m3').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m3').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m3').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m3').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m3').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m3').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m3').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m3').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m3').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m4').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m4').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m4').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m4').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m4').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m4').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m4').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m4').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m4').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m5').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m5').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m5').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m5').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m5').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m5').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m5').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m5').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m5').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m6').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m6').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m6').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m6').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m6').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m6').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m6').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m6').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m6').attr('disabled','disabled');
     }
 })
 
 $('[name="certificacion_m[]"]#ce_m7').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="cert_etapa_m[]"]#cert_etapa_m7').removeAttr('disabled');
       $('[name="cert_etapa_m[]"]#cert_etapa_m7').material_select();
       $('[name="cert_vigencia_m[]"]#cert_vigencia_m7').removeAttr('disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m7').removeAttr('disabled');
 
     } else {
        $('[name="cert_etapa_m[]"]#cert_etapa_m7').attr('disabled','disabled');
         $('[name="cert_etapa_m[]"]#cert_etapa_m7').material_select();
        $('[name="cert_vigencia_m[]"]#cert_vigencia_m7').attr('disabled','disabled');
        $('[name="cert_obs_m[]"]#cert_obs_m7').attr('disabled','disabled');
     }
 })

// Practicas de conservacion habilitar al seleccionar el check
 $('[name="conservacion_m[]"]#conser_m1').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m1').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m1').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m1').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m1').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m2').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m2').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m2').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m2').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m2').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m3').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m3').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m3').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m3').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m3').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m4').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m4').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m4').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m4').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m4').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m5').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m5').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m5').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m5').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m5').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m6').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m6').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m6').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m6').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m6').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m7').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m7').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m7').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m7').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m7').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m8').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m8').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m8').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m8').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m8').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m9').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m9').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m9').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m9').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m9').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m10').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m10').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m10').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m10').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m10').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m11').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m11').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m11').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m11').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m11').attr('disabled','disabled');
     }
 })
 
 $('[name="conservacion_m[]"]#conser_m12').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m12').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m12').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m12').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m12').attr('disabled','disabled');
     }
 })
 $('[name="conservacion_m[]"]#conser_m13').click(function() {
     if($(this).is(':checked')) {
       $('[name="conser_area_m[]"]#conser_area_m13').removeAttr('disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m13').removeAttr('disabled');
 
     } else {
        $('[name="conser_area_m[]"]#conser_area_m13').attr('disabled','disabled');
        $('[name="conser_desc_m[]"]#conser_desc_m13').attr('disabled','disabled');
     }
 })


 //Area de ecosistema habilitar al seleccionar el check
 $('[name="ecosistemas_m[]"]#ecosistemas_m1').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m1').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m1').attr('disabled','disabled');
     }
 })
 
 $('[name="ecosistemas_m[]"]#ecosistemas_m2').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m2').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m2').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas_m[]"]#ecosistemas_m3').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m3').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m3').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas_m[]"]#ecosistemas_m4').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m4').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m4').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas_m[]"]#ecosistemas_m5').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m5').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m5').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas_m[]"]#ecosistemas_m6').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m6').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m6').attr('disabled','disabled');
     }
 })
 $('[name="ecosistemas_m[]"]#ecosistemas_m7').click(function() {
 
     if($(this).is(':checked')) {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m7').removeAttr('disabled');
 
     } else {
       $('[name="ecosistemas_area_m[]"]#ecosistemas_area_m7').attr('disabled','disabled');
     }
 })


// Plan de manejo habilitar al seleccionar el check
 $('[name="plan_m[]"]#plan_m1').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na_m[]"]#plan_a_na_m1').removeAttr('disabled');
       $('[name="plan_a_na_m[]"]#plan_a_na_m1').material_select();
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m1').removeAttr('disabled');
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m1').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m1').removeAttr('disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m1').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na_m[]"]#plan_a_na_m1').attr('disabled','disabled');
         $('[name="plan_a_na_m[]"]#plan_a_na_m1').material_select();
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m1').attr('disabled','disabled');
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m1').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m1').attr('disabled','disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m1').attr('disabled','disabled');
     }
 })
 $('[name="plan_m[]"]#plan_m2').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na_m[]"]#plan_a_na_m2').removeAttr('disabled');
       $('[name="plan_a_na_m[]"]#plan_a_na_m2').material_select();
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m2').removeAttr('disabled');
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m2').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m2').removeAttr('disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m2').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na_m[]"]#plan_a_na_m2').attr('disabled','disabled');
         $('[name="plan_a_na_m[]"]#plan_a_na_m2').material_select();
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m2').attr('disabled','disabled');
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m2').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m2').attr('disabled','disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m2').attr('disabled','disabled');
     }
 })
 $('[name="plan_m[]"]#plan_m3').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na_m[]"]#plan_a_na_m3').removeAttr('disabled');
       $('[name="plan_a_na_m[]"]#plan_a_na_m3').material_select();
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m3').removeAttr('disabled');
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m3').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m3').removeAttr('disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m3').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na_m[]"]#plan_a_na_m3').attr('disabled','disabled');
         $('[name="plan_a_na_m[]"]#plan_a_na_m3').material_select();
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m3').attr('disabled','disabled');
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m3').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m3').attr('disabled','disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m3').attr('disabled','disabled');
     }
 })
 $('[name="plan_m[]"]#plan_m4').click(function() {
     if($(this).is(':checked')) {
       $('[name="plan_a_na_m[]"]#plan_a_na_m4').removeAttr('disabled');
       $('[name="plan_a_na_m[]"]#plan_a_na_m4').material_select();
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m4').removeAttr('disabled');
       $('[name="plan_c_nc_m[]"]#plan_c_nc_m4').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m4').removeAttr('disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m4').removeAttr('disabled');
 
     } else {
        $('[name="plan_a_na_m[]"]#plan_a_na_m4').attr('disabled','disabled');
         $('[name="plan_a_na_m[]"]#plan_a_na_m4').material_select();
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m4').attr('disabled','disabled');
        $('[name="plan_c_nc_m[]"]#plan_c_nc_m4').material_select();
        $('[name="plan_vigencia_m[]"]#plan_vigencia_m4').attr('disabled','disabled');
        $('[name="plan_desc_m[]"]#plan_desc_m4').attr('disabled','disabled');
     }
 })

//verificar si selecciona si en el div de involucra
$('#div_involucra_m').hide()
$('#valida_involucra_m').change(function(event) {
  if ($('#valida_involucra_m').val() == 1) {
      $('#div_involucra_m').hide()
  }else{
     $('#div_involucra_m').show()
  }
});

//verificar si selecciona si en el div de actividades
$('#div_activi_m').hide()
$('#valida_actividades_m').change(function(event) {
  if ($('#valida_actividades_m').val() == 1) {
      $('#div_activi_m').hide()
  }else{
     $('#div_activi_m').show()
  }
});

//actividades habilitar al seleccionar el check
 $('[name="actividad_m[]"]#actividad_m1').click(function() {
     if($(this).is(':checked')) {
 
       $('[name="actividad_desc_m[]"]#actividad_desc_m1').removeAttr('disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m1').removeAttr('disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m1').material_select();
       
 
     } else {
      $('[name="actividad_desc_m[]"]#actividad_desc_m1').attr('disabled','disabled');
        $('[name="actividad_recurso_m[]"]#actividad_recurso_m1').attr('disabled','disabled');
        $('[name="actividad_recurso_m[]"]#actividad_recurso_m1').material_select();
        
     }
 })
 $('[name="actividad_m[]"]#actividad_m2').click(function() {
     if($(this).is(':checked')) {

      $('[name="actividad_desc_m[]"]#actividad_desc_m2').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m2').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m2').material_select();
      

    } else {
     $('[name="actividad_desc_m[]"]#actividad_desc_m2').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m2').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m2').material_select();
       
    }
})
$('[name="actividad_m[]"]#actividad_m3').click(function() {
    if($(this).is(':checked')) {

      $('[name="actividad_desc_m[]"]#actividad_desc_m3').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m3').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m3').material_select();
      

    } else {
     $('[name="actividad_desc_m[]"]#actividad_desc_m3').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m3').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m3').material_select();
       
    }
})
$('[name="actividad_m[]"]#actividad_m4').click(function() {
    if($(this).is(':checked')) {

      $('[name="actividad_desc_m[]"]#actividad_desc_m4').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m4').removeAttr('disabled');
      $('[name="actividad_recurso_m[]"]#actividad_recurso_m4').material_select();
      

    } else {
     $('[name="actividad_desc_m[]"]#actividad_desc_m4').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m4').attr('disabled','disabled');
       $('[name="actividad_recurso_m[]"]#actividad_recurso_m4').material_select();
       
    }
})

//verificar si selecciona si en el div de trabajadores
$('#trabaja_m').hide()
$('#valida_trabajadores_m').change(function(event) {
  if ($('#valida_trabajadores_m').val() == 1) {
      $('#trabaja_m').hide()
  }else{
     $('#trabaja_m').show()
  }
});

//Programas habilitar al seleccionar el check
$('[name="programa_m[]"]#programa_m1').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc_m[]"]#programa_desc_m1').removeAttr('disabled');      
    } else {
     $('[name="programa_desc_m[]"]#programa_desc_m1').attr('disabled','disabled');
    }
})
$('[name="programa_m[]"]#programa_m2').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc_m[]"]#programa_desc_m2').removeAttr('disabled');      
    } else {
     $('[name="programa_desc_m[]"]#programa_desc_m2').attr('disabled','disabled');
    }
})
$('[name="programa_m[]"]#programa_m3').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc_m[]"]#programa_desc_m3').removeAttr('disabled');      
    } else {
     $('[name="programa_desc_m[]"]#programa_desc_m3').attr('disabled','disabled');
    }
})
$('[name="programa_m[]"]#programa_m4').click(function() {
    if($(this).is(':checked')) {
      $('[name="programa_desc_m[]"]#programa_desc_m4').removeAttr('disabled');      
    } else {
     $('[name="programa_desc_m[]"]#programa_desc_m4').attr('disabled','disabled');
    }
})

//verificar si selecciona si en el div de institucion
$('#insti_m').hide()
$('#valida_institucion_m').change(function(event) {
  if ($('#valida_institucion_m').val() == 1) {
      $('#insti_m').hide()
  }else{
     $('#insti_m').show()
  }
});

//boton de modificar
$('#modificar_informacion').click(function(event) {
  event.preventDefault();
  var empresa_m = $('#empresa_m').val()
  $.ajax({
    url: 'evaluacion/formato_informacion_as/modificar/modificar.php?empresa='+empresa_m,
    type: 'POST',
    data: $('#form_modificar_informacion').serialize(),
    beforeSend: function() {
      $('#modificar_informacion').attr('disabled', 'disabled');
    // console.log('cargando')
    swal ({
          // icon: "success",
           text: "Procesando información!",
           button: {
            visible: false
          },
      });
    },success: function(respuesta) {
      // console.log(respuesta)
      swal ({
          icon: "success",
           text: "Datos MODIFICADOS exitosamente!",
           button: {
            visible: false
          },
      });
      setTimeout("document.location=document.location",1500);
    }
  })
 
  
});