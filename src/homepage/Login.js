import React, { useState, useEffect } from 'react';

const Login = (props) => {

  const { backendurl } = props;
  const loginApi = `${backendurl}/Login`

  const [loggedIn, setLoggedIn] = useState(false);
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
        setLoggedIn(json.login);
        setAccessKey(json.accessKey);

        //for debugging
        if (json.login) {
          console.log("login successful!")
          console.log(accessKey)
        }
        else {
          console.log("login unsuccessful :(")
        }
      })

  }, [submitLogin]);

  const handleLoginClick = () => {
    setSubmitLogin(submitLogin + 1);
    //route to home page, send accesskey as prop
  }

  const handleSignupClick = () => {
    //route to the sign up page
  }

  return (
    <>
      <div id="login-window">

        <div id="user-name">
          <textarea id="user-name-input"
            placeHolder="username"
            onChange={event => setUserName(event.target.value)}
          ></textarea>
        </div>

        <div id="user-password">
          <textarea id="user-password-input"
            placeHolder="password"
            onChange={event => setUserPassword(event.target.value)}
          ></textarea>
        </div>

        <button id="login-button" onClick={handleLoginClick}>Log In</button>
        <button id="create-account" onCLick={handleSignupClick}>Sign Up</button>
      </div>
    </>
  )

}

export default Login;