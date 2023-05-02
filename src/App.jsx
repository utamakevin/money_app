// react utils
import { Routes, Route, useNavigate } from "react-router-dom"

// pages
import Dashboard from "./pages/Dashboard"
import Categories from "./pages/Categories"
import Profile from "./pages/Profile"
import AddRevenue from "./pages/AddRevenue"
import AddExpense from "./pages/AddExpense"

// components
import ResponsiveAppBar from "./components/AppBar"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"

// icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import MoneyOffIcon from "@mui/icons-material/MoneyOff"

// css
import "./css/App.css"
import Paper from "@mui/material/Paper"
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
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Dashboard months={months} Item={Item} />} />
        <Route
          path="/dashboard"
          element={<Dashboard months={months} Item={Item} />}
        />
        <Route path="/categories" element={<Categories Item={Item} />} />
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
