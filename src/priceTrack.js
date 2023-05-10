import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const LineGraph = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.cjvillarreal.com/amazon-pie-scrapper/avePie.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef.current && data.length) {
      const chartData = {
        labels: data.map(item => item.Date),
        datasets: [
          {
            label: 'Ave Raspberry Pi Price (more-or-less)',
            data: data.map(item => item.AveragePrice),
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            pointRadius: 8 // set the pointRadius to 8 pixels
          }
        ]
      };
  
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Pi Price In $'
            }
          }
        }
      };
      
      if (chartInstance) {
        chartInstance.destroy();
      }
  
      chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions
      });
    }
  
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartRef, data]);

  return <canvas ref={chartRef} />;
}

export default LineGraph;
