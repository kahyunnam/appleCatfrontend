import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./DashboardMain.css";
import WindowProfile from "./DashboardWindows/windowProfile.js"
import WindowAnalytics from "./DashboardWindows/windowAnalytics.js"

const DashboardMain = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userName = urlParams.get('userName');
  const accessKey = urlParams.get('accessKey')


  const applecations_url = `/dashboard/applecations/?userName=${userName}&accessKey=${accessKey}`;
  const analytics_url = `/dashboard/analytics/?userName=${userName}&accessKey=${accessKey}`;
  const profile_url = `/dashboard/profile/?userName=${userName}&accessKey=${accessKey}`;

  return (
    <>
      <div id="page1">
        <div id="bar">
          <div id="bar-items">
            <div id="logo"></div>
            <h1 id="bar-text-current">Dashboard</h1>
            <Link to={applecations_url} id="bar-text">Apple-cations</Link>
            <h1></h1>
            <Link to={analytics_url} id="bar-text">Analytics</Link>
            <h1></h1>
            <Link to={profile_url} id="bar-text">AppleCat Profile</Link>
          </div>
        </div>
        <div id="dashboard">
          <div id="top-part">
            <div id="top-left">
              <div id="topleftwindow">
                <WindowProfile userName={userName} />
              </div>
            </div>
            <div id="top-right">
              <div id="toprightwindow">
                <WindowAnalytics />
              </div>
            </div>
          </div>
          <div id="bottom-part">
            <div id="bottom-content">
              <div id="bottom-window">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain;