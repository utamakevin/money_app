import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y axis
  Tooltip,
  Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, // y axis
  Tooltip,
  Legend
)

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Savings",
        data: [3, 6, 9],
        backgroundColor: "mistyrose",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  }

  const options = {}

  return (
    <div className="barchart">
      <h1>Savings</h1>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  )
}
