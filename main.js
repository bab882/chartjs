const backgroundPlugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const { ctx, width, height } = chart;
    ctx.save();
    ctx.fillStyle = options.color || "white";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  },
};
Chart.register(backgroundPlugin);

// Graphique additionnel des tickets
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Lundi"],
    datasets: [
      {
        label: "Fibre",
        data: [70],
        backgroundColor: ["#4A00E0"],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        borderRadius: 15,
        barPercentage: 0.4,
        categoryPercentage: 0.4,
      },
      {
        label: "CPE",
        data: [33],
        backgroundColor: ["#8E2DE2"],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        borderRadius: 15,
        barPercentage: 0.4,
        categoryPercentage: 0.4,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Ticket",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        display: true,
        grid: {
          color: "#fefefe",
          lineWidth: 0,
          borderDash: [5, 5],
          borderDashOffset: 0,
          drawBorder: true,
        },
        ticks: {
          display: true,
          padding: 100
        },
      },
    },
    hover: null,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    plugins: {
      customCanvasBackgroundColor: {
        color: "#101517",
      },
      datalabels: {
        anchor: "center",
        align: "center",
        formatter: function (value, context) {
          return value;
        },
        color: "#fefefe",
        font: {
          weight: "bold",
          family: "Roboto",
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

// Graphique du Résultat
const pieChartContext = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieChartContext, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "Couleurs préférées",
        data: [88],
        backgroundColor: [
          "#4A00E0",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    circumference: 180,
    rotation: -90,
    borderRadius: 20,
    cutout: "90%",
    layout: {
      padding: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Suivi du support",
        font: {
          family: 'Roboto',
        },
        
      },
      datalabels: {
        display: true,
        anchor: 'center',
        align: 'bottom',
        color: '#000',
        padding: 95,
        font: {
          weight: 'bold',
          family: 'Roboto',
          size: 50
        },
        formatter: function(value, context) {
          return value + '%' ;
        },
        hover: {
          mode: null,
        },
        interaction: {
          mode: null, 
          intersect: false,
        },
      }
    },
  },
  plugins: [ChartDataLabels],
});
