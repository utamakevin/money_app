import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
} from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function LineChart({ months, revenueEntries, expenseEntries, revenueMonths, expenseMonths }) {

  const data = {
    labels: [], // Months
    datasets: [
      {
        label: "Revenue",
        data: [], // Revenue per month
        backgroundColor: "lime",
        borderColor: "green",
        pointBorderColor: "goldenrod",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [], // Expenses per month
        backgroundColor: "yellow",
        borderColor: "red",
        pointBorderColor: "hotpink",
        tension: 0.2,
      },
    ],
  }

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  }

  if (revenueMonths !== null) {
    revenueMonths.rows.map(entry => data.labels.push(entry.month))
    data.labels.sort((a, b) => months.indexOf(a) - months.indexOf(b))

    let indexWithData = []
    for(let i = 0; i < months.length; i++) {
      if(data.labels.includes(months[i])) {
        indexWithData.push(i)
      }
    }

    indexWithData.sort((a, b) => a - b)

    data.labels = months.slice(Number(indexWithData[0]), Number(indexWithData[indexWithData.length - 1]) + 1)
  }

  if (expenseMonths !== null) {
    expenseMonths.rows.map(entry => {
      if (!data.labels.includes(entry.month)) {
        data.labels.push(entry.month)
      }
    })
    data.labels.sort((a, b) => months.indexOf(a) - months.indexOf(b))

    let indexWithData = []
    for(let i = 0; i < months.length; i++) {
      if(data.labels.includes(months[i])) {
        indexWithData.push(i)
      }
    }
    
    indexWithData.sort((a, b) => a - b)

    data.labels = months.slice(Number(indexWithData[0]), Number(indexWithData[indexWithData.length - 1]) + 1)
  }

  if (revenueEntries !== null) {
    for (let i = 0; i < data.labels.length; i++) {
      let totalPerMonth = 0
      revenueEntries
        .filter(entry => entry.month === data.labels[i])
        .forEach(elem => {
          totalPerMonth += Number(elem.amount)
        })
      data.datasets[0].data.push(totalPerMonth)
    }
  }

  if (expenseEntries !== null) {
    for (let i = 0; i < data.labels.length; i++) {
      let totalPerMonth = 0
      expenseEntries
        .filter(entry => entry.month === data.labels[i])
        .forEach(elem => {
          totalPerMonth += Number(elem.amount)
        })
      data.datasets[1].data.push(totalPerMonth)
    }
  }

  return (
    <div className="linechart">
      <h1>Cash Flow</h1>
      <Line data={data} options={options}></Line>
    </div>
  )
}
