import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PuffLoader } from 'react-spinners';

function OrdersChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((data) => {
        setData(data.orders);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const options = {
    title: { 
      text: 'Orders per Day (Last 7 Days)',
      style: { color: '#1f2937', fontWeight: '600' }
    },
    xAxis: {
      categories: data.map((item) => item.date),
      title: { text: 'Date', style: { color: '#4b5563' } },
      labels: { style: { color: '#4b5563' } },
    },
    yAxis: { 
      title: { text: 'Number of Orders', style: { color: '#4b5563' } },
      labels: { style: { color: '#4b5563' } },
    },
    series: [
      {
        name: 'Orders',
        data: data.map((item) => item.count),
        color: '#3B82F6',
        lineWidth: 3,
        marker: { radius: 5, fillColor: '#3B82F6' },
      },
    ],
    chart: { 
      type: 'line',
      backgroundColor: 'transparent',
    },
    plotOptions: {
      line: {
        animation: { duration: 1000 },
      },
    },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 500 },
          chartOptions: {
            legend: { enabled: false },
            title: { style: { fontSize: '14px' } },
          },
        },
      ],
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <PuffLoader color="#3B82F6" size={60} className="animate-pulse" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="glassmorphism p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default OrdersChart;