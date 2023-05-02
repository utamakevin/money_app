import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ExpensesDoughnutChart({ entries, expenseCategories }) {
  let data = {
    labels: [], // Expenses categories
    datasets: [
      {
        label: "Historical Expenses",
        data: [], // Total expenses per category
        backgroundColor: [
          "#90FCF9",
          "#63B4D1",
          "#7699D4",
          "#9448BC",
          "#480355",
        ],
        borderColor: ["#90FCF9", "#63B4D1", "#7699D4", "#9448BC", "#480355"],
      },
    ],
  }

  if (expenseCategories !== null) {
    expenseCategories.rows.map(entry => data.labels.push(entry.category))
  }

  if (entries !== null) {
    for (let i = 0; i < data.labels.length; i++) {
      let totalCategory = 0
      entries
        .filter(entry => entry.category === data.labels[i])
        .forEach(elem => {
          totalCategory += Number(elem.amount)
        })
      data.datasets[0].data.push(totalCategory)
    }
  }

  return (
    <div className="doughnutchart">
      <h1>Expenses Breakdown</h1>
      <div>
        <Doughnut data={data}></Doughnut>
      </div>
    </div>
  )
}
