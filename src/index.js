import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App backendurl={"http://localhost:8000"} />
  </React.StrictMode>,
  document.getElementById('root')
);
