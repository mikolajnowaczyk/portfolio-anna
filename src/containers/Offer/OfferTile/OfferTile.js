import React, { Component } from 'react'
import classes from './OfferTile.css'
import { NavLink } from 'react-router-dom'
import { withRouter, useLocation, useRouteMatch } from "react-router-dom"

const offerTile = (props) => {
  // let location = useLocation();
  //console.log(props);
  return (
    <div className={classes.OfferTile} style={{ backgroundImage: `url(${props.image})` }}>
      <div className={classes.Wrapper}>
        <NavLink
          to={props.link}
          exact={props.exact}
          activeClassName={classes.active}>
          {props.children}
        </NavLink>
      </div>
    </div>
  );
};

// class OfferTile extends Component {
//   //let { path, url } = useRouteMatch();
//   render() {
//     //console.log(this.props);
//     return (
//       <div className={classes.OfferTile} style={{ backgroundImage: `url(${this.props.image})` }}>
//         <div className={classes.wrapper}>
//           <NavLink
//             to={this.props.link}
//             exact={this.props.exact}
//             activeClassName={classes.active}>
//             {this.props.children}
//           </NavLink>
//         </div>
//       </div>
//     )
//   }
// }

export default withRouter(offerTile);