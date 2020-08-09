import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from 'chart.js';

const DonutChart = ({ data }) => {
  const colors = [];

  React.useEffect(() => {
    drawChartjs();
  }, []);

  React.useEffect(() => {
  }, [data]);

  const dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  for (let i = 0; i < data.length; i++) {
      colors.push(dynamicColors());
  }

  function drawChartjs() {
      const ctx = document.getElementById("myDonutChart");
      new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: data.map(info => Object.keys(info)[0]),
              datasets: [{
                data: data.map(info => Object.values(info)[0]),
                backgroundColor: colors
              }]
          },
      })
  }

  return (
    <Paper id="line-chart" elevation={0} style={{ margin: 20, padding: 10 }} >
      <canvas id="myDonutChart" width="660" height="300" />
    </Paper>
  );
};

export default DonutChart;
