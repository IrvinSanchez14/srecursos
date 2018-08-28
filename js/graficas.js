$(document).ready(function(){
    // Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");

dataLab();


function dataLab() {
    var label = [];
    $.ajax({
        url: "http://localhost/api-sreportes/coment_act/readChar.php",
        type : "POST",
        contentType : 'application/json',
        success : function(result) {
            $.each(result.records, function(k,v) {
                label.push({
                    name : v.nombre_fac,
                    num : v.numero
                });
                
                

            });

            var myLineChart = new Chart(ctx, {
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
          max: 50,
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