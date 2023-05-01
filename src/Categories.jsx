import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import CategoryCard from "./components/CategoryCard"
import { useEffect, useState } from "react"

export default function Categories({ Item }) {
  const [revenueCategories, setRevenueCategories] = useState(null)
  const [expensesCategories, setExpensesCategories] = useState(null)

  useEffect(() => {
    fetch("/api/entry/revenue/categories")
      .then(res => res.json())
      .then(setRevenueCategories)

    fetch("/api/entry/expense/categories")
      .then(res => res.json())
      .then(setExpensesCategories)
  }, [])

  // console.log(revenueCategories)

  let categories = []
  if (revenueCategories !== null) {
    revenueCategories.rows.forEach(elem => categories.push(elem.category))
  }

  console.log(categories)
  let arr = [1, 1, 1, 1, 1, 1]
  return (
    <div className="categories">
      <h1>Categories</h1>
      <Item>
        <h2>Revenue</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              {revenueCategories &&
                revenueCategories.rows.map(entry => (
                  <CategoryCard category={entry.category} details="details2" />
                ))}
            </Grid>
          </Grid>
        </Box>
      </Item>
      <Item>
        <h2>Expenses</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              {expensesCategories &&
                expensesCategories.rows.map(entry => (
                  <CategoryCard category={entry.category} details="details2" />
                ))}
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  )
}
