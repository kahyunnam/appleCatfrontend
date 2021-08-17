import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login/Login.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateAccount from './CreateAccount/CreateAccount.js'

function App(props) {
  const { backendurl } = props;

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/createaccount">
            <CreateAccount backendurl={backendurl} />
          </Route>
          <Route path="/">
            <Login backendurl={backendurl} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
