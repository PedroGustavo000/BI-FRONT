import React from "react";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement, 
    Title,
    Tooltip, 
    Legend 
} from 'chart.js';


ChartJS.register(
    ArcElement, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip, 
    Legend
);

function PedidosIsencao() {

    const data = {
        labels: ['Categoria 2', 'Categoria 3'],
        datasets: [
          {
            data: [20, 50],
            backgroundColor: ['#121e0f', '#253c1f', '#375b2e'],
          },
        ],
    };

    const options = {
        plugins: {
          legend: {
            display: true,
            position: 'bottom', // Posição da legenda (pode ser 'top', 'bottom', 'left', 'right', etc.)
          },
        },
    }; 

    return(
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Matérias Buscadas</strong>
            <Pie data={data} options={options} />
        </div>
    )
}

function CursosDadas() {

    const data = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
        datasets: [
          {
            label: 'Vendas 2023',
            data: [20, 25, 30, 15, 10], // Dados de vendas para cada categoria, primeira série de barras
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Cor das barras da primeira série
          },
          {
            label: 'Vendas 2024',
            data: [15, 18, 28, 17, 12], // Dados de vendas para cada categoria, segunda série de barras
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // Cor das barras da segunda série
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true, // Comece o eixo Y no zero
          },
        },
      };

      return(
        <div style={{ 
            width: '100%', 
            maxHeight: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column' }}
        >
            <strong>Comparativo Enem e Esieme</strong>
            <Bar data={data} options={options} />
        </div>
    )
}

export {PedidosIsencao, CursosDadas};