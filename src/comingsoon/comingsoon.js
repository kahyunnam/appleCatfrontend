import React, { useState, useEffect } from 'react';
import './comingsoon.css'

const ComingSoon = (props) => {

  const { name } = props;

  const message = `Keep an eye out! ${name} will be live soon!`;

  return (
    <>
      <div id="cs1">
        <div id="cs1logo"></div>
        <h1 id="message">{message}</h1>
        <h1 id="message">Thank you for your patience.</h1>
      </div>
    </>
  )

}

export default ComingSoon;