import { useState, useEffect } from "react"
// import * as React from "react"
import LineChart from "./components/LineChart"
import DoughnutChart from "./components/DoughnutChart"
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"

export default function Dashboard({ months, Item }) {
  // For dashboard
  const [user, setUser] = useState("Alex")

  // For bar and line charts
  const [revenueEntries, setRevenueEntries] = useState(null)
  const [expenseEntries, setExpenseEntries] = useState(null)
  const [revenueMonths, setRevenueMonths] = useState(null)
  const [expenseMonths, setExpenseMonths] = useState(null)
  const [currentBalance, setCurrentBalance] = useState(null)

  // For doughnut chart
  const [entries, setEntries] = useState(null)
  const [expenseCategories, setExpenseCategories] = useState(null)

  useEffect(() => {
    fetch("/api/entry/revenue/months")
      .then(res => res.json())
      .then(setRevenueMonths)

    fetch("/api/entry/expense/months")
      .then(res => res.json())
      .then(setExpenseMonths)

    fetch("/api/entry/revenue")
      .then(res => res.json())
      .then(setRevenueEntries)

    fetch("/api/entry/expense")
      .then(res => res.json())
      .then(setExpenseEntries)

    fetch("/api/entry/expense/categories")
      .then(res => res.json())
      .then(setExpenseCategories)

    fetch("/api/entry/")
      .then(res => res.json())
      .then(setEntries)
  }, [])

  useEffect(() => {
    setCurrentBalance(calculateCurrentBalance())
  }, [revenueEntries, expenseEntries])

  const calculateCurrentBalance = () => {
    let result = 0
    if (revenueEntries !== null && expenseEntries !== null) {
      revenueEntries.map(entry => (result += Number(entry.amount)))
      expenseEntries.map(entry => (result -= Number(entry.amount)))
    }
    return result
  }

  // result="$ " + number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

  return (
    <>
      <h1>Welcome {user}</h1>
      <Box sx={{ flexGrow: 1, backgroundColor: "aliceblue" }}>
        <Grid container spacing={2}>
          <Grid container xs={12}>
            <Grid xs={12}>
              <Item>
                <Grid><h2>Current Balance: {currentBalance && "$ " + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2></Grid>
              </Item>
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <BarChart
                months={months}
                revenueEntries={revenueEntries}
                revenueMonths={revenueMonths}
                expenseEntries={expenseEntries}
                expenseMonths={expenseMonths}
              />
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <LineChart
                months={months}
                revenueEntries={revenueEntries}
                revenueMonths={revenueMonths}
                expenseEntries={expenseEntries}
                expenseMonths={expenseMonths}
              />
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <DoughnutChart
                entries={entries}
                expenseCategories={expenseCategories}
              />
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <PieChart />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
