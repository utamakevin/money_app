import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['No', 'No, but in red'],
  datasets: [
    {
      label: '# of Votes',
      data: [80, 20],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return (
    <div className="piechart">
        <h1>Are you colour blind?</h1>
        <Pie data={data} />
    </div>
  )
}