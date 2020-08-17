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
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        <OfferTile link="/uslugi/masaze" image={images.massage} text="Masaże" />
        {/* <OfferTile link="/uslugi/terapia-manualna" image={images.back}>Terapia manualna</OfferTile> */}
        {/* <OfferTile link="/uslugi/kinesiology-taping" image={images.back_roll}>Kinesiology taping</OfferTile> */}
        {/* <OfferTile link="/uslugi/kinezyterapia" image={images.massage_oil}>Kinezyterapia</OfferTile> */}
        {/* <OfferTile link="/uslugi/wizyta-domowa" image={images.massage_woman}>Wizyta domowa</OfferTile> */}
      </div>
    </div>
  )
}

export default Offer