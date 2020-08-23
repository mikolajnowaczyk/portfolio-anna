import React from 'react'
import OfferTile from '../OfferTile/OfferTile'
import classes from './ManualTherapy.module.css'
import * as images from '../../../../shared/images'

const ManualTherapy = () => {
  return (
    <div>
      <h1 className={classes.title}>Terapie</h1>
      <h2 className={classes.description}>Oferuję szeroką gamę terapii. Sprawdź moją ofertę.</h2>
      <div className={classes.ManualTherapy}>
        <OfferTile link="/terapia-manualna/cyriax" image={images.head_shoulder} text="Cyriax" />
        <OfferTile link="/terapia-manualna/masaz-tkanek-glebokich" image={images.back} text="Masaż tkanek głebokich" />
        <OfferTile link="/terapia-manualna/terapia-miesniowo-powieziowa" image={images.shoulder} text="Terapia mięśniowo-powięziowa" />
      </div>
    </div>
  )
}

export default ManualTherapy