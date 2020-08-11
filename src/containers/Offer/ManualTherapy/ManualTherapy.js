import React from 'react'
import OfferTile from '../OfferTile/OfferTile'
import classes from './ManualTherapy.module.css'
import * as images from '../../../shared/images'

const ManualTherapy = () => {
  return (
    <div>
      <h1 className={classes.title}>Terapie</h1>
      <h2 className={classes.description}>Oferuję szeroką gamę terapii. Sprawdź moją ofertę.</h2>
      <div className={classes.ManualTherapy}>
        <OfferTile link="/uslugi/terapia-manualna/cyriax" image={images.shoulder}>Cyriax</OfferTile>
        <OfferTile link="/uslugi/terapia-manualna/masaz-tkanek-glebokich" image={images.back}>Masaż tkanek głebokich</OfferTile>
        <OfferTile link="/uslugi/terapia-manualna/terapia-miesniowo-powieziowa" image={images.back}>Terapia mięśniowo-powięziowa</OfferTile>
      </div>
    </div>)
}

export default ManualTherapy