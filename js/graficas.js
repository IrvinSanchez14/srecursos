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



  
  if (window.location.href === 'http://173.255.192.4/srecursos/reporte-conferencia.php') {
    dataBarCFE();
    dartaPieCFE();
  } else if (window.location.href === 'http://173.255.192.4/srecursos/reporte-bienvenida.php') {
    dataBar();
    dartaPie();
  } else if (window.location.href === 'http://173.255.192.4/srecursos/reporte-amazing.php') {
    dataBarAmz();
  } else if (window.location.href === 'http://173.255.192.4/srecursos/reporte-nice.php') {
    dataBarNice();
  } 
  else {
    console.log('Fail',window.location.href)
  }

  function dataBar() {
    var label = [];
    var tabla = [];
    var sum = 0;
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/coment_act/readChar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
              console.log('BAR',v);
                sum += parseInt(v.numero);
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
            let texto = [];
            let i;
            let speedData = {
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
            console.log('TEXT', speedData)
          var myLineChart = new Chart(ctx, {
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

    
    document.getElementById('down').addEventListener("click", descargarBienvenida);

    function descargarBienvenida() {
      var newCanvas = document.querySelector('#myBarChart');

      //create image from dummy canvas
      var canvasImg = document.getElementById("myBarChart").toDataURL("image/png", 1.0);
  
      var columns = ["Nombre", "Datos"];
  
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

  function dartaPie() {
    var label = [];
    var tabla = [];
    var sum = 0;
    
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/iglesia_est/asistenciaBv.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
          var nombre = "Asiste a una iglesia";
          var nombre2 = "No asiste";
            result.records[0].nombre = nombre;
            result.records[1].nombre = nombre2;
            console.log('result',result);
            $.each(result.records, function(k,v) {
              
              console.log('nombre',v);
                label.push({
                    res : v.resultado
                });
                tabla.push([
                  v.nombre,
                v.resultado
              ]);
            });
            console.log('LABEL PIE',label);
            console.log('LABEL PIE',tabla);
            let texto = [];
            let i;
            let speedData = {
              labels: ["Asisten", "No Asisten"],
                datasets: [{
                  data: [],
                  backgroundColor: ['#007bff', '#dc3545'],
                }],
              };


            for (i = 0; i < label.length; i++) {
              speedData.datasets[0].data.push(label[i].res);
            }
            console.log('PIE', speedData)
            var myPieChart = new Chart(ctxp, {
              type: 'pie',
              data: speedData,
            });
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });

        
    document.getElementById('down').addEventListener("click", descargarBienvenida);

    function descargarBienvenida() {
      var newCanvas = document.querySelector('#myPieChart');

      //create image from dummy canvas
      var canvasImg = document.getElementById("myPieChart").toDataURL("image/png", 1.0);
  
      var columns = ["Nombre", "Datos"];
  
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
          doc.autoTable(columns, tabla, {
            styles: {
              fillColor: [92, 122, 59],
              width: '10px',
            },
            tableWidth: '50px',
            margin: {top: 170} });
          doc.text(40, 360, 'Como parte del objetivo de la actividad de llegar a una mayor cantidad');
          doc.text(40, 380,'de estudiantes cada anio');
          doc.addImage(canvasImg, 'png', 150, 400, 200, 200);
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

   function dataBarCFE() {

    var label = [];
    var tabla = [];
    var sum = 0;
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/conf_arg/readBar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
          
            $.each(result.records, function(k,v) {
              sum += parseInt(v.numero);
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
            let texto = [];
            let i;
            let speedData = {
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

            var myLineChart = new Chart(ctxcfe, {
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


        
    document.getElementById('down').addEventListener("click", cfed);

    function cfed() {
      var newCanvas = document.querySelector('#myBarChartcfe');

      //create image from dummy canvas
      var canvasImg = document.getElementById("myBarChartcfe").toDataURL("image/png", 1.0);
  
      var columns = ["Nombre", "Datos"];
  
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

  function dartaPieCFE() {
  
    var label = [];
    var tabla = [];
    var sum = 0;
    
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/iglesia_est/asistenciaCFE.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
          var nombre = "Asiste a una iglesia";
          var nombre2 = "No asiste";
            result.records[0].nombre = nombre;
            result.records[1].nombre = nombre2;
            console.log('result',result);
            $.each(result.records, function(k,v) {
                label.push({
                    res : v.resultado
                });
                tabla.push([
                  v.nombre,
                v.resultado
              ]);
            });
            let texto = [];
            let i;
            let speedData = {
              labels: ["Asisten", "No Asisten"],
                datasets: [{
                  data: [],
                  backgroundColor: ['#007bff', '#dc3545'],
                }],
              };
            for (i = 0; i < label.length; i++) {
              speedData.datasets[0].data.push(label[i].res);
            }
            console.log('PIE', speedData)
            var myPieChart = new Chart(ctxpCFE, {
              type: 'pie',
              data: speedData,
            });
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });

        
    document.getElementById('down').addEventListener("click", descargarBienvenida);

    function descargarBienvenida() {
      var newCanvas = document.querySelector('#myPieChartcfe');

      //create image from dummy canvas
      var canvasImg = document.getElementById("myPieChartcfe").toDataURL("image/png", 1.0);
  
      var columns = ["Nombre", "Datos"];
  
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
          doc.autoTable(columns, tabla, {
            styles: {
              fillColor: [92, 122, 59],
              width: '10px',
            },
            tableWidth: '50px',
            margin: {top: 170} });
          doc.text(40, 360, 'Como parte del objetivo de la actividad de llegar a una mayor cantidad');
          doc.text(40, 380,'de estudiantes cada anio');
          doc.addImage(canvasImg, 'png', 150, 400, 200, 200);
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

  function dataBarAmz() {

    var label = [];
    var tabla = [];
    var sum = 0;
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/alumnos/charBarA.php",
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
              let texto = [];
              let i;
              let speedData = {
                labels: [],
                datasets: [{
                  label: "Datos",
                  backgroundColor: "rgba(220,53,69)",
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
          maxTicksLimit: sum
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: sum,
          maxTicksLimit: sum
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
    var tabla = [];
    var sum = 0;
    $.ajax({
        url: "http://173.255.192.4/api-sreportes/facultad/celulaChar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                sum += parseInt(v.numero);
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
            let texto = [];
            let i;
            let speedData = {
              labels: [],
              datasets: [{
                label: "Datos",
                backgroundColor: "rgba(220,53,69)",
                borderColor: "rgba(2,117,216,1)",
                data: [],
              }]
            };
            for (i = 0; i < label.length; i++) {
              speedData.labels.push(label[i].name);
              speedData.datasets[0].data.push(label[i].num);
            }

            var myLineChart = new Chart(ctxnice, {
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

    document.getElementById('down').addEventListener("click", downNice);

    //download pdf form hidden canvas
    function downNice() {
	  var newCanvas = document.querySelector('#myBarChartnice');

    //create image from dummy canvas
    var canvasImg = document.getElementById("myBarChartnice").toDataURL("image/png", 1.0);

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



 });