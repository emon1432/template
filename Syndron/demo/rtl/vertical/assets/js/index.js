$(function () {
    "use strict";


  // chart 1
  var options = {
    series: [{
      name: "Net Sales",
      data: [30, 15, 35, 12, 60, 20, 45]
    }],
    chart: {
      //width:150,
      foreColor: "#9ba7b2",
      toolbar: {
        show: !1,
      },
      height: 205,
      type: 'line',
      sparkline: {
        enabled: !1
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#02c27a'],
        shadeIntensity: 1,
        type: 'vertical',
        //opacityFrom: 0.5,
        //opacityTo: 0.0,
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#02c27a"],
    grid: {
      show: true,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();




  // chart 2

  var options = {
    series: [78],
    chart: {
      height: 190,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        //startAngle: -110,
        //endAngle: 110,
        hollow: {
          margin: 0,
          size: '80%',
          background: 'transparent',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: 'rgba(0, 0, 0, 0.1)',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            offsetY: 10,
            color: '#111',
            fontSize: '24px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ff0844'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: ["#ffb199"],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Active Users'],
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();



  
  // chart 3

  var options = {
    series: [{
      name: "Sales",
      data: [20, 5, 60, 10, 30, 20, 25]
    },
    {
      name: "Views",
      data: [17, 10, 45, 15, 25, 15, 40]
    }],
    chart: {
      //width:150,
      foreColor: "#9ba7b2",
      height: 210,
      type: 'bar',
      toolbar: {
        show: !1,
      },
      sparkline: {
        enabled: !1
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ['transparent']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#0d6efd', 'rgba(13, 109, 253, 0.35);'],
        shadeIntensity: 1,
        type: 'vertical',
        //opacityFrom: 0.8,
        //opacityTo: 0.1,
        stops: [0, 100, 100, 100]
      },
    },
    colors: ['#0d6efd', "rgba(13, 109, 253, 0.35);"],
    plotOptions: {
      // bar: {
      //   horizontal: !1,
      //   columnWidth: "55%",
      //   endingShape: "rounded"
      // }
      bar: {
        horizontal: false,
        borderRadius: 0,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: '60%',
      }
    },
    grid: {
      show: true,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !0
      },
      x: {
        show: !0
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


    
  // chart 4

  var options = {
    series: [{
      name: "Net Sales",
      data: [30, 42, 35, 55, 42, 75, 50]
    }],
    chart: {
      //width:150,
      toolbar: {
        show: !1,
      },
      height: 210,
      type: 'area',
      sparkline: {
        enabled: !0
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#6f42c1'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.1,
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#6f42c1"],
    grid: {
      show: false,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();




  // chart 5
  var options = {
    series: [{
      name: "Total Clicks",
      data: [44, 30, 55, 44, 90, 45, 75]
    }],
    chart: {
      //width:150,
      toolbar: {
        show: !1,
      },
      height: 240,
      type: 'area',
      sparkline: {
        enabled: !0
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#fd7e14'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.5,
        opacityTo: 0.1
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#fd7e14"],
    grid: {
      show: false,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();






  // chart 6
  var options = {
    series: [{
      name: "Orders",
      data: [44, 69, 55, 44, 90, 45, 75, 55, 65, 68, 45, 78, 42, 55, 47, 30, 27]
    }],
    chart: {
      //width:150,
      toolbar: {
        show: !1,
      },
      height: 180,
      type: 'bar',
      sparkline: {
        enabled: !0
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: '40%',
        endingShape: "rounded"
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#008cff'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 1
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#008cff"],
    grid: {
      show: false,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();



// chart 7
var options = {
  series: [10, 24, 24],
  chart: {
      height: 240,
      type: 'donut',
  },
  legend: {
      position: 'bottom',
      show: !1
  },
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#ff6a00', '#98ec2d', '#3f51b5'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          //stops: [0, 100, 100, 100]
      },
  },
  colors: ["#ff6a00", "#98ec2d", "#3f51b5"],
  dataLabels: {
      enabled: !1
  },
  plotOptions: {
      pie: {
          donut: {
              size: "80%"
          }
      }
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              height: 250
          },
          legend: {
              position: 'bottom',
              show: !1
          }
      }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();




 // chart 8
 var options = {
  series: [{
      name: "Total Accounts",
      data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
  }],
  chart: {
      //width:150,
      height: 105,
      type: 'area',
      sparkline: {
          enabled: !0
      },
      zoom: {
          enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#fd3550'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.8,
          opacityTo: 0.2,
          //stops: [0, 100, 100, 100]
      },
  },
  colors: ["#fd3550"],
  tooltip: {
      theme: "dark",
      fixed: {
          enabled: !1
      },
      x: {
          show: !1
      },
      y: {
          title: {
              formatter: function (e) {
                  return ""
              }
          }
      },
      marker: {
          show: !1
      }
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();



 // chart 9
 var options = {
  series: [{
      name: "Total Accounts",
      data: [20, 14, 25, 18, 20, 18, 40, 22, 45]
  }],
  chart: {
      //width:150,
      height: 105,
      type: 'area',
      sparkline: {
          enabled: !0
      },
      zoom: {
          enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#008cff'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.8,
          opacityTo: 0.2,
          //stops: [0, 100, 100, 100]
      },
  },
  colors: ["#008cff"],
  tooltip: {
      theme: "dark",
      fixed: {
          enabled: !1
      },
      x: {
          show: !1
      },
      y: {
          title: {
              formatter: function (e) {
                  return ""
              }
          }
      },
      marker: {
          show: !1
      }
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();





});