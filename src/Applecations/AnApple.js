import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './AnApple.css';

const AnApple = (apple) => {

  console.log(apple)

  return (
    <>
      < div id="anapple-out" >
        <div id="white-box">
          <div id="yellow-apple"></div>
          <div id="white-text">
            <p>{apple.jobTitle},</p>
            <p id="company">{apple.company}</p>
          </div>
        </div>
        <div id="side">
          <p id="status"><span id="pending">pending</span></p>
          <p id="date"><span id="label2">Submitted: </span>{apple.submittedDate}</p>
          <p id="location"><span id="label2">Location: </span> {apple.location}</p>
        </div>
      </div >
    </>
  )


}

export default AnApple;