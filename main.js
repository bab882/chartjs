// Plugin for custom canvas background color
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

// Configuration du graphique
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
        borderRadius: 20,
        barPercentage: 0.3,
        categoryPercentage: 0.3,
      },
      {
        label: "CPE",
        data: [33],
        backgroundColor: ["#8E2DE2"],
        borderColor: ["rgba(54, 162, 235, 0.5)"],
        borderRadius: 20,
        barPercentage: 0.3,
        categoryPercentage: 0.3,
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
          color: "rgba(200, 200, 200, 0.2)",
          lineWidth: 1,
          borderDash: [5, 5],
          borderDashOffset: 0,
          drawBorder: true,
        },
        ticks: {
          display: true,
          padding: 150
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

// Configuration du graphique en secteurs
const pieChartContext = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieChartContext, {
  type: "pie",
  data: {
    labels: ["Rouge"],
    datasets: [
      {
        label: "Couleurs préférées",
        data: [88],
        backgroundColor: [
          "#4A00E0",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
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
    cutout: "240",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Graphique en secteurs",
      },
    },
  },
});
