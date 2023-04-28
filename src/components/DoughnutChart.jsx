import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function DoughnutChart() {
    const data = {
        labels: ['Entertainment', 'Education', 'Utilities'],
        datasets: [{
            label: 'Monthly Cashflow',
            data: [250, 128, 79],
            backgroundColor: ['green', 'orange', 'burlywood'],
            borderColor: ['green', 'orange', 'burlywood']
        }]
    }

    return (
        <div className="doughnutchart">
            <h1>Expenses Breakdown</h1>
            <div>
                <Doughnut 
                data={data}></Doughnut>
            </div>
        </div>
    )
}