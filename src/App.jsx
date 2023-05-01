import "./App.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard"
import Categories from "./Categories"
import Profile from "./Profile"
import AddRevenue from "./AddRevenue"
import AddExpense from "./AddExpense"

import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import MoneyOffIcon from "@mui/icons-material/MoneyOff"

import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"

import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

function App() {
  const navigate = useNavigate()

  const handleAddRevenue = () => {
    navigate("/add-revenue")
  }

  const handleAddExpense = () => {
    navigate("/add-expense")
  }

  const actions = [
    { icon: <MoneyOffIcon />, name: "Add Expense", action: handleAddExpense },
    {
      icon: <AttachMoneyIcon />,
      name: "Add Revenue",
      action: handleAddRevenue,
    },
  ]

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  return (
    <div className="App">
      <div>
        <Stack direction="row" spacing={2}>
          <Item>
            <Link to="/">Dashboard</Link>
          </Item>
          <Item>
            <Link to="/categories">Categories</Link>
          </Item>
          <Item>
            <Link to="/profile">Profile</Link>
          </Item>
        </Stack>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard months={months} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-revenue" element={<AddRevenue months={months} />} />
        <Route path="/add-expense" element={<AddExpense months={months} />} />
      </Routes>

      <SpeedDial
        className="add-entry-button"
        ariaLabel="Add Entry SpeedDial "
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default App
