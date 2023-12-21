import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = (props) => {
   
   // Create chart arrays
   const chartLabels = props.expenses.map((item) => (item.category));
   const chartColors = props.expenses.map((item) => (item.color));
   const chartData = props.expenses.map((item) => (item.total));
   
   ChartJS.register(ArcElement, Tooltip, Legend);
   
   // Donut Data
   const donutData = {
      labels: chartLabels,
      datasets: [
         {
            label: 'Expenses',
            data: chartData,
            backgroundColor: chartColors
         },
      ],
   };

   return (
      <div className="block-item">
         <div className="donut-chart">
            <h2 className="block-item-title">Expenses</h2>
            <Doughnut data={donutData} />
         </div>
      </div>
   )
};


export default DonutChart;
