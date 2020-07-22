import React, { Component } from 'react'
import classes from './OfferTile.css'
import { NavLink } from 'react-router-dom'
import TestImg from '../../../shared/images'
import { withRouter, useLocation, useRouteMatch } from "react-router-dom"

const offerTile = (props) => {
  // let location = useLocation();
  console.log(props);
  return (
    <div className={classes.OfferTile} style={{ backgroundImage: `url(${TestImg})` }}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </div>
  );
};

class OfferTile extends Component {
  //let { path, url } = useRouteMatch();
  render() {
    console.log(this.props);
    return (
      <div className={classes.OfferTile} style={{ backgroundImage: `url(${TestImg})` }}>
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={classes.active}>
          {this.props.children}
        </NavLink>
      </div>
    )
  }
}

export default withRouter(offerTile);