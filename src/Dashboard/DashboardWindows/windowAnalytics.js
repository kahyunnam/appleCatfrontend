import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import "./windowAnalytics.css";


const WindowAnalytics = () => {


  const data_val = [
    { title: 'Two', value: 24, color: '#F1CA63', style: { strokeWidth: 9 } },
    { title: 'One', value: 3, color: '#ECD2B9', style: { strokeWidth: 2 } }

  ]

  return (
    <>
      <div>
        <div id="piechartdiv">
          <PieChart
            lineWidth={40}
            data={data_val}
            radius={20}

          />
        </div>
        <h1 id="analytics-des">
          Analytics feature - coming soon!
        </h1>
      </div>
    </>
  )
}

export default WindowAnalytics;