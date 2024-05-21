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

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      datasets: [{
          label: 'Nombre Tickets',
          data: [70, 40, 38, 55, 100, 67],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 0.5)',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
        x: {
          display: true,
          grid: {
              color: 'rgba(200, 200, 200, 0.2)',
              lineWidth: 1,
              borderDash: [5, 5],
              borderDashOffset: 0,
              drawBorder: true 
          },
          title: {
              display: true,
              text: 'Semaine'
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
          }
      },
      plugins: {
          customCanvasBackgroundColor: {
              color: '#101517'
          }
      },
  }
});
