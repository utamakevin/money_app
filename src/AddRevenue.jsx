import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
      <button onClick={() => navigate("/")}>Back</button>
      <h1>Add Revenue</h1>
      <span>Amount</span>
      <input type="number" onChange={e => setAmount(e.target.value)} />
      <span>Category</span>
      <input type="text" onChange={e => setCategory(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {isExpanded ? (
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)}>Hide</button>
          <span>Month</span>
          <input
            type="text"
            defaultValue={months[date.getMonth()]}
            onChange={e => setMonth(e.target.value)}
          />
          <span>Year</span>
          <input
            type="number"
            defaultValue={date.getFullYear()}
            onChange={e => setYear(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)}>Expand</button>
        </div>
      )}
    </div>
  )
}
