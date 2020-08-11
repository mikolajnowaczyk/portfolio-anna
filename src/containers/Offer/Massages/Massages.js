import React from 'react'
import OfferTile from '../OfferTile/OfferTile'
import classes from './Massages.module.css'
import * as images from '../../../shared/images'

const Massages = () => {
  return (
    <div>
      <h1 className={classes.title}>Masaże</h1>
      <h2 className={classes.description}>Oferuję szeroką gamę masaży specjalistycznych, leczniczych oraz relaksacyjnych. Sprawdź moją ofertę.</h2>
      <div className={classes.Massages}>
        <OfferTile link="/uslugi/masaze/leczniczy" image={images.massage_woman}>Leczniczy</OfferTile>
        <OfferTile link="/uslugi/masaze/klasyczny" image={images.massage}>Klasyczny</OfferTile>
        <OfferTile link="/uslugi/masaze/sportowy" image={images.back}>Sportowy</OfferTile>
        <OfferTile link="/uslugi/masaze/izometryczny" image={images.back_roll}>Izometryczny</OfferTile>
        <OfferTile link="/uslugi/masaze/drenaz-limfatyczny" image={images.massage_oil}>Drenaż limfatyczny</OfferTile>
      </div>
    </div>)
}

export default Massages