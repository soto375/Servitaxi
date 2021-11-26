// Del insertar
$('.aut').keyup(function(event) {
  var unidades_vendidas = []
  for (var i = 0; i <= $('[name="unidad_v_anual[]"]').length; i++) {
      unidades_vendidas.push($('#unidad_v_anual'+i).val())
  }
 
  var costo_pro_unidad = []
  for (var i = 0; i <= $('[name="costo_pro_unidad[]"]').length; i++) {
      costo_pro_unidad.push($('#costo_pro_unidad'+i).val())
  }

  var precio_v_unitario = []
  for (var i = 0; i <= $('[name="precio_v_unitario[]"]').length; i++) {
      precio_v_unitario.push($('#precio_v_unitario'+i).val())
  }

  var ganancias = []
  var ventas = []
  var total_ventas = 0

  for (var i = 0; i<unidades_vendidas.length; i++) {
    ganancias.push(precio_v_unitario[i]-costo_pro_unidad[i])
    $('#ganancia_unidad'+i).val(ganancias[i])
    ventas.push(unidades_vendidas[i]*precio_v_unitario[i])
    $('#venta_anual'+i).val(ventas[i])
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