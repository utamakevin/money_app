import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Unstable_Grid2"
import CategoryCard from "./components/CategoryCard"

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';

export default function Categories() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))

  const actions = [
      { icon: <MoneyOffIcon />, name: 'Expense' },
    { icon: <AttachMoneyIcon />, name: 'Income' },
  ];

  return (
    <div className="categories">
      <h1>Categories</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
              <CategoryCard category="entertainment" details={<button>button</button>} />
              <CategoryCard category="household" details="details2" />
          </Grid>
        </Grid>
      </Box>

      
    </div>
  )
}
