$(document).ready(function(){
   
   $.get($("#base_url").val()+"sitio/empresaPorMunicipio", function(data){
    
    let data_json = JSON.parse(data);
    let data_value = data_json['values'];
    let codigo_munpio = {
      m1:"g17001",
      m2:"g17004",
      m3:"g17006",
      m4:"g17002",
      m5:"g17007",
      m6:"g17008",
      m7:"g17010",
      m8:"g17011",
      m9:"g17017",
      m10:"g17015",
      m11:"g17014",
      m12:"g17013",
      m13:"g17016",
      m14:"g17019",
      m15:"g17022",
      m16:"g17038",
      m17:"g17025",
      m18:"g17012",
      m19:"g17026",
      m20:"g17027",
      m21:"g17028",
      m22:"g17031",
      m23:"g17032",
      m24:"g17034",
      m25:"g17037",
      m26:"g17040",
      m27:"g17043",
      m28:"g17048",
      m29:"g17060",
      m30:"g17035"
    };
    let values = {};
    let porcentaje = {};
    let cuantos =0;
    for (var i = 0; i < data_value.length; i++) {
      let porce = ( data_value[i].cuenta / data_json['total']) * 100;
      porce = porce.toFixed(2);
       let codigo = codigo_munpio['m'+data_value[i].mupio_id];
          values[codigo] = parseFloat(data_value[i].cuenta);
          porcentaje[codigo] = porce;
         let div = "<div class='description-block' id='"+codigo+"'>";
          div +="<h5 class='description-header'>"+ data_value[i].nombre+"</h5>";
          div +="<span class='description-text'>"+ data_value[i].cuenta +"  ("+ porce +"%)</span></div>";
         
          if(data_value[i].cuenta > 0 && cuantos < 5){
            cuantos++;
            $("#municpios_des").append(div);
          }
    }
      let lastregion = null;
      let map = new jvm.WorldMap({
         map: '17MAP',
          backgroundColor:"white",
          container: $('#choco-map-markers'),
          regionStyle: {
            initial: {
              fill: '#f7fcb9',
              stroke:'#000000',
              "stroke-width": 0.7,
              "stroke-opacity": 1
            }
          },
          series: {
              regions: [{
                attribute: 'fill',
                scale: ['#f7fcb9', '#004529'],
                normalizeFunction: 'polynomial',
                values: values,
                min: 0,
                max: data_json['max'],
                 legend: {
                  vertical: true,
                  title: 'Color'
                }
              }]
           },
           onRegionTipShow: function(e, label, code){
              label.html(labe.html()+code);
            }
    });
  });
});