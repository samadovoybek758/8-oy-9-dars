import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { FC } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface  Numbers {
    data: number[],
    labels: string[]
    
}

const LineGraph: FC<Numbers> = ({data,labels}) => {
  const sampleData = data;
    
  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "#0E9CFF",
        pointRadius: 2,
        fill: true,
        backgroundColor: 'transparent',
        lineTension: 0,
        data: sampleData,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        // grid: {
        //   display: false,
        // },
        labels: labels,
        ticks: {
          color: "#333333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        // grid: {
        //   display: false,
        // },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#333333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "193px",
    maxWidth: "333px",
    width: "100%",
    // border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;