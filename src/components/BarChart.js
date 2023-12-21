import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
   
   // Create chart arrays
   const chartLabels = props.expenses.map((item) => (item.category));
   const chartColors = props.expenses.map((item) => (item.color));
   const chartData = props.expenses.map((item) => (item.total));

   ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
   // options for Chart
   const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        }
      },
   };
   // data for chart
   const data = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Expenses',
          data: chartData,
          backgroundColor: chartColors
        }
      ],
   };

   return (
      <div className="block-item">
         <div className="bar-chart">
            <h2 className="block-item-title">Expenses</h2>
            <Bar options={options} data={data} />
         </div>
      </div>
   )
}

export default BarChart;
