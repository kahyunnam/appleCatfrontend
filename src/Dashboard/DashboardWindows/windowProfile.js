import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./windowProfile.css"

const WindowProfile = (props) => {

  const { userName } = props;

  return (
    <>
      <div id="windowprofile">
        <div id="current-tier">

        </div>
        <div id="tier-des">
          <h1 id="tier-username">{userName}</h1>
          <h1 id="level-des">Level: AppleSeed</h1>
          <h1 id="next-level">1/25 Apples until AppleSprout!</h1>
        </div>
      </div>
    </>
  )
}

export default WindowProfile;