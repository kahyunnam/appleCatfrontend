import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login/Login.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateAccount from './CreateAccount/CreateAccount.js';
import DashboardMain from './Dashboard/DashboardMain.js';
import AppleCations from './Applecations/Applecations.js';
import Analytics from './Analytics/Analytics.js';
import Profile from './Profile/Profile.js';

function App(props) {
  const { backendurl } = props;

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/dashboard/profile">
            < Profile />
          </Route>

          <Route path="/dashboard/analytics">
            < Analytics />
          </Route>

          <Route path="/dashboard/applecations">
            < AppleCations />
          </Route>

          <Route path="/dashboard">
            <DashboardMain backendurl={backendurl} />
          </Route>

          <Route path="/createaccount">
            <CreateAccount backendurl={backendurl} />
          </Route>b

          <Route path="/">
            <Login backendurl={backendurl} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
