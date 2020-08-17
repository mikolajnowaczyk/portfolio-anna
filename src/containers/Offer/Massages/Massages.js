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
        {/* <OfferTile link="/uslugi/masaze/leczniczy" image={images.massage_woman}>Leczniczy</OfferTile>
        <OfferTile link="/uslugi/masaze/klasyczny" image={images.massage}>Klasyczny</OfferTile>
        <OfferTile link="/uslugi/masaze/sportowy" image={images.back}>Sportowy</OfferTile>
        <OfferTile link="/uslugi/masaze/izometryczny" image={images.back_roll}>Izometryczny</OfferTile>
        <OfferTile link="/uslugi/masaze/drenaz-limfatyczny" image={images.massage_oil}>Drenaż limfatyczny</OfferTile> */}

        <OfferTile link="/masaze/klasyczny" image={images.back} text="Klasyczny" />
        <OfferTile link="/masaze/sportowy" image={images.back_roll} text="Sportowy" />
        <OfferTile link="/masaze/leczniczy" image={images.massage} text="Leczniczy" />
        <OfferTile link="/masaze/izometryczny" image={images.massage_oil} text="Izometryczny" />
        <OfferTile link="/masaze/drenaz-limfatyczny" image={images.massage_woman} text="Drenaż Limfatyczny" />
      </div>
    </div>)
}

export default Massages