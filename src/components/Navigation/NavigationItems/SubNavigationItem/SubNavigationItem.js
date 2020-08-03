import React from "react";

import { NavLink } from 'react-router-dom'
import classes from './SubNavigationItem.css'

const navigationItem = (props) => {
  return (
    <div className={classes.NavigationItem}>
      {props.children}
    </div>
  );
};

export default navigationItem;
