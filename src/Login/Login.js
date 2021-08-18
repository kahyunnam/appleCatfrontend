import React, { useState, useEffect } from 'react';
import "./Login.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DashboardWelcome from "../Dashboard/DashboardWelcome.js"

const Login = (props) => {

  const { backendurl } = props;
  const loginApi = `${backendurl}/Login`

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(0)
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitLogin, setSubmitLogin] = useState(0);
  const [accessKey, setAccessKey] = useState("")


  useEffect(() => {
    const loginInfo = {
      "userName": userName,
      "userPassword": userPassword,
    };

    const requestInfo = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginInfo)
    };

    fetch(loginApi, requestInfo).then(response => response.json())
      .then(json => {
        console.log(json)
        setLoggedIn(json.login);
        setAccessKey(json.accessKey);

        if (json.login) {
          setError(0)
          console.log("login successful!")
          console.log(accessKey)
        }
        else {
          setError(error + 1)
          console.log("login unsuccessful :(")
        }
      })

  }, [submitLogin]);

  const handleLoginClick = () => {
    setSubmitLogin(submitLogin + 1);
    //route to home page, send accesskey as prop
  }

  if (error > 1) {
    return (
      <>
        <div id="page">
          <div id="login-window">

            <div id="greencat"></div>

            <h1 id="applecatNOSPACE">AppleCat.</h1>
            <h1 id="applecatSMOL">Oops! Wrong username/password</h1>

            <div id="user-name">
              <input id="user-name-input"
                placeHolder="username"
                onChange={event => setUserName(event.target.value)}
              ></input>
            </div>
            <br></br>
            <div id="user-password">
              <input id="user-password-input"
                placeHolder="password"
                onChange={event => setUserPassword(event.target.value)}
              ></input>
            </div>
            <br></br>
            <div id="login-button">
              <p id="login-button-label" onClick={handleLoginClick}>Log In</p>
            </div>
            <br></br>
            <p id="or">- or - </p>
            <Link to="/createaccount" id="create-account">New User? Sign Up</Link>
            {/* <p id="create-account" onClick={handleSignupClick}>New User? Sign Up</p> */}
          </div>
        </div>
      </>
    )
  }
  if (loggedIn) {
    return (
      <DashboardWelcome accessKey={accessKey} userName={userName} />
    )
  }
  else {
    return (

      <>
        <div id="page">
          <div id="login-window">

            <div id="greencat"></div>

            <h1 id="applecat">AppleCat.</h1>

            <div id="user-name">
              <input id="user-name-input"
                placeHolder="username"
                onChange={event => setUserName(event.target.value)}
              ></input>
            </div>
            <br></br>
            <div id="user-password">
              <input id="user-password-input"
                placeHolder="password"
                onChange={event => setUserPassword(event.target.value)}
              ></input>
            </div>
            <br></br>
            <div id="login-button">
              <p id="login-button-label" onClick={handleLoginClick}>Log In</p>
            </div>
            <br></br>
            <p id="or">- or - </p>
            <Link to="/createaccount" id="create-account">New User? Sign Up</Link>
            {/* <p id="create-account" onClick={handleSignupClick}>New User? Sign Up</p> */}
          </div>
        </div>
      </>
    )

  }

}

export default Login;