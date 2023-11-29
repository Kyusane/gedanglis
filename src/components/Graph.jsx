import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Graph({ graphData }) {
  return <Line options={options} data={{
    labels,
    datasets: [
      {
        label: 'Data',
        data: graphData,
        borderColor: '#3581B8',
        tension: 0.4,
      },
    ],
  }} />;
}
