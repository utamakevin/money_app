import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./Dashboard"
import Categories from "./Categories"
import Profile from "./Profile"

import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import MoneyOffIcon from "@mui/icons-material/MoneyOff"

import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


function App() {
  const actions = [
    { icon: <MoneyOffIcon />, name: "Expense" },
    { icon: <AttachMoneyIcon />, name: "Income" },
  ]
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <h1>Money App</h1>

      <div>
        <Stack direction="row" spacing={2}>
          <Item><Link to="/">Dashboard</Link></Item>
          <Item><Link to="/categories">Categories</Link></Item>
          <Item><Link to="/profile">Profile</Link></Item>
        </Stack>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default App
