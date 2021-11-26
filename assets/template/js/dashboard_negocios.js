$(function () {

  'use strict';

  
  const url = $("#base_url").val();
  let sectores_id = {};

  function verSector(event, array){
  console.log(array);
   
}

  $.get(url+"dashboard/empresaSectores", function(data){
    
       let pieData  = [];
       let pieColors  = [];
       let pieLabels = [];
      const data_json =  JSON.parse(data);
      const values = data_json['values'];
      const total = data_json['total'];  
      var palette = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00'];

      for (var i = 0; i < values.length; i++) {
        const color = palette.shift();
        let sector =   "<li style='font-size:12px'><i class='fa fa-genderless' style='color:"+color+"'></i> "+values[i].nombre+"</li>";
        $("#sector_container").append(sector);
        let porce = (values[i].cuenta/total)*100;
          pieData.push(values[i].cuenta);
          pieColors.push(color);
          pieLabels.push(values[i].nombre);
      }

    var pieChartCanvas = $('#pieChart').get(0).getContext('2d');

   /* pieChartCanvas.canvas.addEventListener("click",function(evt){
      console.log(pieChart);
    });*/
    var pieChart       = new Chart(pieChartCanvas);
  

  var pieOptions     = {
    
    events: ['mousemove','click','touchstart'],
  
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke    : true,
    // String - The colour of each segment stroke
    segmentStrokeColor   : '#fff',
    // Number - The width of each segment stroke
    segmentStrokeWidth   : 1,
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    // Number - Amount of animation steps
    animationSteps       : 100,
    // String - Animation easing effect
    animationEasing      : 'easeOutBounce',
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate        : true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale         : false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive           : true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio  : false,
   
    legend: {
            display: false,
          },
    tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    const sector = pieLabels[tooltipItem.index];
                    const valor = pieData[tooltipItem.index];
                    const porcentaje = (valor/total) * 100;
                    return sector+" - "+valor+" ("+porcentaje.toFixed(2)+" %)";
                }
            }
    }
  };
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  //pieChart.Doughnut(PieData, pieOptions);
  // -----------------
  // - END PIE CHART -
  // -----------------
  // 
      var myDoughnutChart = new Chart(pieChartCanvas, {
        type: 'doughnut',
        data: {
           datasets: [{
                data: pieData
                  ,
                backgroundColor:pieColors
                }],
                  // These labels appear in the legend and in the tooltips when hovering different arcs
                labels:pieLabels
        },
        options: pieOptions
    });
  });



//    Resultado chart
//    
      
      /*$.get(url+"dashboard/empresasResultado", function(data){
      
       let pieColors  = [];
       
      const data_json =  JSON.parse(data);

     let pieLabels = data_json['labels'];
      var palette2 = [
      "rgb(237, 125, 43)", "rgb(244, 176, 132)", 
      "rgb(169, 208, 142)", "rgb(201, 201, 201)", 
      "rgb(165, 165, 165)", "rgb(71, 247, 25)"];
      var palette = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00'];
         let pieData  = [data_json['inicial'], data_json['basico'], data_json['intermedio'], 
      data_json['satisfactorio'], data_json['avanzado'], data_json['ideal']];
      let total = data_json['inicial'] + data_json['basico'] + data_json['intermedio'] + 
      data_json['satisfactorio'] + data_json['avanzado']+ data_json['ideal'];
      for (var i = 0; i < pieLabels.length; i++) {
        const color = palette.shift();
        pieColors.push(color);
        let label =   "<li><i class='fa fa-circle-o' style='color:"+color+"'></i> "+pieLabels[i]+"</li>";
        $("#resultado_container").append(label);
      }


       // -------------
  // - PIE CHART -
  // -------------
  // Get context with jQuery - using jQuery's .get() method.
  // 
      

  var pieChartCanvas = $('#resultadoChart').get(0).getContext('2d');

 /* pieChartCanvas.canvas.addEventListener("click",function(evt){
    console.log(pieChart);
  });
  var pieChart       = new Chart(pieChartCanvas);
  



  var pieOptions     = {
    
    events: ['mousemove','click','touchstart'],
    
    onClick: verSector,
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke    : true,
    // String - The colour of each segment stroke
    segmentStrokeColor   : '#fff',
    // Number - The width of each segment stroke
    segmentStrokeWidth   : 1,
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    // Number - Amount of animation steps
    animationSteps       : 100,
    // String - Animation easing effect
    animationEasing      : 'easeOutBounce',
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate        : true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale         : false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive           : true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio  : false,
   
    legend: {
            display: false,
          },
    tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    const sector = pieLabels[tooltipItem.index];
                    const valor = pieData[tooltipItem.index];
                    const porcentaje = (valor/total) * 100;
                    return sector+" - "+valor+" ("+porcentaje.toFixed(2)+" %)";
                }
            }
    }
  };
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  //pieChart.Doughnut(PieData, pieOptions);
  // -----------------
  // - END PIE CHART -
  // -----------------
  // 
      var myDoughnutChart = new Chart(pieChartCanvas, {
        type: 'doughnut',
        data: {
           datasets: [{
                data: pieData
                  ,
                backgroundColor:pieColors
                }],
                  // These labels appear in the legend and in the tooltips when hovering different arcs
                labels:pieLabels
        },
        options: pieOptions
    });
  });*/

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   * Bar for evaluacion criteria
   */
