import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import "./Budget.css"


// Register the chart.js components we're using
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BudgetBarChart = () => {
  const chartData = {
    labels: ['Requirement Gathering', 'Procurement', 'Operating System Upgrade', 'Testing', 'Training and Documentation', 'Wrap Up'],
    datasets: [
      {
        label: 'Budget Estimation',
        data: [3000, 3717300, 22500, 49300, 3900, 9000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Budget Allocation',
      },
    },
  };

  return (
    <div className="budget-bar-chart-container">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

const BudgetDetails = () => {
    const budgetItems = [
      { name: 'Requirement Gathering', amount: 3000 },
      { name: 'Procurement', amount: 3717300 },
      { name: 'Operating System Upgrade', amount: 22500 },
      { name: 'Testing', amount: 49300 },
      { name: 'Training and Documentation', amount: 3900 },
      { name: 'Wrap Up', amount: 9000 },
    ];
  
    return (
      <div className="budget-details-container">
        <h1>Budget Estimation</h1>
        <BudgetBarChart/>
        <ul className="budget-list">
          {budgetItems.map((item, index) => (
            <li key={index} className="budget-item">
              <span className="budget-item-name">{item.name}</span>
              <span className="budget-item-amount">${item.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BudgetDetails;
