import React, { Component } from 'react'
import OfferTile from './OfferTile/OfferTile'
import classes from './Offer.css'
import { withRouter } from 'react-router-dom'

class Offer extends Component {
  render() {
    console.log("[Offer]: ", this.props)
    return (
      <div>
        <h1 className={classes.head}>Moja oferta</h1>
        <div className={classes.Offer}>
          <OfferTile link="/masaze" >Masaże</OfferTile>
          <OfferTile link="/terapia-manualna" exact>Terapia manualna</OfferTile>
          <OfferTile link="/kinesiology-taping" exact>Kinesiology taping</OfferTile>
          <OfferTile link="/kinezyterapia" exact>Kinezyterapia</OfferTile>
          <OfferTile link="/wizyta-domowa" exact>Wizyta domowa</OfferTile>
        </div>
      </div>
    )

  }
}

export default withRouter(Offer)