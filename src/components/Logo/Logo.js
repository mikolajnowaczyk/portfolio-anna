import React from "react";

import classes from './Logo.css'
import myLogo from '../../assets/logo.png'

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={myLogo} alt="MyLogo" />
  </div>
);

export default logo;
