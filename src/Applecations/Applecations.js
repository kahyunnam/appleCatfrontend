import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../Dashboard/DashboardMain.css"

const Applecations = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userName = urlParams.get('userName');
  const accessKey = urlParams.get('accessKey')


  const dashboard_url = `/dashboard/?userName=${userName}&accessKey=${accessKey}`;
  const analytics_url = `/dashboard/analytics/?userName=${userName}&accessKey=${accessKey}`;
  const profile_url = `/dashboard/profile/?userName=${userName}&accessKey=${accessKey}`;

  return (
    <>
      <div id="page1">
        <div id="bar">
          <div id="bar-items">
            <div id="logo"></div>
            <Link to={dashboard_url} id="bar-text">Dashboard</Link>
            <h1></h1>
            <h1 id="bar-text-current">Apple-cations</h1>
            <Link to={analytics_url} id="bar-text">Analytics</Link>
            <h1></h1>
            <Link to={profile_url} id="bar-text">AppleCat Profile</Link>
          </div>
        </div>
        <div id="dashboard">
          <h1>applecations</h1>
        </div>
      </div>
    </>
  )
}

export default Applecations;