
<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: "Chart",
  extends: Bar,
  mixins: [reactiveProp],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          pointLabels: {
            fontSize: 12,
            fontColor: '#43425d',
            fontFamily: 'Open Sans'
          },
          xAxes: [{
            barPercentage: 0.7,
            categoryPercentage: 0.4,
            position: 'left'
          }],
          yAxes: [{
            ticks: {
              label: false,
              showLabelBackdrop: false,
              min: 0
            }
          }]
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
          }
        },
      }
    }
  },
  methods: {
    drawChart() {
      const gradient_avp = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient_avp.addColorStop(0, "#aa96f5");
      gradient_avp.addColorStop(1, "#7250ec");

      const gradient_revenue = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient_revenue.addColorStop(0, "#acf2fa");
      gradient_revenue.addColorStop(1, "#4cbacf");

      const gradient_sold = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient_sold.addColorStop(0, "#f7da3d");
      gradient_sold.addColorStop(1, "#f7ae3d");

      this.renderChart(
        {
          ...this.chartData,
          datasets: [
            { ...this.chartData.datasets[0], backgroundColor: gradient_revenue },
            { ...this.chartData.datasets[1], backgroundColor: gradient_sold },
            { ...this.chartData.datasets[2], backgroundColor: gradient_avp },
          ]
        },
        this.options
      );
    }
  },
  mounted() {
    this.drawChart()
  },
  beforeUpdate(){
    this.drawChart()
  }
}
</script>