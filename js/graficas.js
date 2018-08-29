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
  var ctxpCFE = document.getElementById("myPieChartcfe");



  
  if (window.location.href === 'http://localhost/srecursos/reporte-conferencia.html') {
    dataBarCFE();
    dartaPieCFE();
  } else if (window.location.href === 'http://localhost/srecursos/reporte-bienvenida.html') {
    dataBar();
    dartaPie();
  } else if (window.location.href === 'http://localhost/srecursos/reporte-amazing.html') {
    dataBarAmz();
  } else {
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
    var sum = 0;
    $.ajax({
        url: "http://localhost/api-sreportes/alumnos/charBarA.php",
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
            var myLineChart = new Chart(ctxamz, {
                type: 'bar',
                data: {
                labels: [label[0].name, label[1].name, label[2].name, label[3].name],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [label[0].num, label[1].num, label[2].num, label[3].num],
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