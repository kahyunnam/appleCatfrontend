import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './homepage/Login.js'

function App(props) {
  const { backendurl } = props;

  return (
    <div className="App">
      <Login backendurl={backendurl} />
    </div>
  );
}

export default App;
