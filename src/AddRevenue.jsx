import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function AddRevenue({ months }) {
  const date = new Date()

  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)
  const [amount, setAmount] = useState(null)
  const [category, setCategory] = useState(null)
  const [month, setMonth] = useState(months[date.getMonth()])
  const [year, setYear] = useState(date.getFullYear())

  const handleSubmit = () => {
    console.log("submit")
    fetch(`/api/entry`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        type: "revenue",
        category: category,
        month: month,
        year: year,
      }),
    })
      .then(res => res.json())
      .then(() => navigate("/"))
  }

  return (
    <div className="add-revenue">
      <Button variant="text" onClick={() => navigate("/")}>
        Back
      </Button>
      <h1>Add Revenue</h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Amount"
          type="number"
          variant="outlined"
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Category"
          type="text"
          variant="outlined"
          onChange={e => setCategory(e.target.value)}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {isExpanded ? (
        <div>
          <div>
            <Button variant="text" onClick={() => setIsExpanded(!isExpanded)}>
              Hide
            </Button>
          </div>

          <FormControl sx={{ m: 1, minWidth: 223 }}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="month-select"
              id="month-select"
              value={month}
              label="Month"
              onChange={e => setMonth(e.target.value)}
            >
              <MenuItem value="Jan">Jan</MenuItem>
              <MenuItem value="Feb">Feb</MenuItem>
              <MenuItem value="Mar">Mar</MenuItem>
              <MenuItem value="Apr">Apr</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="Jun">Jun</MenuItem>
              <MenuItem value="Jul">Jul</MenuItem>
              <MenuItem value="Aug">Aug</MenuItem>
              <MenuItem value="Sep">Sep</MenuItem>
              <MenuItem value="Oct">Oct</MenuItem>
              <MenuItem value="Nov">Nov</MenuItem>
              <MenuItem value="Dec">Dec</MenuItem>
            </Select>
          </FormControl>

          <div>
            <TextField
              id="outlined-basic"
              label="Year"
              type="number"
              variant="outlined"
              defaultValue={date.getFullYear()}
              onChange={e => setYear(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div>
          <Button variant="text" onClick={() => setIsExpanded(!isExpanded)}>
            Expand
          </Button>
        </div>
      )}
    </div>
  )
}
