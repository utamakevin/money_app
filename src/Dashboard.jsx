import { useState } from "react"
import * as React from "react"
import Button from "@mui/material/Button"
import LineChart from "./components/LineChart"
import DoughnutChart from "./components/DoughnutChart"
import BarChart from "./components/BarChart"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Unstable_Grid2"


export default function Dashboard() {
    const [user, setUser] = useState("Alex")
    const [revenue, setRevenue] = useState(0)
    const [expense, setExpense] = useState(0)
    
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }))

  return (
    <>
      <h1>Welcome {user}</h1>
      <Box sx={{ flexGrow: 1, backgroundColor: 'aliceblue' }}>
        <Grid container spacing={2}>
          <Grid container xs={12} md={6}>
            <Grid>
                <Item>
                  <Grid>Cash on Hand</Grid>
                  <Grid>1300</Grid>
                </Item>
            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <BarChart />
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <LineChart />
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <DoughnutChart />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

// - A welcome message showing the user signed in
//         - Aggregate Cash flow chart (income, outcome and savings - the diffence between income and outcome) on daily, monthly or yearly basis
//         - Current cash on hand
//         - Top three spending categories
//         - Add entry button - input amount, description and category.
