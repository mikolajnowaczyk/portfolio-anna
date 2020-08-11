import React from "react";

import classes from './Logo.module.css'
// import myLogo from '../../assets/logo.png'

// const myLogo = require("/images/test.jpg");

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={"/logo.png"} alt="MyLogo" />
  </div>
);

export default logo;