/* $.get(url+"dashboard/verificacion", function(data){
    var barChartCanvas = $('#verificacionChart').get(0).getContext('2d');

    let data_json = JSON.parse(data);
    
    let opcionBar= {};
    let valoresBar = [(data_json["VIABILIDAD_ECONOMICA"].opcion_avg * 100).toFixed(2), 
                  (data_json["CONTRIBUCION_CONSERVACION"].opcion_avg * 100).toFixed(2), 
                  (data_json["CICLO_VIDA"].opcion_avg * 100).toFixed(2),
                 (data_json["VIDA_UTIL"].opcion_avg * 100).toFixed(2),
                 (data_json["SUSTITUCION_MATERIALES"].opcion_avg * 100).toFixed(2), 
                 (data_json["MATERIALES_RECICLADOS"].opcion_avg * 100).toFixed(2),
                 (data_json["SOSTENIBLE_RECURSO"].opcion_avg * 100).toFixed(2),
                 (data_json["RESPO_SOCIAL_EMPRESA"].opcion_avg * 100).toFixed(2), 
                 (data_json["RESPO_SOCIAL_VALOR"].opcion_avg * 100).toFixed(2), 
                 (data_json["RESPO_SOCIAL_EXTERIOR"].opcion_avg * 100).toFixed(2),
                 (data_json["COMUNICACION_ATRIBUTOS"].opcion_avg * 100).toFixed(2)];
    //let barColors = ['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837']; 
    let barColors = ['#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850','#1a9850']; 
    let myBarChart = new Chart(barChartCanvas, {
      type: 'bar',
      options: {
        tooltips:{
                  intersect: false,
                     mode: 'point',  
                     callbacks: {
                          label: function(tooltipItem, data) {
                              return tooltipItem.value+"%";
                          }
                      }  
                },
                scales: {
                      yAxes: [{
                          ticks: {
                              // Include a dollar sign in the ticks
                              callback: function(value, index, values) {
                                console.o
                                  return  value +'%';
                              }
                          }
                      }]
                  },
      },
      data: {
        labels:["Viabilidad Económica","Impacto Ambiental Positivo", "Enfoque Ciclo de Vida", "Vida Útil",
                      "Sustiticion de Sustancias", "Reciclabilidad", "Uso Eficiente y Sostenible",
                      "Responsabilidad Social - Interior", "Responsabiliad Social - Cadena Valor",
                      "Responsabilidad Social - Exterior", "Comunicación de Atributos"],
        datasets:[{

                data: valoresBar,
                backgroundColor: barColors,
                borderColor: barColors,
                borderWidth: 1,
                label:'Validación general para negocios verdes en porcentajes'
                }]
      },
    });
 });*/

  // Create the line chart
 // salesChart.Line(salesChartData, salesChartOptions);

  // ---------------------------
  // - END MONTHLY SALES CHART -
  // ---------------------------

 

  /* jVector Maps
   * ------------
   * Create a Choçõ map with markers
   */
  


  $.get(url+"dashboard/empresaPorMunicipio", function(data){
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
    for (var i = 0; i < data_value.length; i++) {
      let porce = ( data_value[i].cuenta / data_json['total']) * 100;
      porce = porce.toFixed(2);
       let codigo = codigo_munpio['m'+data_value[i].mupio_id];
          values[codigo] = parseFloat(data_value[i].cuenta);
          porcentaje[codigo] = porce;
         if( data_value[i].cuenta > 0 ){
             let div = "<div class='description-block' id='"+codigo+"'>";
              div +="<h5 class='description-header'><a style='color:white;' href='"+url+"negocio-verde-municipio/"+data_value[i].mupio_id+"'>"+ data_value[i].nombre+"</a></h5>";
              div +="<span class='description-text'>"+ data_value[i].cuenta +"  ("+ porce +"%)</span></div>";
             
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
           onRegionTipShow: function(event, label, code){
              console.log(event);
            },
           onRegionClick:function(){
              let code = arguments[1];
              if(lastregion != null){
               
                  lastregion.css("border",'none');
                  $("#"+code).css('border', '1px solid white');
              }else{
                $("#"+code).css('border', '1px solid white');
                

              }
              lastregion = $("#"+code);
             
              $("#municpios_des").animate({
                scrollTop: $("#"+code)[0].offsetTop
            });
           },
    });
     

  });
 

  
 /* $('#choco-map-markers').vectorMap({
    map              : '17MAP',
    normalizeFunction: 'polynomial',
    hoverOpacity     : 0.7,
    hoverColor       : false,
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial      : {
        fill            : 'rgba(0, 166, 90, 1)',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      },
      hover        : {
        'fill-opacity': 0.7,
        cursor        : 'pointer'
      },
      selected     : {
        fill: 'yellow'
      },
      selectedHover: {}
    },
    markerStyle      : {
      initial: {
        fill  : '#00a65a',
        stroke: '#111'
      }
    },
    markers          : [
     
    ]
  });*/

  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  // -----------------
  // - SPARKLINE BAR -
  // -----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  // -----------------
  // - SPARKLINE PIE -
  // -----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type       : 'pie',
      height     : $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  // ------------------
  // - SPARKLINE LINE -
  // ------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type     : 'line',
      height   : $this.data('height') ? $this.data('height') : '90',
      width    : '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
});
