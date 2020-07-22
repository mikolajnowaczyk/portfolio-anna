import React, { Component } from 'react'
import classes from './OfferTile.css'
import { NavLink } from 'react-router-dom'

class OfferTile extends Component {
  render() {
    return (
      <div className={classes.OfferTile}>
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

export default OfferTile