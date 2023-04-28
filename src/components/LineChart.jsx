import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
} from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
            labels: 'Revenue',
            data: [6, 3, 9],
            backgroundColor: 'mistyrose',
            borderColor: 'pink',
            pointBorderColor: 'green',
            tension: 0.2
        },
        {
            labels: 'Expenses',
            data: [1,2,3],
            borderColor: 'blue',
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        }
    }


  return (
    <div className="linechart">
      <h1>Cash Flow</h1>
      <Line data={data} options={options}></Line>
    </div>
  )
}
