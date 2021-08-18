import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./DashboardWelcome.css";

const DashboardWelcome = (props) => {
  const { accessKey, userName } = props;

  const dashboard_url = `/dashboard/?userName=${userName}&accessKey=${accessKey}`;

  return (
    <>
      <div id="page">
        <div id="popup">
          <div id="logo2"></div>
          <h1 id="welcome">welcome, {userName}</h1>
          <div id="updates">
            <p id="updates-text">Some updates for you:</p>
            <p id="updates-text">
              The applications sections is now live!
            </p>
            <p id="updates-text">
              Other features coming soon: analytics, profile, streaks, achievements, and tiers.
            </p>
          </div>
          <div id="contain-button">
            <Link to={dashboard_url} id="button-label" >Go to Dashboard</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardWelcome;