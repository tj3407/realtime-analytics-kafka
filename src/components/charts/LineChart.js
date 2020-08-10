import React from "react";
import Paper from "@material-ui/core/Paper";
import * as d3 from "d3";
import Chart from 'chart.js';

const margin = { top: 10, right: 30, bottom: 30, left: 60 };
const defaultWidth = 600;
const defaultHeight = 300;

const LineChart = ({ data }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    // const svg = d3
    //   .select(ref.current)
    //   .attr("width", defaultWidth + margin.left + margin.right)
    //   .attr("height", defaultHeight + margin.top + margin.bottom)
    drawChartjs();
  }, []);

  React.useEffect(() => {
    // drawLineChart();
  }, [data]);

  function drawChartjs() {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: ["January", "February", "March", "April", "May"],
              datasets: [{
                  label: "Line Chart",
                  fill: false,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointRadius: 5,
                  pointHitRadius: 10,
                  data: data
              }]
          },
          options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                }]
            },
            showLines: true
        }
      })
  }

  function drawLineChart(width = defaultWidth, height = defaultHeight) {
    var svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3.scaleLinear().domain([1, 750]).range([0, width + margin.left + margin.right]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 160]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.x);
          })
          .y(function (d) {
            return y(d.y);
          })
          .curve(d3.curveCatmullRom.alpha(0.5))
      );

    // Create a rect on top of the svg area: this rectangle recovers mouse position
    svg
      .append("rect")
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr("width", width)
      .attr("height", height)

  }

  return (
    <Paper id="line-chart" elevation={0} style={{ margin: 20, padding: 40 }} >
      <canvas id="myChart" width="660" height="300" />
      {/* <svg ref={ref}></svg> */}
    </Paper>
  );
};

export default LineChart;
