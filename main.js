// Plugin for custom canvas background color
const backgroundPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const {ctx, width, height} = chart;
        ctx.save();
        ctx.fillStyle = options.color || 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
    }
  };
  Chart.register(backgroundPlugin);
  
  // Configuration du graphique
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lundi'],
        datasets: [{
            label: 'Fibre',
            data: [70],
            backgroundColor: [
                'rgba(26,174,221,0.7)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.5)',
            ],
            borderRadius: 20,
            barPercentage: 0.30,
            categoryPercentage: 0.30
        },
        {
            label: 'CPE',
            data: [33],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.5)',
            ],
            borderRadius: 20,
            barPercentage: 0.30,
            categoryPercentage: 0.30
        }]
    },
    options: {
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Ticket'
                },
                ticks: {
                  display: false
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                display: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)', 
                    lineWidth: 1,
                    borderDash: [5, 5],
                    borderDashOffset: 0,
                    drawBorder: true 
                },
                ticks: {
                  display: false,
                  
                }
            }
        },
        hover: null,
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        plugins: {
            customCanvasBackgroundColor: {
                color: '#101517'
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                formatter: function(value, context) {
                    return value;
                },
                color: '#fefefe',
                font: {
                    weight: 'bold',
                    family: 'Roboto'
                }
            }
        },
    },
    plugins: [ChartDataLabels]
  });