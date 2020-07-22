import React, { Component } from 'react'
import OfferTile from './OfferTile/OfferTile'
import classes from './Offer.css'

class Offer extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.head}>Moja oferta</h1>
        <div className={classes.Offer}>
          <OfferTile link="/kontakt" ></OfferTile>
          <OfferTile link="/" exact>Opcja 1</OfferTile>
          <OfferTile link="/" exact>Opcja 1</OfferTile>
          <OfferTile link="/" exact>Opcja 1</OfferTile>
          <OfferTile link="/" exact>Opcja 1</OfferTile>
        </div>
      </div>
    )

  }
}

export default Offer