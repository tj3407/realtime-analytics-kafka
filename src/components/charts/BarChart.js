import React from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "chart.js";
import moment from "moment";

const BarChart = ({ data }) => {
  const colors = [];

  React.useEffect(() => {
    drawChartjs();
  }, []);

  React.useEffect(() => {}, [data]);

  const dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  for (let i = 0; i < 40; i++) {
    colors.push(dynamicColors());
  }

  function newDate(days) {
    return moment().add(days, 'm');
  }

  function drawChartjs() {
    const ctx = document.getElementById("bar-chart");
    new Chart(ctx, {
      type: "bar",
      data: {
        // labels: data.map((info) => Object.keys(info)[0]),
        // labels: [newDate(-60), newDate(-120), newDate(40)],
        labels: Array.from({length: 40}, () => Math.floor(newDate(Math.random() * 40))),
        datasets: [
          {
            // label: "Number of clicks",
            // label: data.map((info) => Object.keys(info)[0]),
            // data: data.map((info) => Object.values(info)[0]),
            data: Array.from({length: 40}, () => Math.floor(Math.random() * 40)),
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [{
            type: 'time',
            // distribution: 'linear',
            time: {
              displayFormats: {
                //  'millisecond': 'MMM DD',
                //  'second': 'MMM DD',
                 'minute': 'h:mm a',
                //  'hour': 'MMM DD',
                //  'day': 'MMM DD',
                //  'week': 'MMM DD',
                //  'month': 'MMM DD',
                //  'quarter': 'MMM DD',
                //  'year': 'MMM DD',
              },
              // unit: 'minute'
            }
          }]
        },
      },
    });
  }

  return (
    <Paper id="line-chart" elevation={0} style={{ margin: 20, padding: 40 }}>
      <canvas id="bar-chart" width="660" height="300" />
    </Paper>
  );
};

export default BarChart;
