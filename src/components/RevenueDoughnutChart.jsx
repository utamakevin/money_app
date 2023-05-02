import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function RevenueDoughnutChart({ entries, revenueCategories }) {
  let data = {
    labels: [], // Revenue categories
    datasets: [
      {
        label: "Historical Revenue",
        data: [], // Total revenue per category
        backgroundColor: [
          "#AEF78E",
          "#CAFFB9",
          "#66A182",
          "#C0D461"
        ],
        borderColor: ["#AEF78E",
        "#CAFFB9",
        "#66A182",
        "#C0D461"],
      },
    ],
  }

  if (revenueCategories !== null) {
    revenueCategories.rows.map(entry => data.labels.push(entry.category))
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
      <h1>Revenue Breakdown</h1>
      <div>
        <Doughnut data={data}></Doughnut>
      </div>
    </div>
  )
}
