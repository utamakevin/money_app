import { useState, useEffect } from "react"
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

export default function BarChart({ months, revenueEntries, revenueMonths, expenseEntries, expenseMonths }) {

  const data = {
    labels: [], // Months
    datasets: [
      {
        label: "Savings",
        data: [], // Savings per month
        backgroundColor: "lightgreen",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  }

  const options = {}

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

  if (revenueEntries !== null && expenseEntries !== null) {
    for (let i = 0; i < data.labels.length; i++) {
      let totalPerMonth = 0
      revenueEntries
        .filter(entry => entry.month === data.labels[i])
        .forEach(elem => {
          totalPerMonth += Number(elem.amount)
        })
      expenseEntries
        .filter(entry => entry.month === data.labels[i])
        .forEach(elem => {
          totalPerMonth -= Number(elem.amount)
        })
      data.datasets[0].data.push(totalPerMonth)
    }
  }

  return (
    <div className="barchart">
      <h1>Savings</h1>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  )
}
