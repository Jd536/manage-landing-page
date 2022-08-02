import React from "react";
import {
  VictoryPie,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryBar,
  VictoryAxis,
  VictoryGroup,
} from "victory";
import "./Chart.scss";

const Chart = () => {
  return (
    <div className="charts">
      <div className="chart chart-1">
        <div className="chart-1-inner-container">
          <VictoryStack
            colorScale={["hsl(228, 39%, 23%)", "hsl(12, 88%, 59%)"]}
            style={{ background: { opacity: 0.8 } }}
          >
            <VictoryBar
              barWidth={50}
              cornerRadius={5}
              data={[
                { x: "a", y: -2 },
                { x: "b", y: 5 },
                { x: "c", y: -5 },
                { x: "d", y: 7 },
                { x: "e", y: -8 },
              ]}
            />
            <VictoryBar
              barWidth={50}
              barRatio={2}
              data={[
                { x: "a", y: 5 },
                { x: "b", y: 3 },
                { x: "c", y: -6 },
                { x: "d", y: 4 },
                { x: "e", y: -4 },
              ]}
            />
          </VictoryStack>
        </div>
      </div>
      <div className="chart chart-2">
        <VictoryPie
          data={[
            { x: " ", y: 75 },
            { x: " ", y: 25 },
          ]}
          innerRadius={80}
          padAngle={1}
          colorScale={["hsl(228, 39%, 23%)", "hsl(12, 88%, 59%)"]}
          startAngle={280}
          endAngle={650}
        />
      </div>
      <div className="chart chart-3">
        <div className="el">
          <span>89.74%</span>
        </div>
        <div className="el">
          <span>+1.5%</span>
        </div>
        <div className="el">
          <span>88.24%</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
