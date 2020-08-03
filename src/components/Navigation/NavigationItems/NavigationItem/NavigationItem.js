import React from "react";

import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.css'
import Auxi from '../../../../hoc/Auxilary/Auxilary'

const navigationItem = (props) => {
  let ItemClasses = [];
  //props.subnav ? ItemClasses.push()
  //const NavigationItemClasses = props.subnav ? [classes.NavigationItem, classes.NavigationItemHover] : [classes.NavigationItem];
  return (
    // <li
    //   className={NavigationItemClasses.join(' ')}
    //   style={{
    //     opacity: props.show ? '1' : '0'
    //   }}
    // >
    <Auxi>
      <li className={classes.NavigationItem} onClick={props.onClick}>
        <NavLink
          onMouseEnter={props.mouseEntered}
          onMouseLeave={props.mouseLeft}
          to={props.link}
          exact={props.exact}
          activeClassName={classes.active}>
          {props.icon ?
            <div className={classes.NavigationItemContainer} >
              {props.name}
              <div className={classes.NavigationItemIcon} >
                {props.icon}
              </div>
            </div>
            : props.name
          }
        </NavLink>
      </li >
      {props.children}
    </Auxi>
  );
};

export default navigationItem;
