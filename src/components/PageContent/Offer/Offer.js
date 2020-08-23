import React from 'react'
import OfferTile from './OfferTile/OfferTile'
import classes from './Offer.module.css'
import * as images from '../../shared/images'

const Offer = () => {
  return (
    <div>
      <h1 className={classes.head}>Moja oferta</h1>
      <div className={classes.Offer}>
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        <OfferTile link="/uslugi/masaze" image="../images/hand.jpg" text="Masaże" />
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        <OfferTile link="/uslugi/masaze" image="../images/hand.jpg" text="Masaże" />
        <OfferTile link="/uslugi/masaze" image="../images/massage_woman.jpg" text="Wizyta Domowa" />
      </div>
    </div>
  )
}

export default Offer