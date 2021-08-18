import React, { useState, useEffect } from 'react';
import "../Login/Login.css"
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DashboardWelcome from "../Dashboard/DashboardWelcome.js"

const CreateAccount = (props) => {
  const { backendurl } = props;
  const loginApi = `${backendurl}/CreateCat`

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitSignUp, setSubmitSignUp] = useState(0);
  const [accessKey, setAccessKey] = useState("")
  const [notValid, setNotValid] = useState(0)
  const [accountCreated, setAccountCreated] = useState(false)

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
        if (json.userName == "notvalid") {
          setNotValid(notValid + 1)
          console.log(notValid)
        }
        else {
          setAccountCreated(true)
          setNotValid(0)
          setAccessKey(json.accessKey)
          console.log(accountCreated)
        }
      })

  }, [submitSignUp]);

  const handleSignupClick = () => {
    setSubmitSignUp(submitSignUp + 1)
  }

  if (accountCreated) {
    console.log("sucess! account created")
    return (
      <DashboardWelcome accessKey={accessKey} userName={userName} />
    )
  }
  if (notValid > 1) {
    return (
      <>
        <div id="page">
          <div id="login-window">

            <div id="greencat"></div>
            <h1 id="applecatSMOL">Username is taken! Try another one.</h1>

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
              <p id="login-button-label" onClick={handleSignupClick}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div id="page">
          <div id="login-window">

            <div id="greencat"></div>
            <h1 id="applecat">Create your account.</h1>

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
              <p id="login-button-label" onClick={handleSignupClick}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CreateAccount;