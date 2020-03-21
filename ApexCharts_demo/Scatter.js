var options = {
  series: [{
    name: '超量程',
    data: [
      ["2012-12-10",2,"避难室"],
      ["2012-12-12",2,"避难室"],
      ["2012-12-13",2,"避难室"],
    ]
  },
  {
    name: '断电',
    data: [ 
      ["2012-12-11",4,"避难室"],
      ["2012-12-11",4,"机房"],
      ["2012-12-12",25,"避难室"],
      ["2012-12-13",4,"避难室"],
      ["2012-12-14",25,"避难室"],
     ]
  },
  {
    name: '不知道叫啥',
    data: [
      ["2012-12-13",32,"避难室"],
      ["2012-12-14",39,"避难室"]
    ]
  },
  {
    name: '哈哈哈',
     data: [
      ["2012-12-15",2,"避难室"]
      ]
  },
  {
    name: '啧啧啧',
     data: [
      ["2012-12-17",6,"避难室"]
    ]
  },
  ],
  chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      type: 'xy'
    }
  },
  /*markers:{
    size:
  }*/
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: "yyyy-MM-dd",
    }
  },
  /*yaxis: {
    max: 70
  },*/
  /*dataLabels: {
    enabled: true,
    enabledOnSeries: undefined,
    formatter: function (value, { seriesIndex, dataPointIndex, w }) {
      if (value < 0) {
        return -value;
      } else {
        return value;
      }
    }
  },*/
  tooltip: {
        //enabled:false,
        shared: false,
        intersect: true,
        x: {
          format: "yyyy-MM-dd"
        },
        y:{
          formatter: function (y) {
            if (typeof y !== "undefined") {
              if (y.toFixed(0) < 0) {
                return -y.toFixed(0) + "次";
              } else {
                return y.toFixed(0) + "次";
              }
            }
            return y;
          }
        },
        z:{
          formatter:function(z){
            return z;
          },
          title:"位置：",
        }
        // fillSeriesColor:true,
      }
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
    chart2.render();

    function generateDayWiseTimeSeries(baseval, count, yrange,position) {
      var i = 0;
      var series = [];
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      //var z = "asda";
      series.push([baseval, y, position]);
      baseval += 86400000;
      i++;
      return series;
    }
