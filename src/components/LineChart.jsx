import { useState, useEffect } from "react"
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
        backgroundColor: "mistyrose",
        borderColor: "pink",
        pointBorderColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [], // Expenses per month
        borderColor: "blue",
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
  }

  if (expenseMonths !== null) {
    expenseMonths.rows.map(entry => {
      if (!data.labels.includes(entry.month)) {
        data.labels.push(entry.month)
      }
    })
    data.labels.sort((a, b) => months.indexOf(a) - months.indexOf(b))
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
