$(document).ready(function(){
    // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#292b2c';
    
  Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#292b2c';

  // Bar Chart Example
  var ctx = document.getElementById("myBarChart");
  // Pie Chart Example
  var ctxp = document.getElementById("myPieChart");
  var ctxcfe = document.getElementById("myBarChartcfe");
  var ctxamz = document.getElementById("myBarChartamz");
  var ctxnice = document.getElementById("myBarChartnice");
  var ctxpCFE = document.getElementById("myPieChartcfe");



  
  if (window.location.href === 'http://localhost/srecursos/reporte-conferencia.php') {
    dataBarCFE();
    dartaPieCFE();
  } else if (window.location.href === 'http://localhost/srecursos/reporte-bienvenida.php') {
    dataBar();
    dartaPie();
  } else if (window.location.href === 'http://localhost/srecursos/reporte-amazing.php') {
    dataBarAmz();
  } else if (window.location.href === 'http://localhost/srecursos/reporte-nice.php') {
    dataBarNice();
  } 
  else {
    console.log('Fail',window.location.href)
  }

  function dataBar() {

    var label = [];
    var sum = 0;
    $.ajax({
        url: "http://localhost/api-sreportes/coment_act/readChar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                sum += parseInt(v.numero);
                label.push({
                    name : v.nombre_fac,
                    num : v.numero
                });
            });
            var myLineChart = new Chart(ctx, {
                type: 'bar',
                data: {
                labels: [label[0].name, label[1].name, label[2].name, label[3].name],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [label[0].num, label[1].num, label[2].num, label[3].num],
                }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: sum,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });



  }

  function dartaPie() {
    var label = [];
    $.ajax({
        url: "http://localhost/api-sreportes/iglesia_est/asistenciaBv.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                label.push({
                    res : v.resultado
                });
            });
            var myPieChart = new Chart(ctxp, {
              type: 'pie',
              data: {
                labels: ["Asisten", "No Asisten"],
                datasets: [{
                data: [label[0].res, label[1].res],
                backgroundColor: ['#007bff', '#dc3545'],
              }],
              },
            });
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });



   }

   function dataBarCFE() {

    var label = [];
    var sum = 0;
    $.ajax({
        url: "http://localhost/api-sreportes/conf_arg/readBar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                sum += parseInt(v.numero);
                label.push({
                    name : v.nombre_fac,
                    num : v.numero
                });
            });
            var myLineChart = new Chart(ctxcfe, {
                type: 'bar',
                data: {
                labels: [label[0].name, label[1].name],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [label[0].num, label[1].num],
                }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: sum,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });



  }

  function dartaPieCFE() {
    var label = [];
    $.ajax({
        url: "http://localhost/api-sreportes/iglesia_est/asistenciaCFE.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                label.push({
                    res : v.resultado
                });
            });
            var myPieChart = new Chart(ctxpCFE, {
              type: 'pie',
              data: {
                labels: ["Asisten", "No Asisten"],
                datasets: [{
                data: [label[0].res, label[1].res],
                backgroundColor: ['#007bff', '#dc3545'],
              }],
              },
            });
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });
  
  }

  function dataBarAmz() {

    var label = [];
    var tabla = [];
    var sum = 0;
    $.ajax({
        url: "http://localhost/api-sreportes/alumnos/charBarA.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                sum += parseInt(v.numero);
                console.log(v);
                label.push({
                    name : v.nombre_fac,
                    num : v.numero
                });
                tabla.push([
                  v.nombre_fac,
                v.numero
              ]);
            });
              console.log('LABEL',label.length);
              var texto = [];
              var i;
              var speedData = {
                labels: [],
                datasets: [{
                  label: "Revenue",
                  backgroundColor: "rgba(2,117,216,1)",
                  borderColor: "rgba(2,117,216,1)",
                  data: [],
                }]
              };
              for (i = 0; i < label.length; i++) {
                speedData.labels.push(label[i].name);
                speedData.datasets[0].data.push(label[i].num);
              }
              console.log('TEXT', speedData.datasets[0])
            var myLineChart = new Chart(ctxamz, {
                type: 'bar',
                data: speedData,
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: sum,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });





    //add event listener to 2nd button
document.getElementById('down').addEventListener("click", downloadPDF2);

//download pdf form hidden canvas
function downloadPDF2() {
	var newCanvas = document.querySelector('#myBarChartamz');

  //create image from dummy canvas
  var canvasImg = document.getElementById("myBarChartamz").toDataURL("image/png", 1.0);

  var columns = ["Nombre", "Datos"];
  var rows = [[
     "Ingenieria en Sistema Computacionales",
     "4215"
  ],[
    "Ingenieria en Sistema Computacionales",
    "4215"
 ],[
  "Ingenieria en Sistema Computacionales",
  "4215"
],[
  "Ingenieria en Sistema Computacionales",
  "4215"
]
  ];

  console.log('ROWS', rows);
  console.log('LLLA', tabla);

  var fecha = new Date();
  	//creates PDF from img
  var doc = new jsPDF('p', 'pt');
  doc.setFillColor(255, 255, 255);
  doc.rect(10, 10, 150, 160, "F");
  doc.setFontSize(22)
  doc.text(40, 50, 'Reporte de participacion estudiantil por facultad');
  doc.text(40, 70, 'en la actividad Amazing Race.');
  doc.setFontSize(14)
  doc.text(40, 110, 'Fecha de reporte: '+fecha.getDate()+ "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
  doc.setFontSize(14);
  doc.text(40, 130, 'Datos de participacion estudiantil por cada una de las facultades');
  doc.autoTable(columns, tabla, {margin: {top: 170}});
  doc.text(40, 360, 'Como parte del objetivo de la actividad de llegar a una mayor cantidad');
  doc.text(40, 380,'de estudiantes cada anio');
  doc.addImage(canvasImg, 'png', 40, 400, 500, 200);
  doc.setFontSize(14);
  doc.text(40, 750, '__________________');
  doc.text(40, 770, 'Capellan General');
  doc.text(250, 750, '__________________');
  doc.text(280, 770, 'Asistente');
  doc.text(440, 750, '__________________');
  doc.text(440, 770, 'Director General');
  doc.save('sample.pdf');
 }

  }

  function dataBarNice() {

    var label = [];
    var sum = 0;
    $.ajax({
        url: "http://localhost/api-sreportes/facultad/celulaChar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                sum += parseInt(v.numero);
                label.push({
                    name : v.nombre_fac,
                    num : v.numero
                });
                
            });
            var myLineChart = new Chart(ctxnice, {
                type: 'bar',
                data: {
                labels: [label[0].name,label[1].name,label[2].name],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [label[0].num,label[1].num,label[2].num],
                }
              ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: sum,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });



  }



 });