import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const arrayOfValues = props.dataPoints.map((item) => item.value);
  console.log(arrayOfValues);
  let  maximum = Math.max(...arrayOfValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataItem) => (
        <ChartBar
          key={dataItem.label}
          label={dataItem.label}
          value={dataItem.value}
          maxValue={maximum}
        />
      ))}
    </div>
  );
}

export default Chart;
