import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );

  // let barHeight="0%";
  // if(props.maxValue>0){
  //   barHeight=Math.round((props.value/props.maxValue)*100)+"%"
  // }
  // console.log("barHeight",barHeight);
  // return <div className="chart-bar">
  //     <div className="chart-bar__inner">
  //         <div className="chart-bar__fill" style={{height:barHeight}}>

  //         </div>
  //         <div className="chart-bar__label">{props.label}</div>
  //     </div>
     
  // </div>;
}

export default ChartBar;
